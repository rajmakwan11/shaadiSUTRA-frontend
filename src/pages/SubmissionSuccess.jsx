import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../api/axiosConfig";


const SubmissionSuccess = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/form/${formId}`, {
          withCredentials: true,
        });
        setForm(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load invitation.");
      }
    };

    fetchForm();
  }, [formId]);

  const handleSendWhatsapp = async () => {
    setError("");
    setMessage("");
    setSending(true);

    try {
      const res = await api.post(
        `/sendWhatsapp/${formId}`,
        {},
        { withCredentials: true }
      );
      setMessage(res.data.message || "✅ Invitations sent successfully!");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setError("⚠️ You don't have admin access to send WhatsApp messages.");
      } else {
        setError(
          err.response?.data?.message ||
            "❌ Failed to send WhatsApp invitations."
        );
      }
    } finally {
      setSending(false);
    }
  };

 const handleDownload = async (imageUrl, filename) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${imageUrl}`);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Error downloading image:", err);
    alert("❌ Failed to download the invitation.");
  }
};

  if (error && !form) return <p className="text-red-500 text-center mt-6">{error}</p>;
  if (!form) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">
        🎉 Invitation Created!
      </h2>

      <p className="text-center text-gray-700 mb-4">
        Couple: <strong>{form.coupleName}</strong>
        <br />
        Wedding Date: <strong>{form.weddingDate}</strong>
        <br />
        Address: <strong>{form.address}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        {form.cards.map((card, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${card.imageUrl}`}
              alt={`Card for ${card.name}`}
              className="w-full rounded-lg"
            />
            <div className="mt-2 text-center">
              <p className="text-lg font-semibold text-rose-600">
                {card.name}
              </p>
              <p className="text-gray-600 text-sm">{card.phone}</p>
            </div>

            <button
              onClick={() =>
                handleDownload(card.imageUrl, `Invitation-${card.name}.jpg`)
              }
              className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow text-sm"
            >
              ⬇️ Download Invitation
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto text-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-600 mb-4">{message}</p>}
        <button
          onClick={handleSendWhatsapp}
          disabled={sending}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition disabled:opacity-50"
        >
          {sending ? "Sending via WhatsApp..." : "Send All via WhatsApp"}
        </button>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
