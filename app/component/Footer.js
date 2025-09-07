import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200   0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-gray-600 ">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
