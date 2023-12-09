import React from 'react'
import "./formInput.css"

export const FormInput= () => {
  return (
    <div className='formInput'>
      <label htmlFor="username">username</label>
      <input type="text" placeholder='username' />
    </div>
  )
}
