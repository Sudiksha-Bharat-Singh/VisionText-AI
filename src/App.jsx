import React from 'react';
import Navbar from './components/Navbar';
import LeftToolRail from './components/LeftToolRail';
import HeroSection from './components/HeroSection';
import FloatingWorkspacePanel from './components/FloatingWorkspacePanel';
import LowerOCRWorkspace from './components/LowerOCRWorkspace';
import WhyVisionText from './components/WhyVisionText';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fafafd] text-navy-800 antialiased font-sans">
      
      {/* Soft Aurora Pastel Gradient Blobs in background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/20 bg-aurora-blob animate-blob-1 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-fuchsia-200/15 bg-aurora-blob animate-blob-2 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-100/15 bg-aurora-blob animate-blob-3 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-violet-200/20 bg-aurora-blob animate-blob-4 pointer-events-none" />

      {/* Decorative vertical tool rail on far left (desktop) */}
      <LeftToolRail />

      {/* Main Page Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:pl-28 py-6">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Dual Column Composition Layout */}
        <main className="max-w-[1550px] mx-auto">
          
          {/* Row 1: Landing Hero + Floating Workspace Panel */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-20">
            
            {/* Left Column: Hero (Text content & Document Mockup overlay) */}
            <div className="xl:col-span-7">
              <HeroSection />
            </div>

            {/* Right Column: Floating Workspace Panel */}
            <div className="xl:col-span-5">
              <FloatingWorkspacePanel />
            </div>

          </div>

          {/* Row 2: Lower Workspace Row + Why Features Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Lower OCR Workspace */}
            <div className="xl:col-span-7">
              <LowerOCRWorkspace />
            </div>

            {/* Right Column: Why VisionText AI Section */}
            <div className="xl:col-span-5">
              <WhyVisionText />
            </div>

          </div>

        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}
