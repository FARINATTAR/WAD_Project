import { Routes, Route } from "react-router-dom";
import CyberPDFUploader from "./Components/UploadResume.jsx"; // Corrected import

function App() {
  return (
    <Routes>
      <Route path="/upload" element={<CyberPDFUploader />} /> {/* Using the correct component */}
    </Routes>
  );
}

export default App;
