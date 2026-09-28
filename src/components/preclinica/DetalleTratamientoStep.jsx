function Campo({ label, valor }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800 whitespace-pre-line">
        {valor || "—"}
      </p>
    </div>
  );
}

function DetalleTratamientoStep({ paciente, onAplicar, onVolver }) {
  const pendientes = paciente.solicitudesTratamiento.filter(
    (s) => s.estado === "Pendiente"
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-800 text-lg">{paciente.nombre}</h2>
            <p className="text-gray-500 text-sm">
              N.° de identidad: {paciente.numeroIdentidad || "—"}
            </p>
          </div>
          <button
            onClick={onVolver}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Volver a la lista
          </button>
        </div>
      </div>

      {pendientes.map((s) => (
        <div key={s.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Solicitud de {s.origen}
            </p>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {s.solicitadoPor}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4 mb-4">
            <Campo label="Tipo de tratamiento" valor={s.tipo} />
            {s.via && <Campo label="Vía de administración" valor={s.via} />}
            <div className="col-span-2">
              <Campo label="Indicaciones / Dosis / Observaciones" valor={s.indicaciones} />
            </div>
          </div>

          <button
            onClick={() => onAplicar(s.id)}
            className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Marcar como Aplicado
          </button>
        </div>
      ))}
    </div>
  );
}

export default DetalleTratamientoStep;
