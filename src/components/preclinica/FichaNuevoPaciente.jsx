import { useState } from "react";
import {
  antecedentesFamiliaresList,
  antecedentesPersonalesList,
  habitosToxicologicosList,
} from "../../data/antecedentesListas";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

const secciones = [
  "Datos personales básicos",
  "Signos vitales y somatometría",
  "Historia de la enfermedad actual (HEA)",
  "Antecedentes familiares",
  "Antecedentes personales",
  "Hábitos toxicológicos personales",
  "Actividad sexual y reproductiva",
];

const initialForm = {
  primerApellido: "",
  segundoApellido: "",
  nombres: "",
  numeroCuenta: "",
  numeroIdentidad: "",
  direccion: "",
  lugarProcedencia: "",
  fechaNacimiento: "",
  sexo: "",
  estadoCivil: "",
  telefono: "",
  emergenciaNombre: "",
  emergenciaTelefono: "",
  seguroMedico: "",
  fechaHora: "",
  edad: "",
  peso: "",
  talla: "",
  imc: "",
  temperatura: "",
  presionArterial: "",
  pulso: "",
  hea: "",
  antecedentesFamiliares: antecedentesFamiliaresList.reduce(
    (acc, a) => ({ ...acc, [a.key]: "" }),
    {}
  ),
  detalleAntecedentesFamiliares: "",
  antecedentesPersonales: antecedentesPersonalesList.reduce(
    (acc, a) => ({ ...acc, [a.key]: "" }),
    {}
  ),
  detalleAntecedentesPersonales: "",
  habitosToxicologicos: habitosToxicologicosList.reduce(
    (acc, h) => ({ ...acc, [h.key]: "" }),
    {}
  ),
  detalleHabitosToxicologicos: "",
  actividadSexual: "",
  inicioVidaSexual: "",
  numeroParejasSexuales: "",
  practicasSexualesRiesgo: "",
};

function construirEstadoInicial(paciente) {
  return Object.keys(initialForm).reduce(
    (acc, key) => ({ ...acc, [key]: paciente?.[key] ?? initialForm[key] }),
    {}
  );
}

