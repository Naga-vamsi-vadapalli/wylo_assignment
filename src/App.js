import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <button className="toggle-theme" onClick={toggleTheme}>
            Toggle Theme
          </button>
          <h1>Post Box</h1>
          <Routes>
            <Route path="/" element={<PostsDisplay />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
