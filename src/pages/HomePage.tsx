import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { useAuth } from '../contexts/AuthContext';
import './HomePage.module.scss';

const HomePage: React.FC = () => {
  const { posts } = useBlog();
  const { user } = useAuth();

  return (
    <div className="app-container home">
      <h1>Blog</h1>
      <div style={{ marginBottom: 16 }}>
        {user ? (
          <Link to="/dashboard">Ir para Dashboard</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <ul>
        {posts.length === 0 && <li>Nenhum post ainda.</li>}
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link> <span style={{fontSize:12}}>por {post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage; 