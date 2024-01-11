import React from 'react'
import './login.css';
import logo from '../assets/logo.png';

const Login = () => {
  return (
    <div className='login'>
        <aside className='left-top'>
          <div className='capa'></div>
          <div className='left-top_body'>
            <img src={logo} alt="" />
            <h1>Welcome to MedUSched</h1>
            <p>Revolutionize your medical residency planning with MedUsched - the ultimate solution fot hassle - free scheduling of your electives!</p>
          </div>
            
        </aside>
        <aside className='right-bottom'>
            <section className='title'>
              <h2>Login</h2>
              <p>Sing in to continue</p>
            </section>
            <section className='right-bottom_body'>
              <div className='box'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='example@email.com'/>
              </div>
              <div className='box'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='********'/>
              </div>
              <button type='submit'>Login</button>
              <p className='p-bottom'>Don't have an account? <a href="#">Register</a></p>
            </section>
        </aside>
    </div>
  )
}

export default Login