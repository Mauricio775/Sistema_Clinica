import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import StepTabs from "../components/preclinica/StepTabs";
import ListaExpedientesStep from "../components/preclinica/ListaExpedientesStep";
import CapturaDatosStep from "../components/preclinica/CapturaDatosStep";
import DiagnosticoStep from "../components/preclinica/DiagnosticoStep";
import ConfirmacionStep from "../components/preclinica/ConfirmacionStep";

function PreClinica() {
  const { expedientes, actualizarExpediente } = useExpedientes();
  const [pasoActual, setPasoActual] = useState(1);
  const [maxPasoAlcanzado, setMaxPasoAlcanzado] = useState(1);
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);

  const expedientesPendientes = expedientes.filter((exp) => !exp.remitirA);
  const expedienteSeleccionado =
    expedientes.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const irAPaso = (numero) => {
    setPasoActual(numero);
    if (numero > maxPasoAlcanzado) setMaxPasoAlcanzado(numero);
  };

  const seleccionarExpediente = (expediente) => {
    setCuentaSeleccionada(expediente.cuenta);
    irAPaso(2);
  };

  const guardarCaptura = (datos) => {
    actualizarExpediente(cuentaSeleccionada, datos);
    irAPaso(3);
  };

  const volverACaptura = (datos) => {
    actualizarExpediente(cuentaSeleccionada, datos);
    irAPaso(2);
  };

  const volverALista = (datos) => {
    actualizarExpediente(cuentaSeleccionada, datos);
    irAPaso(1);
  };

  const guardarDiagnostico = (datos) => {
    actualizarExpediente(cuentaSeleccionada, datos);
    irAPaso(4);
  };

  const reiniciar = () => {
    setCuentaSeleccionada(null);
    setPasoActual(1);
    setMaxPasoAlcanzado(1);
  };

  return (
    <div className="w-full">
      {pasoActual < 4 && (
        <StepTabs pasoActual={pasoActual} maxPasoAlcanzado={maxPasoAlcanzado} />
      )}

      {pasoActual === 1 && (
        <ListaExpedientesStep
          expedientes={expedientesPendientes}
          onSeleccionar={seleccionarExpediente}
        />
      )}

      {pasoActual === 2 && (
        <CapturaDatosStep
          paciente={expedienteSeleccionado}
          onGuardar={guardarCaptura}
          onAtras={volverALista}
        />
      )}

      {pasoActual === 3 && (
        <DiagnosticoStep
          paciente={expedienteSeleccionado}
          onGuardar={guardarDiagnostico}
          onAtras={volverACaptura}
        />
      )}

      {pasoActual === 4 && <ConfirmacionStep onReiniciar={reiniciar} />}
    </div>
  );
}

export default PreClinica;
