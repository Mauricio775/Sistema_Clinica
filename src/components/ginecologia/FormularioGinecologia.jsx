import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import { fichaGinecologica } from "../../data/preguntasGinecologia";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function crearValoresIniciales(paciente) {
  const valores = {};
  Object.entries(fichaGinecologica).forEach(([clave, seccion]) => {
    if (Array.isArray(seccion) && clave !== "antecedentesObstetricosColumnas") {
      seccion.forEach((campo) => {
        valores[campo.key] = paciente?.[campo.key] ?? (campo.type === "checkbox" ? false : "");
      });
    }
  });
  return valores;
}

function FormularioGinecologia({ paciente }) {
  const { actualizarExpediente } = useExpedientes();
  const [valores, setValores] = useState(() => crearValoresIniciales(paciente));
  const [obstetricos, setObstetricos] = useState(paciente?.antecedentesObstetricos ?? {});

  const handleValor = (clave, valor) => {
    const nuevos = { ...valores, [clave]: valor };
    setValores(nuevos);
    actualizarExpediente(paciente.cuenta, nuevos);
  };

  const handleObstetrico = (columna, valor) => {
    const nuevos = { ...obstetricos, [columna]: valor };
    setObstetricos(nuevos);
    actualizarExpediente(paciente.cuenta, { antecedentesObstetricos: nuevos });
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

    if (type === "checkbox") {
      return (
        <label key={key} className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={!!valores[key]}
            onChange={(e) => handleValor(key, e.target.checked)}
          />
          {label}
        </label>
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
        Ficha de Evaluación Ginecológica — Toma de Citología Vaginal
      </h2>

      <div>
        <p className={seccionTitulo}>Datos Generales</p>
        <div className="space-y-4">{fichaGinecologica.datosGenerales.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Signos Vitales</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fichaGinecologica.signosVitales.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>HEA / FUM</p>
        <div className="space-y-4">{fichaGinecologica.heaFum.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Antecedentes Ginecológicos</p>
        <div className="space-y-4">
          {fichaGinecologica.antecedentesGinecologicos.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Métodos Anticonceptivos</p>
        <div className="space-y-4">
          {fichaGinecologica.metodosAnticonceptivos.map(renderCampo)}
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>Antecedentes Obstétricos</p>
        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                {fichaGinecologica.antecedentesObstetricosColumnas.map((col) => (
                  <th key={col} className="px-3 py-2 text-left font-medium text-gray-600">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {fichaGinecologica.antecedentesObstetricosColumnas.map((col) => (
                  <td key={col} className="px-3 py-2">
                    <input
                      type="text"
                      value={obstetricos[col] || ""}
                      onChange={(e) => handleObstetrico(col, e.target.value)}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className={seccionTitulo}>¿Antecedentes de Patología Cervical?</p>
        <div className="space-y-3">{fichaGinecologica.patologiaCervical.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Requisitos Citología</p>
        <div className="space-y-4">{fichaGinecologica.requisitosCitologia.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Examen Físico</p>
        <div className="space-y-4">{fichaGinecologica.examenFisico.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Otros Datos</p>
        <div className="space-y-4">{fichaGinecologica.otrosDatos.map(renderCampo)}</div>
      </div>

      <div>
        <p className={seccionTitulo}>Seguimiento</p>
        <div className="space-y-4">{fichaGinecologica.seguimiento.map(renderCampo)}</div>
      </div>
    </div>
  );
}

export default FormularioGinecologia;