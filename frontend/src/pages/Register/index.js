import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'

import './styles.css';

export default function Register() {
  return (
  <>
    <Header />

    <div className="register-container">
      <form>
        <h1>Register</h1>

        <input placeholder='E-mail' />
        <input placeholder='Password' />

        <Link to='/'>
          <button>REGISTER</button>

        </Link>
        
      </form>
    </div>
  </>
  )
}