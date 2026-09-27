import { useContext } from "react";
import { ExpedientesContext } from "../context/expedientesContextInstance";

export function useExpedientes() {
  return useContext(ExpedientesContext);
}
