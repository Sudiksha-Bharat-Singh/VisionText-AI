import React from 'react';
import { Sparkles, Upload, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto px-4 mb-20 relative">
      
      {/* Left Text Content Area */}
      <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span>Hero to Workspace</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-6">
          Your Premium Image-to-Text Platform: <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">Focused & Fast</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mb-8">
          A premium OCR image-to-text AI platform designed for screenshots, scanned documents, receipts, and handwritten notes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            <Sparkles className="w-4 h-4" />
            Try Demo
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
            <Upload className="w-4 h-4 text-brand-500" />
            Upload Image
          </button>
        </div>

        {/* Micro-Features / Trust Badges */}
        <div className="flex flex-wrap gap-4 items-center text-slate-400 text-xs font-medium">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50/50">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
            <span>Mili Product Trust Badge</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50/50">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Mili Product Dev</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50/50">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Smart OpenCV Scan</span>
          </div>
        </div>
      </div>

      {/* Right Hero OCR Mockup Card (Floating/Layered) */}
      <div className="lg:col-span-6 relative flex justify-center items-center py-10">
        
        {/* Background Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-brand-300/30 to-violet-300/30 rounded-full blur-3xl -z-10" />

        {/* Outer Container for Overlap Layering */}
        <div className="relative w-full max-w-sm sm:max-w-md h-[400px]">
          
          {/* Layer 1: Notebook Page (Original Scanned Document) */}
          <div className="absolute left-4 top-4 w-[280px] h-[340px] rounded-2xl bg-[#fdfbf7] shadow-premium border border-slate-200/80 p-5 overflow-hidden flex flex-col rotate-[-3deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 z-10">
            
            {/* Notepad Red Line Margin */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-rose-200" />
            
            {/* Ruled lines */}
            <div className="w-full h-full flex flex-col justify-between pl-4 text-left select-none relative z-10 pointer-events-none">
              <div className="border-b border-indigo-100/60 pb-2">
                <span className="font-bold text-slate-800 text-lg font-sans tracking-wide">Meeting Notes</span>
              </div>
              
              {/* Handwritten body text using 'Caveat' */}
              <div className="font-['Caveat'] text-2xl text-slate-700 leading-snug flex-grow pt-4 flex flex-col gap-3">
                <p className="font-semibold text-brand-600">Project VisionText:</p>
                <p>1. Phase 2 launch details.</p>
                <p>2. OCR Accuracy goal: &gt;98%.</p>
                <p>3. Supported formats: JPEG, PNG...</p>
                <p>4. Status: On Track & on time.</p>
              </div>

              <div className="border-t border-slate-100/80 pt-2 text-[9px] text-slate-400 font-sans font-medium flex justify-between">
                <span>June 24, 2026</span>
                <span>Page 02</span>
              </div>
            </div>
          </div>

          {/* Layer 2: Floating OCR Preview Card */}
          <div className="absolute right-4 top-16 w-[230px] glass-card rounded-2xl shadow-floating border border-white p-4 text-left rotate-[2deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 z-20">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span className="text-xs font-bold text-navy-800 tracking-tight">OCR Preview</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-2 text-[10px] text-slate-600 font-medium">
              <p><strong className="text-navy-700">Project VisionText:</strong> Phase 2.</p>
              <p><strong className="text-navy-700">OCR Accuracy:</strong> &gt;98%.</p>
              <p><strong className="text-navy-700">Data types:</strong> Notes, Receipts, Docs.</p>
              <p><strong className="text-navy-700">Key Features:</strong> Fast processing, multi-language support.</p>
              <p><strong className="text-navy-700">Status:</strong> On Track.</p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Confidence badge</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 text-[9px] font-bold">98.8%</span>
            </div>
          </div>

          {/* Layer 3: Floating Document Icon */}
          <div className="absolute left-[240px] bottom-10 w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white flex items-center justify-center shadow-floating border border-white/30 animate-bounce duration-1000 z-30">
            <FileText className="w-5 h-5" />
          </div>

        </div>
      </div>
    </div>
  );
}
