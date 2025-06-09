import React, { JSX, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import './styles/App.scss';


const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));


function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

const App: React.FC = () => (
  <AuthProvider>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </AuthProvider>
);

export default App; 