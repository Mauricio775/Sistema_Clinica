import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(68,45,184)] focus:border-[rgb(68,45,184)]";

const seccionTitulo = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-3";

const enfermedadesList = [
  { key: "hipertension", label: "Hipertensión Arterial" },
  { key: "diabetes", label: "Diabetes" },
  { key: "cardiovasculares", label: "Enfermedades Cardiovasculares" },
  { key: "tiroideas", label: "Enfermedades Tiroideas" },
  { key: "respiratorias", label: "Enfermedades Respiratorias" },
  { key: "trastornosAlimenticios", label: "Trastornos Alimenticios" },
  { key: "problemasIntestinales", label: "Problemas Intestinales" },
  { key: "alergias", label: "Alergias Alimentarias" },
];

const initialForm = {
  atendidoPor: "",
  fecha: "",
  primerApellido: "",
  segundoApellido: "",
  nombres: "",
  numeroCuenta: "",
  numeroIdentidad: "",
  edad: "",
  carrera: "",
  sexo: "",
  estadoCivil: "",
  direccion: "",
  lugarProcedencia: "",
  telefono: "",
  emergenciaNombre: "",
  emergenciaTelefono: "",
  correo: "",
  motivoConsulta: [],
  antecedentesPersonales: enfermedadesList.reduce(
    (acc, e) => ({ ...acc, [e.key]: "" }),
    {}
  ),
  otrasEnfermedades: "",
  antecedentesFamiliares: "",
  desayuno: "",
  merienda1: "",
  almuerzo: "",
  merienda2: "",
  cena: "",
  consumoAgua: "",
  tipoEjercicio: "",
  frecuenciaEjercicio: "",
  clasificacionActividad: "",
  habitosToxicos: [],
};

