import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/40 py-8 bg-white/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
        <div>
          <span>&copy; 2026 VisionText AI. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-slate-600 transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-600 transition">Terms of Service</a>
          <a href="#cookies" className="hover:text-slate-600 transition">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
