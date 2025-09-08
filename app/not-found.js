'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Coffee, MapPin, Compass, RefreshCw } from 'lucide-react';

const NotFoundPage = () => {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [avatarMood, setAvatarMood] = useState('confused');

  const jokes = useMemo(() => [
    "🤔 This page went for an interview... and never came back!",
    "😅 Error 404: Page is probably stuck in traffic!",
    "🕵️ Our best detectives are searching for this page...",
    "📱 Page not found! Maybe it's taking a coffee break?",
    "🎯 You found our secret hiding spot... but not the page!",
    "🚀 This page launched into space. Houston, we have a problem!",
    "🎪 Welcome to our magic show - now you see the page, now you don't!"
  ], []);

  const avatarMoods = useMemo(() => ({
    confused: "😵‍💫",
    searching: "🔍",
    waving: "👋",
    thinking: "🤔",
    surprised: "😲"
  }), []);

  useEffect(() => {
    const jokeInterval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % jokes.length);
    }, 3000);

    const moodInterval = setInterval(() => {
      const moods = Object.keys(avatarMoods);
      setAvatarMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 2000);

    return () => {
      clearInterval(jokeInterval);
      clearInterval(moodInterval);
    };
  }, [jokes.length, avatarMoods]);

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const bounceAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden">


        
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [360, 0, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-full blur-xl"
        ></motion.div>
      </div>



      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        {/* <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              InterView AI
            </span>
          </Link>


          <Link
            href="/"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </nav> */}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated 404 with Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              {/* Big 404 */}
              <motion.h1 
                animate={floatingAnimation}
                className="text-8xl md:text-9xl font-black  bg-clip-text  mb-4"
              >
                4🤖4
              </motion.h1>
              
              {/* Floating Avatars */}
              <motion.div
                animate={bounceAnimation}
                className="absolute -top-10 -left-10 md:-left-20"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                  {avatarMoods[avatarMood]}
                </div>
              </motion.div>

              <motion.div
                animate={{ ...bounceAnimation, transition: { ...bounceAnimation.transition, delay: 0.5 } }}
                className="absolute -top-5 -right-10 md:-right-20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-lg">
                  🤷‍♀️
                </div>
              </motion.div>

              <motion.div
                animate={{ ...bounceAnimation, transition: { ...bounceAnimation.transition, delay: 1 } }}
                className="absolute top-20 left-0 md:-left-10"
              >
                <div className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-lg">
                  🕵️‍♂️
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Funny Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <motion.h2 
              key={currentJoke}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Page Not Found!
            </motion.h2>
            <motion.p
              key={currentJoke + "joke"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-purple-700 mb-6 min-h-[60px] flex items-center justify-center"
            >
              {jokes[currentJoke]}
            </motion.p>
          </motion.div>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Search Suggestion */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Search className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Maybe you were looking for:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/", label: "Home", icon: Home },
                  { href: "/login", label: "Login", icon: MapPin },
                  { href: "/signup", label: "Sign Up", icon: Compass },
                  { href: "/about", label: "About", icon: Coffee }
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100/80 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-200"
              >
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-bold text-purple-800">100%</div>
                <div className="text-sm text-purple-600">Page Not Found Rate</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100/80 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-200"
              >
                <div className="text-3xl mb-2">🕘</div>
                <div className="font-bold text-purple-800">∞</div>
                <div className="text-sm text-purple-600">Time Page Missing</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-100/80 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-200"
              >
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold text-purple-800">404</div>
                <div className="text-sm text-purple-600">Robots Searching</div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transition-all shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-sm">
              Don&apos;t worry, even the best interviewers get lost sometimes! 😄
            </p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm"
              >
                🔄
              </motion.div>
              <span className="text-gray-500 text-xs">Page is being interviewed by our AI...</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