function FichaNuevoPaciente({ paciente, onGuardar, onAtras }) {
  const [form, setForm] = useState(() => construirEstadoInicial(paciente));
  const [pasoInterno, setPasoInterno] = useState(0);

  const handleChange = (campo, valor) =>
    setForm((prev) => ({ ...prev, [campo]: valor }));

  const handleAntecedenteFamiliar = (key, valor) =>
    setForm((prev) => ({
      ...prev,
      antecedentesFamiliares: { ...prev.antecedentesFamiliares, [key]: valor },
    }));

  const handleAntecedentePersonal = (key, valor) =>
    setForm((prev) => ({
      ...prev,
      antecedentesPersonales: { ...prev.antecedentesPersonales, [key]: valor },
    }));

  const handleHabito = (key, valor) =>
    setForm((prev) => ({
      ...prev,
      habitosToxicologicos: { ...prev.habitosToxicologicos, [key]: valor },
    }));

  const handleAtras = () => {
    if (pasoInterno === 0) {
      onAtras();
      return;
    }
    setPasoInterno((prev) => prev - 1);
  };

  const handleSiguiente = () => setPasoInterno((prev) => prev + 1);

  const handleGuardar = (e) => {
    e.preventDefault();
    onGuardar(form);
  };

  const esUltimaSeccion = pasoInterno === secciones.length - 1;

  return (
    <form onSubmit={handleGuardar} className="space-y-6">
      <p className="text-xs text-gray-500">
        Sección {pasoInterno + 1} de {secciones.length} · {secciones[pasoInterno]}
      </p>

      {pasoInterno === 0 && (
        <section>
          <p className={seccionTitulo}>Datos personales básicos</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Primer apellido</label>
              <input
                type="text"
                value={form.primerApellido}
                onChange={(e) => handleChange("primerApellido", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Segundo apellido</label>
              <input
                type="text"
                value={form.segundoApellido}
                onChange={(e) => handleChange("segundoApellido", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="col-span-2">
              <label className="text-sm text-gray-700">Nombre(s)</label>
              <input
                type="text"
                value={form.nombres}
                onChange={(e) => handleChange("nombres", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">N.° de cuenta</label>
              <input
                type="text"
                value={form.numeroCuenta}
                onChange={(e) => handleChange("numeroCuenta", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">N.° de identidad</label>
              <input
                type="text"
                value={form.numeroIdentidad}
                onChange={(e) => handleChange("numeroIdentidad", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="col-span-2">
              <label className="text-sm text-gray-700">Dirección</label>
              <input
                type="text"
                value={form.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Lugar de procedencia</label>
              <input
                type="text"
                value={form.lugarProcedencia}
                onChange={(e) => handleChange("lugarProcedencia", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Fecha de nacimiento</label>
              <input
                type="date"
                value={form.fechaNacimiento}
                onChange={(e) => handleChange("fechaNacimiento", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 block mb-1">Sexo</label>
              <div className="flex gap-4 mt-2">
                {["Hombre", "Mujer"].map((op) => (
                  <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="sexo"
                      checked={form.sexo === op}
                      onChange={() => handleChange("sexo", op)}
                      className="accent-[rgb(68,45,184)]"
                    />
                    {op}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-700">Estado civil</label>
              <select
                value={form.estadoCivil}
                onChange={(e) => handleChange("estadoCivil", e.target.value)}
                className={inputClass}
              >
                <option value="">Seleccione...</option>
                <option>Soltero</option>
                <option>Unión libre</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Viudo</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-700">N.° de teléfono</label>
              <input
                type="text"
                value={form.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">
                En caso de emergencia llamar a (nombre)
              </label>
              <input
                type="text"
                value={form.emergenciaNombre}
                onChange={(e) => handleChange("emergenciaNombre", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Teléfono de emergencia</label>
              <input
                type="text"
                value={form.emergenciaTelefono}
                onChange={(e) => handleChange("emergenciaTelefono", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">
                Cuenta con seguro médico
              </label>
              <div className="flex gap-4 mt-2">
                {["Privado", "IHSS", "No"].map((op) => (
                  <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="seguroMedico"
                      checked={form.seguroMedico === op}
                      onChange={() => handleChange("seguroMedico", op)}
                      className="accent-[rgb(68,45,184)]"
                    />
                    {op}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {pasoInterno === 1 && (
        <section>
          <p className={seccionTitulo}>Signos vitales y somatometría</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Fecha y hora</label>
              <input
                type="datetime-local"
                value={form.fechaHora}
                onChange={(e) => handleChange("fechaHora", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Edad</label>
              <input
                type="number"
                value={form.edad}
                onChange={(e) => handleChange("edad", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Peso (Kg)</label>
              <input
                type="number"
                value={form.peso}
                onChange={(e) => handleChange("peso", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Talla (Cm)</label>
              <input
                type="number"
                value={form.talla}
                onChange={(e) => handleChange("talla", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">IMC</label>
              <input
                type="text"
                value={form.imc}
                onChange={(e) => handleChange("imc", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Temperatura (°C)</label>
              <input
                type="text"
                value={form.temperatura}
                onChange={(e) => handleChange("temperatura", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Presión arterial (mmHg)</label>
              <input
                type="text"
                value={form.presionArterial}
                onChange={(e) => handleChange("presionArterial", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Pulso</label>
              <input
                type="text"
                value={form.pulso}
                onChange={(e) => handleChange("pulso", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </section>
      )}

      {pasoInterno === 2 && (
        <section>
          <p className={seccionTitulo}>Historia de la enfermedad actual (HEA)</p>
          <textarea
            value={form.hea}
            onChange={(e) => handleChange("hea", e.target.value)}
            rows={6}
            className={inputClass}
          />
        </section>
      )}

      {pasoInterno === 3 && (
        <section>
          <p className={seccionTitulo}>Antecedentes familiares</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {antecedentesFamiliaresList.map((a) => (
              <div key={a.key} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-gray-700">{a.label}</span>
                <div className="flex gap-4">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-1 text-sm text-gray-600">
                      <input
                        type="radio"
                        name={`antecedente-familiar-${a.key}`}
                        checked={form.antecedentesFamiliares[a.key] === op}
                        onChange={() => handleAntecedenteFamiliar(a.key, op)}
                        className="accent-[rgb(68,45,184)]"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <label className="text-sm text-gray-700">
              Detalle (parentesco en caso positivo)
            </label>
            <textarea
              value={form.detalleAntecedentesFamiliares}
              onChange={(e) =>
                handleChange("detalleAntecedentesFamiliares", e.target.value)
              }
              rows={2}
              className={inputClass}
            />
          </div>
        </section>
      )}

      {pasoInterno === 4 && (
        <section>
          <p className={seccionTitulo}>Antecedentes personales</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {antecedentesPersonalesList.map((a) => (
              <div key={a.key} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-gray-700">{a.label}</span>
                <div className="flex gap-4">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-1 text-sm text-gray-600">
                      <input
                        type="radio"
                        name={`antecedente-personal-${a.key}`}
                        checked={form.antecedentesPersonales[a.key] === op}
                        onChange={() => handleAntecedentePersonal(a.key, op)}
                        className="accent-[rgb(68,45,184)]"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <label className="text-sm text-gray-700">
              Detalle (inicio de enfermedad y tratamiento)
            </label>
            <textarea
              value={form.detalleAntecedentesPersonales}
              onChange={(e) =>
                handleChange("detalleAntecedentesPersonales", e.target.value)
              }
              rows={2}
              className={inputClass}
            />
          </div>
        </section>
      )}

      {pasoInterno === 5 && (
        <section>
          <p className={seccionTitulo}>Hábitos toxicológicos personales</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {habitosToxicologicosList.map((h) => (
              <div key={h.key} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-gray-700">{h.label}</span>
                <div className="flex gap-4">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-1 text-sm text-gray-600">
                      <input
                        type="radio"
                        name={`habito-${h.key}`}
                        checked={form.habitosToxicologicos[h.key] === op}
                        onChange={() => handleHabito(h.key, op)}
                        className="accent-[rgb(68,45,184)]"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <label className="text-sm text-gray-700">
              Detalle (tiempo, frecuencia y tipo)
            </label>
            <textarea
              value={form.detalleHabitosToxicologicos}
              onChange={(e) =>
                handleChange("detalleHabitosToxicologicos", e.target.value)
              }
              rows={2}
              className={inputClass}
            />
          </div>
        </section>
      )}

      {pasoInterno === 6 && (
        <section>
          <p className={seccionTitulo}>Actividad sexual y reproductiva</p>
          <div className="mb-4">
            <label className="text-sm text-gray-700 block mb-1">Actividad sexual</label>
            <div className="flex gap-4 mt-2">
              {["Sí", "No"].map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="radio"
                    name="actividadSexual"
                    checked={form.actividadSexual === op}
                    onChange={() => handleChange("actividadSexual", op)}
                    className="accent-[rgb(68,45,184)]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Inicio de vida sexual</label>
              <input
                type="text"
                value={form.inicioVidaSexual}
                onChange={(e) => handleChange("inicioVidaSexual", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">N.° de parejas sexuales</label>
              <input
                type="number"
                value={form.numeroParejasSexuales}
                onChange={(e) => handleChange("numeroParejasSexuales", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700">
              Describir prácticas sexuales de riesgo
            </label>
            <textarea
              value={form.practicasSexualesRiesgo}
              onChange={(e) => handleChange("practicasSexualesRiesgo", e.target.value)}
              rows={3}
              className={inputClass}
            />
          </div>
        </section>
      )}

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={handleAtras}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          Atrás
        </button>
        {esUltimaSeccion ? (
          <button
            type="submit"
            className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Guardar y continuar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSiguiente}
            className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Siguiente
          </button>
        )}
      </div>
    </form>
  );
}

export default FichaNuevoPaciente;
