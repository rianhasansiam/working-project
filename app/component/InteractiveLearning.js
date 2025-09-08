"use client";
import React, { useState, useEffect } from 'react';

const InteractiveLearning = () => {
  const [activeFeatureDemo, setActiveFeatureDemo] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isPaused, setIsPaused] = useState(false);

  const interactiveFeatures = [
    {
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Live AI Interview Coach',
      description: 'Real-time facial analysis, voice modulation, and behavioral assessment',
      demo: 'Watch your confidence score update in real-time',
      progress: 92,
      metrics: { accuracy: '99.2%', response: '0.3s', rating: 'A+' },
      isLive: true
    },
    {
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Smart Code Playground',
      description: 'Interactive coding environment with AI hints and debugging assistance',
      demo: 'IntelliSense-powered editor with real-time execution',
      progress: 88,
      metrics: { languages: '15+', tests: '500k+', success: '94%' },
      isLive: true
    },
    {
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Intelligent Progress Tracker',
      description: 'ML-powered analytics with personalized learning path recommendations',
      demo: 'Adaptive difficulty based on performance patterns',
      progress: 95,
      metrics: { insights: '20+', accuracy: '97%', prediction: '92%' },
      isLive: true
    }
  ];

  // Auto-cycle through features every 2 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveFeatureDemo(prev => (prev + 1) % interactiveFeatures.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPaused, interactiveFeatures.length]);

  const ProgressBar = ({ value, className = "" }) => (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm"
        style={{ 
          width: `${value}%`,
          animation: className.includes('animate-pulse') ? 'shimmer 2s infinite' : 'none'
        }}
      ></div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .shimmer {
          background: linear-gradient(90deg, #a855f7 0%, #10b981 50%, #a855f7 100%);
          background-size: 200px 100%;
        }
      `}</style>
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <span className="inline-flex items-center mb-4 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            AI-Powered Experience
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Interactive Learning{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              That Adapts to You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of interview preparation with real-time AI feedback, 
            personalized coaching, and adaptive learning paths
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <div>
            <div className="space-y-6">
              {interactiveFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 ease-in-out cursor-pointer group transform hover:scale-[1.02] ${
                    index === activeFeatureDemo
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-purple-100 shadow-xl scale-[1.01]'
                      : 'border-transparent bg-white hover:border-purple-200 hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50'
                  }`}
                  onClick={() => {
                    setActiveFeatureDemo(index);
                    setIsPaused(true);
                    // Resume auto-cycling after 5 seconds of manual interaction
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                        index === activeFeatureDemo ? 'from-purple-500 to-purple-700 shadow-lg' : 'from-gray-400 to-gray-500'
                      } flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-out group-hover:scale-110 ${
                        index === activeFeatureDemo ? 'animate-pulse' : ''
                      }`}
                    >
                      <feature.icon />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`font-bold text-xl transition-all duration-300 ${
                          index === activeFeatureDemo 
                            ? 'text-purple-700 transform scale-105' 
                            : 'group-hover:text-purple-600'
                        }`}>
                          {feature.title}
                        </h3>
                        {feature.isLive && (
                          <span className="inline-flex items-center bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            Live
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-gray-600 mb-4 leading-relaxed transition-all duration-300 ${
                        index === activeFeatureDemo ? 'text-purple-800 font-medium' : ''
                      }`}>
                        {feature.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-2">
                          <span className={`font-medium transition-colors duration-300 ${
                            index === activeFeatureDemo ? 'text-purple-700' : 'text-purple-600'
                          }`}>AI Accuracy</span>
                          <span className={`transition-all duration-300 ${
                            index === activeFeatureDemo ? 'text-purple-700 font-bold' : ''
                          }`}>{feature.progress}%</span>
                        </div>
                        <ProgressBar value={feature.progress} className={
                          index === activeFeatureDemo ? 'animate-pulse' : ''
                        } />
                      </div>
                      
                      {/* Live Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {Object.entries(feature.metrics).map(([key, value], metricIndex) => (
                          <div 
                            key={key} 
                            className={`text-center p-2 rounded-lg transition-all duration-300 transform ${
                              index === activeFeatureDemo 
                                ? 'bg-gradient-to-r from-green-50 to-green-100 scale-105 shadow-md' 
                                : 'bg-gray-50 hover:scale-105'
                            }`}
                            style={{
                              animationDelay: index === activeFeatureDemo ? `${metricIndex * 100}ms` : '0ms'
                            }}
                          >
                            <div className={`text-sm font-bold transition-colors duration-300 ${
                              index === activeFeatureDemo ? 'text-green-700' : 'text-green-600'
                            }`}>{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className={`text-sm font-medium rounded-lg p-2 transition-all duration-300 ${
                        index === activeFeatureDemo 
                          ? 'text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 shadow-md transform scale-105' 
                          : 'text-purple-600 bg-purple-50'
                      }`}>
                        ✨ {feature.demo}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Demo Area */}
          <div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-3xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl transition-all duration-300 transform">
                    {interactiveFeatures[activeFeatureDemo].title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center bg-purple-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                      <svg className="w-3 h-3 mr-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Active
                    </span>
                    <span className="inline-flex items-center border border-red-500 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      AI-Powered
                    </span>
                  </div>
                </div>
                
                {/* Interactive Demo Window */}
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-300 relative overflow-hidden transition-all duration-700 ease-in-out">
                  <div className="text-center z-10 transform transition-all duration-500 hover:scale-105">
                    <div className="animate-pulse mb-4 transition-all duration-500">
                      {React.createElement(interactiveFeatures[activeFeatureDemo].icon, {
                        className: "h-20 w-20 mx-auto text-purple-500 transition-all duration-500 transform hover:scale-110"
                      })}
                    </div>
                    <p className="text-purple-600 font-semibold text-lg transition-all duration-300 animate-fade-in">
                      Interactive Demo
                    </p>
                    <p className="text-sm text-gray-500 mt-2 max-w-sm transition-all duration-300">
                      {interactiveFeatures[activeFeatureDemo].demo}
                    </p>
                  </div>

                  {/* Animated Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-purple-300/20 animate-pulse transition-all duration-1000" />
                  
                  {/* Floating Animation Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-1/3 left-8 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
                </div>
                
                {/* Real-time Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {Object.entries(interactiveFeatures[activeFeatureDemo].metrics).map(([key, value], index) => (
                    <div 
                      key={key}
                      className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg transform"
                      style={{
                        animationDelay: `${index * 150}ms`
                      }}
                    >
                      <div className="text-2xl font-bold text-green-600 transition-all duration-300 hover:text-green-700">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize transition-colors duration-300">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InteractiveLearning;
