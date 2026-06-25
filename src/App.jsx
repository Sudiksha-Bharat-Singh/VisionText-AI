import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LeftToolRail from './components/LeftToolRail';
import LowerOCRWorkspace from './components/LowerOCRWorkspace';
import WhyVisionText from './components/WhyVisionText';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#fbfbfd] text-navy-800 antialiased font-sans pb-4">
      
      {/* Soft Aurora Pastel Gradient Blobs in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-200/20 bg-aurora-blob animate-blob-1" />
        <div className="absolute top-[20%] right-[-15%] w-[700px] h-[700px] rounded-full bg-purple-200/15 bg-aurora-blob animate-blob-2" />
        <div className="absolute bottom-[30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/10 bg-aurora-blob animate-blob-3" />
        <div className="absolute bottom-[-10%] right-[0%] w-[700px] h-[700px] rounded-full bg-pink-100/15 bg-aurora-blob animate-blob-4" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative">
          <LeftToolRail />
          <HeroSection />
        </div>

        {/* Lower Main OCR Workspace Section */}
        <LowerOCRWorkspace />

        {/* Bottom Features & How It Works Block */}
        <WhyVisionText />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}
