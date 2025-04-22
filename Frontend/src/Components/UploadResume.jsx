import React, { useState, useRef, useEffect } from 'react';

const CyberPDFUploader = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const fileInputRef = useRef(null);
  
  // Particle animation effect
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(initialParticles);
    
    // Animate particles
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const validatePDFType = (file) => {
    return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  };

  const handleFiles = (fileList) => {
    setError(null);
    
    // Check if all files are PDFs
    const invalidFiles = fileList.filter(file => !validatePDFType(file));
    
    if (invalidFiles.length > 0) {
      setGlitchEffect(true);
      setError("ERROR: ONLY PDF FILES ACCEPTED");
      setTimeout(() => setGlitchEffect(false), 1000);
      return;
    }
    
    setFiles(fileList);
    
    // Play digital sound effect
    playDigitalSound();
    
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Simulate analysis after upload complete
          setTimeout(() => {
            setAnalysisResults({
              fileCount: fileList.length,
              totalSize: fileList.reduce((acc, file) => acc + file.size, 0),
              status: 'SCAN COMPLETE',
              securityLevel: 'SECURE',
              encryptionStatus: 'READY'
            });
            
            playCompletionSound();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  const playDigitalSound = () => {
    // This would normally use the Web Audio API
    // Just a placeholder for the concept
  };
  
  const playCompletionSound = () => {
    // This would normally use the Web Audio API
    // Just a placeholder for the concept
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-black via-gray-900 to-blue-950 text-cyan-400 overflow-hidden relative font-mono">
      {/* Particle background */}
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute bg-cyan-500 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity
          }}
        />
      ))}
      
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-6">
          <h1 className={`text-3xl font-bold mb-2 tracking-wider text-cyan-300 ${glitchEffect ? 'animate-pulse' : ''}`}>
            <span className="text-red-500">[</span> CYBER PDF SCANNER <span className="text-red-500">]</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-cyan-400">v2.5.7 // SECURE UPLINK</p>
        </div>
        
        {/* Upload Box */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center transition-all ${
            isDragging 
              ? 'border-cyan-400 bg-cyan-900/30 shadow-lg shadow-cyan-500/50' 
              : 'border-cyan-700 bg-gray-800/70'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 mb-2 ${uploadProgress > 0 && uploadProgress < 100 ? 'animate-pulse' : ''}`}>
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg text-cyan-300 font-semibold tracking-wide">
              DROP PDF FILES FOR SCAN
            </p>
            <button
              onClick={triggerFileInput}
              className="px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              SELECT PDF
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="application/pdf,.pdf"
              multiple
            />
            <p className="text-xs uppercase tracking-widest text-cyan-600">
              // PDF FILES ONLY //
            </p>
          </div>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/60 border border-red-700 rounded-lg text-center animate-pulse">
            <p className="text-red-400 font-bold tracking-wider">{error}</p>
          </div>
        )}
        
        {/* Progress Indicator */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-cyan-500 uppercase tracking-wider">UPLOADING</span>
              <span className="text-xs text-cyan-400 font-bold">{uploadProgress}%</span>
            </div>
            <div className="w-full h-3 rounded-full overflow-hidden bg-gray-800 border border-cyan-900 p-px">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative"
                style={{ width: `${uploadProgress}%` }}
              >
                <div className="absolute inset-0 bg-grid-lines opacity-30"></div>
              </div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-cyan-700">
              <span>{files.length} PDF FILE{files.length !== 1 ? 'S' : ''}</span>
              <span>SCANNING...</span>
            </div>
          </div>
        )}
        
        {/* Analysis Results */}
        {analysisResults && (
          <div className="rounded-lg p-6 bg-gray-800/80 border border-cyan-800 shadow-lg shadow-cyan-900/20">
            <h3 className="text-lg font-bold mb-4 text-cyan-300 tracking-wider flex items-center">
              <span className="w-2 h-5 bg-cyan-400 mr-2 animate-pulse"></span>
              ANALYSIS REPORT
              <span className="w-2 h-5 bg-cyan-400 ml-2 animate-pulse"></span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-cyan-900/50 pb-2">
                <span className="text-cyan-600 uppercase text-sm tracking-wider">FILES</span>
                <span className="font-mono font-bold text-white">{analysisResults.fileCount}</span>
              </div>
              <div className="flex justify-between border-b border-cyan-900/50 pb-2">
                <span className="text-cyan-600 uppercase text-sm tracking-wider">SIZE</span>
                <span className="font-mono font-bold text-white">{(analysisResults.totalSize / 1024 / 1024).toFixed(2)} MB</span>
              </div>
              <div className="flex justify-between border-b border-cyan-900/50 pb-2">
                <span className="text-cyan-600 uppercase text-sm tracking-wider">STATUS</span>
                <span className="font-mono font-bold text-green-400">{analysisResults.status}</span>
              </div>
              <div className="flex justify-between border-b border-cyan-900/50 pb-2">
                <span className="text-cyan-600 uppercase text-sm tracking-wider">SECURITY</span>
                <span className="font-mono font-bold text-green-400">{analysisResults.securityLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-600 uppercase text-sm tracking-wider">ENCRYPTION</span>
                <span className="font-mono font-bold text-green-400">{analysisResults.encryptionStatus}</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="px-5 py-2 bg-cyan-700 hover:bg-cyan-600 rounded text-xs uppercase tracking-widest font-bold transition-colors duration-300 border border-cyan-600">
                PROCESS FILES
              </button>
            </div>
          </div>
        )}
        
        {/* File List */}
        {files.length > 0 && !analysisResults && (
          <div className="rounded-lg p-4 bg-gray-800/80 border border-cyan-900 mt-4">
            <h3 className="text-xs font-bold mb-2 text-cyan-400 uppercase tracking-wider">
              PDF FILES DETECTED: {files.length}
            </h3>
            <ul className="space-y-1">
              {files.map((file, index) => (
                <li key={index} className="text-sm text-cyan-300 flex justify-between">
                  <span className="truncate max-w-xs">{file.name}</span>
                  <span className="text-cyan-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="text-center mt-6 text-xs text-cyan-700 tracking-wider">
          &lt; NEURAL SCAN TECHNOLOGY v3.7 &gt;
        </div>
      </div>
    </div>
  );
};

export default CyberPDFUploader;