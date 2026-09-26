import { useState } from "react";
import { ROL_ARCHIVO } from "../data/roles";
import { RolContext } from "./rolContextInstance";

export function RolProvider({ children }) {
  const [rolActual, setRolActual] = useState(ROL_ARCHIVO);

  return (
    <RolContext.Provider value={{ rolActual, setRolActual }}>
      {children}
    </RolContext.Provider>
  );
}
