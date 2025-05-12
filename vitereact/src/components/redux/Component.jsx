import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from './reducers/counter';
import { fetchPosts } from './reducers/post';

export function Contador() {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts async</h1>
      
      { false && (
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => dispatch(incrementar())}>+</button>
        <button onClick={() => dispatch(decrementar())}>-</button>
      </>)}

      <div >
        <h2>Posts</h2>
        {postStatus === 'loading' && <p>Carregando posts...</p>}
        {postStatus === 'failed' && <p>Falha ao carregar posts.</p>}
        {postStatus === 'succeeded' && (
          <ul>
            {posts?.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}