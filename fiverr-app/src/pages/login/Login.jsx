import React from 'react'
import "./login.scss";

export const Login = () => {
  return (
    <div className='login'>
      <form>
      <h1>Sign In</h1>
      <label htmlFor="">Username</label>
      <input type="text" name='username' placeholder='johndoe' />

      <label htmlFor="">Password</label>
      <input type="password" name='password' placeholder='johndoe@gmail.com' />
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}
