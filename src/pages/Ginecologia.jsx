import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import { useRol } from "../hooks/useRol";
import ConfirmacionStep from "../components/preclinica/ConfirmacionStep";
import ListaEsperaGinecologia from "../components/ginecologia/ListaEsperaGinecologia";
import FichaPreclinicaCompleta from "../components/fisioterapia/FichaPreclinicaCompleta";
import FormularioGinecologia from "../components/ginecologia/FormularioGinecologia";

function Ginecologia() {
  const { expedientes, actualizarExpediente } = useExpedientes();
  const { usuarioActual } = useRol();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [guardado, setGuardado] = useState(false);

  const expedientesGinecologia = expedientes.filter(
    (exp) => exp.remitirA === "Ginecología" && !exp.ginecologiaFinalizada
  );

  const pacienteSeleccionado =
    expedientesGinecologia.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const atenderPaciente = (paciente) => setCuentaSeleccionada(paciente.cuenta);

  const volverALista = () => {
    setCuentaSeleccionada(null);
    setGuardado(false);
  };

  const handleGuardarExitoso = (remitirNueva) => {
    actualizarExpediente(cuentaSeleccionada, {
      ginecologiaFinalizada: true,
      ...(remitirNueva
        ? { remitirA: remitirNueva, remisionDesde: "Ginecología" }
        : {}),
    });
    setGuardado(true);
  };

  if (guardado) {
    return (
      <ConfirmacionStep
        titulo="Evaluación ginecológica guardada con éxito"
        mensaje="La ficha y el registro ginecológico fueron guardados correctamente."
        onReiniciar={volverALista}
      />
    );
  }

  if (!pacienteSeleccionado) {
    return (
      <ListaEsperaGinecologia
        expedientes={expedientesGinecologia}
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

      <FormularioGinecologia
        paciente={pacienteSeleccionado}
        ginecologo={usuarioActual}
        onGuardado={handleGuardarExitoso}
      />
    </div>
  );
}

export default Ginecologia;