import { useState } from "react";
import { segmentosMovimiento } from "../../../data/segmentosMovimiento";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function crearValoresIniciales() {
  const valores = {};
  segmentosMovimiento.forEach((seg) => {
    seg.movimientos.forEach((m) => {
      valores[`${seg.grupo}-${m}`] = "";
    });
  });
  return valores;
}

function EscalaDaniels() {
  const [valores, setValores] = useState(crearValoresIniciales);
  const [interpretacion, setInterpretacion] = useState("");
  const [firmaTerapeuta, setFirmaTerapeuta] = useState("");

  const handleValor = (clave, valor) =>
    setValores((prev) => ({ ...prev, [clave]: valor }));

  return (
    <div className="space-y-6">
      {segmentosMovimiento.map((seg) => (
        <div key={seg.grupo}>
          <p className={seccionTitulo}>{seg.grupo}</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {seg.movimientos.map((m) => {
              const clave = `${seg.grupo}-${m}`;
              return (
                <div
                  key={clave}
                  className="flex items-center justify-between px-4 py-2"
                >
                  <span className="text-sm text-gray-700">{m}</span>
                  <select
                    value={valores[clave]}
                    onChange={(e) => handleValor(clave, e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                  >
                    <option value="">-</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div>
        <label className="text-sm text-gray-700">Interpretación</label>
        <textarea
          value={interpretacion}
          onChange={(e) => setInterpretacion(e.target.value)}
          rows={3}
          className={inputClass}
        />
      </div>
      <div>
        <label className="text-sm text-gray-700">Firma del terapeuta</label>
        <input
          type="text"
          value={firmaTerapeuta}
          onChange={(e) => setFirmaTerapeuta(e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
}

export default EscalaDaniels;
