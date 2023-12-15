import React from 'react'
import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span className='text'>Feverr</span>
                <span className='dot'>.</span>
            </div>
            <div className="links">
               <span>Fiverr Business</span>
               <span>Explore</span>
               <span>English</span>
               <span>Sign In</span>
               <span>Become a seller</span> 
               <button>Join</button>
            </div>
        </div>
    </div>
  )
}
