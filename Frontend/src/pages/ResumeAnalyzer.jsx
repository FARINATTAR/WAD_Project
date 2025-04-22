import React, { useState, useRef } from 'react';
import CyberPDFUploader from '../Components/UploadResume.jsx';

const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
  const textAreaRef = useRef(null);
  
  const handleTextChange = (e) => {
    setResumeText(e.target.value);
  };
  
  const handleFileUpload = (files) => {
    // In a real application, this would extract text from PDF
    // For demo purposes, we'll simulate text extraction
    setIsAnalyzing(true);
    setTimeout(() => {
      setResumeText("Sample extracted resume text from PDF...");
      setIsAnalyzing(false);
    }, 1500);
  };
  
  const analyzeResume = () => {
    if (!resumeText.trim()) {
      setError("Please enter resume text or upload a PDF file");
      return;
    }
    
    setError(null);
    setIsAnalyzing(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      // Mock analysis results
      const mockAnalysis = generateMockAnalysis(resumeText);
      setAnalysisResults(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  const generateMockAnalysis = (text) => {
    // Simple logic to generate a score based on text length and keywords
    const wordCount = text.split(/\s+/).length;
    const hasActionVerbs = /achieved|improved|led|managed|developed|created|implemented/i.test(text);
    const hasNumbers = /\d+%|\d+ years|\d+\+/i.test(text);
    const hasBulletPoints = text.includes('•') || text.includes('-');
    
    // Calculate score based on resume contents
    let score = 50; // Base score
    
    // Add points based on content
    if (wordCount > 200) score += 10;
    if (hasActionVerbs) score += 15;
    if (hasNumbers) score += 10;
    if (hasBulletPoints) score += 5;
    if (wordCount > 100 && wordCount < 600) score += 10; // Optimal length
    
    // Strengths
    const strengths = [];
    if (hasActionVerbs) strengths.push("Strong use of action verbs");
    if (hasNumbers) strengths.push("Includes quantifiable achievements");
    if (hasBulletPoints) strengths.push("Well-structured with bullet points");
    if (wordCount > 100 && wordCount < 600) strengths.push("Appropriate resume length");
    
    // If we don't have at least 2 strengths, add generic ones
    if (strengths.length < 2) {
      strengths.push("Clear presentation of work history");
      strengths.push("Includes relevant skills and experience");
    }
    
    // Areas for improvement
    const improvements = [];
    if (!hasActionVerbs) improvements.push("Missing strong action verbs to highlight accomplishments");
    if (!hasNumbers) improvements.push("Lacks quantifiable achievements (e.g., \"Increased sales by X%\")");
    if (!hasBulletPoints) improvements.push("Could benefit from better structure with bullet points");
    if (wordCount < 200) improvements.push("Resume is too brief - expand on your experience");
    if (wordCount > 600) improvements.push("Resume is too lengthy - consider condensing");
    
    // If we don't have at least 2 improvements, add generic ones
    if (improvements.length < 2) {
      improvements.push("Missing a concise professional summary section");
      improvements.push("Could better highlight specific technical skills");
    }
    
    // Suggestions based on improvements
    let suggestions = "Focus on these key improvements: ";
    if (improvements.length > 0) {
      suggestions += improvements.map((improvement, index) => {
        if (improvement.includes("action verbs")) {
          return "Use powerful action verbs like 'achieved', 'led', and 'implemented'";
        } else if (improvement.includes("quantifiable")) {
          return "Add metrics to show impact (e.g., 'Increased customer satisfaction by 25%')";
        } else if (improvement.includes("structure")) {
          return "Organize information with clear bullet points and consistent formatting";
        } else if (improvement.includes("brief")) {
          return "Expand on your key achievements and responsibilities in each role";
        } else if (improvement.includes("lengthy")) {
          return "Focus on your most relevant and recent accomplishments";
        } else {
          return improvement;
        }
      }).join(". ") + ".";
    }
    
    return {
      score,
      strengths,
      improvements,
      suggestions,
      closingStatement: score >= 80 
        ? "Excellent resume! With a few minor tweaks, you'll be making an even stronger impression."
        : "Implement these suggestions to significantly improve your resume's impact and boost your chances of landing interviews!"
    };
  };
  
  const clearAll = () => {
    setResumeText('');
    setAnalysisResults(null);
    setError(null);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gradient-to-r from-blue-800 to-purple-900 py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-wider text-center">
            <span className="text-cyan-400">AI</span> Resume Analyzer
          </h1>
          <p className="text-center text-gray-300 mt-2">Unlock the full potential of your resume with AI-powered analysis</p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Upload Your Resume</h2>
            
            <div className="mb-6">
              <CyberPDFUploader onFileUpload={handleFileUpload} />
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">Or Paste Resume Text</h3>
              <textarea
                ref={textAreaRef}
                value={resumeText}
                onChange={handleTextChange}
                className="w-full h-64 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none resize-none"
                placeholder="Paste your resume text here for analysis..."
              ></textarea>
            </div>
            
            {error && (
              <div className="p-3 bg-red-900/60 border border-red-700 rounded text-red-300 mb-4">
                {error}
              </div>
            )}
            
            <div className="flex space-x-4">
              <button
                onClick={analyzeResume}
                disabled={isAnalyzing}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/30"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center">
                    Analyzing
                    <span className="ml-2 h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                  </span>
                ) : (
                  "Analyze Resume"
                )}
              </button>
              
              <button
                onClick={clearAll}
                className="py-3 px-6 bg-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Clear
              </button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-6 text-cyan-400">Analysis Results</h2>
            
            {!analysisResults && !isAnalyzing && (
              <div className="flex flex-col items-center justify-center h-80 text-gray-500">
                <svg className="w-16 h-16 mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p className="text-center">Submit your resume to receive AI-powered feedback and suggestions</p>
              </div>
            )}
            
            {isAnalyzing && !analysisResults && (
              <div className="flex flex-col items-center justify-center h-80">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-cyan-400 font-semibold">Analyzing your resume...</p>
                <p className="text-gray-400 text-sm mt-2">Our AI is evaluating your content and formatting</p>
              </div>
            )}
            
            {analysisResults && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2 text-white">Resume Score</h3>
                  <div className="relative w-40 h-40 mx-auto">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#444"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={analysisResults.score >= 80 ? "#10b981" : analysisResults.score >= 60 ? "#3b82f6" : "#ef4444"}
                        strokeWidth="2"
                        strokeDasharray={`${analysisResults.score}, 100`}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-3xl font-bold">{analysisResults.score}</div>
                      <div className="text-sm text-gray-400">out of 100</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {analysisResults.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-red-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Areas to Improve
                  </h3>
                  <ul className="space-y-2">
                    {analysisResults.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    AI-Powered Suggestions
                  </h3>
                  <div className="p-4 bg-blue-900/30 border border-blue-800 rounded-lg text-blue-100">
                    {analysisResults.suggestions}
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Final Thoughts</h3>
                  <p className="text-gray-300">{analysisResults.closingStatement}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 py-6 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>Powered by advanced AI technology to help you land your dream job</p>
          <p className="mt-2">©2025 Resume Analyzer Pro</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeAnalyzer;