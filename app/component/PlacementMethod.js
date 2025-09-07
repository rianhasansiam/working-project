"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const PlacementMethod = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const practiceToPlacementSteps = [
    {
      step: "01",
      title: "Practice",
      subtitle: "Master Your Skills",
      description: "AI-powered mock interviews, coding challenges, and skill assessments",
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-purple-400 to-purple-600",
      progress: 25,
      interactive: true,
      backgroundImage: "https://images.unsplash.com/photo-1594631389194-0795bf920faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFjdGljZSUyMGNvZGluZyUyMGNoYWxsZW5nZXxlbnwxfHx8fDE3NTcwMTQ5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "02", 
      title: "Perfect",
      subtitle: "Refine Your Approach",
      description: "Get detailed feedback, identify weak areas, and improve systematically",
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l2 7h7l-5.5 4L17 20l-5-4-5 4 1.5-7L3 9h7l2-7z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-700",
      progress: 50,
      interactive: true,
      backgroundImage: "https://images.unsplash.com/photo-1740560051535-049de884d962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwcGVyZm9ybWFuY2UlMjBtZXRyaWNzfGVufDF8fHx8MTc1NzAxNDkzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "03",
      title: "Perform", 
      subtitle: "Ace Real Interviews",
      description: "Apply learned skills with confidence in actual interview scenarios",
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-purple-600 to-purple-800",
      progress: 75,
      interactive: true,
      backgroundImage: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtJTIwaW50ZXJ2aWV3JTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTcwMTQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      step: "04",
      title: "Placement",
      subtitle: "Land Dream Job",
      description: "Secure offers from top companies and start your career journey",
      icon: () => (
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-purple-700 to-purple-900",
      progress: 100,
      interactive: true,
      backgroundImage: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBwbGFjZW1lbnQlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU3MDE0OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const ProgressBar = ({ value }) => (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div 
        className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all duration-1000"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );

  const ImageWithFallback = ({ src, alt, className }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className={className}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setImgSrc('/placeholder-image.jpg'); // Fallback image
          }}
        />
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white border-0 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Your Success Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Practice to Placement
            </span>{' '}
            Method
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientifically-proven 4-step methodology that has helped 50,000+ professionals 
            land their dream jobs at top companies
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-600 rounded-full transform -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {practiceToPlacementSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="h-full text-center p-8 border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:scale-105 relative overflow-hidden rounded-lg">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <ImageWithFallback
                      src={step.backgroundImage}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform relative`}>
                      {step.step}
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <step.icon />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors relative z-10">
                    {step.title}
                  </h3>
                  <h4 className="text-lg text-green-600 mb-4 font-medium relative z-10">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4 relative z-10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Completion Rate</span>
                      <span>{step.progress}%</span>
                    </div>
                    <ProgressBar value={step.progress} />
                  </div>

                  {/* Interactive Element */}
                  {/* {step.interactive && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                      <button className="border border-purple-500 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-colors">
                        <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-7-4h.01M12 5v.01" />
                        </svg>
                        Try Now
                      </button>
                    </div>
                  )} */}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity relative z-5">
                    <div className={`w-full h-full bg-gradient-to-br ${step.color}`} />
                  </div>
                </div>

                {/* Connection Line for mobile */}
                {index < practiceToPlacementSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementMethod;
