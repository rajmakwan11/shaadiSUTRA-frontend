import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/AllTemplates`)
      .then((res) => res.json())
      .then((data) => setTemplates(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-yellow-50 py-12 px-4" id="templates">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-rose-700 mb-12">
        Choose Your Wedding Invitation
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {templates.map((template) => (
          <div
            key={template._id}
            onClick={() => {
            localStorage.setItem("selectedTemplateId", template._id); // ✅ store template ID
            navigate(`/template/${template._id}`);
            }}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition hover:shadow-xl hover:scale-[1.02] duration-300 cursor-pointer"
          >
            <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={`${template.image}`}
                alt={template.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
              {template.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
