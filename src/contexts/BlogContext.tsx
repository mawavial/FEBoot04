import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { logAction } from '../utils/decorators';

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface Rating {
  id: string;
  postId: string;
  author: string;
  value: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

interface BlogContextType {
  posts: Post[];
  comments: Comment[];
  ratings: Rating[];
  addPost: (title: string, content: string, author: string) => void;
  addComment: (postId: string, content: string, author: string) => void;
  addRating: (postId: string, value: number, author: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

function getLocal<T>(key: string, fallback: T): T {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(() => getLocal('blog_posts', []));
  const [comments, setComments] = useState<Comment[]>(() => getLocal('blog_comments', []));
  const [ratings, setRatings] = useState<Rating[]>(() => getLocal('blog_ratings', []));

  useEffect(() => { localStorage.setItem('blog_posts', JSON.stringify(posts)); }, [posts]);
  useEffect(() => { localStorage.setItem('blog_comments', JSON.stringify(comments)); }, [comments]);
  useEffect(() => { localStorage.setItem('blog_ratings', JSON.stringify(ratings)); }, [ratings]);

  const addPost = logAction('Adicionar Post', (title: string, content: string, author: string) => {
    setPosts(prev => [
      ...prev,
      { id: crypto.randomUUID(), title, content, author, createdAt: new Date().toISOString() }
    ]);
  });
  const addComment = logAction('Adicionar Comentário', (postId: string, content: string, author: string) => {
    setComments(prev => [
      ...prev,
      { id: crypto.randomUUID(), postId, content, author, createdAt: new Date().toISOString() }
    ]);
  });
  const addRating = logAction('Adicionar Rating', (postId: string, value: number, author: string) => {
    setRatings(prev => [
      ...prev,
      { id: crypto.randomUUID(), postId, value, author }
    ]);
  });

  return (
    <BlogContext.Provider value={{ posts, comments, ratings, addPost, addComment, addRating }}>
      {children}
    </BlogContext.Provider>
  );
};

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) throw new Error('useBlog deve ser usado dentro de BlogProvider');
  return context;
} 