import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContext';
import './PostPage.module.scss';

const PostPage: React.FC = () => {
  const { id } = useParams();
  const { posts, comments, ratings, addComment, addRating } = useBlog();
  const { user } = useAuth();
  const post = posts.find(p => p.id === id);
  const postComments = comments.filter(c => c.postId === id);
  const postRatings = ratings.filter(r => r.postId === id);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  if (!post) return <div className="app-container">Post não encontrado.</div>;

  function handleComment(e: React.FormEvent) {
    e.preventDefault();
    if (user && comment.trim()) {
      addComment(post!.id, comment, user);
      setComment('');
    }
  }

  function handleRating(e: React.FormEvent) {
    e.preventDefault();
    if (user && rating > 0 && rating <= 5) {
      addRating(post!.id, rating, user);
      setRating(0);
    }
  }

  const avgRating = postRatings.length
    ? (postRatings.reduce((a, b) => a + b.value, 0) / postRatings.length).toFixed(2)
    : 'Sem avaliações';

  return (
    <div className="app-container post">
      <h1>{post!.title}</h1>
      <p>{post!.content}</p>
      <p style={{fontSize:12}}>por {post!.author} em {new Date(post!.createdAt).toLocaleString()}</p>
      <h3>Avaliação média: {avgRating}</h3>
      <h2>Comentários</h2>
      <ul>
        {postComments.length === 0 && <li>Sem comentários ainda.</li>}
        {postComments.map(c => (
          <li key={c.id}><b>{c.author}:</b> {c.content} <span style={{fontSize:10}}>({new Date(c.createdAt).toLocaleString()})</span></li>
        ))}
      </ul>
      {user && (
        <form onSubmit={handleComment} style={{marginTop:16}}>
          <input
            type="text"
            placeholder="Seu comentário"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button type="submit">Comentar</button>
        </form>
      )}
      {user && (
        <form onSubmit={handleRating} style={{marginTop:16}}>
          <input
            type="number"
            min={1}
            max={5}
            value={rating || ''}
            onChange={e => setRating(Number(e.target.value))}
            placeholder="Avalie de 1 a 5"
          />
          <button type="submit">Avaliar</button>
        </form>
      )}
      {!user && <p>Faça login para comentar ou avaliar.</p>}
    </div>
  );
};

export default PostPage; 