import { useState } from "react";
import { useNavigate } from "react-router";
import { 
  Palmtree, Mountain, Music, Utensils, Compass, CheckCircle2, 
  Plane, Users, Heart, User, Wallet, Sparkles, Coffee, 
  Sun, CloudRain, CreditCard, Gem, MapPin, Car, ChevronRight, ChevronLeft,
  Ship, Ticket
} from "lucide-react";

// --- Datos del Formulario ---
const interestCategories = [
  { id: "beach", label: "Playa y Relax", icon: Palmtree },
  { id: "nature", label: "Naturaleza", icon: Mountain },
  { id: "culture", label: "Cultura", icon: Music },
  { id: "food", label: "Gastronomía", icon: Utensils },
  { id: "adventure", label: "Aventura", icon: Compass },
  { id: "wellness", label: "Bienestar", icon: Coffee },
];

const travelCompany = [
  { id: "solo", label: "Solo/a", icon: User },
  { id: "couple", label: "En Pareja", icon: Heart },
  { id: "family", label: "En Familia", icon: Users },
  { id: "friends", label: "Con Amigos", icon: Sparkles },
];

const budgetOptions = [
  { id: "low", label: "Económico", desc: "Ahorro total", icon: Wallet },
  { id: "mid", label: "Estándar", desc: "Comodidad", icon: CreditCard },
  { id: "high", label: "Premium", desc: "Todo incluido", icon: Gem },
];

const weatherPrefs = [
  { id: "warm", label: "Clima Cálido", desc: "Sol y brisa", icon: Sun },
  { id: "cold", label: "Clima Frío", desc: "Montaña y café", icon: CloudRain },
];

const paceOptions = [
  { id: "relax", label: "Relajado", desc: "Sin afanes", icon: Coffee },
  { id: "active", label: "Explorador", desc: "A tope", icon: MapPin },
];

const transportPrefs = [
  { id: "private", label: "Privado", desc: "Carro/Traslado", icon: Car },
  { id: "public", label: "Aéreo/Local", desc: "Vuelos/Botes", icon: Plane },
];

