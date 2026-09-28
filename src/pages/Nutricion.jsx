import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import ListaEsperaStep from "../components/Nutricion/ListaEsperaStep";
import FichaPreclinicaCompleta from "../components/Nutricion/FichaPreclinicaCompleta";
import EvaluacionNutricional from "../components/Nutricion/EvaluacionNutricional";



function Nutricion() {
  const { expedientes } = useExpedientes();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [guardado, setGuardado] = useState(false);

  const expedientesNutricion = expedientes.filter(
    (exp) => exp.remitirA === "Nutrición"
  );
  const pacienteSeleccionado =
    expedientesNutricion.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const atenderPaciente = (paciente) => setCuentaSeleccionada(paciente.cuenta);
  const volverALista = () => {
    setCuentaSeleccionada(null);
    setGuardado(false);
  };

  if (!pacienteSeleccionado) {
    return (
      <ListaEsperaStep
        expedientes={expedientesNutricion}
        onSeleccionar={atenderPaciente}
      />
    );
  }


  if (guardado) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h2 className="font-bold text-gray-800 text-lg mb-1">
          Historia clínica nutricional guardada
        </h2>
        <button
          onClick={volverALista}
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition mt-4"
        >
          Atender otro paciente
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <FichaPreclinicaCompleta paciente={pacienteSeleccionado} onVolver={volverALista} />
      <EvaluacionNutricional onGuardar={() => setGuardado(true)} />
    </div>
  );
}

export default Nutricion;