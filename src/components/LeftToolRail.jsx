import React from 'react';
import { FileText, Cpu, LayoutGrid, Award, Sliders, CheckSquare } from 'lucide-react';

export default function LeftToolRail() {
  const formats = [
    { name: 'JPEG', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { name: 'PNG', color: 'bg-teal-50 text-teal-600 border-teal-200' },
    { name: 'PDF', color: 'bg-rose-50 text-rose-600 border-rose-200' },
    { name: 'DOC', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  ];

  return (
    <div className="hidden lg:flex flex-col items-center gap-6 py-6 px-3 glass-card rounded-2xl shadow-premium border border-white/50 w-16 fixed left-6 top-32 z-20">
      {/* Top File Icon Badge */}
      <div className="w-10 h-10 rounded-xl bg-violet-100/80 border border-violet-200 flex items-center justify-center text-violet-600 shadow-sm hover:scale-105 transition-transform duration-200">
        <FileText className="w-5 h-5" />
      </div>

      <div className="w-8 h-px bg-slate-200/60" />

      {/* Formats badges */}
      <div className="flex flex-col gap-3">
        {formats.map((fmt) => (
          <div
            key={fmt.name}
            className={`w-11 h-11 flex flex-col items-center justify-center rounded-lg border text-[9px] font-extrabold tracking-wider ${fmt.color} shadow-sm cursor-pointer hover:-translate-y-0.5 transition-transform`}
          >
            <span className="opacity-80">ICON</span>
            <span className="-mt-0.5">{fmt.name}</span>
          </div>
        ))}
      </div>

      <div className="w-8 h-px bg-slate-200/60" />

      {/* Tool Badges */}
      <div className="flex flex-col gap-4">
        {/* OpenCV Badge */}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform shadow-sm">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[8px] font-bold text-slate-500 group-hover:text-slate-800">OpenCV</span>
        </div>

        {/* OpenCV Alternate */}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center text-yellow-600 group-hover:scale-105 transition-transform shadow-sm">
            <Sliders className="w-4 h-4" />
          </div>
          <span className="text-[8px] font-bold text-slate-500 group-hover:text-slate-800">Filters</span>
        </div>

        {/* Tesseract OCR */}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-500 group-hover:scale-105 transition-transform shadow-sm">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-[8px] font-bold text-slate-500 group-hover:text-slate-800 text-center leading-tight">TessOCR</span>
        </div>
      </div>
    </div>
  );
}
