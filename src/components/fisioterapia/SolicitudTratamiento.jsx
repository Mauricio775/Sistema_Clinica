import {
  TIPO_MEDICACION,
  tiposTratamiento,
  viasAdministracion,
} from "../../data/tratamientos";

const controlClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500";

const labelClass = "text-sm text-gray-600 font-medium";

function SolicitudTratamiento({ desea, onDeseaChange, valores, onChange }) {
  const esMedicacion = valores.tipo === TIPO_MEDICACION;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">
        Solicitud de tratamiento
      </h2>

      <div className="mb-4">
        <p className={labelClass}>¿Desea solicitar tratamiento en PreClínica?</p>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              name="solicitarTratamiento"
              checked={desea}
              onChange={() => onDeseaChange(true)}
              className="accent-[rgb(68,45,184)]"
            />
            Sí
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              name="solicitarTratamiento"
              checked={!desea}
              onChange={() => onDeseaChange(false)}
              className="accent-[rgb(68,45,184)]"
            />
            No
          </label>
        </div>
      </div>

      {desea && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Tipo de tratamiento / procedimiento</label>
            <select
              value={valores.tipo}
              onChange={(e) => onChange("tipo", e.target.value)}
              className={controlClass}
            >
              <option value="">Seleccione...</option>
              {tiposTratamiento.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          {esMedicacion && (
            <div>
              <label className={labelClass}>Vía de administración</label>
              <select
                value={valores.via}
                onChange={(e) => onChange("via", e.target.value)}
                className={controlClass}
              >
                <option value="">Seleccione...</option>
                {viasAdministracion.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className={labelClass}>Indicaciones / Dosis / Observaciones</label>
            <textarea
              value={valores.indicaciones}
              onChange={(e) => onChange("indicaciones", e.target.value)}
              rows={4}
              placeholder={
                esMedicacion
                  ? "Ej: Diclofenaco 75 mg, una dosis"
                  : "Instrucciones para el personal de enfermería"
              }
              className={controlClass}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SolicitudTratamiento;
