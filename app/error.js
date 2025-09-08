'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCw, AlertTriangle, Bug, Zap, Coffee, ArrowLeft, RotateCcw } from 'lucide-react';

const ErrorPage = ({ error, reset }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [avatarState, setAvatarState] = useState('shocked');
  const [glitchActive, setGlitchActive] = useState(false);

  const errorMessages = useMemo(() => [
    "🤯 Oops! Our AI had a brain freeze!",
    "⚡ Houston, we have a technical problem!",
    "🔧 Something went BOOM! But we're fixing it...",
    "🚨 Error detected! Our robots are panicking!",
    "💥 The code exploded! Don't worry, it happens...",
    "🔥 This is fine... Everything is fine... (It's not fine)",
    "🎪 Welcome to the Error Circus! Enjoy the show!",
    "🤖 Our AI is having an existential crisis...",
    "☕ Error 500: Coffee machine broken, developers crying"
  ], []);

  const avatarStates = useMemo(() => ({
    shocked: "😱",
    confused: "😵‍💫",
    crying: "😭",
    angry: "😤",
    sleepy: "😴",
    dizzy: "🤪",
    worried: "😰",
    facepalm: "🤦‍♂️"
  }), []);

  const errorTypes = [
    { icon: "🚨", label: "Critical Error", color: "from-red-500 to-red-700" },
    { icon: "⚡", label: "System Overload", color: "from-yellow-500 to-orange-600" },
    { icon: "🔥", label: "Code Meltdown", color: "from-orange-500 to-red-600" },
    { icon: "💣", label: "Logic Bomb", color: "from-purple-500 to-purple-700" }
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % errorMessages.length);
    }, 2500);

    const avatarInterval = setInterval(() => {
      const states = Object.keys(avatarStates);
      setAvatarState(states[Math.floor(Math.random() * states.length)]);
    }, 1800);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(avatarInterval);
      clearInterval(glitchInterval);
    };
  }, [errorMessages.length, avatarStates]);

  const glitchAnimation = {
    x: glitchActive ? [0, -2, 2, -1, 1, 0] : 0,
    transition: { duration: 0.2 }
  };

  const randomErrorType = errorTypes[Math.floor(Math.random() * errorTypes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Animated background chaos */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            className={`absolute w-8 h-8 bg-gradient-to-r ${randomErrorType.color}/20 rounded-full blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            animate={glitchAnimation}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">💥</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              InterView AI - Error Mode
            </span>
          </motion.div>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Escape</span>
          </button>
        </nav>
      </header>

      {/* Main Error Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Error Code with Avatars */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Main Error Display */}
            <motion.div
              animate={glitchAnimation}
              className="relative mb-6"
            >
              <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${randomErrorType.color} bg-clip-text text-transparent mb-4`}>
                ERROR
              </h1>
              <div className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
                {randomErrorType.icon} {randomErrorType.label}
              </div>
            </motion.div>

            {/* Floating Avatar Chaos */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [-5, 5, -5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -left-16 md:-left-24"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-2xl border-4 border-white">
                {avatarStates[avatarState]}
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [20, -20, 20],
                rotate: [5, -5, 5],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -top-5 -right-16 md:-right-24"
            >
              <div className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-2xl border-4 border-white">
                🤖💥
              </div>
            </motion.div>

            <motion.div
              animate={{
                x: [-10, 10, -10],
                y: [10, -10, 10]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-20 left-0 md:-left-8"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-lg md:text-xl shadow-2xl border-4 border-white">
                ⚡😵
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute top-16 right-4 md:right-8"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-sm md:text-lg shadow-2xl border-4 border-white">
                🔥😱
              </div>
            </motion.div>
          </motion.div>

          {/* Dynamic Error Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-purple-700 font-medium mb-4 min-h-[60px] flex items-center justify-center"
            >
              {errorMessages[currentMessage]}
            </motion.p>
            
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-100/80 backdrop-blur-sm border-2 border-red-200 rounded-xl p-4 mb-6 max-w-2xl mx-auto"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Bug className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">Technical Details:</span>
                </div>
                <p className="text-red-700 text-sm font-mono bg-red-50 p-2 rounded border">
                  {error.message || 'Something went terribly wrong!'}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Error Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-red-100/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-red-200"
            >
              <div className="text-3xl mb-2">💥</div>
              <div className="font-bold text-red-800">BOOM!</div>
              <div className="text-xs text-red-600">Explosion Level</div>
            </motion.div>
            
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-purple-100/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-purple-200"
            >
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-bold text-purple-800">∞</div>
              <div className="text-xs text-purple-600">Robots Crying</div>

            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-orange-100/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-orange-200"
            >
              <div className="text-3xl mb-2">☕</div>
              <div className="font-bold text-orange-800">0</div>
              <div className="text-xs text-orange-600">Coffee Remaining</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-yellow-100/80 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-yellow-200"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-yellow-800">404</div>
              <div className="text-xs text-yellow-600">Brain Cells Lost</div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-xl hover:bg-purple-50 transition-all shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
            </div>

            {/* Emergency Actions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 max-w-lg mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">Emergency Actions</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.location.reload()}
                  className="flex items-center space-x-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reload</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.location.href = '/'}
                  className="flex items-center space-x-1 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => console.log('Error reported:', error)}
                  className="flex items-center space-x-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  <Bug className="w-4 h-4" />
                  <span>Report</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm mb-4">
              Don&apos;t panic! Even the best AI systems have bad days... 🤖💔
            </p>
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center text-white text-sm"
              >
                💥
              </motion.div>
              <span className="text-gray-500 text-xs">Our engineers are fixing this with duct tape and coffee...</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
