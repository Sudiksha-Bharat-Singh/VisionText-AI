import React from 'react';
import { Sun, Play, Upload } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-slate-200/50 relative z-30 max-w-7xl mx-auto rounded-2xl shadow-sm mt-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-md">
          {/* Custom scanning brackets logo */}
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 8V6a2 2 0 0 1 2-2h2" />
            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
            <path d="M20 8V6a2 2 0 0 0-2-2h-2" />
            <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="12" y1="8" x2="12" y2="16" />
          </svg>
        </div>
        <span className="font-extrabold text-xl text-navy-900 tracking-tight">
          VisionText <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-7">
        <a href="#home" className="text-sm font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1">Home</a>
        <a href="#workspace" className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors">OCR Workspace</a>
        <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors">How It Works</a>
        <a href="#tech-stack" className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors">Tech Stack</a>
        <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-navy-900 transition-colors">About</a>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-navy-800 hover:bg-slate-50 transition shadow-sm">
          <Sun className="w-4.5 h-4.5" />
        </button>

        {/* Try Demo */}
        <button className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 px-4 py-2.5 rounded-xl border border-purple-200 hover:border-purple-300 bg-purple-50/30 hover:bg-purple-50 transition">
          <Play className="w-3.5 h-3.5 fill-current" />
          Try Demo
        </button>

        {/* Upload Image */}
        <button className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition">
          <Upload className="w-3.5 h-3.5" />
          Upload Image
        </button>
      </div>
    </nav>
  );
}
