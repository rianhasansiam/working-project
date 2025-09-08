'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes - in real app, validate credentials
      if (email && password) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Google login successful! Redirecting...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } catch (error) {
      setError('Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-[#030203]' 
        : 'bg-gradient-to-br from-purple-50 via-white to-purple-100'
    }`}>
      <style jsx>{`
        .gradient-text {
          background: ${theme === 'dark' 
            ? 'linear-gradient(135deg, #7042F8, #00D4FF)' 
            : 'linear-gradient(135deg, #7C3AED, #A855F7)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-effect {
          background: ${theme === 'dark'
            ? 'rgba(12, 12, 20, 0.8)'
            : 'rgba(255, 255, 255, 0.9)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${theme === 'dark'
            ? 'rgba(124, 58, 237, 0.3)'
            : 'rgba(168, 85, 247, 0.2)'};
        }
        @media (max-width: 640px) {
          .glass-effect {
            backdrop-filter: blur(10px);
            background: ${theme === 'dark'
              ? 'rgba(12, 12, 20, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'};
          }
        }
      `}</style>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3 sm:mb-4"></div>
            <span className="text-white text-base sm:text-lg font-semibold">Signing in...</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-40 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg sm:rounded-xl flex items-center justify-center">
                <User className="text-white w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">InterView AI</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <Link
                href="/signup"
                className={`transition-colors flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg border text-xs sm:text-base ${
                  theme === 'dark'
                    ? 'text-white hover:text-cyan-300 bg-gray-800/50 border-purple-600/30 hover:border-purple-500/50'
                    : 'text-gray-600 hover:text-purple-700 bg-white/80 border-purple-200 hover:border-purple-400 hover:bg-purple-50'
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Register</span>
                <span className="sm:hidden">Sign Up</span>
              </Link>
              <Link
                href="/"
                className={`transition-colors flex items-center space-x-1 sm:space-x-2 text-xs sm:text-base ${
                  theme === 'dark'
                    ? 'text-white hover:text-cyan-300'
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-10 px-4">
        <div className="w-full max-w-md mx-auto">
          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border-purple-200/50 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Welcome back to <span className="gradient-text">InterView AI</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-sm sm:text-lg ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Continue your journey to interview excellence
              </motion.p>
            </div>

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6 relative z-10"
            >
              <div>
                <label className={`flex text-xs sm:text-sm font-medium mb-1 sm:mb-2 items-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <Mail className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 border-2 rounded-lg sm:rounded-xl focus:ring-2 outline-none transition-all text-sm sm:text-base ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-purple-600/30 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-400'
                      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500'
                  }`}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className={`flex text-xs sm:text-sm font-medium mb-1 sm:mb-2 items-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <Lock className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 border-2 rounded-lg sm:rounded-xl focus:ring-2 outline-none transition-all text-sm sm:text-base ${
                      theme === 'dark'
                        ? 'bg-gray-900/50 border-purple-600/30 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-400'
                        : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500'
                    }`}
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-gray-200'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
                <div className="text-right mt-1 sm:mt-2">
                  <Link 
                    href="/forget-password" 
                    className={`text-xs sm:text-sm hover:underline transition-colors ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-purple-600 hover:text-purple-700'
                    }`}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] sm:hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base relative overflow-hidden shadow-lg hover:shadow-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/30 hover:border-purple-400/50'
                    : 'bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-purple-500/30'
                }`}
                disabled={loading}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  {loading ? (
                    <>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </>
                  )}
                </span>
              </motion.button>
            </motion.form>

            <div className="flex items-center my-4 sm:my-6">
              <div className={`flex-1 border-t ${
                theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}></div>
              <span className={`px-3 sm:px-4 text-xs sm:text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>OR</span>
              <div className={`flex-1 border-t ${
                theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
              }`}></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleLogin}
              className={`w-full font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-sm sm:text-base relative overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white border-purple-600/40 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/20'
                  : 'bg-white text-gray-700 border-purple-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700'
              }`}
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </span>
            </motion.button>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 sm:mt-4 p-2 sm:p-3 border rounded-md sm:rounded-lg ${
                  theme === 'dark'
                    ? 'bg-red-900/20 border-red-600/30'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <p className={`text-xs sm:text-sm text-center ${
                  theme === 'dark' ? 'text-red-300' : 'text-red-700'
                }`}>{error}</p>
              </motion.div>
            )}
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 sm:mt-4 p-2 sm:p-3 border rounded-md sm:rounded-lg ${
                  theme === 'dark'
                    ? 'bg-green-900/20 border-green-600/30'
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <p className={`text-xs sm:text-sm text-center ${
                  theme === 'dark' ? 'text-green-300' : 'text-green-700'
                }`}>{success}</p>
              </motion.div>
            )}

            <div className={`text-center mt-4 sm:mt-6 text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className={`font-medium transition-colors ${
                  theme === 'dark'
                    ? 'text-cyan-400 hover:text-cyan-300'
                    : 'text-purple-600 hover:text-purple-700'
                }`}>
                  Register here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
