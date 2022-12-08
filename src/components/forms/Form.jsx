import React from 'react';
import styled from './Form.module.css'
import validation from './validation';


export default function Form({login}) {

  const [userData, setUserData] = React.useState({ username: 'nada@gmail.com', password: '123456' });

  const [errors, setErrors] = React.useState({ username: '', password: '' });

  function handleInputChange (e) {
    setUserData({...userData, [e.target.name]: e.target.value});
    setErrors(validation({...userData, [e.target.name]: e.target.value}));
  }

  function handleSubmit (e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div className={styled.userContain}>
      <div className={styled.userLogin}>
        <div className={styled.userInputs}>
        <label htmlFor="username"  >Username:</label>
        <input 
        id="username"
        name="username" 
        type="text" 
        value={userData.username} 
        onChange={handleInputChange} />
        </div>
        <p className={styled.warning} >{errors.name}</p>
        <div className={styled.userInputs}>
        <label htmlFor="password" >Password:</label>
        <input 
        id="password"
        name="password" 
        type="password"  
        value={userData.password} 
        onChange={handleInputChange}  />
        </div>
        <p className={styled.warning} >{errors.password}</p>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  )
}