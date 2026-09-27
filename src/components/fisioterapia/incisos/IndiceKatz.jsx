import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const actividadesKatz = [
  "Comer",
  "Vestirse",
  "Bañarse",
  "Trasladarse",
  "Ir al baño",
  "Continencia",
];

const initialValores = actividadesKatz.reduce((acc, a) => ({ ...acc, [a]: "" }), {});

function IndiceKatz() {
  const [valores, setValores] = useState(initialValores);
  const [interpretacion, setInterpretacion] = useState("");

  const handleValor = (actividad, valor) =>
    setValores((prev) => ({ ...prev, [actividad]: valor }));

  const total = actividadesKatz.reduce(
    (sum, a) => sum + (Number(valores[a]) || 0),
    0
  );

  return (
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
        {actividadesKatz.map((a) => (
          <div key={a} className="flex items-center justify-between px-4 py-2">
            <span className="text-sm text-gray-700">{a}</span>
            <div className="flex gap-4">
              {["0", "1"].map((op) => (
                <label key={op} className="flex items-center gap-1 text-sm text-gray-600">
                  <input
                    type="radio"
                    name={`katz-${a}`}
                    checked={valores[a] === op}
                    onChange={() => handleValor(a, op)}
                    className="accent-[rgb(68,45,184)]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm font-medium text-gray-800">Total: {total}</p>

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

export default IndiceKatz;
