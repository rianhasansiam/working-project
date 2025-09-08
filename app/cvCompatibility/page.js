'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Upload, 
  FileText, 
  Eye, 
  Zap, 
  CheckCircle, 
  Target,
  BarChart3,
  Lightbulb,
  Sparkles,
  Brain
} from 'lucide-react';
import InterviewGuide from '../component/InterviewGuide';

const CVCompatibility = () => {
  const [uploadedCV, setUploadedCV] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedCV(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedCV(file);
    }
  };

  const startAnalysis = () => {
    // Functionality will be added later
    console.log('Starting CV analysis...');
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

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <Search className="h-3 w-3 mr-1" />
            CV Analysis & Optimization
          </div> */}

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Optimize Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              CV for Success
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get instant AI-powered feedback on your CV.
            Analyze ATS compatibility, identify missing
            keywords, and receive personalized recommendations
            to increase your interview chances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={startAnalysis}
              disabled={!uploadedCV || !jobDescription}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              <Zap className="mr-2 h-4 w-4" />
              Analyze CV Now
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
              <Eye className="mr-2 h-4 w-4" />
              View Sample Report
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CV Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-purple-500" />
                  <span>Upload Your CV</span>
                </h3>
              </div>
              <div className="p-6">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-purple-400 bg-purple-50"
                      : "border-purple-200 hover:border-purple-300"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-purple-600" />
                  </div>

                  {uploadedCV ? (
                    <div className="space-y-2">
                      <CheckCircle className="h-8 w-8 mx-auto text-green-600" />
                      <p className="font-medium text-green-600">
                        File uploaded successfully!
                      </p>
                      <p className="text-sm text-gray-600">
                        {uploadedCV.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(uploadedCV.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-lg font-medium">
                        Drop your CV here
                      </p>
                      <p className="text-sm text-gray-600">
                        or click to browse files
                      </p>
                      <p className="text-xs text-gray-500">
                        Supports PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload">
                    <div className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer inline-block transition-all duration-200">
                      {uploadedCV ? "Change File" : "Choose File"}
                    </div>
                  </label>
                </div>

                {uploadedCV && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        CV uploaded and ready for analysis
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Job Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-purple-500" />
                  <span>Job Description</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">
                    Paste the job description you&apos;re targeting
                  </label>
                  <textarea
                    id="job-description"
                    placeholder="Paste the complete job description here. Include requirements, responsibilities, and qualifications for the most accurate analysis..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full h-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {jobDescription.length} characters
                    </span>
                    <span>
                      Minimum 500 characters recommended
                    </span>
                  </div>

                  {jobDescription.length >= 500 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center space-x-2 text-green-600"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Great! This should provide a comprehensive analysis.
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Analysis Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            What You&apos;ll Get from CV Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "ATS Compatibility",
                description: "Check if your CV passes Applicant Tracking Systems",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Search,
                title: "Keyword Analysis",
                description: "Identify missing keywords from job requirements",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: BarChart3,
                title: "Match Score",
                description: "Get a percentage match against job description",
                color: "from-purple-600 to-purple-800",
              },
              {
                icon: Lightbulb,
                title: "Recommendations",
                description: "Actionable suggestions to improve your CV",
                color: "from-green-600 to-emerald-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 text-center h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        {uploadedCV && jobDescription && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="max-w-md mx-auto bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold mb-2">
                  Ready for Analysis!
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your CV and job description are uploaded.
                  Click below to start the AI analysis.
                </p>
                <button
                  onClick={startAnalysis}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Start AI Analysis
                </button>
              </div>
            </div>
          </motion.div>
        )}


      </div>



<InterviewGuide />




  {/* Recent Sessions */}
        {recentSessions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="container mx-auto bg-white rounded-2xl shadow-lg border border-gray-200">
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
  );
};

export default CVCompatibility;
