import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  Palmtree, Mountain, Music, Utensils, Compass, 
  CheckCircle2, Plane, Users, Heart, User, 
  Wallet, Sparkles, Coffee 
} from "lucide-react";

// Categorías de Intereses
const interestCategories = [
  { id: "beach", label: "Playa y Relax", icon: Palmtree },
  { id: "nature", label: "Naturaleza", icon: Mountain },
  { id: "culture", label: "Cultura", icon: Music },
  { id: "food", label: "Gastronomía", icon: Utensils },
  { id: "adventure", label: "Aventura", icon: Compass },
  { id: "wellness", label: "Bienestar", icon: Coffee },
];

// Opciones de Compañía
const travelCompany = [
  { id: "solo", label: "Solo/a", icon: User },
  { id: "couple", label: "En Pareja", icon: Heart },
  { id: "family", label: "En Familia", icon: Users },
  { id: "friends", label: "Con Amigos", icon: Sparkles },
];
export default function PreferencesForm() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [company, setCompany] = useState("");

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#F59E0B] py-12 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
        
        {/* Header de Bienvenida */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 rotate-3">
            <Plane className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">¡Hola, Aventurero! 🇨🇴</h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Queremos que tu experiencia en <strong>ViajaCol</strong> sea única. 
            Ayúdanos a conocer tu estilo.
          </p>
        </div>

        <div className="space-y-12">
          {/* SECCIÓN 1: Intereses */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#2563EB] text-white rounded-full text-sm">1</span>
              ¿Qué te apasiona de viajar?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interestCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedInterests.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => toggleInterest(cat.id)}
                    className={`flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected 
                        ? "border-[#2563EB] bg-blue-50 text-[#2563EB] scale-95" 
                        : "border-gray-100 hover:border-blue-100 text-gray-500"
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-2 ${isSelected ? "text-[#2563EB]" : "text-gray-400"}`} />
                    <span className="font-semibold text-xs uppercase">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* SECCIÓN 2: Compañía */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-[#06B6D4] text-white rounded-full text-sm">2</span>
              ¿Con quién sueles viajar?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {travelCompany.map((item) => {
                const Icon = item.icon;
                const isSelected = company === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCompany(item.id)}
                    className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                      isSelected 
                        ? "border-[#06B6D4] bg-cyan-50 text-[#06B6D4]" 
                        : "border-gray-100 hover:border-cyan-100 text-gray-500"
                    }`}
                  >
                    <Icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex gap-4 items-start">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600 font-bold italic">PRO TIP</div>
            <p className="text-sm text-orange-800 leading-relaxed">
              Basado en lo que selecciones, te enviaremos ofertas exclusivas que ahorran hasta un <strong>20%</strong> en destinos similares.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 py-4 text-gray-400 font-medium hover:text-gray-600 transition-colors"
          >
            Configurar después
          </button>
          <button
            onClick={() => navigate("/search")}
            className="flex-[2] py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            ¡Listo, vamos a Colombia!
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}