export default function PreferencesForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    interests: [] as string[], // Preguntas 1 a 6
    company: "",               // Pregunta 7
    budget: "",                // Pregunta 8
    weather: "",               // Pregunta 9
    pace: "",                  // Pregunta 10
    transport: ""              // Pregunta 11
  });

  // Manejadores de cambio
  const toggleInterest = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id) 
        ? prev.interests.filter(i => i !== id) 
        : [...prev.interests, id]
    }));
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinish = () => {
    console.log("Preferencias finales:", formData);
    navigate("/search");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#F59E0B] py-10 px-4 flex justify-center items-center font-sans">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 transition-all border border-white/20">
        
        {/* Header & Barra de Progreso */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-[#2563EB] font-bold text-sm uppercase tracking-widest">Paso {step} de 3</p>
              <h1 className="text-3xl font-black text-gray-900">Personaliza tu viaje</h1>
            </div>
            <Plane className="w-10 h-10 text-[#06B6D4] opacity-20" />
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-500 ${step >= i ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" : "bg-gray-100"}`} />
            ))}
          </div>
        </div>

        {/* CONTENIDO DE LOS PASOS */}
        <div className="min-h-[400px]">
          
          {/* PASO 1: Intereses (Preguntas 1-6) */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <p className="text-blue-800 font-medium text-sm">¿Qué te apasiona? Selecciona tus favoritos para conocer Colombia.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interestCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleInterest(cat.id)}
                    className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all group ${
                      formData.interests.includes(cat.id) 
                        ? "border-[#2563EB] bg-blue-50 text-[#2563EB] shadow-md" 
                        : "border-gray-50 hover:border-blue-100 text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <cat.icon className={`w-10 h-10 mb-3 transition-transform group-hover:scale-110 ${formData.interests.includes(cat.id) ? "text-[#2563EB]" : "text-gray-300"}`} />
                    <span className="text-xs font-bold uppercase tracking-tight text-center">{cat.label}</span>
                    {formData.interests.includes(cat.id) && <CheckCircle2 className="w-5 h-5 mt-2" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PASO 2: Logística y Compañía (Preguntas 7-9) */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Pregunta 7 */}
              <section>
                <label className="block text-gray-800 font-bold mb-4 italic">7. ¿Con quién vas a vivir esta aventura?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {travelCompany.map(item => (
                    <button 
                      key={item.id} 
                      onClick={() => updateField("company", item.id)}
                      className={`p-4 border-2 rounded-2xl flex flex-col items-center transition-all ${formData.company === item.id ? "border-[#06B6D4] bg-cyan-50 text-[#06B6D4]" : "border-gray-50 text-gray-400"}`}
                    >
                      <item.icon className="w-6 h-6 mb-1" />
                      <span className="text-[10px] font-bold uppercase">{item.label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Pregunta 8 */}
              <section>
                <label className="block text-gray-800 font-bold mb-4 italic">8. Define tu presupuesto aproximado</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {budgetOptions.map(opt => (
                    <button 
                      key={opt.id} 
                      onClick={() => updateField("budget", opt.id)}
                      className={`p-4 border-2 rounded-2xl text-left transition-all ${formData.budget === opt.id ? "border-[#2563EB] bg-blue-50" : "border-gray-50"}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <opt.icon className={`w-5 h-5 ${formData.budget === opt.id ? "text-[#2563EB]" : "text-gray-300"}`} />
                        <span className="font-bold text-gray-900">{opt.label}</span>
                      </div>
                      <p className="text-xs text-gray-500">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </section>

              {/* Pregunta 9 */}
              <section>
                <label className="block text-gray-800 font-bold mb-4 italic">9. Tu clima ideal es...</label>
                <div className="flex gap-4">
                  {weatherPrefs.map(w => (
                    <button 
                      key={w.id} 
                      onClick={() => updateField("weather", w.id)}
                      className={`flex-1 p-4 border-2 rounded-2xl flex items-center gap-4 transition-all ${formData.weather === w.id ? "border-orange-400 bg-orange-50" : "border-gray-50"}`}
                    >
                      <w.icon className={`w-8 h-8 ${formData.weather === w.id ? "text-orange-500" : "text-gray-300"}`} />
                      <div className="text-left">
                        <p className="font-bold text-sm text-gray-900">{w.label}</p>
                        <p className="text-[10px] text-gray-500 uppercase">{w.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* PASO 3: Ritmo y Transporte (Preguntas 10-11) */}
          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <h2 className="text-xl font-bold text-[#2563EB] flex items-center gap-2 underline decoration-[#F59E0B]">
                <Sparkles className="w-5 h-5" /> Últimos toques mágicos
              </h2>

              <section>
                <label className="block text-gray-800 font-bold mb-4 italic">10. ¿Cómo quieres que sea el ritmo del viaje?</label>
                <div className="grid grid-cols-2 gap-4">
                  {paceOptions.map(p => (
                    <button 
                      key={p.id} 
                      onClick={() => updateField("pace", p.id)}
                      className={`p-6 border-2 rounded-3xl text-center transition-all ${formData.pace === p.id ? "border-[#2563EB] bg-blue-50 shadow-inner" : "border-gray-50"}`}
                    >
                      <p className="font-black text-lg text-gray-900">{p.label}</p>
                      <p className="text-sm text-gray-500">{p.desc}</p>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <label className="block text-gray-800 font-bold mb-4 italic">11. ¿Cuál es tu transporte preferido?</label>
                <div className="grid grid-cols-2 gap-4">
                  {transportPrefs.map(t => (
                    <button 
                      key={t.id} 
                      onClick={() => updateField("transport", t.id)}
                      className={`p-6 border-2 rounded-3xl flex flex-col items-center transition-all ${formData.transport === t.id ? "border-[#06B6D4] bg-cyan-50 shadow-inner" : "border-gray-50"}`}
                    >
                      <t.icon className={`w-10 h-10 mb-2 ${formData.transport === t.id ? "text-[#06B6D4]" : "text-gray-300"}`} />
                      <p className="font-black text-gray-900">{t.label}</p>
                      <p className="text-xs text-gray-500">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-2xl flex items-center gap-3">
                <Ticket className="text-orange-500" />
                <p className="text-xs text-orange-800 font-medium">¡Excelente elección! Estamos preparando una selección de destinos basada en tus respuestas.</p>
              </div>
            </div>
          )}

        </div>

        <div className="mt-12 flex justify-between items-center border-t pt-8">
          {step > 1 ? (
            <button 
              onClick={prevStep} 
              className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest hover:text-[#2563EB] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" /> Regresar
            </button>
          ) : (
            <div />
          )}

          <button 
            onClick={step === 3 ? handleFinish : nextStep}
            className="px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-black rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3"
          >
            {step === 3 ? "¡Terminar mi Perfil!" : "Continuar"}
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}