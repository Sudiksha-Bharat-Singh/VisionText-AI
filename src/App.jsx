import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LowerOCRWorkspace from './components/LowerOCRWorkspace';
import WhyVisionText from './components/WhyVisionText';
import Footer from './components/Footer';

export default function App() {
  const [file, setFile] = React.useState(null); // { name, size, previewUrl }
  const [extractedText, setExtractedText] = React.useState("");
  const [stats, setStats] = React.useState({ confidence: "", words: "", chars: "" });
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isDemo, setIsDemo] = React.useState(false);
  const [isExtracted, setIsExtracted] = React.useState(false);

  // File input ref for triggering the system file picker
  const fileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setIsDemo(false);
      setIsExtracted(false);
      setIsProcessing(false);
      setExtractedText("");
      setStats({ confidence: "", words: "", chars: "" });
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile({
          name: selectedFile.name,
          size: (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB",
          previewUrl: event.target.result
        });
        
        // Auto scroll to workspace
        const workspaceEl = document.getElementById("workspace");
        if (workspaceEl) {
          workspaceEl.scrollIntoView({ behavior: 'smooth' });
        }
      };
      reader.readAsDataURL(selectedFile);
    }
    // Reset file input value to allow selecting same file again
    e.target.value = "";
  };

  const triggerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const loadDemo = () => {
    setIsDemo(true);
    setIsExtracted(true);
    setIsProcessing(false);
    setFile({
      name: "notes_sample.jpg",
      size: "2.45 MB",
      previewUrl: "demo" // special flag to render demo handwritten canvas
    });
    setExtractedText(
      "Artificial Intelligence\n\n1. AI is intelligence demonstrated by machines.\n2. It enables systems to learn from data, reason and solve problems.\n3. Applications:\n   • Image recognition\n   • Natural Language Processing\n   • Robotics\n4. The future is intelligent."
    );
    setStats({
      confidence: "96.7%",
      words: "41",
      chars: "258"
    });

    // Auto scroll to workspace
    const workspaceEl = document.getElementById("workspace");
    if (workspaceEl) {
      workspaceEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRunOcr = () => {
    if (!file) return;
    if (isDemo) return;
    setIsProcessing(true);
    setIsExtracted(false);
    
    // Simulate OCR processing for 1.2 seconds
    setTimeout(() => {
      setIsProcessing(false);
      setIsExtracted(true);
      setExtractedText(
        `VisionText AI - OCR Result\n\nSuccessfully processed: ${file.name}\n\n[Extracted Text Content]\nThis is a simulation of the extracted text from your uploaded document. The OCR engine successfully analyzed the character lines, resolved key document blocks, and extracted editable text.\n\nThank you for using VisionText AI!`
      );
      setStats({
        confidence: "98.5%",
        words: "46",
        chars: "298"
      });
    }, 1200);
  };

  const handleClear = () => {
    setFile(null);
    setExtractedText("");
    setStats({ confidence: "", words: "", chars: "" });
    setIsDemo(false);
    setIsExtracted(false);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#fbfbfd] text-navy-800 antialiased font-sans pb-4">
      
      {/* Hidden input file tag shared across components */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/jpeg, image/png, image/jpg, image/webp" 
        className="hidden" 
      />

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
        <Navbar onUploadClick={triggerUpload} onDemoClick={loadDemo} />

        {/* Hero Section */}
        <HeroSection onUploadClick={triggerUpload} onDemoClick={loadDemo} />

        {/* Lower Main OCR Workspace Section */}
        <LowerOCRWorkspace 
          file={file}
          extractedText={extractedText}
          stats={stats}
          isProcessing={isProcessing}
          isDemo={isDemo}
          isExtracted={isExtracted}
          onUploadClick={triggerUpload}
          onRunOcr={handleRunOcr}
          onClear={handleClear}
        />

        {/* Bottom Features & How It Works Block */}
        <WhyVisionText />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}
