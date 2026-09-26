import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import { entrevistaPsicologica, sintomasPsicologicosList } from "../../data/preguntasPsicologia";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function crearValoresIniciales(paciente) {
  const valores = {};
  Object.values(entrevistaPsicologica).forEach((seccion) => {
    seccion.forEach((campo) => {
      valores[campo.key] = paciente?.[campo.key] ?? "";
    });
  });
  sintomasPsicologicosList.forEach((item) => {
    valores[`sintoma_${item.key}`] = paciente?.[`sintoma_${item.key}`] ?? false;
  });
  return valores;
}

function FormularioPsicologia({ paciente }) {
  const { actualizarExpediente } = useExpedientes();
  const [valores, setValores] = useState(() => crearValoresIniciales(paciente));

  const handleValor = (clave, valor) => {
    const nuevos = { ...valores, [clave]: valor };
    setValores(nuevos);
    actualizarExpediente(paciente.cuenta, nuevos);
  };

  const renderCampo = (campo) => {
    const { key, label, type, options } = campo;

    if (type === "text") {
      return (
        <div key={key}>
          <label className="text-sm text-gray-700">{label}</label>
          <input
            type="text"
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

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-8">
      <h2 className="font-bold text-gray-800 text-lg">
        Entrevista Psicológica para Adultos
      </h2>

      <div>
        <p className={seccionTitulo}>I. Información Personal</p>
        <div className="space-y-4">
          {entrevistaPsicologica.informacionPersonal.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>II. Antecedentes de la Situación</p>
        <div className="space-y-4">
          {entrevistaPsicologica.antecedentesSituacion.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>III. Historia Familiar</p>
        <div className="space-y-4">
          {entrevistaPsicologica.historiaFamiliar.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>IV. Socialización</p>
        <div className="space-y-4">
          {entrevistaPsicologica.socializacion.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>V. Aspectos Académicos y Laborales</p>
        <div className="space-y-4">
          {entrevistaPsicologica.aspectosAcademicosLaborales.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>VI. Antecedentes Médicos y Psiquiátricos</p>
        <div className="space-y-4">
          {entrevistaPsicologica.antecedentesMedicosPsiquiatricos.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Marque con una X si en su vida ha presentado:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 rounded-lg p-4">
          {sintomasPsicologicosList.map((item) => (
            <label key={item.key} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={valores[`sintoma_${item.key}`]}
                onChange={(e) => handleValor(`sintoma_${item.key}`, e.target.checked)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>VII. Historial de Relaciones Interpersonales y Sexual</p>
        <div className="space-y-4">
          {entrevistaPsicologica.relacionesInterpersonalesSexual.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>VIII. Hábitos, Aspectos Judiciales y Personalidad</p>
        <div className="space-y-4">
          {entrevistaPsicologica.habitosJudicialesPersonalidad.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>IX. Conducta Observada</p>
        <div className="space-y-4">
          {entrevistaPsicologica.conductaObservada.map(renderCampo)}
        </div>
      </div>
    </div>
  );
}

export default FormularioPsicologia;