'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const infoCards = [
    {
      icon: Mail,
      title: 'Email',
      lines: ['rianhasan@example.com'],
      href: 'mailto:support@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+880 1932600504'],
      href: 'tel:+1234567890'
    },
    {
      icon: MapPin,
      title: 'Address',
      lines: ['Mirpur-1', 'Dhaka, Bangladesh']
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: ['Mon - Fri: 9:00 - 18:00', 'Sat: 10:00 - 14:00']
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We&apos;re here to answer questions and help you move forward.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                    {card.lines.map(line => (
                      <p key={line} className="text-sm text-gray-600 leading-relaxed">{line}</p>
                    ))}
                    {card.href && (
                      <a href={card.href} className="mt-1 inline-block text-sm font-medium text-purple-600 hover:underline">
                        {card.title === 'Email' ? 'Send Email' : card.title === 'Phone' ? 'Call Now' : ''}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Rian Hasan Siam" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="rianhasan1971@gmail.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="6" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" placeholder="Write your message..."></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
