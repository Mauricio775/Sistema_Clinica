import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import ListaTratamientosStep from "../components/preclinica/ListaTratamientosStep";
import DetalleTratamientoStep from "../components/preclinica/DetalleTratamientoStep";
import ConfirmacionStep from "../components/preclinica/ConfirmacionStep";

function PreClinicaTratamientos() {
  const { expedientes, marcarTratamientoAplicado } = useExpedientes();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [aplicado, setAplicado] = useState(false);

  const expedientesConSolicitud = expedientes.filter((exp) =>
    exp.solicitudesTratamiento.some((s) => s.estado === "Pendiente")
  );
  const pacienteSeleccionado =
    expedientesConSolicitud.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const volverALista = () => {
    setCuentaSeleccionada(null);
    setAplicado(false);
  };

  const handleAplicar = (idSolicitud) => {
    marcarTratamientoAplicado(cuentaSeleccionada, idSolicitud);
    setAplicado(true);
  };

  if (aplicado) {
    return (
      <ConfirmacionStep
        titulo="Tratamiento aplicado con éxito"
        mensaje="La solicitud fue marcada como realizada."
        onReiniciar={volverALista}
      />
    );
  }

  if (!pacienteSeleccionado) {
    return (
      <ListaTratamientosStep
        expedientes={expedientesConSolicitud}
        onSeleccionar={(exp) => setCuentaSeleccionada(exp.cuenta)}
      />
    );
  }

  return (
    <DetalleTratamientoStep
      paciente={pacienteSeleccionado}
      onAplicar={handleAplicar}
      onVolver={volverALista}
    />
  );
}

export default PreClinicaTratamientos;
