import React from 'react';
import { FileText, Cpu, Award } from 'lucide-react';

export default function LeftToolRail() {
  const formats = [
    { name: 'JPEG', color: 'bg-emerald-50/70 text-emerald-600 border-emerald-200' },
    { name: 'PNG', color: 'bg-teal-50/70 text-teal-600 border-teal-200' },
    { name: 'PDF', color: 'bg-rose-50/70 text-rose-600 border-rose-200' },
    { name: 'DOCX', color: 'bg-blue-50/70 text-blue-600 border-blue-200' },
  ];

  return (
    <div className="hidden xl:flex flex-col items-center gap-5 py-6 px-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-premium border border-slate-200/50 w-16 absolute -left-20 top-12 z-20">
      {/* Top File Icon Badge */}
      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm transition duration-200 hover:scale-105">
        <FileText className="w-5 h-5" />
      </div>

      <div className="w-8 h-px bg-slate-200/60" />

      {/* Formats badges */}
      <div className="flex flex-col gap-2.5">
        {formats.map((fmt) => (
          <div
            key={fmt.name}
            className={`w-11 h-11 flex flex-col items-center justify-center rounded-xl border text-[9px] font-extrabold tracking-wider ${fmt.color} shadow-sm cursor-pointer transition duration-200 hover:-translate-y-0.5`}
          >
            <span className="leading-none">{fmt.name}</span>
          </div>
        ))}
      </div>

      <div className="w-8 h-px bg-slate-200/60" />

      {/* Tool Badges */}
      <div className="flex flex-col gap-5">
        {/* OpenCV Badge */}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 shadow-sm transition duration-200 group-hover:scale-105">
            <Cpu className="w-4.5 h-4.5" />
          </div>
          <span className="text-[8px] font-bold text-slate-500 transition group-hover:text-slate-800">OpenCV</span>
        </div>

        {/* Tesseract OCR */}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm transition duration-200 group-hover:scale-105">
            <Award className="w-4.5 h-4.5" />
          </div>
          <span className="text-[8px] font-bold text-slate-500 transition group-hover:text-slate-800 text-center leading-tight">TessOCR</span>
        </div>
      </div>
    </div>
  );
}
