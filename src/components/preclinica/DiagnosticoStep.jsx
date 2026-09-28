import { useState } from "react";
import EncabezadoExpediente from "./EncabezadoExpediente";
import RemisionMedica from "../RemisionMedica";

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

      <RemisionMedica
        etiquetaDiagnostico="Diagnóstico de enfermería"
        diagnostico={form.diagnostico}
        remitirA={form.remitirA}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onAtras({ diagnostico: form.diagnostico })}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          Atrás
        </button>
        <button
          onClick={handleGuardar}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Remitir
        </button>
      </div>
    </div>
  );
}

export default DiagnosticoStep;
