import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = type === 'register' ? { name, email, password } : { email, password };

    try {
      const response = await axios.post(`http://localhost:5000/api/users/${type}`, payload); // Update URL here
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === 'register' && (
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      )}
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">{type === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
