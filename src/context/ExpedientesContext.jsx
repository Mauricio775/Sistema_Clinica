import { useState } from "react";
import { expedientesIniciales } from "../data/expedientesIniciales";
import { ExpedientesContext } from "./expedientesContextInstance";

export function ExpedientesProvider({ children }) {
  const [expedientes, setExpedientes] = useState(expedientesIniciales);

  const actualizarExpediente = (cuenta, datos) => {
    setExpedientes((prev) =>
      prev.map((exp) => (exp.cuenta === cuenta ? { ...exp, ...datos } : exp))
    );
  };

  return (
    <ExpedientesContext.Provider value={{ expedientes, actualizarExpediente }}>
      {children}
    </ExpedientesContext.Provider>
  );
}
