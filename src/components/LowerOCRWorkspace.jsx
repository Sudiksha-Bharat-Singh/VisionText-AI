import React from 'react';
import { UploadCloud, Copy, Download, RefreshCw, FileImage, ShieldCheck } from 'lucide-react';

export default function LowerOCRWorkspace() {
  return (
    <div id="workspace" className="max-w-6xl mx-auto px-4 mb-20 text-left relative z-10">
      
      {/* Title Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">VisionText AI Workspace</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
          Visually product workspace lord beautiful docowrit with a 3-part product workspace.
        </p>
      </div>

      {/* 3-Part Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PART A: Secure Upload */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-5 border border-white/50 flex flex-col justify-between shadow-premium hover:shadow-floating transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-navy-700">1</span>
              <h3 className="text-sm font-bold text-navy-900 tracking-tight">Secure Upload</h3>
            </div>
            
            {/* Drag & Drop Zone */}
            <div className="border-2 border-dashed border-slate-200 hover:border-brand-400 bg-slate-50/50 hover:bg-brand-50/10 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition duration-200 min-h-[220px]">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-500 mb-4 border border-slate-100">
                <UploadCloud className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-navy-800">Drag-and-drop</span>
              <span className="text-[10px] text-slate-400 font-semibold mt-1">Upload curd times, and nlop eut there</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100/80 flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>Files processed securely & deleted instantly</span>
          </div>
        </div>

        {/* PART B: Image Previews Grid */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-5 border border-white/50 flex flex-col shadow-premium hover:shadow-floating transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-navy-700">2</span>
            <h3 className="text-sm font-bold text-navy-900 tracking-tight">Advanced AI Previews</h3>
          </div>

          {/* Previews grid layout */}
          <div className="grid grid-cols-2 gap-3 flex-grow">
            
            {/* Original Image */}
            <div className="flex flex-col gap-1.5 text-center">
              <div className="w-full h-24 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none shadow-sm">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-rose-200" />
                <div className="pl-3 font-['Caveat'] text-[10px] text-slate-600 font-semibold leading-tight text-left">
                  <p className="font-bold text-slate-800 text-[8px] mb-0.5">Meeting Notes</p>
                  <p>- Project VisionText</p>
                  <p>- Accuracy: &gt;98%</p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Original Image</span>
            </div>

            {/* Processed Image */}
            <div className="flex flex-col gap-1.5 text-center">
              <div className="w-full h-24 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none shadow-sm">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-rose-200" />
                <div className="absolute inset-0 bg-brand-500/5" />
                <div className="pl-3 font-['Caveat'] text-[10px] text-slate-600 font-semibold leading-tight text-left relative">
                  <p className="font-bold text-slate-800 text-[8px] mb-0.5 border border-brand-400 bg-brand-50/70 rounded px-0.5">Meeting Notes</p>
                  <p className="border border-emerald-400 bg-emerald-50/70 rounded px-0.5 mt-0.5">- Project VisionText</p>
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Processed Image</span>
            </div>

            {/* Processed Image 3 */}
            <div className="flex flex-col gap-1.5 text-center">
              <div className="w-full h-24 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none shadow-sm">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-rose-200" />
                <div className="pl-3 font-['Caveat'] text-[10px] text-slate-600 font-semibold leading-tight text-left relative">
                  <div className="w-14 h-2.5 border border-dashed border-indigo-400 bg-indigo-50/30 rounded mt-1" />
                  <div className="w-16 h-2.5 border border-dashed border-indigo-400 bg-indigo-50/30 rounded mt-1" />
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Processed Image</span>
            </div>

            {/* Processed Image 4 */}
            <div className="flex flex-col gap-1.5 text-center">
              <div className="w-full h-24 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none shadow-sm">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-rose-200" />
                <div className="pl-3 font-['Caveat'] text-[10px] text-slate-600 font-semibold leading-tight text-left relative">
                  <div className="w-16 h-4 bg-emerald-100/50 border border-emerald-400 rounded-sm mb-1" />
                  <div className="w-14 h-4 bg-cyan-100/40 border border-cyan-400 rounded-sm" />
                </div>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Processed Image</span>
            </div>

          </div>
        </div>

        {/* PART C: OCR Results */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-5 border border-white/50 flex flex-col justify-between shadow-premium hover:shadow-floating transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-navy-700">3</span>
              <h3 className="text-sm font-bold text-navy-900 tracking-tight">Intelligent OCR Results</h3>
            </div>

            {/* Results text */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 font-mono text-[9px] text-slate-600 leading-relaxed min-h-[105px] mb-3 select-all shadow-inner">
              <p className="font-bold text-navy-900 mb-0.5">Project VisionText: Phase 2. OCR Accuracy: &gt;98%.</p>
              <p>Data types: Notes, Receipts, Docs.</p>
              <p>Key Features: Fast processing, multi-language support.</p>
              <p>Status: On Track.</p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 mb-3">
              <button className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-[10px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition">
                <Copy className="w-3 h-3" />
                Copy
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-[10px] font-bold text-white bg-brand-600 rounded-lg shadow-sm hover:bg-brand-700 transition">
                <Download className="w-3 h-3" />
                Download
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-emerald-50/50 border border-emerald-100 p-1.5 rounded-lg text-center">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Confidence</span>
                <span className="text-xs font-extrabold text-emerald-600">98%</span>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/40 p-1.5 rounded-lg text-center">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Words</span>
                <span className="text-xs font-extrabold text-navy-800">152</span>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/40 p-1.5 rounded-lg text-center">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Characters</span>
                <span className="text-xs font-extrabold text-navy-800">780</span>
              </div>
            </div>
          </div>

          {/* Process Image Button */}
          <button className="w-full inline-flex items-center justify-center gap-1.5 text-[10px] font-extrabold text-white bg-gradient-to-r from-brand-600 to-indigo-600 py-2.5 rounded-xl shadow-sm transition hover:shadow-md">
            <RefreshCw className="w-3 h-3 animate-spin-slow" />
            Process Image
          </button>
        </div>

      </div>
    </div>
  );
}
