function ListaEsperaStep({ expedientes, onSeleccionar }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg">
        Fisioterapia y Terapia Ocupacional
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Expedientes remitidos desde PreClínica
      </p>

      {expedientes.length === 0 ? (
        <div className="bg-gray-50 text-sm text-gray-500 p-3 rounded-lg">
          No hay expedientes pendientes por atender.
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {expedientes.map((exp) => (
            <div
              key={exp.cuenta}
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <p className="font-medium text-gray-800 text-sm">
                  {exp.nombre} {exp.cuenta}
                </p>
                <p className="text-xs text-gray-500">{exp.diagnostico}</p>
              </div>
              <button
                onClick={() => onSeleccionar(exp)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Atender →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaEsperaStep;
