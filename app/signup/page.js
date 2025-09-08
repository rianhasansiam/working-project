'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, GraduationCap, Mail, Lock, UserCheck, CheckCircle, ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';

// Enhanced Apple device detection
const isAppleDevice = () => {
  if (typeof navigator === 'undefined') return false;
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  // Check for iOS devices
  const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                (platform === 'macintel' && navigator.maxTouchPoints > 1); // iPad Pro on Mac
  
  // Check for macOS
  const isMac = /macintosh|mac os x/.test(userAgent) && !isIOS;
  
  return isIOS || isMac;
};

// Enhanced Safari detection
const isSafari = () => {
  if (typeof navigator === 'undefined') return false;
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Check for Safari specifically
  const isSafariBrowser = userAgent.includes('safari') && 
                          !userAgent.includes('chrome') && 
                          !userAgent.includes('chromium') &&
                          !userAgent.includes('edg') &&
                          !userAgent.includes('firefox');
  
  // Check for WebKit engine (Safari uses WebKit)
  const isWebKit = typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style;
  
  return isSafariBrowser || (isWebKit && !userAgent.includes('chrome'));
};

// Enhanced mobile detection
const isMobile = () => {
  if (typeof navigator === 'undefined') return false;
  const userAgent = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipad|ipod|blackberry|windows phone/.test(userAgent);
};

// Network quality detection
const getNetworkQuality = () => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return 'fast';
  const connection = navigator.connection;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    return 'very-slow';
  } else if (connection.effectiveType === '3g') {
    return 'slow';
  } else if (connection.effectiveType === '4g') {
    return 'moderate';
  }
  return 'fast';
};

