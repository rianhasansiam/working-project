"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InterviewGuide from '../component/InterviewGuide';

const InterviewTestPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');
  const [uploadedCV, setUploadedCV] = useState(null);
  const [interviewDuration, setInterviewDuration] = useState('');



  const levels = [
    { value: 'entry', label: 'Entry Level', subtitle: '0-1 years experience',  },
    { value: 'junior', label: 'Junior', subtitle: '1-3 years experience',  },
    { value: 'mid', label: 'Mid-level', subtitle: '3-5 years experience',  },
    { value: 'senior', label: 'Senior', subtitle: '5-8 years experience',  },
    { value: 'lead', label: 'Lead/Principal', subtitle: '8+ years experience',}
  ];

  const durations = [
    { value: 90, label: 'Short', subtitle: 'Quick Practice',  },
    { value: 150, label: 'Medium', subtitle: 'Standard Session', },
    { value: 210, label: 'Long', subtitle: 'In-depth Review',  },
    { value: 280, label: 'Extra Long', subtitle: 'Comprehensive Prep', }
  ];

  const features = [
    {
      title: 'Real-time Feedback',
      description: 'Get instant analysis of your answers with AI-powered insights',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Voice Analysis',
      description: 'Advanced speech recognition to evaluate your communication',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: 'Behavioral Scoring',
      description: 'Comprehensive evaluation of your interview performance',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Personalized Tips',
      description: 'Customized improvement suggestions based on your performance',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

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

   const startInterview = () => {
    // Validation to ensure all required fields are filled
    if (!selectedRole || !selectedLevel || !jobRequirements || !uploadedCV || !interviewDuration) {
      alert('Please fill in all required fields and upload your CV.');
      return;
    }
    console.log('Starting interview...');
    console.log('Duration:', interviewDuration);
    // Interview functionality will be added later
  };


  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setUploadedCV(file);
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 animate-fade-in"
        >
          {/* <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            AI-Powered Interviews
          </div> */}
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Practice with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              AI Interviewer
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Experience realistic interview scenarios with our advanced AI that provides instant feedback 
            and personalized coaching to help you improve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={startInterview}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Interview Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </motion.div>




        {/* Interview Setup */}
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
                <span>Quick Setup</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Target Role <span className="text-red-500">*</span>
                  </label>
                  <input 
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white shadow-sm hover:shadow-md" 
                    type="text" 
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    placeholder="e.g., Frontend Developer, Software Engineer"
                    required
                  />
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
                    {/* Custom dropdown arrow */}
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
                      {levels.find(l => l.value === selectedLevel)?.icon} {levels.find(l => l.value === selectedLevel)?.label} Selected
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
                      placeholder="Paste the job description or key requirements here..."
                      value={jobRequirements}
                      onChange={(e) => setJobRequirements(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Interview Duration <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        required
                        value={interviewDuration} 
                        onChange={(e) => setInterviewDuration(e.target.value)}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 appearance-none bg-white shadow-sm hover:shadow-md"
                      >
                        <option value="" disabled className="text-gray-400">Choose interview duration</option>
                        {durations.map((duration) => (
                          <option key={duration.value} value={duration.value} className="py-2">
                            {duration.label} - {duration.subtitle} ({Math.floor(duration.value/60)}h {duration.value%60}m)
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {interviewDuration && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-sm text-purple-600 font-medium"
                      >
                        {durations.find(d => d.value == interviewDuration)?.icon} {durations.find(d => d.value == interviewDuration)?.label} Session - {Math.floor(interviewDuration/60)}h {interviewDuration%60}m
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Upload Your CV <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-purple-200 rounded-lg p-6 text-center hover:border-purple-300 transition-colors">
                  <svg className="h-8 w-8 mx-auto mb-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload">
                    <button type="button" className="mt-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Choose File
                    </button>
                  </label>
                  {uploadedCV && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-sm text-green-600 mt-2"
                    >
                      ✓ {uploadedCV.name}
                    </motion.p>
                  )}
                </div>
              </div>
              
              {selectedRole && selectedLevel && jobRequirements && uploadedCV && interviewDuration && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <div className="mb-4 p-4 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="h-6 w-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-green-700">Setup Complete!</span>
                    </div>
                    <p className="text-xs text-green-600 text-center">Ready to start your AI interview session.</p>
                  </div>
                  <button 
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-green-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-lg"
                    onClick={startInterview}
                  >
                    Start {durations.find(d => d.value == interviewDuration)?.label} Interview for {selectedRole}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}
              
              {/* Required fields message */}
              {(!selectedRole || !selectedLevel || !jobRequirements || !uploadedCV || !interviewDuration) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center text-gray-500 text-sm">
                    <p>Please fill in all required fields to proceed</p>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
                      {!selectedRole && <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Target Role</span>}
                      {!selectedLevel && <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Experience Level</span>}
                      {!jobRequirements && <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Job Requirements</span>}
                      {!uploadedCV && <span className="bg-red-100 text-red-600 px-2 py-1 rounded">CV Upload</span>}
                      {!interviewDuration && <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Interview Duration</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
          </div>
          
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">AI Interview Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 text-center h-full hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="w-10 h-10 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>






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

export default InterviewTestPage;
