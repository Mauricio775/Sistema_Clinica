import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

const procedimientosList = [
  "Termoterapia",
  "Electroterapia",
  "Ultrasonido T",
  "Masoterapia",
  "Vendaje T",
  "Mov. Terapéutica",
  "Ejer. Fortalecimiento",
  "Ejer. Estiramiento",
  "Ejer. Propioceptivo",
];

const initialRegistro = {
  fecha: "",
  terapeuta: "",
  procedimientos: procedimientosList.reduce(
    (acc, p) => ({ ...acc, [p]: false }),
    {}
  ),
  observaciones: "",
};

function HojaProcedimientos() {
  const [registro, setRegistro] = useState(initialRegistro);
  const [registros, setRegistros] = useState([]);

  const handleChange = (campo, valor) =>
    setRegistro((prev) => ({ ...prev, [campo]: valor }));

  const toggleProcedimiento = (nombre) =>
    setRegistro((prev) => ({
      ...prev,
      procedimientos: {
        ...prev.procedimientos,
        [nombre]: !prev.procedimientos[nombre],
      },
    }));

  const agregarRegistro = () => {
    if (!registro.fecha) return;
    setRegistros((prev) => [...prev, registro]);
    setRegistro(initialRegistro);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="text-sm text-gray-700">Fecha</label>
          <input
            type="date"
            value={registro.fecha}
            onChange={(e) => handleChange("fecha", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">Nombre del terapeuta</label>
          <input
            type="text"
            value={registro.terapeuta}
            onChange={(e) => handleChange("terapeuta", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Nota de evolución</p>
        <div className="grid grid-cols-3 gap-3">
          {procedimientosList.map((p) => (
            <label
              key={p}
              className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2"
            >
              <input
                type="checkbox"
                checked={registro.procedimientos[p]}
                onChange={() => toggleProcedimiento(p)}
                className="accent-[rgb(68,45,184)]"
              />
              {p}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-700">Observaciones</label>
        <textarea
          value={registro.observaciones}
          onChange={(e) => handleChange("observaciones", e.target.value)}
          rows={3}
          className={inputClass}
        />
      </div>

      <button
        type="button"
        onClick={agregarRegistro}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Agregar registro
      </button>

      {registros.length > 0 && (
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {registros.map((r, i) => (
            <div key={`${r.fecha}-${i}`} className="px-4 py-3 text-sm">
              <p className="font-medium text-gray-800">
                {r.fecha} · {r.terapeuta}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {procedimientosList.filter((p) => r.procedimientos[p]).join(", ") ||
                  "Sin procedimientos marcados"}
              </p>
              {r.observaciones && (
                <p className="text-gray-600 text-xs mt-1">{r.observaciones}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HojaProcedimientos;