const SignupPage = () => {
  const [theme, setTheme] = useState('light');
  const [signupMethod, setSignupMethod] = useState(''); // 'google' or 'manual' or ''
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [referral, setReferral] = useState('');
  const [role, setRole] = useState('applicant');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [customUserId, setCustomUserId] = useState('');
  const [generatedReferralCode, setGeneratedReferralCode] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // Theme detection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(savedTheme);
    }
  }, []);

  // Password strength checker
  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  // Form validation
  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
      if (!password) newErrors.password = 'Password is required';
      else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
      else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    if (step === 2) {
      if (!firstName) newErrors.firstName = 'First name is required';
      if (!lastName) newErrors.lastName = 'Last name is required';
    }
    if (step === 3) {
      if (!acceptedTerms) newErrors.terms = 'Please accept the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit(new Event('submit'));
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Input change handler
  const handleInputChange = (field, value) => {
    switch(field) {
      case 'email': setEmail(value); break;
      case 'password': 
        setPassword(value); 
        setPasswordStrength(checkPasswordStrength(value));
        break;
      case 'confirmPassword': setConfirmPassword(value); break;
      case 'firstName': setFirstName(value); break;
      case 'lastName': setLastName(value); break;
      case 'phoneNumber': setPhoneNumber(value); break;
      case 'address': setAddress(value); break;
      case 'referral': setReferral(value); break;
      case 'role': setRole(value); break;
    }
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  // Email validation
  const validateEmail = (email) => {
    const allowedDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@zohomail.com'];
    return allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
  };

  // Password validation
  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    if (!acceptedTerms) {
      setError('You must accept the Terms and Conditions to register.');
      setLoading(false);
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Email must end with @gmail.com, @yahoo.com, @outlook.com, or @zohomail.com');
      setLoading(false);
      return;
    }
    
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSuccess('Registration successful! Please verify your email.');
      setCustomUserId('USER' + Math.random().toString(36).substr(2, 9).toUpperCase());
      setGeneratedReferralCode('REF' + Math.random().toString(36).substr(2, 6).toUpperCase());
      setIsSuccess(true);
      
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    setError('');
    setSuccess('');
    setShowTermsModal(true);
  };
  
  const handleGoogleSignInWithTerms = async () => {
    if (!acceptedTerms) {
      setError('You must accept the Terms and Conditions to continue.');
      return;
    }
    
    setShowTermsModal(false);
    setLoading(true);
    setError('');
    
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push('/dashboard');
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message || 'Authentication failed. Please try again.');
      setLoading(false);
    }
  };

  // Google signup handler for initial choice
  const handleGoogleSignup = async () => {
    try {
      // Simulate Google OAuth redirect
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, this would redirect to Google OAuth
      // For demo purposes, we'll redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Google signup error:', error);
      setError(error.message || 'Google signup failed. Please try again.');
      setLoading(false);
    }
  };

  // Profile picture handler
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePictureFile(file);
    setProfilePicture(URL.createObjectURL(file));
  };

  // Success screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white w-10 h-10 md:w-12 md:h-12" />
            </div>
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800">
            Welcome to <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">InterView AI!</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed text-gray-600">
            Your account has been successfully created. You&apos;re now ready to start your interview preparation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={() => router.push('/login')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              Continue to Login
            </button>
            <Link 
              href="/" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg transition-all text-center"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-3 md:mb-4"></div>
            <span className="text-gray-800 text-base md:text-lg font-semibold">Registering...</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800">
                <User className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">InterView AI</span>
            </div>
            <div className="flex items-center space-x-3 md:space-x-6">
              <Link
                href="/login"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center space-x-1 md:space-x-2 px-3 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg text-sm md:text-base"
              >
                <UserCheck className="w-3 h-3 md:w-4 md:h-4" />
                <span>Login</span>
              </Link>
              <Link
                href="/"
                className="hidden sm:flex text-gray-700 hover:text-purple-600 transition-colors items-center space-x-1 md:space-x-2 text-sm md:text-base"
              >
                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20 pb-10 px-4 sm:px-6">
        <div className="w-full max-w-md md:max-w-2xl mx-auto">
          {/* Progress Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <span className="text-xs md:text-sm text-gray-500">Step {currentStep} of 3</span>
              <span className="text-xs md:text-sm text-gray-500">{Math.round((currentStep / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-r from-purple-600 to-purple-800 h-2 md:h-3 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-1 md:mt-2 text-xs text-gray-500">
              <span>Account</span>
              <span>Profile</span>
              <span>Preferences</span>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg md:shadow-xl"
          >
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
                Join <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">InterView AI</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                Start your journey to interview success with personalized AI-powered preparation
              </p>
            </div>

            {/* Initial Method Choice */}
            {!signupMethod && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Choose Your Sign Up Method</h2>
                  <p className="text-sm md:text-base text-gray-600">Select how you&apos;d like to create your account</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {/* Google Signup Button */}
                  <button
                    type="button"
                    onClick={() => setSignupMethod('google')}
                    className="w-full flex items-center justify-center px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-xl md:rounded-2xl bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 group"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-base md:text-lg font-medium text-gray-700 group-hover:text-gray-900">Continue with Google</span>
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm md:text-base">
                      <span className="px-4 md:px-6 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  {/* Manual Signup Button */}
                  <button
                    type="button"
                    onClick={() => setSignupMethod('manual')}
                    className="w-full flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl md:rounded-2xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                    <span className="text-base md:text-lg font-medium">Sign up with Email</span>
                  </button>
                </div>

                {/* Back to Login */}
                <div className="text-center mt-6 md:mt-8">
                  <p className="text-sm md:text-base text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                      Sign in
                    </Link>
                  </p>
                </div>
              </motion.div>
            )}

            {/* Manual Signup Form */}
            {signupMethod === 'manual' && (
              <div>
                {/* Back to Choice Button */}
                <button
                  type="button"
                  onClick={() => setSignupMethod('')}
                  className="flex items-center text-sm md:text-base text-gray-500 hover:text-gray-700 mb-4 md:mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  Back to signup options
                </button>
                
              <form onSubmit={handleSubmit}>
              {/* Step 1: Account Information */}
              {currentStep === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center text-gray-800">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-purple-600" />
                    Create Your Account
                  </h2>
                  
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                      placeholder="Enter your email address"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 md:w-5 md:h-5" />
                        ) : (
                          <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        )}
                      </button>
                    </div>
                    {password && (
                      <div className="mt-1 md:mt-2">
                        <div className="flex items-center justify-between text-xs mb-1 text-gray-500">
                          <span>Password Strength</span>
                          <span className={`${passwordStrength <= 2 ? 'text-red-500' : passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'}`}>
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div
                            className={`h-1 rounded-full transition-all ${getPasswordStrengthColor()}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                    {errors.password && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 pr-10 md:pr-12 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4 md:w-5 md:h-5" />
                        ) : (
                          <Eye className="w-4 h-4 md:w-5 md:h-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center text-gray-800">
                    <User className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-purple-600" />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="First name"
                        required
                      />
                      {errors.firstName && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="Last name"
                        required
                      />
                      {errors.lastName && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Profile Picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-xs md:text-sm bg-white text-gray-800"
                    />
                    {profilePicture && (
                      <div className="mt-3 md:mt-4 flex justify-center">
                        <Image 
                          src={profilePicture} 
                          alt="Profile Preview" 
                          width={80}
                          height={80}
                          className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-4 border-purple-200" 
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Phone Number</label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="Phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Address</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Referral Code (Optional)</label>
                    <input
                      type="text"
                      value={referral}
                      onChange={(e) => handleInputChange('referral', e.target.value)}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-lg md:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-sm md:text-base bg-white text-gray-800"
                      placeholder="Enter referral code (if any)"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Terms & Completion */}
              {currentStep === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center text-gray-800">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-purple-600" />
                    Final Steps
                  </h2>
                  
                  <div className="border border-purple-200 rounded-lg md:rounded-xl p-4 md:p-6 bg-purple-50">
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-purple-800">Almost There!</h3>
                    <p className="text-sm md:text-base mb-3 md:mb-4 text-purple-700">
                      You&apos;re just one step away from joining our AI-powered interview preparation platform. 
                      Please review and accept our terms to complete your registration.
                    </p>
                    
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <input
                        type="checkbox"
                        id="accept-terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="mt-0.5 md:mt-1 h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                        required
                      />
                      <label htmlFor="accept-terms" className="text-xs md:text-sm text-gray-700">
                        I accept the{' '}
                        <Link href="/terms" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">
                          Terms and Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-purple-600 hover:text-purple-800 underline" target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs md:text-sm mt-1 md:mt-2">{errors.terms}</p>}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleGoogleSignIn}
                      type="button"
                      className="w-full font-semibold py-2 md:py-3 rounded-lg md:rounded-xl border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 text-sm md:text-base bg-white text-gray-700"
                    >
                      <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={20} height={20} className="h-4 w-4 md:h-5 md:w-5" />
                      Sign up with Google
                    </button>
                    <p className="text-xs md:text-sm text-gray-500">Or complete registration manually</p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium transition-all flex items-center gap-1 md:gap-2 text-sm md:text-base ${
                    currentStep === 1
                      ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                  Back
                </button>
                
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-1 md:gap-2 disabled:opacity-50 text-sm md:text-base"
                >
                  {loading ? (
                    <>
                      <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : currentStep === 3 ? (
                    <>
                      Complete Registration
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
              </div>
            )}

            {/* Google Signup Handling */}
            {signupMethod === 'google' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 md:py-12"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-gray-800">Continue with Google</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">You&apos;ll be redirected to Google to complete your signup</p>
                <button
                  onClick={handleGoogleSignup}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl md:rounded-2xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                >
                  Proceed with Google
                </button>
                <button
                  onClick={() => setSignupMethod('')}
                  className="block mx-auto mt-4 md:mt-6 text-sm md:text-base text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ← Back to options
                </button>
              </motion.div>
            )}

            {/* Error and Success Messages */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 md:mt-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg md:rounded-xl"
              >
                <p className="text-red-700 text-xs md:text-sm">{error}</p>
              </motion.div>
            )}
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 md:mt-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg md:rounded-xl"
              >
                <p className="text-green-700 text-xs md:text-sm">{success}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Footer Links */}
          {/* <div className="text-center mt-6 md:mt-8 text-xs md:text-sm text-gray-500">
            <p className="mb-3 md:mb-4">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                Login here
              </Link>
            </p>
          </div> */}
        </div>
      </div>
      
      {/* Google Sign-in Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Sign in with Google</h3>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-xl md:text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="text-xs md:text-sm space-y-3 md:space-y-4 mb-4 md:mb-6 text-gray-700">
              <p>
                By clicking this you are agreeing our <Link href="/terms" className="text-purple-600 hover:underline">Terms and Conditions</Link>
              </p>
            </div>
            
            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <input
                type="checkbox"
                id="accept-terms-modal-register"
                checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
                className="form-checkbox h-4 w-4 md:h-5 md:w-5 text-purple-600 transition duration-150 rounded focus:ring-purple-500 border-gray-300"
              />
              <label htmlFor="accept-terms-modal-register" className="text-xs md:text-sm select-none text-gray-700">
                I accept the Terms and Conditions
              </label>
            </div>
            
            <div className="flex justify-end space-x-2 md:space-x-3">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-3 py-1 md:px-4 md:py-2 border border-gray-300 hover:bg-gray-50 rounded-md md:rounded-lg text-xs md:text-sm text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleGoogleSignInWithTerms}
                disabled={!acceptedTerms}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg md:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 md:gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4" />
                Sign in with Google
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Global styles */}
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-15px); }
          70% { transform: translateY(-7px); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;