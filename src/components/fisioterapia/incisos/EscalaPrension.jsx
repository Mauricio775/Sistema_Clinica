import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const tiposPrension = [
  "Esférica",
  "Cilíndrica",
  "Gancho",
  "Tridigital",
  "Terminoterminal",
  "Subterminal",
  "Lateral",
  "Subtermino lateral",
];

const initialValores = tiposPrension.reduce(
  (acc, t) => ({
    ...acc,
    [t]: { valorDer: "", observacionesDer: "", valorIzq: "", observacionesIzq: "" },
  }),
  {}
);

function EscalaPrension() {
  const [valores, setValores] = useState(initialValores);
  const [interpretacion, setInterpretacion] = useState("");

  const handleValor = (tipo, campo, valor) =>
    setValores((prev) => ({
      ...prev,
      [tipo]: { ...prev[tipo], [campo]: valor },
    }));

  const calcularTotal = (tipo) => {
    const der = Number(valores[tipo].valorDer) || 0;
    const izq = Number(valores[tipo].valorIzq) || 0;
    return der + izq;
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="text-left px-3 py-2">Tipo de prensión</th>
              <th className="px-3 py-2">Valor der.</th>
              <th className="px-3 py-2">Observaciones</th>
              <th className="px-3 py-2">Valor izq.</th>
              <th className="px-3 py-2">Observaciones</th>
              <th className="px-3 py-2">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tiposPrension.map((tipo) => (
              <tr key={tipo}>
                <td className="px-3 py-2 text-gray-700">{tipo}</td>
                <td className="px-3 py-2">
                  <select
                    value={valores[tipo].valorDer}
                    onChange={(e) => handleValor(tipo, "valorDer", e.target.value)}
                    className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                  >
                    <option value="">-</option>
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={valores[tipo].observacionesDer}
                    onChange={(e) =>
                      handleValor(tipo, "observacionesDer", e.target.value)
                    }
                    className="w-32 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                  />
                </td>
                <td className="px-3 py-2">
                  <select
                    value={valores[tipo].valorIzq}
                    onChange={(e) => handleValor(tipo, "valorIzq", e.target.value)}
                    className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                  >
                    <option value="">-</option>
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={valores[tipo].observacionesIzq}
                    onChange={(e) =>
                      handleValor(tipo, "observacionesIzq", e.target.value)
                    }
                    className="w-32 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                  />
                </td>
                <td className="px-3 py-2 text-center font-medium text-gray-800">
                  {calcularTotal(tipo)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500">
        Guía de valores: 0 = Imposible · 1 = Débil · 2 = Regular · 3 = Aceptable ·
        4 = Bueno · 5 = Normal
      </p>

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

export default EscalaPrension;
