import { Navigate } from "react-router-dom";
import { useRol } from "../hooks/useRol";

function RutaProtegida({ rolRequerido, children }) {
  const { rolActual } = useRol();

  if (rolActual !== rolRequerido) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RutaProtegida;
