import React from 'react';
import { UploadCloud, CheckCircle2, ArrowRight, Sparkles, Check, Copy, Download, ShieldCheck, Type, Hash, X, Loader2 } from 'lucide-react';

export default function LowerOCRWorkspace({
  file,
  extractedText,
  stats,
  isProcessing,
  isDemo,
  isExtracted,
  onUploadClick,
  onRunOcr,
  onClear
}) {

  const handleCopy = () => {
    if (extractedText) {
      navigator.clipboard.writeText(extractedText);
      alert("Extracted text copied to clipboard!");
    }
  };

  const handleDownload = () => {
    if (extractedText) {
      const element = document.createElement("a");
      const fileBlob = new Blob([extractedText], { type: 'text/plain' });
      element.href = URL.createObjectURL(fileBlob);
      element.download = "visiontext-ocr.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div id="workspace" className="max-w-7xl mx-auto px-4 py-12 lg:py-16 text-left relative z-10 scroll-mt-24">
      
      {/* Title Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 justify-center text-purple-600 mb-2">
          {/* Scanning bracket custom SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 8V6a2 2 0 0 1 2-2h2" />
            <path d="M4 16v2a2 2 0 0 0 2 2h2" />
            <path d="M20 8V6a2 2 0 0 0-2-2h-2" />
            <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
          </svg>
          <span className="font-extrabold text-xs tracking-wider uppercase">OCR Workspace</span>
        </div>
        <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">VisionText AI Workspace</h2>
        <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto font-medium">
          Upload an image and let VisionText AI do the magic ✨
        </p>
      </div>

      {/* Large Wrapper Card containing the 3-part layout */}
      <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-premium hover:shadow-floating transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Upload Image (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-400">1.</span>
                <h3 className="text-sm font-bold text-navy-900 tracking-tight">Upload Image</h3>
              </div>

              {/* Upload Dashed area - Connected to onUploadClick */}
              <div 
                onClick={onUploadClick} 
                className="border border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/50 hover:bg-indigo-50/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition min-h-[210px] duration-200"
              >
                <div className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 mb-3 border border-slate-100/50">
                  <UploadCloud className="w-5.5 h-5.5" />
                </div>
                <span className="text-xs font-extrabold text-navy-800">Drag & drop an image here</span>
                <span className="text-[10px] text-slate-400 font-bold mt-1">or click to browse</span>
                <span className="text-[9px] text-slate-400 font-semibold mt-3.5 bg-white border border-slate-100 rounded-md px-2 py-0.5 shadow-sm">
                  Supported: JPG, PNG, WEBP (Max 10MB)
                </span>
              </div>
            </div>

            {/* Uploaded File status box */}
            {file ? (
              <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/50 flex items-center justify-between">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#fdfcfa] border border-slate-200/70 p-1 overflow-hidden relative select-none pointer-events-none shadow-sm flex items-center justify-center flex-shrink-0">
                    {file.previewUrl === "demo" ? (
                      <div className="w-full h-full border-l border-rose-200 bg-white" />
                    ) : (
                      <img src={file.previewUrl} className="w-full h-full object-cover rounded" alt="Thumb" />
                    )}
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[11px] font-bold text-navy-950 truncate max-w-[120px]">{file.name}</span>
                    <span className="text-[9px] text-slate-400 font-bold">{file.size}</span>
                  </div>
                </div>
                <button onClick={onClear} className="p-1 hover:bg-slate-200/50 rounded-lg text-slate-400 hover:text-slate-700 transition" title="Clear file">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="mt-4 p-3 bg-slate-50/50 rounded-2xl border border-slate-200/30 text-center">
                <span className="text-[10px] font-semibold text-slate-400">No file selected yet</span>
              </div>
            )}
          </div>

          {/* Column 2: Image Preview & Process (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-400">2.</span>
                <h3 className="text-sm font-bold text-navy-900 tracking-tight">Image Preview</h3>
              </div>

              {/* Previews Frame - Taller, roomier preview cards */}
              <div className="flex items-center gap-4 relative min-h-[210px]">
                
                {/* Original Thumbnail */}
                <div className="flex-1 bg-[#fdfcfa] rounded-2xl border border-slate-200/80 p-3 shadow-sm text-left h-[210px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-rose-200" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest pl-2">Original Image</span>
                  
                  {file ? (
                    file.previewUrl === "demo" ? (
                      <div className="font-['Caveat'] text-[11px] text-slate-600 leading-snug pl-2 flex-grow pt-2 select-none pointer-events-none">
                        <p className="font-bold text-slate-900 text-[12px] mb-0.5">Artificial Intelligence</p>
                        <p>1. AI is intelligence...</p>
                        <p>2. It enables systems...</p>
                      </div>
                    ) : (
                      <div className="w-full h-[160px] pl-2 pt-1 flex items-center justify-center overflow-hidden">
                        <img src={file.previewUrl} className="w-full h-full object-contain rounded-lg shadow-sm" alt="Original preview" />
                      </div>
                    )
                  ) : (
                    <div className="flex-grow flex items-center justify-center text-center p-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Awaiting Upload</span>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="absolute left-[50%] -translate-x-[50%] z-10 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shadow-sm border border-slate-200 transition hover:scale-105">
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Digitized Processed Preview (No busy CV graphics) */}
                <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 p-3 shadow-sm text-left h-[210px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-rose-200" />
                  <span className="text-[8px] font-bold text-indigo-500 uppercase tracking-widest pl-2">Digitized</span>
                  
                  {isProcessing ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                      <Loader2 className="w-6 h-6 text-indigo-500 animate-spin" />
                      <span className="text-[9px] text-slate-400 font-bold mt-2 uppercase tracking-wide">Processing OCR...</span>
                    </div>
                  ) : isExtracted ? (
                    isDemo ? (
                      <div className="text-[10px] text-slate-600 leading-snug pl-2 flex-grow pt-2 select-none pointer-events-none">
                        <p className="font-bold text-navy-900 text-[11px] mb-0.5">Artificial Intelligence</p>
                        <p className="font-medium text-slate-500">1. AI is intelligence...</p>
                        <p className="font-medium text-slate-500">2. It enables systems...</p>
                      </div>
                    ) : stats.confidence === "ERROR" ? (
                      <div className="text-[10px] text-rose-600 leading-snug pl-2 flex-grow pt-2 select-none pointer-events-none">
                        <p className="font-bold text-rose-700 text-[11px] mb-1">Extraction Failed</p>
                        <p className="font-medium text-rose-500">See error details in</p>
                        <p className="font-medium text-rose-500">the Results panel.</p>
                      </div>
                    ) : (
                      <div className="text-[10px] text-slate-600 leading-snug pl-2 flex-grow pt-2 select-none pointer-events-none overflow-hidden max-h-[160px]">
                        <p className="font-bold text-indigo-600 text-[11px] mb-1">Digitized Text Block</p>
                        <p className="font-medium text-slate-500 italic whitespace-pre-wrap">
                          {extractedText ? (extractedText.length > 100 ? extractedText.substring(0, 100) + "..." : extractedText) : "No text extracted."}
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="flex-grow flex items-center justify-center text-center p-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Awaiting OCR</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Run OCR Button */}
            <button 
              onClick={onRunOcr}
              disabled={!file || isProcessing || isExtracted}
              className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-4 rounded-2xl shadow-lg transition mt-4 ${(!file || isProcessing || isExtracted) ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'}`}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running OCR...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Run OCR
                </>
              )}
            </button>
          </div>

          {/* Column 3: OCR Results & Metrics (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">3.</span>
                  <h3 className="text-sm font-bold text-navy-900 tracking-tight">OCR Results</h3>
                </div>
                
                {/* Extraction Success Indicator */}
                {isExtracted && (
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-[9px] font-bold animate-fade-in">
                    <Check className="w-3 h-3 p-0.5 rounded-full bg-emerald-500 text-white" />
                    <span>Extracted successfully!</span>
                  </div>
                )}
              </div>

              {/* Text Area Toolbar */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Extracted Text</span>
                <div className="flex gap-1.5">
                  <button 
                    onClick={handleCopy}
                    disabled={!extractedText}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9px] font-bold bg-slate-50 border border-slate-200 rounded-lg transition duration-150 ${!extractedText ? 'opacity-40 cursor-not-allowed text-slate-400' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    <Copy className="w-3 h-3" />
                    Copy Text
                  </button>
                  <button 
                    onClick={handleDownload}
                    disabled={!extractedText}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[9px] font-bold bg-slate-50 border border-slate-200 rounded-lg transition duration-150 ${!extractedText ? 'opacity-40 cursor-not-allowed text-slate-400' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>

              {/* Digital clean results text area */}
              <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4 font-sans text-xs text-slate-600 leading-relaxed h-[210px] overflow-y-auto shadow-inner select-all w-full text-left">
                {isProcessing ? (
                  <p className="text-slate-400 italic">Processing image pixels and extracting text blocks...</p>
                ) : extractedText ? (
                  <pre className="font-sans whitespace-pre-wrap">{extractedText}</pre>
                ) : (
                  <p className="text-slate-400 italic">Extracted text will appear here. Select an image and click "Run OCR" to begin.</p>
                )}
              </div>

              {/* Stats & Metrics horizontal strip */}
              <div className="grid grid-cols-3 gap-3.5 mt-4">
                
                {/* Confidence metrics card */}
                <div className="bg-slate-50 border border-slate-200/40 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">Confidence</span>
                    <span className="text-xs font-black text-navy-900 mt-1">{stats.confidence || '--'}</span>
                  </div>
                </div>

                {/* Word count metrics card */}
                <div className="bg-slate-50 border border-slate-200/40 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 flex-shrink-0">
                    <Type className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">Words</span>
                    <span className="text-xs font-black text-navy-900 mt-1">{stats.words || '--'}</span>
                  </div>
                </div>

                {/* Character count metrics card */}
                <div className="bg-slate-50 border border-slate-200/40 rounded-xl p-3 flex items-center gap-2 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-500 flex-shrink-0">
                    <Hash className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">Chars</span>
                    <span className="text-xs font-black text-navy-900 mt-1">{stats.chars || '--'}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

