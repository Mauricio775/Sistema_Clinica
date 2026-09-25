import { useState } from "react";

function Nutricion() {
  const [form, setForm] = useState({
    peso: "",
    talla: "",
    alergias: "",
    observaciones: "",
  });
  const [guardado, setGuardado] = useState(false);

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  const handleGuardar = () => {
    console.log("Datos guardados:", form); 
    setGuardado(true);
  };

  if (guardado) {
    return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h2 className="font-bold text-gray-800 text-lg mb-1">
          Evaluación de nutrición guardada
        </h2>
        <button
          onClick={() => setGuardado(false)}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition mt-4"
        >
          Registrar otra evaluación
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
      <h2 className="font-bold text-gray-800 text-lg mb-4">
        Evaluación Nutricional
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 font-medium">
            
          </label>
          <input
            type="number"
            value={form.peso}
            onChange={(e) => handleChange("peso", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-medium">
            
          </label>
          <input
            type="number"
            value={form.talla}
            onChange={(e) => handleChange("talla", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600 font-medium">
          
        </label>
        <input
          type="text"
          value={form.alergias}
          onChange={(e) => handleChange("alergias", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full">
        <label className="text-sm text-gray-600 font-medium">
          
        </label>
        <textarea
          value={form.observaciones}
          onChange={(e) => handleChange("observaciones", e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleGuardar}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Guardar evaluación
      </button>
    </div>
  );
}

export default Nutricion;