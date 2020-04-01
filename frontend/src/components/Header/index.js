import React from 'react';
import { Link } from 'react-router-dom';
import { FiList, FiUser, FiLogIn  } from 'react-icons/fi';

import './styles.css';

export default function Header() {
  return (
    <div className="container">
      <div className="header-container">
        <h1>REACT TO-DO</h1>

        <Link to='/projects' id='projects'>
          <FiList size={20} color='#000' />
          PROJECTS
        </Link>

        <div className="auth-container">
          <Link to='/register'>
            <FiUser size={20} color='#000' />
            REGISTER
          </Link>

          <Link to='/login'>
            <FiLogIn size={20} color='#000' />
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  )
}