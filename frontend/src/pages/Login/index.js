import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Header from '../../components/Header';

import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Header />
    <div className="login-container">
      <form>
        <strong>Log In</strong>

        <input 
          placeholder='E-mail' 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input 
          placeholder='Password' 
          type='password' 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <div className="button" id='aligh'>
          <FiArrowRight size={20} color='#000' />
          <button type='submit' id='login'>LOGIN</button>
        </div>
      </form>
    </div>
    </>
  )
}