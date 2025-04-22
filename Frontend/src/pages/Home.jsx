import React, { useState } from "react";
import {
  ArrowUpRight,
  Award,
  Zap,
  Briefcase,
  CheckCircle,
  Upload,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIRecruitHomepage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-gray-100 relative overflow-hidden">
      {/* Decorative elements - gaming-inspired grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>

        {/* Gaming-style grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,66,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,66,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Glow effects */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative flex justify-between items-center py-6 px-8 md:px-16 border-b border-gray-800">
        <div className="flex items-center">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            AI<span className="text-cyan-400">Recruit</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {/* <a href="#features" className="text-cyan-400 hover:text-cyan-300 transition">Features</a>
          <a href="#how-it-works" className="text-cyan-400 hover:text-cyan-300 transition">How it Works</a>
          <a href="#pricing" className="text-cyan-400 hover:text-cyan-300 transition">Pricing</a> */}
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-gray-900 rounded-md border border-gray-800 font-medium text-gray-300 hover:bg-gray-800 hover:border-cyan-900 transition"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 bg-gradient-to-r from-blue-800 to-blue-900 rounded-md font-medium text-white hover:from-blue-700 hover:to-blue-800 transition shadow-md shadow-blue-900/50 border border-blue-700"
          >
            Sign up
          </button>
        </div>
        <button className="md:hidden text-cyan-400">Menu</button>
      </nav>

      {/* Hero Section */}
      <div className="relative px-8 md:px-16 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <div className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-cyan-400 mb-6">
            LEVEL UP YOUR CAREER
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AI <span className="text-cyan-400">Supercharges</span> Your Career
            Journey
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            AIRecruit harnesses cutting-edge AI to transform your job search
            experience. Our system analyzes your resume with precision,
            identifies improvement opportunities, and connects you with ideal
            job matches. Watch your interview callback rate increase by 300% as
            our algorithms align your unique talents with employers seeking
            exactly what you offer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-900 rounded-md font-semibold text-white border border-blue-700 hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center shadow-lg shadow-blue-900/30 relative overflow-hidden group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => navigate("/analyze")}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-30 translate-x-full group-hover:animate-[shine_1s_ease]"></span>
              Upload Resume Now
              <ArrowUpRight
                className={`ml-2 transition-transform duration-300 ${
                  isHovering ? "translate-x-1 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>

          {/* XP Bar - Gaming Element */}
          <div className="mt-10">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-cyan-400">RESUME POWER</span>
              <span className="text-cyan-400">LEVEL UP WITH AI</span>
            </div>
            <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-gray-800">
              <div className="h-full w-1/3 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-gray-600">Current</span>
              <span className="text-cyan-500">+ 200% with AIRecruit</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="w-full h-96 bg-black bg-opacity-50 rounded-md backdrop-blur-sm flex items-center justify-center border border-gray-800 relative overflow-hidden">
            {/* Gaming-style radar scanning animation */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-500/20 rounded-full animate-ping opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-blue-400/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-blue-400/15 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-blue-400/20 rounded-full"></div>
            </div>

            <div className="relative bg-black bg-opacity-70 p-8 rounded-md border border-gray-800 shadow-xl backdrop-blur-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-semibold text-cyan-400">
                  Resume Analysis
                </div>
                <div className="text-xs bg-blue-900/30 px-2 py-1 rounded border border-blue-800 text-blue-400">
                  SCANNING
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Skills Optimization</span>
                    <span className="text-cyan-400">92%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full w-11/12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>ATS Compatibility</span>
                    <span className="text-cyan-400">86%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full w-10/12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Job Match Potential</span>
                    <span className="text-cyan-400">78%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                    <div className="h-full w-9/12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-cyan-400 text-sm">
                <div className="flex items-center">
                  <Target size={16} className="mr-2" />
                  <span>3 high-potential job matches found</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-8 md:px-16 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-cyan-400 mb-6">
            POWER-UPS FOR YOUR CAREER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Unlock Your Career Potential
          </h2>
          <p className="mt-4 text-gray-500">
            Our AI-powered platform offers three game-changing benefits
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-black bg-opacity-40 p-8 rounded-md border border-gray-800 hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gray-900 rounded-md flex items-center justify-center mb-6 border border-gray-800">
              <Award className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Resume Score & Analysis
            </h3>
            <p className="text-gray-400">
              Get an instant score and detailed feedback on your resume's
              strengths and weaknesses. Our AI identifies key improvement areas
              and provides actionable suggestions to make your resume stand out.
            </p>
            <div className="mt-6 inline-block text-sm font-medium text-blue-400">
              +45 XP to Job Application Success
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-black bg-opacity-40 p-8 rounded-md border border-gray-800 hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gray-900 rounded-md flex items-center justify-center mb-6 border border-gray-800">
              <Zap className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              AI Resume Enhancement
            </h3>
            <p className="text-gray-400">
              Let our AI transform your resume with optimized keywords, improved
              phrasing, and tailored content that passes through Applicant
              Tracking Systems and impresses human recruiters.
            </p>
            <div className="mt-6 inline-block text-sm font-medium text-blue-400">
              +68 XP to ATS Visibility
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-black bg-opacity-40 p-8 rounded-md border border-gray-800 hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-gray-900 rounded-md flex items-center justify-center mb-6 border border-gray-800">
              <Briefcase className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Smart Job Matching
            </h3>
            <p className="text-gray-400">
              Discover perfect job opportunities matched to your skills,
              experience, and career goals. Our algorithm analyzes thousands of
              openings to find positions where you're most likely to succeed.
            </p>
            <div className="mt-6 inline-block text-sm font-medium text-blue-400">
              +75 XP to Interview Chances
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Gaming Inspired */}
      <div className="px-8 md:px-16 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-black bg-opacity-40 p-6 rounded-md border border-gray-800">
            <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-gray-500 text-sm">
              Increase in Interview Rate
            </div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-md border border-gray-800">
            <div className="text-4xl font-bold text-cyan-400 mb-2">15K+</div>
            <div className="text-gray-500 text-sm">Career Paths Unlocked</div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-md border border-gray-800">
            <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
            <div className="text-gray-500 text-sm">Resume Optimization</div>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-md border border-gray-800">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-gray-500 text-sm">Career Levels Gained</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 md:px-16 py-20">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-40 p-12 rounded-md border border-gray-800 relative overflow-hidden">
          {/* Animated particles background */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-2/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute top-1/2 left-2/3 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"
              style={{ animationDuration: "5s" }}
            ></div>
            <div
              className="absolute top-3/4 left-3/4 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"
              style={{ animationDuration: "2.5s" }}
            ></div>
          </div>

          <div className="flex flex-col md:flex-row items-center relative">
            <div className="md:w-2/3">
              <div className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs font-medium text-cyan-400 mb-6">
                FINAL BOSS: CAREER ADVANCEMENT
              </div>
              <h2 className="text-3xl font-bold">
                Ready to Level Up Your Job Search?
              </h2>
              <p className="mt-4 text-gray-400">
                Upload your resume now and get instant AI-powered insights. Join
                thousands of professionals who've already boosted their career
                prospects.
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-800"
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  10,000+ players already leveling up
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <button className="px-8 py-4 w-full bg-gradient-to-r from-blue-800 to-blue-900 rounded-md font-semibold text-white hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center shadow-lg shadow-blue-900/30 border border-blue-700 relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-30 translate-x-full group-hover:animate-[shine_1s_ease]"></span>
                <Upload className="mr-2" size={20} />
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 py-12 px-8 md:px-16 border-t border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              AIRecruit
            </h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Resume Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-gray-900 flex items-center justify-center text-gray-500 border border-gray-800 hover:bg-blue-900/30 hover:text-white hover:border-blue-800 transition"
              >
                <span>FB</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-gray-900 flex items-center justify-center text-gray-500 border border-gray-800 hover:bg-blue-900/30 hover:text-white hover:border-blue-800 transition"
              >
                <span>TW</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-gray-900 flex items-center justify-center text-gray-500 border border-gray-800 hover:bg-blue-900/30 hover:text-white hover:border-blue-800 transition"
              >
                <span>IN</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} AIRecruit. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AIRecruitHomepage;
