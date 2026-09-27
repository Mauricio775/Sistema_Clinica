import { useState } from "react";
import { pacientes } from "../data/mockPacientes";
import StepTabs from "../components/archivo/StepTabs";
import BusquedaStep from "../components/archivo/BusquedaStep";
import ResultadoStep from "../components/archivo/ResultadoStep";
import NuevoExpedienteStep from "../components/archivo/NuevoExpedienteStep";
import ConfirmacionStep from "../components/archivo/ConfirmacionStep";

function RecepcionArchivo() {
  const [pasoActual, setPasoActual] = useState(1);
  const [maxPasoAlcanzado, setMaxPasoAlcanzado] = useState(1);
  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);

  const irAPaso = (numero) => {
    setPasoActual(numero);
    if (numero > maxPasoAlcanzado) setMaxPasoAlcanzado(numero);
  };

  const buscarPaciente = (numeroCuenta) => {
    const encontrado = pacientes.find((p) => p.cuenta === numeroCuenta);
    setPacienteEncontrado(encontrado || null);
    irAPaso(2);
  };

  const reiniciar = () => {
    setPacienteEncontrado(null);
    setPasoActual(1);
    setMaxPasoAlcanzado(1);
  };

  return (
    <div className="w-full">
      <StepTabs pasoActual={pasoActual} maxPasoAlcanzado={maxPasoAlcanzado} />

      {pasoActual === 1 && <BusquedaStep onBuscar={buscarPaciente} />}

      {pasoActual === 2 && (
        <ResultadoStep
          paciente={pacienteEncontrado}
          onEnviar={() => irAPaso(4)}
          onCrearNuevo={() => irAPaso(3)}
        />
      )}

      {pasoActual === 3 && (
        <NuevoExpedienteStep onGuardar={() => irAPaso(4)} />
      )}

      {pasoActual === 4 && <ConfirmacionStep onReiniciar={reiniciar} />}
    </div>
  );
}

export default RecepcionArchivo;