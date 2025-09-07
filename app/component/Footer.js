"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'AI Mock Interviews', href: '/ai-mock' },
    { name: 'Written Tests', href: '/written-test' },
    { name: 'CV Compatibility', href: '/cv-compatibility' },
    
  ];

  const companyLinks = [
   
 
    { name: 'Contact', href: '/contact' },

    { name: 'Blog', href: '/blog' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Mentors', href: '/mentors' },
    
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
               <div className="h-12 w-12 bg-gradient-to-r   rounded-lg  overflow-hidden flex justify-center items-center">
                             <Image src="/logo.png" alt="YourInterview Logo" width={100}
                               height={100} className=" h-24 w-36 object-cover" />
                           </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                  YourInterview
                </span>
              </Link>
              
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Revolutionizing interview preparation with AI-powered mock interviews, 
                comprehensive testing, and intelligent CV matching. Land your dream job faster.
              </p>
              
              {/* Newsletter signup */}
              {/* <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="flex space-x-2 max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}

            </div>

            {/* Products */}
            <div>
              <h4 className="font-medium mb-4 text-purple-900">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium mb-4 text-purple-900">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-medium mb-4 text-purple-900">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-purple-900">Contact</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>rianhasan1971@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+880 1932600504</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Mirpur-1, Dhaka</span>
                </div>
              </div>

              {/* Social media */}
              <div className="mt-6">
                <h5 className="font-medium mb-3 text-gray-900">Follow Us</h5>
                <div className="flex space-x-2">
                  {[
                    { 
                      name: 'Twitter', 
                      href: '#',
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'LinkedIn', 
                      href: '#',
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Instagram', 
                      href: '#',
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.294C3.438 14.027 2.866 12.003 2.866 9.715c0-2.287.572-4.314 1.26-5.981C5.001 2.44 6.152 1.95 7.449 1.95c1.297 0 2.448.49 3.323 1.294.875.804 1.447 1.828 1.447 4.116 0 2.287-.572 4.314-1.447 5.981-.875.804-2.026 1.294-3.323 1.294zm7.718 0c-1.297 0-2.448-.49-3.323-1.294-.875-.667-1.447-2.693-1.447-4.981 0-2.287.572-4.314 1.447-5.981.875-.804 2.026-1.294 3.323-1.294s2.448.49 3.323 1.294c.875.667 1.447 2.693 1.447 4.981 0 2.287-.572 4.314-1.447 5.981-.875.804-2.026 1.294-3.323 1.294z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'YouTube', 
                      href: '#',
                      icon: (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      )
                    },
                  ].map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="p-2 text-gray-400 hover:text-white bg-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200"></div>

        {/* Bottom footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-600 text-sm">
            © {currentYear} YourInterview. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
