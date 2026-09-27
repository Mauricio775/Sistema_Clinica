import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import FichaPreclinicaCompleta from "../fisioterapia/FichaPreclinicaCompleta";
import FormularioPsicologia from "./FormularioPsicologia";

function ListaPsicologia() {
  const { expedientes } = useExpedientes();
  const [seleccionado, setSeleccionado] = useState(null);

  const remitidos = expedientes.filter((exp) => exp.remitirA === "Psicología");

  if (seleccionado) {
    return (
      <div className="space-y-6">
        <FichaPreclinicaCompleta
          paciente={seleccionado}
          onVolver={() => setSeleccionado(null)}
        />
        <FormularioPsicologia paciente={seleccionado} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">
        Pacientes remitidos a Psicología
      </h2>
      <div className="divide-y divide-gray-200">
        {remitidos.map((exp) => (
          <button
            key={exp.cuenta}
            onClick={() => setSeleccionado(exp)}
            className="w-full text-left py-3 hover:bg-gray-50 px-2 rounded"
          >
            <p className="font-medium text-gray-800">{exp.nombre}</p>
            <p className="text-sm text-gray-500">
              {exp.cuenta} · {exp.carrera}
            </p>
          </button>
        ))}
        {remitidos.length === 0 && (
          <p className="text-sm text-gray-500 py-4">No hay pacientes remitidos.</p>
        )}
      </div>
    </div>
  );
}

export default ListaPsicologia;