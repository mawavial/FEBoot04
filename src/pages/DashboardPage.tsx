import React, { useState } from 'react';
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import './DashboardPage.module.scss';
import { logAction } from '../utils/decorators';

const DashboardPage: React.FC = () => {
  const { posts, addPost } = useBlog();
  const { user, logout } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  function handleSubmit(e: React.FormEvent) {
    console.log('Criar novo post');
    e.preventDefault();
    if (user && title.trim() && content.trim()) {
      addPost(title, content, user);
      setTitle('');
      setContent('');
    }
  }

  return (
    <div className="app-container dashboard">
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button> <Link to="/">Voltar para Home</Link>
      <h2>Criar novo post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Publicar</button>
      </form>
      <h2>Seus posts</h2>
      <ul>
        {posts.filter(p => p.author === user).length === 0 && <li>Nenhum post seu ainda.</li>}
        {posts.filter(p => p.author === user).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage; 