'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal, 
  Send, 
  Plus, 
  Search,
  Filter,
  User,
  Clock,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://i.pravatar.cc/150?img=1',
        role: 'Software Engineer'
      },
      content: "Just completed my technical interview at Google! The system design question was challenging but rewarding. For anyone preparing: practice explaining your thought process clearly and don't be afraid to ask clarifying questions. The interviewers want to see how you think, not just the final answer.",
      timestamp: '2 hours ago',
      likes: 24,
      dislikes: 2,
      comments: 8,
      tags: ['Interview Tips', 'Google', 'System Design'],
      isLiked: false,
      isDisliked: false
    },
    {
      id: 2,
      author: {
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?img=2',
        role: 'Full Stack Developer'
      },
      content: "Pro tip: When doing coding interviews, always start with the brute force solution and then optimize. I used to jump straight to the optimal solution and often made mistakes. Taking it step by step shows your problem-solving approach and gives you time to catch errors.",
      timestamp: '5 hours ago',
      likes: 42,
      dislikes: 1,
      comments: 15,
      tags: ['Coding Interview', 'Problem Solving'],
      isLiked: true,
      isDisliked: false
    },
    {
      id: 3,
      author: {
        name: 'Emily Rodriguez',
        avatar: 'https://i.pravatar.cc/150?img=3',
        role: 'Product Manager'
      },
      content: "Behavioral interviews are just as important as technical ones! I recommend using the STAR method (Situation, Task, Action, Result) for your answers. Practice storytelling and have specific examples ready. Remember, they want to know how you work with others and handle challenges.",
      timestamp: '1 day ago',
      likes: 67,
      dislikes: 0,
      comments: 23,
      tags: ['Behavioral Interview', 'STAR Method', 'Soft Skills'],
      isLiked: false,
      isDisliked: false
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags
  const allTags = ['All', ...new Set(posts.flatMap(post => post.tags))];

  // Filter posts based on search and tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          dislikes: post.isDisliked ? post.dislikes - 1 : post.dislikes,
          isLiked: !post.isLiked,
          isDisliked: false
        };
      }
      return post;
    }));
  };

  const handleDislike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          dislikes: post.isDisliked ? post.dislikes - 1 : post.dislikes + 1,
          likes: post.isLiked ? post.likes - 1 : post.likes,
          isDisliked: !post.isDisliked,
          isLiked: false
        };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: {
          name: 'You',
          avatar: 'https://i.pravatar.cc/150?img=10',
          role: 'User'
        },
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        dislikes: 0,
        comments: 0,
        tags: ['General'],
        isLiked: false,
        isDisliked: false
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setShowNewPost(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Community{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your interview experiences, tips, and connect with fellow job seekers
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Create Post Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center shadow-lg">
                  <Plus className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <button
                  onClick={() => setShowNewPost(true)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all duration-200 group"
                >
                  <span className="text-gray-500 group-hover:text-gray-700">Share your interview experience, tips, or ask questions...</span>
                </button>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowNewPost(true)}
                      className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="text-sm font-medium">Create Post</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span>✨ Share your knowledge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Post Modal */}
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowNewPost(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Create New Post</h3>
                    <p className="text-purple-100 text-sm mt-1">Share your experience with the community</p>
                  </div>
                  <button
                    onClick={() => setShowNewPost(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <Plus className="h-6 w-6 rotate-45" />
                  </button>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/5 rounded-full"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
                <div className="space-y-6">
                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">You</h4>
                      <p className="text-sm text-gray-500">Posting to Community Blog</p>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="relative">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="What's on your mind? Share your interview tips, experiences, or ask questions..."
                      className="w-full h-48 p-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-gray-800 placeholder-gray-400"
                      maxLength={2000}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {newPost.length}/2000
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setNewPost(newPost + ' #InterviewTips')}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs hover:bg-purple-200 transition-colors"
                    >
                      + Interview Tips
                    </button>
                    <button
                      onClick={() => setNewPost(newPost + ' #JobSearch')}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
                    >
                      + Job Search
                    </button>
                    <button
                      onClick={() => setNewPost(newPost + ' #TechInterview')}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs hover:bg-green-200 transition-colors"
                    >
                      + Tech Interview
                    </button>
                  </div>

                  {/* Post Guidelines */}
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h5 className="font-medium text-purple-900 mb-2">💡 Post Guidelines</h5>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Be respectful and constructive</li>
                      <li>• Share specific, actionable advice</li>
                      <li>• Use relevant hashtags to help others find your content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-3xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {newPost.trim() ? '✓ Ready to post' : 'Start typing to share your thoughts...'}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setShowNewPost(false)}
                      className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <motion.button
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      whileHover={newPost.trim() ? { scale: 1.05 } : {}}
                      whileTap={newPost.trim() ? { scale: 0.95 } : {}}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                        newPost.trim()
                          ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {newPost.trim() ? (
                        <span className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Publish Post</span>
                        </span>
                      ) : (
                        'Publish Post'
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.timestamp}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-4">
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Actions */}
              <div className="border-t border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        post.isLiked ? 'text-purple-600' : 'text-gray-500 hover:text-purple-600'
                      }`}
                    >
                      <ThumbsUp className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    
                    <button
                      onClick={() => handleDislike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        post.isDisliked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                      }`}
                    >
                      <ThumbsDown className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.dislikes}</span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                  </div>

                  {/* <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Share</span>
                  </button> */}
                </div>

                {/* Comment Input */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div className="flex-1 flex space-x-2">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      />
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Posts Found */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-500">Try adjusting your search or create the first post!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
