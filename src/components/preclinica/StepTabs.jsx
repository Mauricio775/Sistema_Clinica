function StepTabs({ pasoActual, maxPasoAlcanzado }) {
  const pasos = [
    { numero: 1, nombre: "Expedientes" },
    { numero: 2, nombre: "Captura de datos" },
    { numero: 3, nombre: "Diagnóstico" },
    { numero: 4, nombre: "Confirmación" },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {pasos.map((p) => {
        const habilitado = p.numero <= maxPasoAlcanzado;
        const activo = p.numero === pasoActual;
        return (
          <div
            key={p.numero}
            className={`flex-1 text-center py-2 px-3 rounded-lg text-sm font-medium ${
              activo
                ? "bg-gray-900 text-white"
                : habilitado
                ? "bg-white border border-gray-200 text-gray-600"
                : "bg-gray-50 border border-gray-100 text-gray-300"
            }`}
          >
            {p.numero}. {p.nombre}
          </div>
        );
      })}
    </div>
  );
}

export default StepTabs;
