import { useState } from "react";
import { useExpedientes } from "../../hooks/useExpedientes";
import FichaPreclinicaCompleta from "../fisioterapia/FichaPreclinicaCompleta";
import FormularioPsicologia from "./FormularioPsicologia";

function ListaPsicologia() {
  const { expedientes } = useExpedientes();
  const [cuentaSel, setCuentaSel] = useState(null);
  const [aviso, setAviso] = useState("");

  const remitidos = expedientes.filter((exp) => exp.remitirA === "Psicología");
  const seleccionado = expedientes.find((exp) => exp.cuenta === cuentaSel);

  const handleGuardado = (destino) => {
    setAviso(`${seleccionado.nombre} fue remitido(a) a ${destino}.`);
    setCuentaSel(null);
  };

  if (seleccionado) {
    return (
      <div className="space-y-6">
        <FichaPreclinicaCompleta
          paciente={seleccionado}
          onVolver={() => setCuentaSel(null)}
        />
        <FormularioPsicologia paciente={seleccionado} onGuardado={handleGuardado} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">Pacientes remitidos a Psicología</h2>
      {aviso && (
        <p className="mb-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
          {aviso}
        </p>
      )}
      <div className="divide-y divide-gray-200">
        {remitidos.map((exp) => (
          <button
            key={exp.cuenta}
            onClick={() => {
              setAviso("");
              setCuentaSel(exp.cuenta);
            }}
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