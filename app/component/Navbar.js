import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className="container">
     
     <div>
      <div className=''>
      <img src="/logo.png" alt="Logo" />
      </div>
      <h1>YourInterview</h1>
     </div>

     <div>
      <ul>
        <li>Products</li>
        <li>Mentors</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>



      <div>
        <button>Login</button>
 <button class="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 ease-in-out">
  <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  Get Started
</button>
      </div>
     </div>


     
    </nav>
  )
}

export default Navbar
