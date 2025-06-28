import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FloatingFlowerEffect from "../components/FloatingFlowerEffect";
import api from "../api/axiosConfig";

const TemplatePreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState(null);
  const [authChecked, setAuthChecked] = useState(false); // ✅ used to block preview until auth done

  // ✅ Step 1: Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/user/check-auth", {
          withCredentials: true,
        });
        setAuthChecked(true); // 🟢 Auth ok, show template
      } catch (err) {
        // ❌ Not authenticated, store ID & redirect
        if (!localStorage.getItem("selectedTemplateId")) {
          localStorage.setItem("selectedTemplateId", id);
        }
        navigate("/register");
      }
    };

    checkAuth();
  }, [id, navigate]);

  // ✅ Step 2: Load template only if authenticated
  useEffect(() => {
    if (authChecked) {
      api
        .get("/AllTemplates")
        .then((res) => {
          const found = res.data.find((tpl) => tpl._id === id);
          setTemplate(found);
        })
        .catch((err) => console.error("Error fetching template:", err));
    }
  }, [authChecked, id]);

  if (!authChecked || !template) {
    return <div className="text-center py-10 text-lg">Loading Preview...</div>;
  }

  return (
    <>
      <FloatingFlowerEffect />
      <div className="h-screen bg-rose-50 px-4 flex items-center justify-center">
        <div className="flex flex-col justify-between items-center text-center w-full max-w-lg h-[90vh]">
          <div className="flex-1 flex items-center justify-center w-full">
            <img
              src={template.image}
              alt={template.title}
              className="max-h-[60vh] w-auto object-contain rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-rose-700 mt-4">
            {template.title}
          </h2>

          <button
            onClick={() => {
              localStorage.setItem("selectedTemplateId", template._id);
              navigate("/form/" + template._id);
            }}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-full transition"
          >
            Continue →
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplatePreview;
