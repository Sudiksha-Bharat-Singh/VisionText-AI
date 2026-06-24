import React from 'react';
import { Target, Zap, ShieldCheck, Layers } from 'lucide-react';

export default function WhyVisionText() {
  const features = [
    {
      title: 'Accuracy',
      desc: 'Accuracy slewbx to deccuenreseo and accuracy.',
      icon: Target,
      color: 'text-brand-500 bg-brand-50 border-brand-100',
    },
    {
      title: 'Speed',
      desc: 'Speed process escert, speed and entecrial vend.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-50 border-amber-100',
    },
    {
      title: 'Privacy',
      desc: 'Privacy. Promots moxs privacy volooss acsess and privacy.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Multi-format',
      desc: 'Multi-format. Multihime esch contest, use, atifimote and mulorformst use.',
      icon: Layers,
      color: 'text-indigo-500 bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-24 text-left relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        
        {/* Left explanation text block */}
        <div className="lg:col-span-4 flex flex-col items-start justify-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">Why VisionText AI</h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-sm">
            Premium features can eraser accuracy, accuracy, iron and privacy, eoofivoverstea earda.
          </p>
        </div>

        {/* 4 Feature cards grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="glass-card rounded-2xl p-5 border border-white/50 shadow-premium hover:shadow-floating transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 ${feat.color}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-navy-900 mb-2">{feat.title}</h3>
                <p className="text-[11px] text-slate-500 leading-normal font-medium">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
