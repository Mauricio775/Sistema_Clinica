import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import {
  entrevistaPsicologica,
  sintomasPsicologicosList,
  NUMERO_CITAS,
} from "../../data/preguntasPsicologia";
import {
  ROL_GINECOLOGIA,
  ROL_NUTRICION,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_ODONTOLOGIA,
} from "../../data/roles";

const especialidades = [
  ROL_GINECOLOGIA,
  ROL_NUTRICION,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_ODONTOLOGIA,
];

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

const citasVacias = () =>
  Array.from({ length: NUMERO_CITAS }, () => ({ fecha: "", hora: "", firmo: false }));

function crearValoresIniciales(paciente) {
  const valores = {};
  Object.values(entrevistaPsicologica).forEach((seccion) => {
    if (!Array.isArray(seccion)) return;
    seccion.forEach((campo) => {
      valores[campo.key] = paciente?.[campo.key] ?? "";
    });
  });
  sintomasPsicologicosList.forEach((item) => {
    valores[`sintoma_${item.key}`] = paciente?.[`sintoma_${item.key}`] ?? false;
  });
  valores.remitirNueva = "";
  return valores;
}

function FormularioPsicologia({ paciente, onGuardado }) {
  const { actualizarExpediente } = useExpedientes();
  const [valores, setValores] = useState(() => crearValoresIniciales(paciente));
  const [citas, setCitas] = useState(paciente?.citasPsicologia ?? citasVacias());
  const [guardado, setGuardado] = useState(false);

  const handleValor = (clave, valor) => {
    setValores((prev) => ({ ...prev, [clave]: valor }));
    setGuardado(false);
  };

  const handleCita = (indice, campo, valor) => {
    setCitas((prev) =>
      prev.map((c, i) => (i === indice ? { ...c, [campo]: valor } : c))
    );
    setGuardado(false);
  };

  const handleGuardar = () => {
    const { remitirNueva, ...resto } = valores;
    const datos = { ...resto, citasPsicologia: citas };
    if (remitirNueva) {
      datos.remitirA = remitirNueva;
      datos.remisionDesde = "Psicología";
    }
    actualizarExpediente(paciente.cuenta, datos);
    setGuardado(true);
    if (remitirNueva) onGuardado?.(remitirNueva);
  };

  const renderCampo = (campo) => {
    const { key, label, type, options, mostrarSi } = campo;

    if (mostrarSi && valores[mostrarSi.key] !== mostrarSi.valor) return null;

    if (["text", "date", "time"].includes(type)) {
      return (
        <div key={key}>
          <label className="text-sm text-gray-700">{label}</label>
          <input
            type={type}
            value={valores[key]}
            onChange={(e) => handleValor(key, e.target.value)}
            className={inputClass}
          />
        </div>
      );
    }

    if (type === "textarea") {
      return (
        <div key={key}>
          <label className="text-sm text-gray-700">{label}</label>
          <textarea
            value={valores[key]}
            onChange={(e) => handleValor(key, e.target.value)}
            rows={3}
            className={inputClass}
          />
        </div>
      );
    }

    if (type === "radio") {
      return (
        <div key={key}>
          <p className="text-sm text-gray-700 mb-1">{label}</p>
          <div className="flex flex-wrap gap-4">
            {options.map((op) => (
              <label key={op} className="flex items-center gap-1 text-sm text-gray-700">
                <input
                  type="radio"
                  name={key}
                  value={op}
                  checked={valores[key] === op}
                  onChange={(e) => handleValor(key, e.target.value)}
                />
                {op}
              </label>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderSeccion = (titulo, clave) => (
    <div>
      <p className={seccionTitulo}>{titulo}</p>
      <div className="space-y-4">{entrevistaPsicologica[clave].map(renderCampo)}</div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-8">
      <div>
        <h2 className="font-bold text-gray-800 text-lg">Entrevista Psicológica para Adultos</h2>
        <p className="text-gray-500 text-sm">
          Datos personales del paciente: ver ficha de PreClínica
        </p>
      </div>

      {renderSeccion("I. Información personal (complementaria)", "datosComplementarios")}
      {renderSeccion("Consulta", "consulta")}
      {renderSeccion("II. Antecedentes de la situación", "antecedentesSituacion")}
      {renderSeccion("III. Historia familiar", "historiaFamiliar")}
      {renderSeccion("IV. Socialización", "socializacion")}
      {renderSeccion("V. Aspectos académicos y laborales", "aspectosAcademicosLaborales")}
      {renderSeccion("VI. Antecedentes médicos y psiquiátricos", "antecedentesMedicosPsiquiatricos")}

      <div>
        <p className={seccionTitulo}>Marque si en su vida ha presentado:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 rounded-lg p-4">
          {sintomasPsicologicosList.map((item) => (
            <label key={item.key} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={!!valores[`sintoma_${item.key}`]}
                onChange={(e) => handleValor(`sintoma_${item.key}`, e.target.checked)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {renderSeccion("Periodo y síntomas", "antecedentesMedicosPeriodo")}
      {renderSeccion("VII. Historial de relaciones interpersonales y sexual", "relacionesInterpersonalesSexual")}
      {renderSeccion("VIII. Hábitos, aspectos judiciales y personalidad", "habitosJudicialesPersonalidad")}
      {renderSeccion("IX. Conducta observada", "conductaObservada")}

      <div>
        <p className={seccionTitulo}>Citas</p>
        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-2 text-left font-medium text-gray-600">No.</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Fecha</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Hora</th>
                <th className="px-3 py-2 text-left font-medium text-gray-600">Firma del paciente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {citas.map((cita, i) => (
                <tr key={i}>
                  <td className="px-3 py-2 text-gray-700">{i + 1}</td>
                  <td className="px-3 py-2">
                    <input
                      type="date"
                      value={cita.fecha}
                      onChange={(e) => handleCita(i, "fecha", e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="time"
                      value={cita.hora}
                      onChange={(e) => handleCita(i, "hora", e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <label className="flex items-center gap-2 text-gray-700">
                      <input
                        type="checkbox"
                        checked={cita.firmo}
                        onChange={(e) => handleCita(i, "firmo", e.target.checked)}
                      />
                      Firmó
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Remisión a otra especialidad (opcional)</p>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Remitir a:</label>
            <select
              value={valores.remitirNueva}
              onChange={(e) => handleValor("remitirNueva", e.target.value)}
              className={inputClass}
            >
              <option value="">No remitir</option>
              {especialidades.map((esp) => (
                <option key={esp} value={esp}>
                  {esp}
                </option>
              ))}
            </select>
          </div>
          {valores.remitirNueva && entrevistaPsicologica.remision.map(renderCampo)}
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        {guardado && <span className="text-sm text-green-600 font-medium">✓ Cambios guardados</span>}
        <button
          onClick={handleGuardar}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          {valores.remitirNueva ? "Guardar y remitir" : "Guardar cambios"}
        </button>
      </div>
    </div>
  );
}

export default FormularioPsicologia;