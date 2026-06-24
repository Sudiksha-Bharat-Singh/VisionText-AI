import React from 'react';
import { Sparkles, Upload } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-card px-6 py-3.5 rounded-full flex items-center justify-between shadow-premium max-w-5xl mx-auto mb-10 border border-white/50 relative z-30 transition-all duration-300 hover:shadow-floating">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-md">
          <span className="font-extrabold text-white text-lg tracking-wider">V</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-navy-800 text-lg leading-tight tracking-tight">VisionText <span className="text-brand-600">AI</span></span>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm font-semibold text-brand-600 transition-colors duration-200">Home</a>
        <a href="#workspace" className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors duration-200">OCR Workspace</a>
        <a href="#how-it-works" className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors duration-200">How It Works</a>
        <a href="#tech-stack" className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors duration-200">Tech Stack</a>
        <a href="#about" className="text-sm font-medium text-navy-600 hover:text-navy-800 transition-colors duration-200">About</a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 px-4 py-2 rounded-full border border-brand-100 hover:border-brand-200 bg-brand-50/50 hover:bg-brand-50 transition duration-200">
          <Sparkles className="w-3.5 h-3.5" />
          Try Demo
        </button>
        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 px-4.5 py-2.5 rounded-full shadow-md hover:shadow-lg transition duration-200">
          <Upload className="w-3.5 h-3.5" />
          Upload Image
        </button>
      </div>
    </nav>
  );
}
