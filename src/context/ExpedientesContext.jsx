import { useState } from "react";
import { expedientesIniciales, crearExpediente } from "../data/expedientesIniciales";
import { ExpedientesContext } from "./expedientesContextInstance";

export function ExpedientesProvider({ children }) {
  const [expedientes, setExpedientes] = useState(expedientesIniciales);

  const actualizarExpediente = (cuenta, datos) => {
    setExpedientes((prev) =>
      prev.map((exp) => (exp.cuenta === cuenta ? { ...exp, ...datos } : exp))
    );
  };

  const agregarSolicitudTratamiento = (cuenta, solicitud) => {
    setExpedientes((prev) =>
      prev.map((exp) =>
        exp.cuenta === cuenta
          ? {
              ...exp,
              solicitudesTratamiento: [...exp.solicitudesTratamiento, solicitud],
            }
          : exp
      )
    );
  };

  const marcarTratamientoAplicado = (cuenta, idSolicitud) => {
    setExpedientes((prev) =>
      prev.map((exp) =>
        exp.cuenta === cuenta
          ? {
              ...exp,
              solicitudesTratamiento: exp.solicitudesTratamiento.map((s) =>
                s.id === idSolicitud ? { ...s, estado: "Aplicado" } : s
              ),
            }
          : exp
      )
    );
  };

  const agregarExpediente = (datos) => {
    const nuevo = crearExpediente(datos);
    setExpedientes((prev) =>
      prev.some((exp) => exp.cuenta === nuevo.cuenta) ? prev : [...prev, nuevo]
    );
  };

  return (
    <ExpedientesContext.Provider
      value={{
        expedientes,
        actualizarExpediente,
        agregarExpediente,
        agregarSolicitudTratamiento,
        marcarTratamientoAplicado,
      }}
    >
      {children}
    </ExpedientesContext.Provider>
  );
}
