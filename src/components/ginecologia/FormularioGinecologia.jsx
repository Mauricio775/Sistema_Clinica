import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import { fichaGinecologica } from "../../data/preguntasGinecologia";
import Acordeon from "../fisioterapia/Acordeon";
import DiagramaMarcable, { DibujoMama, DibujoVulva, DibujoCervix } from "./DiagramaMarcable";
import {
  ROL_NUTRICION,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_PSICOLOGIA,
  ROL_ODONTOLOGIA,
} from "../../data/roles";

const especialidades = [
  ROL_NUTRICION,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_PSICOLOGIA,
  ROL_ODONTOLOGIA,
];

const CLAVES_MARCAS = ["mamaIzquierdaMarcas", "mamaDerechaMarcas", "genitalMarcas", "cervixMarcas"];

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

function crearValoresIniciales(paciente) {
  const valores = {};
  Object.entries(fichaGinecologica).forEach(([clave, seccion]) => {
    if (clave === "antecedentesObstetricosColumnas") return;
    seccion.forEach((campo) => {
      valores[campo.key] = paciente?.[campo.key] ?? (campo.type === "checkbox" ? false : "");
    });
  });
  CLAVES_MARCAS.forEach((k) => {
    valores[k] = paciente?.[k] ?? [];
  });
  valores.remitirNueva = "";
  return valores;
}

function FormularioGinecologia({ paciente, ginecologo, onGuardado }) {
  const { actualizarExpediente } = useExpedientes();
  const [valores, setValores] = useState(() => crearValoresIniciales(paciente));
  const [obstetricos, setObstetricos] = useState(paciente?.antecedentesObstetricos ?? {});
  const [guardado, setGuardado] = useState(false);

  const handleValor = (clave, valor) => {
    setValores((prev) => ({ ...prev, [clave]: valor }));
    setGuardado(false);
  };

  const handleObstetrico = (columna, valor) => {
    setObstetricos((prev) => ({ ...prev, [columna]: valor }));
    setGuardado(false);
  };

  const handleGuardar = () => {
    const { remitirNueva, ...resto } = valores;
    const datos = {
      ...resto,
      antecedentesObstetricos: obstetricos,
      ginecologo,
    };
    if (remitirNueva) {
      datos.remitirA = remitirNueva;
      datos.remisionDesde = "Ginecología";
    }
    actualizarExpediente(paciente.cuenta, datos);
    setGuardado(true);
    if (remitirNueva) onGuardado?.(remitirNueva);
  };

  const renderCampo = (campo) => {
    const { key, label, type, options } = campo;

    if (["text", "date", "datetime-local"].includes(type)) {
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

  const hacerCitologia = valores.seRealizaCitologia === "Sí";
  const requisitoPositivo = fichaGinecologica.requisitosCitologia.some(
    (c) => valores[c.key] === "SI"
  );

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="font-bold text-gray-800 text-lg">Evaluación Ginecológica</h2>
        <p className="text-gray-500 text-sm">
          Datos personales y signos vitales: ver ficha de PreClínica
        </p>
      </div>

      <div className="space-y-3">
        <Acordeon titulo="1. Consulta">
          <div className="space-y-4">{fichaGinecologica.consulta.map(renderCampo)}</div>
        </Acordeon>

        <Acordeon titulo="2. Antecedentes ginecológicos">
          <div className="space-y-4">
            {fichaGinecologica.antecedentesGinecologicos.map(renderCampo)}
          </div>
        </Acordeon>

        <Acordeon titulo="3. Métodos anticonceptivos">
          <div className="space-y-4">
            {fichaGinecologica.metodosAnticonceptivos.map(renderCampo)}
          </div>
        </Acordeon>

        <Acordeon titulo="4. Antecedentes obstétricos">
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
        </Acordeon>

        <Acordeon titulo="5. Antecedentes de patología cervical">
          <div className="space-y-3">{fichaGinecologica.patologiaCervical.map(renderCampo)}</div>
        </Acordeon>

        <Acordeon titulo="6. Examen físico · Mamas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <DiagramaMarcable
              titulo="Mama izquierda"
              marcas={valores.mamaIzquierdaMarcas}
              onChange={(m) => handleValor("mamaIzquierdaMarcas", m)}
            >
              <DibujoMama />
            </DiagramaMarcable>
            <DiagramaMarcable
              titulo="Mama derecha"
              marcas={valores.mamaDerechaMarcas}
              onChange={(m) => handleValor("mamaDerechaMarcas", m)}
            >
              <DibujoMama />
            </DiagramaMarcable>
          </div>
          <div className="space-y-4">{fichaGinecologica.examenMamas.map(renderCampo)}</div>
        </Acordeon>

        <Acordeon titulo="7. Examen físico · Área genital">
          <div className="mb-4">
            <DiagramaMarcable
              titulo="Bus y vulva"
              marcas={valores.genitalMarcas}
              onChange={(m) => handleValor("genitalMarcas", m)}
            >
              <DibujoVulva />
            </DiagramaMarcable>
          </div>
          <div className="space-y-4">{fichaGinecologica.examenGenital.map(renderCampo)}</div>
        </Acordeon>

        <Acordeon titulo="8. Citología vaginal">
          <div className="space-y-8">
            <div className="space-y-4">
              {fichaGinecologica.seRealizaCitologia.map(renderCampo)}
            </div>

            {hacerCitologia && (
              <>
                <div>
                  <p className={seccionTitulo}>Requisitos de citología</p>
                  <div className="space-y-4">
                    {fichaGinecologica.requisitosCitologia.map(renderCampo)}
                  </div>
                  {requisitoPositivo && (
                    <p className="mt-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                      Según la ficha, solo se puede proseguir con la toma si todas las respuestas
                      son "NO".
                    </p>
                  )}
                </div>

                <div>
                  <p className={seccionTitulo}>Descripción del cérvix</p>
                  <div className="mb-4">
                    <DiagramaMarcable
                      titulo="Cérvix"
                      marcas={valores.cervixMarcas}
                      onChange={(m) => handleValor("cervixMarcas", m)}
                    >
                      <DibujoCervix />
                    </DiagramaMarcable>
                  </div>
                  <div className="space-y-4">{fichaGinecologica.cervix.map(renderCampo)}</div>
                </div>

                <div>
                  <p className={seccionTitulo}>Toma de citología</p>
                  <div className="space-y-4">
                    {fichaGinecologica.citologiaDatos.map(renderCampo)}
                  </div>
                </div>

                <div>
                  <p className={seccionTitulo}>Resultado de citología</p>
                  <div className="space-y-4">
                    {fichaGinecologica.resultadoCitologia.map(renderCampo)}
                  </div>
                </div>
              </>
            )}
          </div>
        </Acordeon>

        <Acordeon titulo="9. Diagnóstico y tratamiento">
          <div className="space-y-4">{fichaGinecologica.plan.map(renderCampo)}</div>
        </Acordeon>

        <Acordeon titulo="10. Remisión a otra especialidad (opcional)">
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
            {valores.remitirNueva && fichaGinecologica.remision.map(renderCampo)}
          </div>
        </Acordeon>
      </div>

      {guardado && (
        <p className="text-sm text-green-600 font-medium text-right">✓ Cambios guardados</p>
      )}

      <button
        onClick={handleGuardar}
        className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
      >
        {valores.remitirNueva ? "Guardar y remitir" : "Guardar Evaluación"}
      </button>
    </div>
  );
}

export default FormularioGinecologia;