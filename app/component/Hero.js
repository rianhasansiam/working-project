"use client";
import React, { useState } from 'react';


const Hero = () => {
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);

  const liveMetrics = [
    { 
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      value: 50000, 
      suffix: '+', 
      label: 'Users Hired',
      color: 'text-green-600',
      increment: 100 
    },
    { 
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      value: 98,
      suffix: '%',
      label: 'Success Rate',
      color: 'text-orange-600',
      increment: 1
    },
    { 
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      value: 1247,
      suffix: '',
      label: 'Active Now',
      color: 'text-amber-600',
      increment: 10
    },
    { 
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      value: 4.9,
      suffix: '/5',
      label: 'Rating',
      color: 'text-purple-600',
      increment: 0.1
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Animated Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-medium rounded-full">
                <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                #1 AI Interview Platform
              </span>
              <span className="inline-flex items-center px-4 py-2 border-2 border-green-500 text-green-600 bg-green-50 text-sm font-medium rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                1,247 Active Now
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6">
                From{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    Practice
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-purple-800 rounded-full"></div>
                </span>
                <br />
                to{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Placement
                  </span>
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Master interviews with AI-powered practice, real-time feedback, and personalized coaching. 
                Join <span className="font-semibold text-purple-600">50,000+</span> professionals who landed their dream jobs.
              </p>
            </div>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center group">
                <svg className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Free Practice
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setIsHeroVideoPlaying(!isHeroVideoPlaying)}
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium bg-white/80 backdrop-blur-sm hover:scale-105 transition-all duration-200 flex items-center justify-center group"
              >
                {isHeroVideoPlaying ? (
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6l5-3-5-3z" />
                  </svg>
                ) : (
                  <svg className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-7-4h.01M12 5v.01" />
                  </svg>
                )}
                {isHeroVideoPlaying ? 'Pause Demo' : 'Watch Live Demo'}
              </button>
            </div>

            {/* Live Metrics Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {liveMetrics.map((metric, index) => (
                <div key={metric.label} className="text-center group cursor-default">
                  <div className="flex items-center justify-center mb-1">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform ${metric.color}`}>
                      <metric.icon />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {metric.value}{metric.suffix}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Interactive Hero Demo */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-purple-100">
              {/* Mock Video Interface */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      Recording
                    </span>
                    <span className="inline-flex items-center px-3 py-1 border border-green-500 text-green-600 text-xs font-medium rounded-full">
                      AI Coach Active
                    </span>
                  </div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center border-2 border-dashed border-purple-300 relative overflow-hidden">
                  {isHeroVideoPlaying && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-pink-200/50 animate-pulse"></div>
                  )}
                  
                  <div className="text-center z-10 relative">
                    <div className={`${isHeroVideoPlaying ? 'animate-bounce' : ''}`}>
                      <svg className="h-16 w-16 mx-auto mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-purple-600 font-medium text-lg">
                      {isHeroVideoPlaying ? 'Live AI Analysis' : 'Interactive Interview Simulator'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {isHeroVideoPlaying ? 'Analyzing speech patterns and confidence...' : 'Click "Watch Live Demo" to start'}
                    </p>
                  </div>

                  {/* Floating AI Insights */}
                  {isHeroVideoPlaying && (
                    <>
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg border animate-fadeIn">
                        <div className="text-xs text-green-600 font-medium">Eye Contact: 94%</div>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-lg border animate-fadeIn delay-500">
                        <div className="text-xs text-purple-600 font-medium">Confidence: A+</div>
                      </div>
                      
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 shadow-lg border animate-fadeIn delay-1000">
                        <div className="text-xs text-pink-600 font-medium">Speech Pace: Optimal</div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Real-time Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className={`bg-green-50 p-4 rounded-xl text-center ${isHeroVideoPlaying ? 'animate-pulse' : ''}`}>
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-500">Confidence</div>
                  </div>
                  <div className={`bg-purple-50 p-4 rounded-xl text-center ${isHeroVideoPlaying ? 'animate-pulse delay-300' : ''}`}>
                    <div className="text-2xl font-bold text-purple-600">A+</div>
                    <div className="text-sm text-gray-500">Response</div>
                  </div>
                  <div className={`bg-pink-50 p-4 rounded-xl text-center ${isHeroVideoPlaying ? 'animate-pulse delay-500' : ''}`}>
                    <div className="text-2xl font-bold text-pink-600">92%</div>
                    <div className="text-sm text-gray-500">Clarity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50k+</div>
                <div className="text-xs text-gray-500">Hired</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-purple-200">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="text-sm font-medium">AI-Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
