import {
  antecedentesFamiliaresList,
  antecedentesPersonalesList,
  habitosToxicologicosList,
} from "../../data/antecedentesListas";

function Campo({ label, valor }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800">{valor || "—"}</p>
    </div>
  );
}

function resumenChequeo(lista, valores) {
  const positivos = lista.filter((item) => valores?.[item.key] === "Sí");
  return positivos.length > 0
    ? positivos.map((item) => item.label).join(", ")
    : "Sin antecedentes positivos";
}

function FichaPreclinicaCompleta({ paciente, onVolver }) {
  const esPrimeraVez = paciente.visita === "Primera vez";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-bold text-gray-800 text-lg">
            {paciente.nombre} {paciente.cuenta}
          </h2>
          <p className="text-gray-500 text-sm">Ficha de PreClínica completa</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {paciente.visita}
          </span>
          <button
            onClick={onVolver}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Volver a la lista
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {esPrimeraVez && (
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
              Datos personales
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
              <Campo label="Primer apellido" valor={paciente.primerApellido} />
              <Campo label="Segundo apellido" valor={paciente.segundoApellido} />
              <Campo label="Nombre(s)" valor={paciente.nombres} />
              <Campo
                label="N.° de cuenta"
                valor={paciente.numeroCuenta || paciente.cuenta}
              />
              <Campo label="N.° de identidad" valor={paciente.numeroIdentidad} />
              <Campo label="Dirección" valor={paciente.direccion} />
              <Campo label="Procedencia" valor={paciente.lugarProcedencia} />
              <Campo label="Fecha de nacimiento" valor={paciente.fechaNacimiento} />
              <Campo label="Sexo" valor={paciente.sexo} />
              <Campo label="Estado civil" valor={paciente.estadoCivil} />
              <Campo label="Teléfono" valor={paciente.telefono} />
              <Campo
                label="Contacto de emergencia"
                valor={
                  paciente.emergenciaNombre
                    ? `${paciente.emergenciaNombre} · ${paciente.emergenciaTelefono || "—"}`
                    : ""
                }
              />
              <Campo label="Seguro médico" valor={paciente.seguroMedico} />
            </div>
          </div>
        )}

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            Signos vitales
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
            <Campo label="Fecha y hora" valor={paciente.fechaHora} />
            <Campo label="Edad" valor={paciente.edad} />
            <Campo label="Peso" valor={paciente.peso} />
            <Campo label="Talla" valor={paciente.talla} />
            {esPrimeraVez && <Campo label="IMC" valor={paciente.imc} />}
            <Campo label="Temperatura" valor={paciente.temperatura} />
            <Campo label="Presión arterial" valor={paciente.presionArterial} />
            <Campo label="Pulso" valor={paciente.pulso} />
          </div>
        </div>

        {esPrimeraVez && (
          <>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Historia de la enfermedad actual (HEA)
              </p>
              <p className="text-sm text-gray-700">{paciente.hea || "—"}</p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Antecedentes familiares
              </p>
              <p className="text-sm text-gray-700">
                {resumenChequeo(antecedentesFamiliaresList, paciente.antecedentesFamiliares)}
              </p>
              {paciente.detalleAntecedentesFamiliares && (
                <p className="text-xs text-gray-500 mt-1">
                  Detalle: {paciente.detalleAntecedentesFamiliares}
                </p>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Antecedentes personales
              </p>
              <p className="text-sm text-gray-700">
                {resumenChequeo(antecedentesPersonalesList, paciente.antecedentesPersonales)}
              </p>
              {paciente.detalleAntecedentesPersonales && (
                <p className="text-xs text-gray-500 mt-1">
                  Detalle: {paciente.detalleAntecedentesPersonales}
                </p>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Hábitos toxicológicos personales
              </p>
              <p className="text-sm text-gray-700">
                {resumenChequeo(habitosToxicologicosList, paciente.habitosToxicologicos)}
              </p>
              {paciente.detalleHabitosToxicologicos && (
                <p className="text-xs text-gray-500 mt-1">
                  Detalle: {paciente.detalleHabitosToxicologicos}
                </p>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                Actividad sexual y reproductiva
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
                <Campo label="Actividad sexual" valor={paciente.actividadSexual} />
                <Campo label="Inicio de vida sexual" valor={paciente.inicioVidaSexual} />
                <Campo
                  label="N.° de parejas sexuales"
                  valor={paciente.numeroParejasSexuales}
                />
              </div>
              {paciente.practicasSexualesRiesgo && (
                <p className="text-xs text-gray-500 mt-2">
                  Prácticas de riesgo: {paciente.practicasSexualesRiesgo}
                </p>
              )}
            </div>
          </>
        )}

        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
            Diagnóstico y remisión de enfermería
          </p>
          <p className="text-sm text-gray-700">{paciente.diagnostico || "—"}</p>
          <p className="text-xs text-gray-500 mt-1">
            Remitido a: {paciente.remitirA || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FichaPreclinicaCompleta;
