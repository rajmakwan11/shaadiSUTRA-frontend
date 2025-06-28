import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";     // ✅ importing Home properly
import Login from "./components/Login";
// import Signup from "./components/Signup";
import TemplatePreview from './pages/TemplatePreview'; // New Page
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import FormPage from "./pages/FormPage";
import SubmissionSuccess from "./pages/SubmissionSuccess";
import Navbar from "./pages/Navbar";
// import FormPage from './pages/FormPage'; // Coming next

function App() {
  return (
    <>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/template/:id" element={<TemplatePreview />} />
        <Route path="/form/:id" element={<FormPage />} />
        <Route path="/submission-success/:formId" element={<SubmissionSuccess />} />
        {/* <Route path="/form/:id" element={<FormPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
