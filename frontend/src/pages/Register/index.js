import React, { useState} from 'react';
//import { FiUserCheck, FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';

import './styles.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      email,
      password
    };

    try {
      const response = await api.post('/auth/register', data);
      setToken(response.data.token);
      alert('Registration Successful');

      history.push('/');
      
    } catch (error) {
      alert('Something went wrong. User Registration failed');

      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
    <Header />
    <div className="register-container">
      
      <div className="content">
        <strong>Create your account</strong>
        
        <form onSubmit={handleRegister}>

          <input 
            type='email' 
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input 
            type='password' 
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type='submit'>
            REGISTER
          </button>

        </form>
      </div>
    </div>
    </>
  )
}