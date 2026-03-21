import { useState } from "react";
import { useNavigate } from "react-router";
import { Palmtree, Mountain, Music, Utensils, Compass, CheckCircle2, Plane } from "lucide-react";

const categories = [
  { id: "beach", label: "Playa y Relax", icon: Palmtree },
  { id: "nature", label: "Montaña y Bosque", icon: Mountain },
  { id: "culture", label: "Cultura y Museos", icon: Music },
  { id: "food", label: "Gastronomía", icon: Utensils },
  { id: "adventure", label: "Aventura Extrema", icon: Compass },
];

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    console.log("Gustos del cliente:", selected);
    // Aquí guardarías en tu base de datos
    navigate("/"); // Finalmente lo llevamos al Home
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#F59E0B] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Plane className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Casi listo!</h1>
          <p className="text-gray-600">Personalicemos tu experiencia. ¿Qué tipo de viajes prefieres?</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selected.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-200 ${
                  isSelected 
                    ? "border-[#2563EB] bg-blue-50 text-[#2563EB]" 
                    : "border-gray-100 hover:border-blue-200 text-gray-500"
                }`}
              >
                {isSelected && (
                  <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-[#2563EB]" />
                )}
                <Icon className={`w-10 h-10 mb-3 ${isSelected ? "text-[#2563EB]" : "text-gray-400"}`} />
                <span className="font-semibold text-sm uppercase tracking-wide">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 py-4 text-gray-500 font-medium hover:text-gray-700 transition-colors"
          >
            Omitir por ahora
          </button>
          <button
            onClick={handleSave}
            className="flex-[2] py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Comenzar mi aventura
          </button>
        </div>
      </div>
    </div>
  );
}