import React from 'react';
import { Upload, Sliders, Cpu, Download, Target, Lock, Zap, Folder, ArrowRight } from 'lucide-react';

export default function WhyVisionText() {
  const steps = [
    {
      num: '1. Upload Image',
      desc: 'Upload any image or document you want to extract text from.',
      icon: Upload,
      bg: 'bg-indigo-50 border-indigo-100 text-indigo-500',
    },
    {
      num: '2. Preprocess Image',
      desc: 'We enhance and preprocess the image to improve accuracy.',
      icon: Sliders,
      bg: 'bg-emerald-50 border-emerald-100 text-emerald-500',
    },
    {
      num: '3. OCR Recognition',
      desc: 'Our AI OCR engine reads the text from the image.',
      icon: Cpu,
      bg: 'bg-sky-50 border-sky-100 text-sky-500',
    },
    {
      num: '4. Get Results',
      desc: 'View, copy, and download the extracted text.',
      icon: Download,
      bg: 'bg-pink-50 border-pink-100 text-pink-500',
    },
  ];

  const features = [
    {
      title: 'Ultra Accurate',
      desc: 'Advanced OCR for best results',
      icon: Target,
      bg: 'bg-blue-50 border-blue-100 text-blue-600',
    },
    {
      title: 'Privacy First',
      desc: 'We never store your data',
      icon: Lock,
      bg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    },
    {
      title: 'Lightning Fast',
      desc: 'Get results in seconds',
      icon: Zap,
      bg: 'bg-sky-50 border-sky-100 text-sky-600',
    },
    {
      title: 'Multi-Purpose',
      desc: 'Works for notes, docs, receipts & more',
      icon: Folder,
      bg: 'bg-amber-50 border-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      
      {/* 1. How It Works Section (Left half - 6 cols) */}
      <div id="how-it-works" className="lg:col-span-6 flex flex-col text-left scroll-mt-24">
        <div className="mb-6">
          <h3 className="text-sm font-black text-navy-950 uppercase tracking-widest">How It Works</h3>
          <div className="w-10 h-0.5 bg-indigo-500 mt-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex flex-col items-start relative group">
                {/* Badge Icon */}
                <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-3 shadow-sm ${step.bg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <h4 className="text-[11px] font-black text-navy-900 leading-tight mb-1">{step.num}</h4>
                <p className="text-[9.5px] text-slate-500 leading-relaxed font-bold">{step.desc}</p>
                
                {/* Horizontal flow arrow connecting items */}
                {idx < 3 && (
                  <div className="hidden sm:block absolute right-[-10px] top-[18px] text-slate-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Why VisionText AI Section (Right half - 6 cols) */}
      <div id="tech-stack" className="lg:col-span-6 flex flex-col text-left scroll-mt-24">
        <div className="mb-6">
          <h3 className="text-sm font-black text-navy-950 uppercase tracking-widest">Why VisionText AI?</h3>
          <div className="w-10 h-0.5 bg-indigo-500 mt-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white border border-slate-200/50 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm flex-shrink-0 ${feat.bg}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-black text-navy-900 leading-tight">{feat.title}</h4>
                  <p className="text-[9.5px] text-slate-400 font-semibold mt-0.5">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
