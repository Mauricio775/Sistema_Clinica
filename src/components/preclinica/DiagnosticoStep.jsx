import { useState } from "react";
import EncabezadoExpediente from "./EncabezadoExpediente";

function DiagnosticoStep({ paciente, onGuardar, onAtras }) {
  const [form, setForm] = useState(() => ({
    diagnostico: paciente?.diagnostico ?? "",
    remitirA: paciente?.remitirA ?? "",
  }));

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  const handleGuardar = () => {
    if (!form.remitirA) return;
    onGuardar(form);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg">Diagnóstico</h2>
      <EncabezadoExpediente paciente={paciente} />

      <div className="mb-4">
        <label className="text-sm text-gray-600 font-medium">Diagnóstico</label>
        <textarea
          value={form.diagnostico}
          onChange={(e) => handleChange("diagnostico", e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="text-sm text-gray-600 font-medium">Remitir a:</label>
        <select
          value={form.remitirA}
          onChange={(e) => handleChange("remitirA", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione...</option>
          <option>Nutrición</option>
          <option>Ginecología</option>
          <option>Fisioterapia</option>
          <option>Medicina General</option>
          <option>Psicología</option>
          <option>Odontología</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onAtras}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          Atrás
        </button>
        <button
          onClick={handleGuardar}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Guardar y remitir
        </button>
      </div>
    </div>
  );
}

export default DiagnosticoStep;
