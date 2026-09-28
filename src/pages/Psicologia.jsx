import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import { useRol } from "../hooks/useRol";
import ConfirmacionStep from "../components/preclinica/ConfirmacionStep";
import ListaEsperaPsicologia from "../components/psicologia/ListaEsperaPsicologia";
import FichaPreclinicaCompleta from "../components/fisioterapia/FichaPreclinicaCompleta";
import FormularioPsicologia from "../components/psicologia/FormularioPsicologia";

function Psicologia() {
  const { expedientes, actualizarExpediente } = useExpedientes();
  const { usuarioActual } = useRol();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [guardado, setGuardado] = useState(false);

  const expedientesPsicologia = expedientes.filter(
    (exp) => exp.remitirA === "Psicología" && !exp.psicologiaFinalizada
  );

  const pacienteSeleccionado =
    expedientesPsicologia.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const atenderPaciente = (paciente) => setCuentaSeleccionada(paciente.cuenta);

  const volverALista = () => {
    setCuentaSeleccionada(null);
    setGuardado(false);
  };

  const handleGuardarExitoso = (remitirNueva) => {
    actualizarExpediente(cuentaSeleccionada, {
      psicologiaFinalizada: true,
      ...(remitirNueva
        ? { remitirA: remitirNueva, remisionDesde: "Psicología" }
        : {}),
    });
    setGuardado(true);
  };

  if (guardado) {
    return (
      <ConfirmacionStep
        titulo="Entrevista psicológica guardada con éxito"
        mensaje="La entrevista psicológica fue registrada correctamente."
        onReiniciar={volverALista}
      />
    );
  }

  if (!pacienteSeleccionado) {
    return (
      <ListaEsperaPsicologia
        expedientes={expedientesPsicologia}
        onSeleccionar={atenderPaciente}
      />
    );
  }

  return (
    <div className="w-full space-y-6">
      <FichaPreclinicaCompleta
        paciente={pacienteSeleccionado}
        onVolver={volverALista}
        ocultarActividadSexual={false}
      />

      <FormularioPsicologia
        paciente={pacienteSeleccionado}
        psicologo={usuarioActual}
        onGuardado={handleGuardarExitoso}
      />
    </div>
  );
}

export default Psicologia;