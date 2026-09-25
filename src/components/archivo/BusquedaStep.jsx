import { useState } from "react";

function BusquedaStep({ onBuscar }) {
  const [valor, setValor] = useState("");

  const handleBuscar = () => {
    if (valor.trim() === "") return;
    onBuscar(valor.trim());
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg">Recepción / Archivo</h2>
      <p className="text-gray-500 text-sm mb-4">Verificar paciente</p>

      <label className="text-sm text-gray-600 font-medium">
        N.° de cuenta o N.° de identidad
      </label>
      <div className="flex gap-2 mt-1 mb-4">
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Ej: 20231002365"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleBuscar}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          BUSCAR
        </button>
      </div>

      <div className="bg-gray-50 text-sm text-gray-500 p-3 rounded-lg">
        Aqui el sistema valida contra la base de datos(Por ahora el dato sera una prueba)si el número de cuenta corresponde a
        un estudiante matriculado en el periodo actual.
      </div>
    </div>
  );
}

export default BusquedaStep;