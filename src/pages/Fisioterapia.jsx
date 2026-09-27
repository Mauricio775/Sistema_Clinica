import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import ListaEsperaStep from "../components/fisioterapia/ListaEsperaStep";
import FichaPreclinicaCompleta from "../components/fisioterapia/FichaPreclinicaCompleta";
import Acordeon from "../components/fisioterapia/Acordeon";
import HojaProcedimientos from "../components/fisioterapia/incisos/HojaProcedimientos";
import EscalaDaniels from "../components/fisioterapia/incisos/EscalaDaniels";
import GoniometriaTabuadela from "../components/fisioterapia/incisos/GoniometriaTabuadela";
import TestSOT from "../components/fisioterapia/incisos/TestSOT";
import EscalaPrension from "../components/fisioterapia/incisos/EscalaPrension";
import IndiceKatz from "../components/fisioterapia/incisos/IndiceKatz";
import EvaluacionPatologica from "../components/fisioterapia/incisos/EvaluacionPatologica";

function Fisioterapia() {
  const { expedientes } = useExpedientes();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [guardado, setGuardado] = useState(false);

  const expedientesFisioterapia = expedientes.filter(
    (exp) => exp.remitirA === "Fisioterapia"
  );
  const pacienteSeleccionado =
    expedientesFisioterapia.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const atenderPaciente = (paciente) => setCuentaSeleccionada(paciente.cuenta);
  const volverALista = () => {
    setCuentaSeleccionada(null);
    setGuardado(false);
  };

  const handleGuardar = () => setGuardado(true);

  if (!pacienteSeleccionado) {
    return (
      <ListaEsperaStep
        expedientes={expedientesFisioterapia}
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
          Evaluación de fisioterapia guardada
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

      <div className="space-y-3">
        <Acordeon titulo="1. Hoja de Procedimientos y Evolución">
          <HojaProcedimientos />
        </Acordeon>
        <Acordeon titulo="2. Escala de Valoración según Daniels (Fuerza Muscular)">
          <EscalaDaniels />
        </Acordeon>
        <Acordeon titulo="3. Escala de Goniometría según Tabuadela">
          <GoniometriaTabuadela />
        </Acordeon>
        <Acordeon titulo="4. Test de SOT (Sensory Organization Test)">
          <TestSOT />
        </Acordeon>
        <Acordeon titulo="5. Escala de Prensión">
          <EscalaPrension />
        </Acordeon>
        <Acordeon titulo="6. Índice de Katz Modificada">
          <IndiceKatz />
        </Acordeon>
        <Acordeon titulo="7. Evaluación Patológica">
          <EvaluacionPatologica />
        </Acordeon>
      </div>

      <button
        onClick={handleGuardar}
        className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Guardar evaluación
      </button>
    </div>
  );
}

export default Fisioterapia;
