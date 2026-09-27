import { useContext } from "react";
import { RolContext } from "../context/rolContextInstance";

export function useRol() {
  return useContext(RolContext);
}
