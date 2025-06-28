import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";


const FormPage = () => {
  const { id: templateId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    coupleName: "",
    weddingDate: "",
    address: "",
    recipients: [{ name: "", phone: "" }],
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecipientChange = (index, field, value) => {
    const updated = [...formData.recipients];
    updated[index][field] = value;
    setFormData({ ...formData, recipients: updated });
  };

  const addRecipient = () => {
    setFormData({
      ...formData,
      recipients: [...formData.recipients, { name: "", phone: "" }],
    });
  };

  const removeRecipient = (index) => {
    const updated = formData.recipients.filter((_, i) => i !== index);
    setFormData({ ...formData, recipients: updated });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    const res = await api.post(
      "/submitForm",
      { ...formData, templateId },
      { withCredentials: true }
    );
    setSuccess("✅ Form submitted successfully!");

    const formId = res.data.formId;

    setTimeout(() => {
      navigate(`/submission-success/${formId}`);
    }, 2000);
  } catch (err) {
    console.error(err);
    const msg =
      err.response?.data?.errors?.[0]?.msg || err.response?.data?.message || "Something went wrong";
    setError(msg);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-yellow-50 flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-rose-600 text-center mb-6">
          Fill Wedding Invitation Details
        </h2>

        <input
          type="text"
          name="coupleName"
          placeholder="Couple Name"
          value={formData.coupleName}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="date"
          name="weddingDate"
          value={formData.weddingDate}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <textarea
          name="address"
          placeholder="Venue Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        ></textarea>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-rose-700">Recipient Details</h3>

          {formData.recipients.map((recipient, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder="Recipient Name"
                value={recipient.name}
                onChange={(e) => handleRecipientChange(index, "name", e.target.value)}
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={recipient.phone}
                onChange={(e) => handleRecipientChange(index, "phone", e.target.value)}
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeRecipient(index)}
                  className="text-sm text-red-500 hover:underline col-span-full"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addRecipient}
            className="text-sm font-semibold text-yellow-600 hover:underline"
          >
            + Add another recipient
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default FormPage;
