import React from 'react';
import { Sparkles, Upload, Play, Target, Shield, Zap, Layers, ArrowRight, Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-4 py-16 lg:py-20 relative">
      
      {/* Background Dots Grid Overlay */}
      <div className="absolute left-[-20px] top-[40px] w-24 h-24 text-slate-200/50 -z-10 select-none pointer-events-none opacity-60">
        <svg className="w-full h-full" fill="currentColor">
          <pattern id="dot-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Left Column: Headline, subtext, actions, and features */}
      <div className="lg:col-span-6 text-left flex flex-col items-start relative z-10">
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-wide mb-6 border border-purple-100/50 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>AI-Powered OCR Technology</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-navy-900 leading-[1.12] tracking-tight mb-5">
          Extract Text from <br className="hidden sm:inline" />
          Images with <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Intelligent AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-xl mb-8 font-medium">
          VisionText AI converts images, documents, and scans into accurate, editable text in seconds with advanced OCR and smart preprocessing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14 w-full">
          <button className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            <Upload className="w-4 h-4" />
            Upload Image
          </button>
          <button className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 px-6 py-4 rounded-xl border border-purple-200 hover:border-purple-300 bg-purple-50/20 hover:bg-purple-50 transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
            <Play className="w-4 h-4 fill-current" />
            Try Demo
          </button>
        </div>

        {/* Horizontal Features Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full pt-4 border-t border-slate-200/60">
          
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-navy-900 leading-tight">High Accuracy</span>
              <span className="text-[9px] text-slate-400 font-bold">AI Powered OCR</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-navy-900 leading-tight">Secure & Private</span>
              <span className="text-[9px] text-slate-400 font-bold">Your data is safe</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500 shadow-sm flex-shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-navy-900 leading-tight">Blazing Fast</span>
              <span className="text-[9px] text-slate-400 font-bold">Results in seconds</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-500 shadow-sm flex-shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-navy-900 leading-tight">Multi Format</span>
              <span className="text-[9px] text-slate-400 font-bold">JPG, PNG, WEBP</span>
            </div>
          </div>

        </div>

      </div>

      {/* Right Column: Hero OCR Mockup Side-by-Side Transition */}
      <div className="lg:col-span-6 relative flex justify-center items-center py-6">
        
        {/* Sparkle background glow */}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-indigo-200/20 via-purple-200/25 to-pink-200/20 rounded-full blur-[90px] -z-10" />

        {/* Transition Canvas Layout - Scaled to max-w-2xl for better prominence */}
        <div className="flex items-center gap-5 relative w-full max-w-2xl">
          
          {/* 1. Original Scanned Image Card */}
          <div className="flex-1 bg-[#fdfcfa] rounded-2xl border border-slate-200/80 p-5 shadow-premium hover:shadow-floating transition-all duration-300 relative text-left min-h-[390px] flex flex-col justify-between">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-rose-200" />
            
            {/* Ruled header */}
            <div className="border-b border-slate-100 pb-2 mb-4 pl-5 z-10">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Original Image</span>
            </div>

            {/* Handwritten Caveat Content */}
            <div className="font-['Caveat'] text-[19px] text-slate-700 leading-normal pl-5 flex-grow space-y-2 select-none pointer-events-none z-10">
              <p className="text-[21px] font-bold text-slate-900">Artificial Intelligence</p>
              <p>1. AI is intelligence demonstrated by machines.</p>
              <p>2. It enables systems to learn from data, reason and solve problems.</p>
              <p>3. Applications:</p>
              <p className="pl-3">- Image recognition</p>
              <p className="pl-3">- Natural Language Processing</p>
              <p className="pl-3">- Robotics</p>
              <p>4. The future is intelligent.</p>
            </div>

            {/* Mock Notebook Pen */}
            <div className="absolute right-4 top-28 bottom-20 w-3 bg-gradient-to-r from-slate-800 to-black rounded-full shadow-md z-20 pointer-events-none transform rotate-[8deg]">
              {/* Pen details */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-slate-400 rounded-t-full" />
              <div className="absolute top-4 left-[2px] w-1 h-8 bg-slate-300 rounded" />
            </div>

            <div className="pt-2.5 pl-5 border-t border-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-wider z-10">
              Scanned Notes Mockup
            </div>
          </div>

          {/* Transition Circle Button */}
          <div className="absolute left-[50%] -translate-x-[50%] z-20 w-11 h-11 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center shadow-floating border-2 border-white hover:scale-105 cursor-pointer transition duration-200">
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* 2. Extracted Text Card */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-premium hover:shadow-floating transition-all duration-300 text-left min-h-[390px] flex flex-col justify-between">
            <div>
              <div className="border-b border-slate-100 pb-2 mb-4 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Extracted Text</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Digital Extracted Text */}
              <div className="text-[11.5px] font-medium text-slate-600 leading-relaxed space-y-2">
                <p className="font-extrabold text-navy-900 text-xs sm:text-[13px] mb-1">Artificial Intelligence</p>
                <p><strong>1.</strong> AI is intelligence demonstrated by machines.</p>
                <p><strong>2.</strong> It enables systems to learn from data, reason and solve problems.</p>
                <p><strong>3.</strong> Applications:</p>
                <p className="pl-3.5">&bull; Image recognition</p>
                <p className="pl-3.5">&bull; Natural Language Processing</p>
                <p className="pl-3.5">&bull; Robotics</p>
                <p><strong>4.</strong> The future is intelligent.</p>
              </div>
            </div>

            {/* Green Confidence Score Banner */}
            <div className="mt-5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600">
                <Check className="w-3.5 h-3.5 p-0.5 rounded-full bg-emerald-500 text-white" />
                <span>Confidence Score</span>
              </div>
              
              {/* Mini SVG line wave chart */}
              <div className="w-12 h-3.5 text-emerald-500/40">
                <svg className="w-full h-full" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0,5 Q10,1 20,8 T40,4" strokeLinecap="round" />
                </svg>
              </div>

              <span className="text-xs font-black text-emerald-600">96.7%</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

