import { especialidadesRemision } from "../data/roles";

const controlClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500";

function RemisionMedica({
  etiquetaDiagnostico,
  diagnostico,
  remitirA,
  onChange,
  excluir = [],
}) {
  const opciones = especialidadesRemision.filter((e) => !excluir.includes(e));

  return (
    <>
      <div className="mb-4">
        <label className="text-sm text-gray-600 font-medium">
          {etiquetaDiagnostico}
        </label>
        <textarea
          value={diagnostico}
          onChange={(e) => onChange("diagnostico", e.target.value)}
          rows={4}
          className={controlClass}
        />
      </div>

      <div className="mb-6">
        <label className="text-sm text-gray-600 font-medium">Remitir a:</label>
        <select
          value={remitirA}
          onChange={(e) => onChange("remitirA", e.target.value)}
          className={controlClass}
        >
          <option value="">Seleccione...</option>
          {opciones.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default RemisionMedica;
