"use client";
import React, { useState } from 'react';

const InterviewGuide = () => {
  const [activeTab, setActiveTab] = useState('body-language');

  const tabData = {
    'body-language': {
      title: 'Body Language & Posture',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      content: {
        dos: [
          'Maintain good posture - sit up straight with shoulders back',
          'Keep your feet flat on the floor, avoid crossing legs',
          'Lean slightly forward to show engagement and interest',
          'Use open gestures - avoid crossing arms or hiding hands',
          'Keep your hands visible and use natural gestures when speaking',
          'Maintain appropriate personal space and respect boundaries'
        ],
        donts: [
          'Don&apos;t slouch or lean back too casually in your chair',
          'Avoid fidgeting, tapping, or playing with objects',
          'Don&apos;t cross your arms - it appears defensive',
          'Avoid turning your body away from the interviewer',
          'Don&apos;t put your hands in your pockets or behind your back',
          'Avoid excessive or distracting movements'
        ],
        tips: [
          'Practice good posture at home before the interview',
          'Use a mirror to check your posture and gestures',
          'Record yourself answering questions to review body language',
          'Remember that confidence shows through your posture',
          'Take deep breaths to help relax tense muscles'
        ]
      }
    },
    'eye-contact': {
      title: 'Eye Contact & Facial Expressions',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      content: {
        dos: [
          'Make steady eye contact 70-80% of the time',
          'Look at the interviewer when they&apos;re speaking',
          'Maintain eye contact when answering questions',
          'Smile naturally and genuinely throughout the interview',
          'Show appropriate facial expressions that match your words',
          'Nod occasionally to show you&apos;re listening and engaged'
        ],
        donts: [
          'Don&apos;t stare intensely or avoid eye contact completely',
          'Avoid looking at your phone, watch, or around the room',
          'Don&apos;t have a blank or expressionless face',
          'Avoid forced or fake smiles',
          'Don&apos;t look down when answering questions',
          'Avoid rolling your eyes or showing negative expressions'
        ],
        tips: [
          'Practice the triangle technique - look at left eye, right eye, then mouth',
          'If nervous, look between the interviewer&apos;s eyebrows',
          'Use natural breaks to look away briefly (when thinking)',
          'Mirror the interviewer&apos;s energy level appropriately',
          'Remember that your eyes convey confidence and honesty'
        ]
      }
    },
    'hand-gestures': {
      title: 'Hand Gestures & Movement',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      content: {
        dos: [
          'Use natural, purposeful hand gestures to emphasize points',
          'Keep gestures within the &quot;box&quot; - between your shoulders and waist',
          'Use open palms when possible to appear trustworthy',
          'Gesture with both hands for balance and natural flow',
          'Use counting gestures when listing items or points',
          'Match your gestures to the pace of your speech'
        ],
        donts: [
          'Don\'t overuse gestures or make them too large/dramatic',
          'Avoid repetitive or nervous hand movements',
          'Don\'t point directly at the interviewer',
          'Avoid clenching fists or making aggressive gestures',
          'Don\'t hide your hands under the table',
          'Avoid touching your face, hair, or clothing repeatedly'
        ],
        tips: [
          'Practice gestures while speaking to make them natural',
          'Use gestures to show size, direction, or emphasis',
          'Keep a pen or notepad handy to give your hands something to do',
          'Remember that gestures should enhance, not distract from your words',
          'Watch successful speakers to learn effective gesture techniques'
        ]
      }
    },
    'dress-code': {
      title: 'Professional Dressing',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      content: {
        dos: [
          'Dress one level above the company\'s daily dress code',
          'Choose well-fitted, clean, and pressed clothing',
          'Opt for conservative colors like navy, black, gray, or white',
          'Ensure shoes are clean and polished',
          'Keep accessories minimal and professional',
          'Make sure your outfit is comfortable and allows easy movement'
        ],
        donts: [
          'Don\'t wear overly casual clothing like jeans or sneakers',
          'Avoid bright, flashy colors or busy patterns',
          'Don\'t wear revealing or tight-fitting clothing',
          'Avoid strong perfumes or colognes',
          'Don\'t wear excessive jewelry or accessories',
          'Avoid wrinkled, stained, or ill-fitting clothes'
        ],
        tips: [
          'Research the company culture and dress accordingly',
          'Try on your outfit beforehand to ensure comfort',
          'Have a backup outfit ready in case of spills or issues',
          'Pay attention to grooming - neat hair, clean nails',
          'For virtual interviews, ensure your top looks professional on camera'
        ]
      }
    },
    'communication': {
      title: 'Voice & Communication',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      content: {
        dos: [
          'Speak clearly and at a moderate pace',
          'Use a confident and enthusiastic tone',
          'Vary your vocal inflection to maintain interest',
          'Pause appropriately before answering questions',
          'Use proper grammar and professional language',
          'Listen actively and ask thoughtful questions'
        ],
        donts: [
          'Don\'t speak too quickly or mumble',
          'Avoid using filler words like "um," "uh," or "like"',
          'Don\'t interrupt the interviewer',
          'Avoid monotone or overly casual speech',
          'Don\'t use slang or inappropriate language',
          'Avoid speaking too softly or too loudly'
        ],
        tips: [
          'Practice speaking slowly and clearly',
          'Record yourself to identify speech patterns',
          'Prepare key points to avoid rambling',
          'Use the STAR method for behavioral questions',
          'Ask for clarification if you don\'t understand a question'
        ]
      }
    },
    'virtual-setup': {
      title: 'Virtual Interview Setup',
      icon: () => (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      content: {
        dos: [
          'Test your technology at least 30 minutes before the interview',
          'Ensure stable internet connection and backup options',
          'Use good lighting - face a window or use a ring light',
          'Position camera at eye level for flattering angle',
          'Choose a clean, professional background',
          'Wear solid colors that contrast with your background'
        ],
        donts: [
          'Don\'t rely on untested technology',
          'Avoid sitting with a window behind you (backlighting)',
          'Don\'t use a messy or distracting background',
          'Avoid looking at yourself instead of the camera',
          'Don\'t forget to mute notifications',
          'Avoid wearing patterns that may appear distorted on camera'
        ],
        tips: [
          'Look at the camera, not the screen, when speaking',
          'Keep water nearby but off-camera',
          'Have your resume and notes easily accessible',
          'Test your setup with a friend beforehand',
          'Keep a backup device ready in case of technical issues'
        ]
      }
    }
  };

  const quickTips = [
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Arrive Early',
      description: 'Be 10-15 minutes early to show respect and punctuality'
    },
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V6.75A1.5 1.5 0 014.5 5.25h15A1.5 1.5 0 0121 6.75v8.796z" />
        </svg>
      ),
      title: 'Stay Hydrated',
      description: 'Drink water beforehand, but avoid excessive caffeine'
    },
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Stay Calm',
      description: 'Practice deep breathing and positive self-talk'
    },
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V6" />
        </svg>
      ),
      title: 'Bring Essentials',
      description: 'Extra copies of resume, notepad, and questions to ask'
    },
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Be Authentic',
      description: 'Let your personality shine through while staying professional'
    },
    {
      icon: () => (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2H4.5a2 2 0 00-2 2v8.8a2 2 0 00.724 1.553L8 18h2m-2-10h4m-4 0V8a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      ),
      title: 'Follow Up',
      description: 'Send a thank-you email within 24 hours of the interview'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Arriving late or unprepared',
      fix: 'Plan your route and arrive 10-15 minutes early'
    },
    {
      mistake: 'Speaking negatively about previous employers',
      fix: 'Focus on positive experiences and lessons learned'
    },
    {
      mistake: 'Not asking any questions',
      fix: 'Prepare thoughtful questions about the role and company'
    },
    {
      mistake: 'Being too casual or overly formal',
      fix: 'Match the company culture while maintaining professionalism'
    },
    {
      mistake: 'Not following up after the interview',
      fix: 'Send a personalized thank-you email within 24 hours'
    }
  ];

  const TabButton = ({ tabKey, data }) => {
    const isActive = activeTab === tabKey;
    return (
      <button
        onClick={() => setActiveTab(tabKey)}
        className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-0 sm:space-x-2 space-y-1 sm:space-y-0 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 ${
          isActive
            ? `bg-gradient-to-r ${data.color} text-white shadow-md`
            : `text-gray-600 hover:text-gray-800 hover:bg-gray-100`
        }`}
      >
        <data.icon />
        <span className="text-xs sm:text-sm text-center sm:text-left">{data.title.split(' ')[0]}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      {/* Header */}
      <div className="bg-white/90  border-t border-gray-200 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                
              <div className="text-center md:text-center">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Interview Preparation Guide
                </h1>
                <p className="text-sm text-gray-600">Master the art of professional interviewing</p>
              </div>

            </div>
           
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4  py-2 md:py-4">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-xl p-2 shadow-md">
          {Object.entries(tabData).map(([key, data]) => (
            <TabButton key={key} tabKey={key} data={data} />
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className={`bg-gradient-to-r ${tabData[activeTab].color} p-6`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-inner">
                    {React.createElement(tabData[activeTab].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">{tabData[activeTab].title}</h2>
                    <p className="text-white/90 text-sm">Essential techniques for interview success</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Do's */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-green-800">Do&apos;s</h3>
                    </div>
                    <ul className="space-y-3">
                      {tabData[activeTab].content.dos.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Don'ts */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5 hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-red-800">Don&apos;ts</h3>
                    </div>
                    <ul className="space-y-3">
                      {tabData[activeTab].content.donts.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg className="h-3 w-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tips */}
                <div className={`${tabData[activeTab].bgColor} border ${tabData[activeTab].borderColor} rounded-xl p-5 hover:shadow-md transition-all`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${tabData[activeTab].bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <svg className={`h-5 w-5 ${tabData[activeTab].textColor.replace('800', '600')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-semibold ${tabData[activeTab].textColor}`}>Pro Tips</h3>
                  </div>
                  <ul className="space-y-3">
                    {tabData[activeTab].content.tips.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-6 h-6 ${tabData[activeTab].bgColor} rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0`}>
                          <svg className={`h-3 w-3 ${tabData[activeTab].textColor.replace('800', '600')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Tips */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Quick Tips
              </h3>
              <div className="space-y-4">
                {quickTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-green-100">
                      <tip.icon className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-800">{tip.title}</h4>
                      <p className="text-xs text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Avoid These
              </h3>
              <div className="space-y-4">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="border-l-4 border-red-200 pl-3 transition-colors hover:border-red-300">
                    <h4 className="font-medium text-sm mb-1 text-red-800">❌ {item.mistake}</h4>
                    <p className="text-xs text-green-700">✅ {item.fix}</p>
                  </div>
                ))}
              </div>
            </div>

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuide;
