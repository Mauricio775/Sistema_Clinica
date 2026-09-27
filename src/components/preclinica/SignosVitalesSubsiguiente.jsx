import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function construirEstadoInicial(paciente) {
  return {
    fechaHora: paciente?.fechaHora ?? "",
    edad: paciente?.edad ?? "",
    peso: paciente?.peso ?? "",
    talla: paciente?.talla ?? "",
    temperatura: paciente?.temperatura ?? "",
    presionArterial: paciente?.presionArterial ?? "",
    pulso: paciente?.pulso ?? "",
  };
}

function SignosVitalesSubsiguiente({ paciente, onGuardar, onAtras }) {
  const [form, setForm] = useState(() => construirEstadoInicial(paciente));

  const handleChange = (campo, valor) =>
    setForm((prev) => ({ ...prev, [campo]: valor }));

  const handleGuardar = (e) => {
    e.preventDefault();
    onGuardar(form);
  };

  return (
    <form onSubmit={handleGuardar} className="space-y-8">
      <section>
        <p className={seccionTitulo}>Signos vitales</p>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-700">Fecha y hora</label>
            <input
              type="datetime-local"
              value={form.fechaHora}
              onChange={(e) => handleChange("fechaHora", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Edad</label>
            <input
              type="number"
              value={form.edad}
              onChange={(e) => handleChange("edad", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Peso (Kg)</label>
            <input
              type="number"
              value={form.peso}
              onChange={(e) => handleChange("peso", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Talla (Cm)</label>
            <input
              type="number"
              value={form.talla}
              onChange={(e) => handleChange("talla", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Temperatura (°C)</label>
            <input
              type="text"
              value={form.temperatura}
              onChange={(e) => handleChange("temperatura", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Presión arterial (mmHg)</label>
            <input
              type="text"
              value={form.presionArterial}
              onChange={(e) => handleChange("presionArterial", e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Pulso</label>
            <input
              type="text"
              value={form.pulso}
              onChange={(e) => handleChange("pulso", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onAtras}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Guardar y continuar
        </button>
      </div>
    </form>
  );
}

export default SignosVitalesSubsiguiente;
