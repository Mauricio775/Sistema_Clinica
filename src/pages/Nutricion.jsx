import { useState } from "react";

const inputClass =
  "w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

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

  // Medidas antropométricas
  talla: "",
  pesoActual: "",
  pesoIdeal: "",
  pesoMinSaludable: "",
  pesoMaxSaludable: "",
  imc: "",
  clasificacionIMC: "",
  circunferenciaAbdominal: "",
  circunferenciaCadera: "",
  icc: "",
  gct: "",
  mm: "",
  grasaVisceral: "",
  edadMetabolica: "",

  // Diagnóstico e intervención
  diagnosticoNutricional: "",
  planAccion: "",
  objetivosNutricionales: "",
  prescripcionNutricional: "",

  // Monitoreo (tabla dinámica)
  monitoreo: [
    { id: 1, fecha: "", indicador: "", valorReferencia: "", valorAnterior: "", valorActual: "" },
  ],

  // Evaluación nutricional subsiguiente
  subFechaReevaluacion: "",
  subTalla: "",
  subPeso: "",
  subEdad: "",
  subImc: "",
  subGr: "",
  subMc: "",
  subEc: "",
  subVisc: "",
  subCintura: "",
  subCadera: "",
  subIcc: "",
  subObservaciones: "",
  subProximaCita: "",
  subLicInFieri: "",
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

  const agregarFilaMonitoreo = () => {
    setForm((prev) => ({
      ...prev,
      monitoreo: [
        ...prev.monitoreo,
        {
          id: Date.now(),
          fecha: "",
          indicador: "",
          valorReferencia: "",
          valorAnterior: "",
          valorActual: "",
        },
      ],
    }));
  };

  const eliminarFilaMonitoreo = (id) => {
    setForm((prev) => ({
      ...prev,
      monitoreo: prev.monitoreo.filter((fila) => fila.id !== id),
    }));
  };

  const handleMonitoreoChange = (id, campo, valor) => {
    setForm((prev) => ({
      ...prev,
      monitoreo: prev.monitoreo.map((fila) =>
        fila.id === id ? { ...fila, [campo]: valor } : fila
      ),
    }));
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log("Historia clínica nutricional:", form); // luego será una llamada a la API
    setGuardado(true);
  };

  if (guardado) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-5xl mx-auto">
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
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-5xl mx-auto">
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
                      className="accent-blue-600"
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
                  className="accent-blue-600"
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
                        className="accent-blue-600"
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
                    className="accent-blue-600"
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
                    className="accent-blue-600"
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
                    className="accent-blue-600"
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Medidas antropométricas y composición corporal */}
        <section>
          <p className={seccionTitulo}>
            Medidas antropométricas y composición corporal
          </p>

          <p className="text-sm font-medium text-gray-600 mb-2">
            Talla e indicadores ponderales
          </p>
          <div className="grid grid-cols-2 gap-5 mb-4">
            <div>
              <label className="text-sm text-gray-700">Talla</label>
              <input
                type="text"
                value={form.talla}
                onChange={(e) => handleChange("talla", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Peso actual</label>
              <input
                type="text"
                value={form.pesoActual}
                onChange={(e) => handleChange("pesoActual", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Peso ideal</label>
              <input
                type="text"
                value={form.pesoIdeal}
                onChange={(e) => handleChange("pesoIdeal", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Peso mínimo saludable</label>
              <input
                type="text"
                value={form.pesoMinSaludable}
                onChange={(e) => handleChange("pesoMinSaludable", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Peso máximo saludable</label>
              <input
                type="text"
                value={form.pesoMaxSaludable}
                onChange={(e) => handleChange("pesoMaxSaludable", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <p className="text-sm font-medium text-gray-600 mb-2">
            Índice de masa corporal
          </p>
          <div className="mb-4">
            <label className="text-sm text-gray-700">IMC</label>
            <input
              type="text"
              value={form.imc}
              onChange={(e) => handleChange("imc", e.target.value)}
              className={`${inputClass} max-w-xs`}
            />
            <div className="flex flex-wrap gap-4 mt-3">
              {["Infrapeso", "Normal", "Sobrepeso", "Obesidad grado I", "Obesidad grado II", "Obesidad grado III"].map(
                (op) => (
                  <label key={op} className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="clasificacionIMC"
                      checked={form.clasificacionIMC === op}
                      onChange={() => handleChange("clasificacionIMC", op)}
                      className="accent-blue-600"
                    />
                    {op}
                  </label>
                )
              )}
            </div>
          </div>

          <p className="text-sm font-medium text-gray-600 mb-2">
            Composición corporal
          </p>
          <div className="grid grid-cols-2 gap-5 mb-4">
            <div>
              <label className="text-sm text-gray-700">Circunferencia abdominal</label>
              <input
                type="text"
                value={form.circunferenciaAbdominal}
                onChange={(e) => handleChange("circunferenciaAbdominal", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Circunferencia de cadera</label>
              <input
                type="text"
                value={form.circunferenciaCadera}
                onChange={(e) => handleChange("circunferenciaCadera", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">ICC</label>
              <input
                type="text"
                value={form.icc}
                onChange={(e) => handleChange("icc", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">% GCT</label>
              <input
                type="text"
                value={form.gct}
                onChange={(e) => handleChange("gct", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">% MM</label>
              <input
                type="text"
                value={form.mm}
                onChange={(e) => handleChange("mm", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Grasa visceral</label>
              <input
                type="text"
                value={form.grasaVisceral}
                onChange={(e) => handleChange("grasaVisceral", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Edad metabólica</label>
              <input
                type="text"
                value={form.edadMetabolica}
                onChange={(e) => handleChange("edadMetabolica", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* Diagnóstico e intervención nutricional */}
        <section>
          <p className={seccionTitulo}>Diagnóstico nutricional</p>
          <label className="text-sm text-gray-700">
            Problema relacionado con etiología evidenciado por signos y síntomas
          </label>
          <textarea
            value={form.diagnosticoNutricional}
            onChange={(e) => handleChange("diagnosticoNutricional", e.target.value)}
            rows={3}
            className={inputClass}
          />
        </section>

        <section>
          <p className={seccionTitulo}>Intervención nutricional — Plan de acción</p>
          <textarea
            value={form.planAccion}
            onChange={(e) => handleChange("planAccion", e.target.value)}
            rows={3}
            className={inputClass}
          />
        </section>

        <section>
          <p className={seccionTitulo}>Objetivos nutricionales</p>
          <p className="text-xs text-gray-500 mb-2">
            Verbo medible + componente nutricional + componente específico + relacionado con etiología / S y S
          </p>
          <textarea
            value={form.objetivosNutricionales}
            onChange={(e) => handleChange("objetivosNutricionales", e.target.value)}
            rows={3}
            className={inputClass}
          />
        </section>

        <section>
          <p className={seccionTitulo}>Prescripción nutricional</p>
          <textarea
            value={form.prescripcionNutricional}
            onChange={(e) => handleChange("prescripcionNutricional", e.target.value)}
            rows={3}
            className={inputClass}
          />
        </section>

        {/* Monitoreo y reevaluación nutricional */}
        <section>
          <p className={seccionTitulo}>Monitoreo y reevaluación nutricional</p>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Fecha</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Indicador de monitoreo</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Valor de referencia</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Valor anterior</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Valor actual</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {form.monitoreo.map((fila) => (
                  <tr key={fila.id}>
                    <td className="px-2 py-1">
                      <input
                        type="date"
                        value={fila.fecha}
                        onChange={(e) => handleMonitoreoChange(fila.id, "fecha", e.target.value)}
                        className="w-full border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        value={fila.indicador}
                        onChange={(e) => handleMonitoreoChange(fila.id, "indicador", e.target.value)}
                        className="w-full border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        value={fila.valorReferencia}
                        onChange={(e) => handleMonitoreoChange(fila.id, "valorReferencia", e.target.value)}
                        className="w-full border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        value={fila.valorAnterior}
                        onChange={(e) => handleMonitoreoChange(fila.id, "valorAnterior", e.target.value)}
                        className="w-full border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        value={fila.valorActual}
                        onChange={(e) => handleMonitoreoChange(fila.id, "valorActual", e.target.value)}
                        className="w-full border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-2 py-1 text-center">
                      <button
                        type="button"
                        onClick={() => eliminarFilaMonitoreo(fila.id)}
                        className="text-red-500 text-xs hover:underline"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={agregarFilaMonitoreo}
            className="mt-3 text-sm text-blue-700 font-medium hover:underline"
          >
            + Agregar fila
          </button>
        </section>

        {/* Evaluación nutricional / subsiguiente */}
        <section>
          <p className={seccionTitulo}>Evaluación nutricional / Subsiguiente</p>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Fecha de reevaluación</label>
            <input
              type="date"
              value={form.subFechaReevaluacion}
              onChange={(e) => handleChange("subFechaReevaluacion", e.target.value)}
              className={`${inputClass} max-w-xs`}
            />
          </div>

          <div className="grid grid-cols-4 gap-5 mb-4">
            <div>
              <label className="text-sm text-gray-700">Talla</label>
              <input
                type="text"
                value={form.subTalla}
                onChange={(e) => handleChange("subTalla", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Peso</label>
              <input
                type="text"
                value={form.subPeso}
                onChange={(e) => handleChange("subPeso", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Edad</label>
              <input
                type="text"
                value={form.subEdad}
                onChange={(e) => handleChange("subEdad", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">IMC</label>
              <input
                type="text"
                value={form.subImc}
                onChange={(e) => handleChange("subImc", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">% GR</label>
              <input
                type="text"
                value={form.subGr}
                onChange={(e) => handleChange("subGr", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">% MC</label>
              <input
                type="text"
                value={form.subMc}
                onChange={(e) => handleChange("subMc", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">EC</label>
              <input
                type="text"
                value={form.subEc}
                onChange={(e) => handleChange("subEc", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">% VISC</label>
              <input
                type="text"
                value={form.subVisc}
                onChange={(e) => handleChange("subVisc", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-4">
            <div>
              <label className="text-sm text-gray-700">Cintura</label>
              <input
                type="text"
                value={form.subCintura}
                onChange={(e) => handleChange("subCintura", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Cadera</label>
              <input
                type="text"
                value={form.subCadera}
                onChange={(e) => handleChange("subCadera", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">ICC</label>
              <input
                type="text"
                value={form.subIcc}
                onChange={(e) => handleChange("subIcc", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Observaciones</label>
            <textarea
              value={form.subObservaciones}
              onChange={(e) => handleChange("subObservaciones", e.target.value)}
              rows={3}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-700">Próxima cita</label>
              <input
                type="date"
                value={form.subProximaCita}
                onChange={(e) => handleChange("subProximaCita", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Lic. In Fieri</label>
              <input
                type="text"
                value={form.subLicInFieri}
                onChange={(e) => handleChange("subLicInFieri", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Guardar historial clínico
        </button>
      </form>
    </div>
  );
}

export default Nutricion;