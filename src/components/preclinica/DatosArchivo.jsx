function Campo({ label, valor }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800">{valor || "—"}</p>
    </div>
  );
}

function DatosArchivo({ paciente }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
        Datos de Archivo
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-lg p-4">
        <Campo label="Primer apellido" valor={paciente?.primerApellido} />
        <Campo label="Segundo apellido" valor={paciente?.segundoApellido} />
        <Campo label="Nombre(s)" valor={paciente?.nombres} />
        <Campo label="Tipo de paciente" valor={paciente?.tipo} />
        <Campo label="N.° de identidad" valor={paciente?.numeroIdentidad} />
        <Campo label="Fecha de nacimiento" valor={paciente?.fechaNacimiento} />
        <Campo label="Seguro médico" valor={paciente?.seguroMedico} />
      </div>
    </div>
  );
}

export default DatosArchivo;
