import React from 'react';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';

export const QuickContact = () => (
  <div className="flex flex-wrap items-center justify-center gap-6">
    <a 
      href="https://m.me/391717047349920"
      target="_blank"
      rel="noopener noreferrer" 
      className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50 text-gray-300 hover:text-blue-400 hover:border-blue-500/20 transition-colors group"
    >
      <MessageCircle className="w-5 h-5 mr-2 group-hover:text-blue-400" />
      Messenger
    </a>
    <a 
      href="mailto:pawel@wyszomirski.biz" 
      className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50 text-gray-300 hover:text-blue-400 hover:border-blue-500/20 transition-colors group"
    >
      <Mail className="w-5 h-5 mr-2 group-hover:text-blue-400" />
      pawel@wyszomirski.biz
    </a>
    <a 
      href="https://www.linkedin.com/in/wyszomirski/"
      target="_blank"
      rel="noopener noreferrer" 
      className="flex items-center bg-gray-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-gray-700/50 text-gray-300 hover:text-blue-400 hover:border-blue-500/20 transition-colors group"
    >
      <Linkedin className="w-5 h-5 mr-2 group-hover:text-blue-400" />
      LinkedIn
    </a>
  </div>
);