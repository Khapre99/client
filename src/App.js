import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/register" element={<AuthForm type="register" />} />
        <Route path="/login" element={<AuthForm type="login" />} />
      </Routes>
    </Router>
  );
};

export default App;
