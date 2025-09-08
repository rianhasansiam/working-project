'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Linkedin, Twitter, Briefcase, BrainCircuit } from 'lucide-react';

const mentors = [
  {
    name: 'Sarah Chen',
    title: 'Principal Engineer at Google',
    expertise: ['System Design', 'Cloud Architecture', 'Leadership'],
    image: 'https://i.pravatar.cc/150?img=1',
    linkedin: '#',
    twitter: '#',
    rating: 4.9,
    reviews: 128,
  },
  {
    name: 'Michael Rodriguez',
    title: 'AI/ML Lead at Netflix',
    expertise: ['Machine Learning', 'Data Science', 'Python'],
    image: 'https://i.pravatar.cc/150?img=2',
    linkedin: '#',
    twitter: '#',
    rating: 4.8,
    reviews: 95,
  },
  {
    name: 'Emily Carter',
    title: 'Senior Frontend Developer at Vercel',
    expertise: ['Next.js', 'React', 'UI/UX'],
    image: 'https://i.pravatar.cc/150?img=3',
    linkedin: '#',
    twitter: '#',
    rating: 5.0,
    reviews: 210,
  },
  {
    name: 'David Lee',
    title: 'Cybersecurity Expert',
    expertise: ['Security', 'Networking', 'Penetration Testing'],
    image: 'https://i.pravatar.cc/150?img=4',
    linkedin: '#',
    twitter: '#',
    rating: 4.7,
    reviews: 78,
  },
    {
    name: 'Jessica Williams',
    title: 'Product Manager at Stripe',
    expertise: ['Product Strategy', 'Agile', 'Fintech'],
    image: 'https://i.pravatar.cc/150?img=5',
    linkedin: '#',
    twitter: '#',
    rating: 4.9,
    reviews: 150,
  },
  {
    name: 'Chris Thompson',
    title: 'DevOps Architect at AWS',
    expertise: ['CI/CD', 'Kubernetes', 'Serverless'],
    image: 'https://i.pravatar.cc/150?img=6',
    linkedin: '#',
    twitter: '#',
    rating: 4.8,
    reviews: 112,
  },
];



const MentorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const allExpertise = ['All', ...new Set(mentors.flatMap(m => m.expertise))];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || mentor.expertise.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-purple-50 via-purple-25 to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <BrainCircuit className="h-3 w-3 mr-1" />
            Expert Mentorship
          </div> */}

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Connect with Industry{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Leaders
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Accelerate your career with personalized guidance from top professionals in your field. 
            Book 1-on-1 sessions to get interview coaching, career advice, and technical mentorship.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors by name or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 shadow-sm"
              />
            </div>
            <div className="mt-4 flex items-center justify-center flex-wrap gap-2">
              <Filter className="h-4 w-4 text-gray-500 mr-2" />
              {allExpertise.map(expertise => (
                <button
                  key={expertise}
                  onClick={() => setActiveFilter(expertise)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === expertise
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <Image 
                      src={mentor.image} 
                      alt={mentor.name} 
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" 
                    />
                    <span className="absolute bottom-0 right-0 block h-5 w-5 rounded-full bg-green-500 border-2 border-white"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Briefcase className="h-3 w-3 mr-1.5" />
                      {mentor.title}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map(skill => (
                      <span key={skill} className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 border-t border-b border-gray-200 py-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-bold">{mentor.rating}</span>
                    <span className="ml-1">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Book a Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">No Mentors Found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter to find the perfect mentor for you.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MentorsPage
