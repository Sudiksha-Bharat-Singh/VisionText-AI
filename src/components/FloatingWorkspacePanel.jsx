import React from 'react';
import { Copy, Download, RefreshCw, FileText, CheckCircle } from 'lucide-react';

export default function FloatingWorkspacePanel() {
  return (
    <div className="glass-card rounded-3xl p-6 shadow-floating border border-white max-w-5xl mx-auto mb-20 relative z-10 transition-all duration-300 hover:shadow-2xl">
      
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-sm">
            <span className="font-extrabold text-sm tracking-wider">V</span>
          </div>
          <div className="text-left">
            <h2 className="text-lg font-bold text-navy-900 tracking-tight">VisionText AI Workspace</h2>
            <p className="text-[10px] text-slate-400 font-semibold tracking-wide">Visually product workspace for beautiful documents</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-2.5 py-0.5 text-[9px] font-bold">
          <CheckCircle className="w-2.5 h-2.5" />
          <span>OCR SYSTEM ONLINE</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Component A: Left Slim Tech Stack Strip */}
        <div className="md:col-span-1 flex md:flex-col justify-between items-center gap-3 py-2 px-1 border-r border-slate-200/50 md:pr-4">
          <div className="flex md:flex-col items-center gap-3">
            {/* React Icon */}
            <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-500 shadow-sm" title="React">
              <span className="text-[10px] font-bold">RE</span>
            </div>
            {/* Tailwind Icon */}
            <div className="w-8 h-8 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-400 shadow-sm" title="Tailwind CSS">
              <span className="text-[10px] font-bold">TW</span>
            </div>
            {/* Python Icon */}
            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-amber-500 shadow-sm" title="Python">
              <span className="text-[10px] font-bold">PY</span>
            </div>
            {/* Flask Icon */}
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm" title="Flask">
              <span className="text-[10px] font-bold">FL</span>
            </div>
            {/* OpenCV Icon */}
            <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shadow-sm" title="OpenCV">
              <span className="text-[10px] font-bold">CV</span>
            </div>
            {/* Tesseract OCR Icon */}
            <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm" title="Tesseract OCR">
              <span className="text-[10px] font-bold">TESS</span>
            </div>
          </div>
          
          {/* Vertical Written Label */}
          <div className="hidden md:block select-none origin-bottom -rotate-90 translate-y-[-24px] whitespace-nowrap text-[8px] font-extrabold text-slate-400 tracking-widest uppercase">
            Supported Tech & Integrations
          </div>
        </div>

        {/* Component B: Center Image Processing Area */}
        <div className="md:col-span-6 flex flex-col text-left">
          <h3 className="text-xs font-bold text-navy-800 tracking-wider uppercase mb-3">2. Advanced AI Processing</h3>
          
          <div className="grid grid-cols-2 gap-3.5">
            {/* Card 1: Original Image */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 flex flex-col items-center shadow-sm">
              <div className="w-full h-32 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-rose-200" />
                <div className="pl-3 font-['Caveat'] text-sm text-slate-600 font-medium leading-tight">
                  <p className="font-bold text-slate-800 text-[10px] mb-1">Meeting Notes</p>
                  <p>- Project VisionText</p>
                  <p>- OCR Accuracy: &gt;98%</p>
                  <p>- Support: JPG, PNG</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2">Original Image</span>
            </div>

            {/* Card 2: Processed Image (Bounding boxes highlight) */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 flex flex-col items-center shadow-sm">
              <div className="w-full h-32 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-rose-200" />
                {/* Simulated Green bounding boxes overlay */}
                <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[0.5px]" />
                <div className="pl-3 font-['Caveat'] text-sm text-slate-600 font-medium leading-tight relative">
                  <p className="font-bold text-slate-800 text-[10px] mb-1 border border-brand-500 bg-brand-50/70 rounded px-1">Meeting Notes</p>
                  <p className="border border-emerald-500 bg-emerald-50/70 rounded px-1 mt-0.5">- Project VisionText</p>
                  <p className="border border-emerald-500 bg-emerald-50/70 rounded px-1 mt-0.5">- OCR Accuracy: &gt;98%</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2">Processed Image</span>
            </div>

            {/* Card 3: Processed Image (Thresholding) */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 flex flex-col items-center shadow-sm">
              <div className="w-full h-32 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-rose-200" />
                {/* Simulated Segmentations */}
                <div className="pl-3 font-['Caveat'] text-sm text-slate-600 font-medium leading-tight relative">
                  <p className="font-bold text-slate-800 text-[10px] mb-1">Meeting Notes</p>
                  <div className="w-20 h-3 border border-dashed border-indigo-400 bg-indigo-50/30 rounded mt-1" />
                  <div className="w-24 h-3 border border-dashed border-indigo-400 bg-indigo-50/30 rounded mt-1" />
                  <div className="w-16 h-3 border border-dashed border-indigo-400 bg-indigo-50/30 rounded mt-1" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2">Processed Image</span>
            </div>

            {/* Card 4: Processed Image (Layout lines) */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-2.5 flex flex-col items-center shadow-sm">
              <div className="w-full h-32 rounded-lg bg-[#fdfbf7] border border-slate-200/50 p-2 overflow-hidden flex flex-col justify-between relative select-none pointer-events-none">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-rose-200" />
                {/* Simulated layout analysis blocks */}
                <div className="pl-3 font-['Caveat'] text-sm text-slate-600 font-medium leading-tight relative">
                  <div className="w-20 h-4 bg-emerald-100/50 border border-emerald-400 rounded-sm mb-1" />
                  <div className="w-24 h-12 bg-cyan-100/40 border border-cyan-400 rounded-sm" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 mt-2">Processed Image</span>
            </div>
          </div>
        </div>

        {/* Component C: Right OCR Result Area */}
        <div className="md:col-span-5 flex flex-col text-left justify-between">
          <div>
            <h3 className="text-xs font-bold text-navy-800 tracking-wider uppercase mb-3">3. Intelligent OCR Results</h3>
            
            {/* Output Box */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 font-mono text-[10px] text-slate-700 leading-relaxed min-h-[145px] mb-4 select-all shadow-inner">
              <p className="font-bold text-navy-900 mb-1">Project VisionText: Phase 2.</p>
              <p>OCR Accuracy: &gt;98%.</p>
              <p>Data types: Notes, Receipts, Docs.</p>
              <p>Key Features: Fast processing, multi-language support.</p>
              <p>Status: On Track.</p>
            </div>

            {/* Copy / Download buttons */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition">
                <Copy className="w-3.5 h-3.5" />
                Copy
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm transition">
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <div className="bg-emerald-50/50 border border-emerald-100 p-2 rounded-lg text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Confidence</span>
                <span className="text-sm font-extrabold text-emerald-600">98.8%</span>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/40 p-2 rounded-lg text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Words</span>
                <span className="text-sm font-extrabold text-navy-800">152</span>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/40 p-2 rounded-lg text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Characters</span>
                <span className="text-sm font-extrabold text-navy-800">780</span>
              </div>
            </div>
          </div>

          {/* Action Call at Bottom */}
          <button className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 py-3 rounded-xl shadow-md transition duration-200">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
            Process Image
          </button>
        </div>

      </div>
    </div>
  );
}