function Nutricion() {
  const [form, setForm] = useState(initialForm);
  const [guardado, setGuardado] = useState(false);

  const handleChange = (campo, valor) =>
    setForm((prev) => ({ ...prev, [campo]: valor }));

  const handleAntecedente = (key, valor) =>
    setForm((prev) => ({
      ...prev,
      antecedentesPersonales: { ...prev.antecedentesPersonales, [key]: valor },
    }));

  const toggleEnArray = (campo, valor) =>
    setForm((prev) => {
      const actual = prev[campo];
      const yaEsta = actual.includes(valor);
      return {
        ...prev,
        [campo]: yaEsta ? actual.filter((v) => v !== valor) : [...actual, valor],
      };
    });

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log("Historia clínica nutricional:", form); // luego será una llamada a la API
    setGuardado(true);
  };

  if (guardado) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h2 className="font-bold text-gray-800 text-lg mb-1">
          Historia clínica nutricional guardada
        </h2>
        <button
          onClick={() => {
            setForm(initialForm);
            setGuardado(false);
          }}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition mt-4"
        >
          Registrar otra evaluación
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          Historia Clínica Nutricional
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Complete el siguiente formulario
        </p>
      </div>

      <form onSubmit={handleGuardar} className="space-y-8">
        {/* Datos generales */}
        <section>
          <p className={seccionTitulo}>Datos generales</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Atendido por</label>
              <input
                type="text"
                value={form.atendidoPor}
                onChange={(e) => handleChange("atendidoPor", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Fecha</label>
              <input
                type="date"
                value={form.fecha}
                onChange={(e) => handleChange("fecha", e.target.value)}
                className={inputClass}
              />
            </div>

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
              <label className="text-sm text-gray-700">Carrera</label>
              <input
                type="text"
                value={form.carrera}
                onChange={(e) => handleChange("carrera", e.target.value)}
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

            <div className="col-span-2">
              <label className="text-sm text-gray-700">Dirección</label>
              <input
                type="text"
                value={form.direccion}
                onChange={(e) => handleChange("direccion", e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="col-span-2">
              <label className="text-sm text-gray-700">Lugar de procedencia</label>
              <input
                type="text"
                value={form.lugarProcedencia}
                onChange={(e) => handleChange("lugarProcedencia", e.target.value)}
                className={inputClass}
              />
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
              <label className="text-sm text-gray-700">Correo electrónico</label>
              <input
                type="email"
                value={form.correo}
                onChange={(e) => handleChange("correo", e.target.value)}
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
          </div>
        </section>

        {/* Motivo de consulta */}
        <section>
          <p className={seccionTitulo}>Motivo de consulta</p>
          <div className="flex flex-wrap gap-4">
            {["Cambio de hábitos", "Educación Nutricional", "ECNT", "ERCN"].map((op) => (
              <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={form.motivoConsulta.includes(op)}
                  onChange={() => toggleEnArray("motivoConsulta", op)}
                  className="accent-[rgb(68,45,184)]"
                />
                {op}
              </label>
            ))}
          </div>
        </section>

        {/* Antecedentes patológicos personales */}
        <section>
          <p className={seccionTitulo}>Antecedentes patológicos personales</p>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {enfermedadesList.map((e) => (
              <div key={e.key} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-gray-700">{e.label}</span>
                <div className="flex gap-4">
                  {["Sí", "No"].map((op) => (
                    <label key={op} className="flex items-center gap-1 text-sm text-gray-600">
                      <input
                        type="radio"
                        name={`antecedente-${e.key}`}
                        checked={form.antecedentesPersonales[e.key] === op}
                        onChange={() => handleAntecedente(e.key, op)}
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
            <label className="text-sm text-gray-700">Otras enfermedades</label>
            <input
              type="text"
              value={form.otrasEnfermedades}
              onChange={(e) => handleChange("otrasEnfermedades", e.target.value)}
              className={inputClass}
            />
          </div>
        </section>

        {/* Antecedentes patológicos familiares */}
        <section>
          <p className={seccionTitulo}>Antecedentes patológicos familiares</p>
          <textarea
            value={form.antecedentesFamiliares}
            onChange={(e) => handleChange("antecedentesFamiliares", e.target.value)}
            rows={3}
            className={inputClass}
          />
        </section>

        {/* Antecedentes alimentarios */}
        <section>
          <p className={seccionTitulo}>Antecedentes relacionados con alimentación y nutrición</p>
          <div className="space-y-3">
            {[
              { campo: "desayuno", label: "Desayuno" },
              { campo: "merienda1", label: "Merienda" },
              { campo: "almuerzo", label: "Almuerzo" },
              { campo: "merienda2", label: "Merienda" },
              { campo: "cena", label: "Cena" },
            ].map((item) => (
              <div key={item.campo}>
                <label className="text-sm text-gray-700">{item.label}</label>
                <input
                  type="text"
                  value={form[item.campo]}
                  onChange={(e) => handleChange(item.campo, e.target.value)}
                  className={inputClass}
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700 block mb-1">
              Consumo de agua al día
            </label>
            <div className="flex flex-wrap gap-4">
              {["< de 8 litros", "8 litros", "> de 8 litros"].map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="radio"
                    name="consumoAgua"
                    checked={form.consumoAgua === op}
                    onChange={() => handleChange("consumoAgua", op)}
                    className="accent-[rgb(68,45,184)]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Actividad y función física */}
        <section>
          <p className={seccionTitulo}>Actividad y función física</p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Tipo de ejercicio</label>
              <input
                type="text"
                value={form.tipoEjercicio}
                onChange={(e) => handleChange("tipoEjercicio", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Frecuencia</label>
              <input
                type="text"
                value={form.frecuenciaEjercicio}
                onChange={(e) => handleChange("frecuenciaEjercicio", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700 block mb-1">Clasificación</label>
            <div className="flex flex-wrap gap-4">
              {["Sedentario", "Moderado", "Activo", "Muy activo"].map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="radio"
                    name="clasificacionActividad"
                    checked={form.clasificacionActividad === op}
                    onChange={() => handleChange("clasificacionActividad", op)}
                    className="accent-[rgb(68,45,184)]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700 block mb-1">Hábitos tóxicos</label>
            <div className="flex flex-wrap gap-4">
              {["Fumar", "Beber", "Drogas", "Ninguno"].map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={form.habitosToxicos.includes(op)}
                    onChange={() => toggleEnArray("habitosToxicos", op)}
                    className="accent-[rgb(68,45,184)]"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>
        </section>

        <button type="submit"
  className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
>
  Guardar historial clinico
</button>
      </form>
    </div>
  );
}

export default Nutricion;