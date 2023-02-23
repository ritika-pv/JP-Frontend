import React from 'react';
import { GetAllStates } from '../../data/fetch_state.js';
import './register.css';

const RegisterPage = async() => {
  await GetAllStates().then((states)=>console.log(states));
  return (
    <div>This is Register Page</div>
  )
}

export default RegisterPage