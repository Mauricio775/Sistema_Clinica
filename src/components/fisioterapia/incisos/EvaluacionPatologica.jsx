import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

const inspeccionFisicaList = [
  "Postura",
  "Marcha",
  "Estado de la piel",
  "Deformación",
  "Uso de aditamento",
];

const initialInspeccion = inspeccionFisicaList.reduce(
  (acc, i) => ({ ...acc, [i]: { estado: "", observacion: "" } }),
  {}
);

const signosPresencia = [
  { key: "inflamacion", label: "Inflamación" },
  { key: "edema", label: "Edema" },
  { key: "hematoma", label: "Hematoma" },
];

function EvaluacionPatologica() {
  const [inspeccion, setInspeccion] = useState(initialInspeccion);
  const [ubicacionDolor, setUbicacionDolor] = useState("");
  const [escalaDolor, setEscalaDolor] = useState("");
  const [signos, setSignos] = useState({ inflamacion: "", edema: "", hematoma: "" });
  const [movilidadArticular, setMovilidadArticular] = useState({
    izquierda: "",
    derecha: "",
  });
  const [fuerzaMuscular, setFuerzaMuscular] = useState({ izquierda: "", derecha: "" });
  const [pruebaEspecifica, setPruebaEspecifica] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleInspeccion = (item, campo, valor) =>
    setInspeccion((prev) => ({
      ...prev,
      [item]: { ...prev[item], [campo]: valor },
    }));

  const handleSigno = (key, valor) =>
    setSignos((prev) => ({ ...prev, [key]: valor }));

  return (
    <div className="space-y-6">
      <div>
        <p className={seccionTitulo}>Inspección física</p>
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {inspeccionFisicaList.map((item) => (
            <div
              key={item}
              className="flex flex-wrap items-center gap-4 px-4 py-2"
            >
              <span className="text-sm text-gray-700 w-40">{item}</span>
              <div className="flex gap-4">
                {["Normal", "Alterada"].map((op) => (
                  <label
                    key={op}
                    className="flex items-center gap-1 text-sm text-gray-600"
                  >
                    <input
                      type="radio"
                      name={`inspeccion-${item}`}
                      checked={inspeccion[item].estado === op}
                      onChange={() => handleInspeccion(item, "estado", op)}
                      className="accent-[rgb(68,45,184)]"
                    />
                    {op}
                  </label>
                ))}
              </div>
              <input
                type="text"
                placeholder="Observación"
                value={inspeccion[item].observacion}
                onChange={(e) =>
                  handleInspeccion(item, "observacion", e.target.value)
                }
                className="flex-1 min-w-40 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="text-sm text-gray-700">Ubicación del dolor</label>
          <input
            type="text"
            value={ubicacionDolor}
            onChange={(e) => setUbicacionDolor(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-sm text-gray-700">
            Escala numérica del dolor (0-10)
          </label>
          <select
            value={escalaDolor}
            onChange={(e) => setEscalaDolor(e.target.value)}
            className={inputClass}
          >
            <option value="">Seleccione...</option>
            {Array.from({ length: 11 }, (_, n) => n).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Inflamación, edema y hematoma</p>
        <div className="grid grid-cols-3 gap-5">
          {signosPresencia.map(({ key, label }) => (
            <div key={key}>
              <label className="text-sm text-gray-700 block mb-1">{label}</label>
              <div className="flex gap-4">
                {["Sí", "No"].map((op) => (
                  <label
                    key={op}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <input
                      type="radio"
                      name={key}
                      checked={signos[key] === op}
                      onChange={() => handleSigno(key, op)}
                      className="accent-[rgb(68,45,184)]"
                    />
                    {op}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Movilidad articular y fuerza muscular</p>
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
            <span className="text-xs font-medium text-gray-500">Evaluación</span>
            <div className="flex gap-6">
              <span className="text-xs font-medium text-gray-500 w-28 text-center">
                Izquierda
              </span>
              <span className="text-xs font-medium text-gray-500 w-28 text-center">
                Derecha
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm text-gray-700">Movilidad articular</span>
            <div className="flex gap-6">
              <input
                type="text"
                value={movilidadArticular.izquierda}
                onChange={(e) =>
                  setMovilidadArticular((prev) => ({
                    ...prev,
                    izquierda: e.target.value,
                  }))
                }
                className="w-28 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
              />
              <input
                type="text"
                value={movilidadArticular.derecha}
                onChange={(e) =>
                  setMovilidadArticular((prev) => ({
                    ...prev,
                    derecha: e.target.value,
                  }))
                }
                className="w-28 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm text-gray-700">Fuerza muscular</span>
            <div className="flex gap-6">
              <input
                type="text"
                value={fuerzaMuscular.izquierda}
                onChange={(e) =>
                  setFuerzaMuscular((prev) => ({
                    ...prev,
                    izquierda: e.target.value,
                  }))
                }
                className="w-28 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
              />
              <input
                type="text"
                value={fuerzaMuscular.derecha}
                onChange={(e) =>
                  setFuerzaMuscular((prev) => ({
                    ...prev,
                    derecha: e.target.value,
                  }))
                }
                className="w-28 border border-gray-300 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-700">Prueba específica</label>
        <input
          type="text"
          value={pruebaEspecifica}
          onChange={(e) => setPruebaEspecifica(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-sm text-gray-700">Diagnóstico</label>
        <textarea
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
          rows={3}
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-sm text-gray-700">Observaciones</label>
        <textarea
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          rows={3}
          className={inputClass}
        />
      </div>
    </div>
  );
}

export default EvaluacionPatologica;
