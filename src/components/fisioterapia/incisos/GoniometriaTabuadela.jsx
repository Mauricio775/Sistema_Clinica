import { useState } from "react";
import { segmentosMovimiento } from "../../../data/segmentosMovimiento";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function crearValoresIniciales() {
  const valores = {};
  segmentosMovimiento.forEach((seg) => {
    seg.movimientos.forEach((m) => {
      valores[`${seg.grupo}-${m}`] = { izquierda: "", derecha: "" };
    });
  });
  return valores;
}

function GoniometriaTabuadela() {
  const [valores, setValores] = useState(crearValoresIniciales);
  const [interpretacion, setInterpretacion] = useState("");

  const handleValor = (clave, lado, valor) =>
    setValores((prev) => ({
      ...prev,
      [clave]: { ...prev[clave], [lado]: valor },
    }));

  return (
    <div className="space-y-6">
      {segmentosMovimiento.map((seg) => (
        <div key={seg.grupo}>
          <p className={seccionTitulo}>{seg.grupo}</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
              <span className="text-xs font-medium text-gray-500">Movimiento</span>
              <div className="flex gap-6">
                <span className="text-xs font-medium text-gray-500 w-16 text-center">
                  Izq. (°)
                </span>
                <span className="text-xs font-medium text-gray-500 w-16 text-center">
                  Der. (°)
                </span>
              </div>
            </div>
            {seg.movimientos.map((m) => {
              const clave = `${seg.grupo}-${m}`;
              return (
                <div
                  key={clave}
                  className="flex items-center justify-between px-4 py-2"
                >
                  <span className="text-sm text-gray-700">{m}</span>
                  <div className="flex gap-6">
                    <input
                      type="number"
                      value={valores[clave].izquierda}
                      onChange={(e) =>
                        handleValor(clave, "izquierda", e.target.value)
                      }
                      className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                    />
                    <input
                      type="number"
                      value={valores[clave].derecha}
                      onChange={(e) =>
                        handleValor(clave, "derecha", e.target.value)
                      }
                      className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                    />
                  </div>
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
    </div>
  );
}

export default GoniometriaTabuadela;
