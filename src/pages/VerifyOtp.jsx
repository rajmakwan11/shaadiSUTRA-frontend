// src/pages/VerifyOtp.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(() => localStorage.getItem("emailToVerify") || "");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    // ✅ Verify OTP
    await api.post(
      "api/user/verify-otp",
      { email, otp },
      { withCredentials: true }
    );

    setSuccess("✅ Verified! Logging you in...");

    // ✅ Wait for the cookie to be fully set
    setTimeout(() => {
      const templateId = localStorage.getItem("selectedTemplateId");
      if (templateId) {
        navigate(`/template/${templateId}`);
      } else {
        navigate("/");
      }
    }, 2000); // Give time to set auth cookie
  } catch (err) {
    setError(err.response?.data || "Something went wrong");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-100 to-yellow-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-rose-700 text-center">
          Verify Your Email
        </h2>

        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 rounded-lg transition"
        >
          Verify OTP
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 mt-4 text-center font-medium">
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default VerifyOtp;
