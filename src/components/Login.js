import React, { useState, useEffect } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ email, password });

    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.token){
          localStorage.setItem("user", email);
          navigate('/')
        }  else{
          alert(data.error)
         }
      }).catch(err => alert(err))

  }
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [])

  return (
    <div className='loginPage'>
      <form onSubmit={handleSubmit} className="login_card">
        <span className='login_head'>Log In</span>
        <label htmlFor="email">Email</label>

        <input className='login_input' type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

        <label htmlFor="password">Password</label>

        <input className='login_input' type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button className='login_btn'>Log In</button>
      </form>
    </div>
  )
}

export default Login
