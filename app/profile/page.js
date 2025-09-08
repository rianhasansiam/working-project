'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  CreditCard, 
  Calendar, 
  Edit2, 
  Award, 
  Clock, 
  ChevronDown, 
  Share2, 
  Copy, 
  Users, 
  Gift, 
  ExternalLink, 
  MessageCircle, 
  Send, 
  X 
} from 'lucide-react';

const ProfilePage = () => {
  const [copied, setCopied] = useState(false);
  const [userData, setUserData] = useState({
    first_name: 'Rian Hasan',
    last_name: 'Siam',
    email: 'rianhasan1971@gmail.com',
    profile_picture: 'https://i.pravatar.cc/150?img=1',
    institute: 'Daffodil International University',
    phone_number: '+880 1932600504',
    address: 'Mirpur-1, Dhaka, Bangladesh',
    totalInterview: 15,
    credit: 250,
    referralCode: 'JD2024REF',
    referralCredits: 50,
    paymentHistory: [
      {
        id: 1,
        date: '2024-01-15',
        planName: 'Pro Plan',
        planCredits: 100,
        planPrice: 29.99,
        paymentMethod: 'Credit Card',
        isVerified: true
      },
      {
        id: 2,
        date: '2024-01-01',
        planName: 'Basic Plan',
        planCredits: 50,
        planPrice: 14.99,
        paymentMethod: 'PayPal',
        isVerified: true
      }
    ]
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editValues, setEditValues] = useState({
    institute: '',
    phone_number: '',
    address: ''
  });
  const [saving, setSaving] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportData, setReportData] = useState({
    category: '',
    subject: '',
    description: ''
  });
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportStatus, setReportStatus] = useState('');

  useEffect(() => {
    if (userData) {
      setEditValues({
        institute: userData.institute || '',
        phone_number: userData.phone_number || '',
        address: userData.address || '',
      });
    }
  }, [userData]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleEditChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setEditValues({
      institute: userData.institute || '',
      phone_number: userData.phone_number || '',
      address: userData.address || '',
    });
  };

  const handleEditSave = async () => {
    setSaving(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUserData({
        ...userData,
        institute: editValues.institute,
        phone_number: editValues.phone_number,
        address: editValues.address
      });
      
      setEditMode(false);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError('Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(userData.referralCode ? `${userData.referralCode}` : '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Your Interview',
          text: `Join me on Your Interview and get started with AI-powered interview practice! Use my referral code: ${userData.referralCode}`,
          url: `https://yourinterview.net/${userData.referralCode}`,
        });
      } catch {
        console.error('Error sharing');
      }
    } else {
      handleCopyLink();
    }
  };

  const handleReportChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    setReportSubmitting(true);
    setReportStatus('Submitting...');

    try {
      // Simulate API call for report submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setReportStatus('Report submitted successfully! We will review your feedback.');
      setReportData({ category: '', subject: '', description: '' });
      setTimeout(() => {
        setShowReportModal(false);
        setReportStatus('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting report:', error);
      setReportStatus('Failed to submit report. Please try again.');
    } finally {
      setReportSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full mb-4 bg-purple-600"></div>
          <div className="h-4 rounded w-32 bg-gray-300"></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="p-6 rounded-lg shadow-md max-w-md w-full text-center bg-white">
          <div className="mb-4 text-red-500">{error}</div>
          <a href="/login" className="hover:underline text-purple-600">Return to login</a>
        </div>
      </div>
    );
  }
  
  if (!userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header Banner */}
      <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent"></div>

        {/* Profile Header Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8"
          >
            <div className="relative">
              <Image
                src={userData.profile_picture || 'https://ui-avatars.com/api/?name=User'}
                alt="Profile"
                width={128}
                height={128}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-2xl object-cover"
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 rounded-full border-2 sm:border-3 md:border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <div className="text-white text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {userData.first_name} {userData.last_name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4 truncate max-w-xs sm:max-w-none text-purple-100">
                {userData.email}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4">
                <div className="backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center space-x-1 sm:space-x-2 bg-white/20">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-purple-200" />
                  <span className="text-xs sm:text-sm font-medium">
                    {userData.totalInterview || 0} Interviews
                  </span>
                </div>
                <div className="backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center space-x-1 sm:space-x-2 bg-white/20">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                  <span className="text-xs sm:text-sm font-medium">
                    {userData.credit || 0} Credits
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Profile Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 mt-16 md:mt-5 sm:p-6 md:p-8 border bg-white border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center text-gray-800">
                  <User className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  Profile Information
                </h2>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-1 sm:gap-2 self-end sm:self-auto bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  {editMode ? "Save Changes" : "Edit Profile"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium flex items-center text-gray-600">
                    <Building className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                    Institute
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name="institute"
                      value={editValues.institute}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent text-xs sm:text-sm border-gray-300 focus:ring-purple-500"
                      disabled={saving}
                    />
                  ) : (
                    <p className="font-medium px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm text-gray-800 bg-gray-50">
                      {userData.institute || 'Not specified'}
                    </p>
                  )}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium flex items-center text-gray-600">
                    <Phone className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name="phone_number"
                      value={editValues.phone_number}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent text-xs sm:text-sm border-gray-300 focus:ring-purple-500"
                      disabled={saving}
                    />
                  ) : (
                    <p className="font-medium px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm text-gray-800 bg-gray-50">
                      {userData.phone_number || 'Not specified'}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2 space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium flex items-center text-gray-600">
                    <MapPin className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    Address
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name="address"
                      value={editValues.address}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent text-xs sm:text-sm border-gray-300 focus:ring-purple-500"
                      disabled={saving}
                    />
                  ) : (
                    <p className="font-medium px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm text-gray-800 bg-gray-50">
                      {userData.address || 'Not specified'}
                    </p>
                  )}
                </div>
              </div>
              {editMode && (
                <div className="mt-4 sm:mt-6 flex justify-end space-x-3">
                  <button
                    onClick={handleEditCancel}
                    className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-lg text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEditSave}
                    className="px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-1 sm:gap-2 bg-green-600 hover:bg-green-700 text-white"
                    disabled={saving}
                  >
                    <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Payment History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 md:p-8 border bg-white border-gray-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-gray-800">
                <CreditCard className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                Payment History
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Date</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Plan</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Credits</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Amount</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Method</th>
                      <th className="text-left py-2 px-3 sm:py-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(userData.paymentHistory || []).sort((a, b) => new Date(b.date) - new Date(a.date)).map((payment, index) => (
                      <tr
                        key={payment.id || index}
                        className="border-b transition-colors border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm text-gray-800">
                          {new Date(payment.date).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4">
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
                            {payment.planName}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-800">{payment.planCredits}</td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-bold text-gray-800">${payment.planPrice}</td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4">
                          <div className="flex items-center">
                            <CreditCard className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                            <span className="text-xs sm:text-sm text-gray-700">{payment.paymentMethod}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4">
                          <span
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                              payment.isVerified
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {payment.isVerified ? "Verified" : "Pending"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {(!userData.paymentHistory || userData.paymentHistory.length === 0) && (
                  <div className="text-center py-6 sm:py-8 text-xs sm:text-sm text-gray-500">
                    No payment history found
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Referral Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 border bg-white border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center text-gray-800">
                <Share2 className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                Referral Program
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-purple-50">
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600">Your Referral Code</p>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg font-mono text-sm sm:text-base font-bold flex-1 truncate bg-white text-purple-600">
                      {userData.referralCode || 'Not available'}
                    </code>
                    <button
                      onClick={handleCopyLink}
                      className="p-1.5 sm:p-2 transition-colors duration-200 rounded-lg bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2 flex items-center text-green-600">
                      <span className="mr-1">✓</span>
                      Copied to clipboard!
                    </p>
                  )}
                </div>
                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Referral Credits Earned</p>
                      <p className="text-xl sm:text-2xl font-bold text-purple-600">
                        {userData.referralCredits || 0}
                      </p>
                    </div>
                    <div className="text-purple-500">
                      <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statistics Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-6 border bg-white border-gray-100"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center text-gray-800">
                <Award className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                Quick Stats
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Total Interviews</p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        {userData.totalInterview || 0}
                      </p>
                    </div>
                    <div className="text-blue-500">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Available Credits</p>
                      <p className="text-xl sm:text-2xl font-bold text-orange-600">
                        {userData.credit || 0}
                      </p>
                    </div>
                    <div className="text-orange-500">
                      <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer Spacing */}
      <div className="h-12 sm:h-16"></div>

      {/* Floating Bot Icon */}
      <button
        onClick={() => setShowReportModal(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white"
        style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8 max-w-md w-full mx-auto relative border bg-white/95 border-white/50"
          >
            <button 
              className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 transition-colors duration-200 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200" 
              onClick={() => setShowReportModal(false)}
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-500 to-purple-700">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent mb-1 sm:mb-2 bg-gradient-to-r from-purple-600 to-purple-800">
                Report an Issue
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">Help us improve by reporting any issues or feedback</p>
            </div>

            <form onSubmit={handleReportSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  value={reportData.category}
                  onChange={handleReportChange}
                  required
                  className="w-full border-2 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 transition-all duration-300 text-xs sm:text-sm border-gray-300 bg-white text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select a category</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="payment">Payment Issue</option>
                  <option value="interview">Interview Problem</option>
                  <option value="account">Account Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={reportData.subject}
                  onChange={handleReportChange}
                  required
                  className="w-full border-2 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 transition-all duration-300 text-xs sm:text-sm border-gray-300 bg-white text-gray-900 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500"
                  placeholder="Brief description of the issue"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={reportData.description}
                  onChange={handleReportChange}
                  required
                  rows="4"
                  className="w-full border-2 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-xs sm:text-sm border-gray-300 bg-white text-gray-900 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500"
                  placeholder="Please provide detailed information about the issue..."
                />
              </div>

              <button
                type="submit"
                disabled={reportSubmitting}
                className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 disabled:from-gray-400 disabled:to-gray-500"
              >
                {reportSubmitting ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    <span>Submit Report</span>
                  </>
                )}
              </button>

              {reportStatus && (
                <div className={`text-center p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                  reportStatus.includes('success') || reportStatus.includes('submitted') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : reportStatus.includes('Failed')
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  <div className="font-medium">{reportStatus}</div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;