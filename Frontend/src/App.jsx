import { Routes, Route } from "react-router-dom";
import CyberPDFUploader from "./Components/UploadResume.jsx"; 
import ResumeAnalyzer from "./pages/ResumeAnalyzer.jsx"
import AIRecruitHomepage from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AIRecruitHomepage />}/>
      <Route path="/upload" element={<CyberPDFUploader />} />
      <Route path="/analyze" element={<ResumeAnalyzer />} />
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />}/>


      

    </Routes>
  );
}

export default App;
