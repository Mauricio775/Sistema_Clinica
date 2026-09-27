import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const condicionesSOT = [
  "Ojos abiertos - superficie fija",
  "Ojos cerrados - superficie fija",
  "Entorno móvil - superficie fija",
  "Ojos abiertos - superficie móvil",
  "Ojos cerrados - superficie móvil",
  "Entorno móvil - superficie móvil",
];

const camposResultado = ["resultado1", "resultado2", "resultado3", "resultadoFinal"];

const initialResultados = condicionesSOT.reduce(
  (acc, c) => ({
    ...acc,
    [c]: { resultado1: "", resultado2: "", resultado3: "", resultadoFinal: "" },
  }),
  {}
);

function TestSOT() {
  const [resultados, setResultados] = useState(initialResultados);
  const [interpretacion, setInterpretacion] = useState("");

  const handleValor = (condicion, campo, valor) =>
    setResultados((prev) => ({
      ...prev,
      [condicion]: { ...prev[condicion], [campo]: valor },
    }));

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="text-left px-3 py-2">Condición</th>
              <th className="px-3 py-2">Resultado 1</th>
              <th className="px-3 py-2">Resultado 2</th>
              <th className="px-3 py-2">Resultado 3</th>
              <th className="px-3 py-2">Resultado final</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {condicionesSOT.map((c) => (
              <tr key={c}>
                <td className="px-3 py-2 text-gray-700">{c}</td>
                {camposResultado.map((campo) => (
                  <td key={campo} className="px-3 py-2">
                    <input
                      type="text"
                      value={resultados[c][campo]}
                      onChange={(e) => handleValor(c, campo, e.target.value)}
                      className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default TestSOT;
