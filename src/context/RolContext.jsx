import { useState } from "react";
import { ROL_ARCHIVO, usuariosPrueba } from "../data/roles";
import { RolContext } from "./rolContextInstance";

export function RolProvider({ children }) {
  const [rolActual, setRolActual] = useState(ROL_ARCHIVO);

  const usuarioActual = usuariosPrueba[rolActual] ?? "";

  return (
    <RolContext.Provider value={{ rolActual, setRolActual, usuarioActual }}>
      {children}
    </RolContext.Provider>
  );
}
