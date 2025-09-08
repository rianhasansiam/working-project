'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Crown } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: { monthly: 0, annual: 0 },
      icon: Star,
      features: [
        '3 AI mock interviews per month',
        'Basic feedback reports',
        'Community access',
        'Email support'
      ],
      limitations: [
        'Limited question bank access',
        'No mentor sessions'
      ],
      popular: false,
      cta: 'Get Started Free'
    },
    {
      name: 'Pro',
      description: 'Most popular for serious job seekers',
      price: { monthly: 29, annual: 24 },
      icon: Zap,
      features: [
        'Unlimited AI mock interviews',
        'Advanced analytics & insights',
        'Full question bank access',
        'CV scanner with optimization',
        'Written test practice',
        'Priority support',
        '2 mentor sessions per month'
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      name: 'Premium',
      description: 'Complete interview mastery',
      price: { monthly: 79, annual: 65 },
      icon: Crown,
      features: [
        'Everything in Pro',
        'Unlimited mentor sessions',
        'Custom interview scenarios',
        'Industry-specific preparation',
        'Interview scheduling assistance',
        '1-on-1 strategy sessions',
        'Salary negotiation coaching',
        'VIP support'
      ],
      popular: false,
      cta: 'Go Premium'
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to premium features until the end of your billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no setup fees or hidden costs. You only pay the subscription fee.'
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            Pricing
          </div> */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Plan
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. All plans include our core features with increasing limits and premium support.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-sm">Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-sm">Annual</span>
            <div className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Save 20%
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-white rounded-2xl shadow-lg border ${plan.popular ? 'border-purple-500 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}>
                <div className="text-center p-6 pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                    plan.name === 'Free' ? 'bg-gray-100' :
                    plan.name === 'Pro' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    'bg-gradient-to-r from-purple-600 to-purple-800'
                  }`}>
                    <plan.icon className={`h-6 w-6 ${plan.name === 'Free' ? 'text-gray-600' : 'text-white'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-500 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <p className="text-sm text-gray-500">
                        ${Math.round(plan.price.annual / 12)}/month billed annually
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation) => (
                      <li key={limitation} className="flex items-start space-x-2 text-gray-400">
                        <span className="text-sm">• {limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 shadow-md hover:shadow-lg' 
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Custom solutions for organizations looking to improve their hiring process and employee interview skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200">
                  Contact Sales
                </button>
                <span className="text-sm text-gray-500">
                  Custom pricing • White-label options • Priority support
                </span>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
