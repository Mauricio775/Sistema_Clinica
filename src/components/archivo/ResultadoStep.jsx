function ResultadoStep({ paciente, onEnviar, onCrearNuevo }) {
  if (!paciente) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 text-lg mb-4">
          Resultado de la búsqueda
        </h2>
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">
          ✕ Paciente no encontrado
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Si no se encuentra al paciente, el sistema ofrece la opción "Crear
          nuevo expediente".
        </p>
        <button
          onClick={onCrearNuevo}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Crear nuevo expediente →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">
        Resultado de la búsqueda
      </h2>

      <div className="bg-green-50 text-green-700 text-sm p-3 rounded-lg mb-4">
        ✓ Paciente encontrado
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Nombre</span>
          <span className="font-medium text-gray-800">{paciente.nombre}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tipo</span>
          <span className="font-medium text-gray-800">{paciente.tipo}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Carrera</span>
          <span className="font-medium text-gray-800">{paciente.carrera}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Visita</span>
          <span className="font-medium text-gray-800">{paciente.visita}</span>
        </div>
      </div>

      <button
        onClick={onEnviar}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Enviar a preclínica →
      </button>
    </div>
  );
}

export default ResultadoStep;