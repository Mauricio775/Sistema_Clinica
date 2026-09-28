function ListaExpedientesStep({ expedientes, onSeleccionar }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg">PreClínica</h2>
      <p className="text-gray-500 text-sm mb-4">
        Expedientes enviados desde Archivo
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
                <p className="font-medium text-gray-800 text-sm">{exp.nombre}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">{exp.tipo}</span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      exp.visita === "Primera vez"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {exp.visita === "Primera vez" ? "Primera Vez" : exp.visita}
                  </span>
                </div>
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

export default ListaExpedientesStep;
