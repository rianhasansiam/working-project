"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import InterviewGuide from '../component/InterviewGuide';

const WrittenTestPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');
  const [uploadedCV, setUploadedCV] = useState(null);
  const [testDuration, setTestDuration] = useState('');

  const startTest = () => {
    // Validation to ensure all required fields are filled
    if (!selectedRole || !selectedLevel || !jobRequirements || !uploadedCV) {
      alert('Please fill in all required fields and upload your CV.');
      return;
    }
    console.log('Starting written test...');
    // Test functionality will be added later
  };

  const levels = [
    { value: 'entry', label: 'Entry Level', subtitle: '0-1 years experience' },
    { value: 'junior', label: 'Junior', subtitle: '1-3 years experience' },
    { value: 'mid', label: 'Mid-level', subtitle: '3-5 years experience' },
    { value: 'senior', label: 'Senior', subtitle: '5-8 years experience' },
    { value: 'lead', label: 'Lead/Principal', subtitle: '8+ years experience' }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setUploadedCV(file);
  };


  const recentSessions = [
    {
      role: 'Frontend Developer',
      company: 'Google',
      date: '2 days ago',
      duration: '45 min',
      score: 87
    },
    {
      role: 'Full Stack Developer',
      company: 'Microsoft',
      date: '1 week ago',
      duration: '52 min',
      score: 92
    },
    {
      role: 'Software Engineer',
      company: 'Meta',
      date: '2 weeks ago',
      duration: '38 min',
      score: 78
    }
  ];



  const durations = [
    { value: 60, label: 'Short', subtitle: 'Quick Assessment', time: '1h' },
    { value: 120, label: 'Medium', subtitle: 'Standard Test', time: '2h' },
    { value: 180, label: 'Long', subtitle: 'Comprehensive Test', time: '3h' },
    { value: 240, label: 'Extended', subtitle: 'Full Assessment', time: '4h' }
  ];

  const features = [
    {
      title: 'Coding Challenges',
      description: 'Solve programming problems with multiple difficulty levels',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Real-time Evaluation',
      description: 'Get instant feedback on your code quality and logic',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Performance Analytics',
      description: 'Track your speed, accuracy, and problem-solving approach',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive analysis with improvement suggestions',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Technical Assessment Platform
          </div> */}
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Test Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Challenge yourself with comprehensive technical assessments designed to evaluate your programming skills, 
            problem-solving abilities, and technical knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={startTest}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Start Written Test
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              View Sample Questions
            </button>
          </div>
        </motion.div>

        {/* Test Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="flex items-center space-x-2 text-xl font-bold">
                <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Test Configuration</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Job Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g., Software Engineer, Full Stack Developer..."
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
                      </svg>
                    </div>
                  </div>
                  {selectedRole && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2 text-sm text-purple-600 font-medium"
                    >
                      ✓ Role: {selectedRole}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      required
                      value={selectedLevel} 
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white shadow-sm hover:shadow-md"
                    >
                      <option value="" disabled className="text-gray-400">Choose your experience level</option>
                      {levels.map((level) => (
                        <option key={level.value} value={level.value} className="py-2">
                          {level.label} - {level.subtitle}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {selectedLevel && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2 text-sm text-purple-600 font-medium"
                    >
                      ✓ {levels.find(l => l.value === selectedLevel)?.label} Selected
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Job Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      placeholder="Paste the job description or key technical requirements here..."
                      value={jobRequirements}
                      onChange={(e) => setJobRequirements(e.target.value)}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md resize-none"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      {jobRequirements.length}/500 characters minimum
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Test Duration <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          required
                          value={testDuration} 
                          onChange={(e) => setTestDuration(e.target.value)}
                          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white shadow-sm hover:shadow-md"
                        >
                          <option value="" disabled className="text-gray-400">Choose test duration</option>
                          {durations.map((duration) => (
                            <option key={duration.value} value={duration.value} className="py-2">
                              {duration.label} ({duration.time}) - {duration.subtitle}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {testDuration && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 text-sm text-purple-600 font-medium"
                        >
                          ✓ {durations.find(d => d.value == testDuration)?.label} Selected
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Upload CV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                      />
                      {uploadedCV && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 text-sm text-green-600 font-medium"
                        >
                          ✓ {uploadedCV.name} uploaded successfully
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                {selectedRole && selectedLevel && jobRequirements.length >= 100 && uploadedCV && testDuration ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="mb-4 p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
                      <div className="flex items-center justify-center mb-2">
                        <svg className="h-6 w-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-green-700">Ready to Start!</span>
                      </div>
                      <p className="text-xs text-green-600">All requirements completed. Click below to begin your test.</p>
                    </div>
                    <button
                      onClick={startTest}
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
                    >
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Start Written Test
                    </button>
                  </motion.div>
                ) : (
                  <button
                    onClick={startTest}
                    disabled={!selectedRole || !selectedLevel || !jobRequirements || !uploadedCV}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Start Written Test
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Written Test Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white">
                  <feature.icon />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interview Guide Integration */}
        <InterviewGuide />



          {/* Recent Sessions */}
                {recentSessions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                      <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl font-bold">Your Recent Sessions</h2>
                      </div>
                      <div className="p-6">
                        <div className="space-y-4">
                          {recentSessions.map((session, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-500 rounded-lg flex items-center justify-center">
                                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{session.role} at {session.company}</div>
                                  <div className="text-sm text-gray-500">{session.date} • {session.duration}</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <div className="text-center">
                                  <div className="text-lg font-semibold text-green-600">{session.score}%</div>
                                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                                    <div 
                                      className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-300"
                                      style={{ width: `${session.score}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                  View Results
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
      </div>
    </div>
  );
};

export default WrittenTestPage;