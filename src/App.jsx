import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RutaProtegida from "./components/RutaProtegida";
import Dashboard from "./pages/Dashboard.jsx";
import RecepcionArchivo from "./pages/RecepcionArchivo";
import Nutricion from "./pages/Nutricion";
import PreClinica from "./pages/PreClinica";
import Ginecologia from "./pages/Ginecologia";
import Fisioterapia from "./pages/Fisioterapia";
import MedicinaGeneral from "./pages/MedicinaGeneral";
import Psicologia from "./pages/Psicologia";
import Odontologia from "./pages/Odontologia";
import {
  ROL_ARCHIVO,
  ROL_PRECLINICA,
  ROL_GINECOLOGIA,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_PSICOLOGIA,
  ROL_ODONTOLOGIA,
  ROL_NUTRICION,
} from "./data/roles";

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/archivo"
            element={
              <RutaProtegida rolRequerido={ROL_ARCHIVO}>
                <RecepcionArchivo />
              </RutaProtegida>
            }
          />
          <Route
            path="/preclinica"
            element={
              <RutaProtegida rolRequerido={ROL_PRECLINICA}>
                <PreClinica />
              </RutaProtegida>
            }
          />
          <Route
            path="/ginecologia"
            element={
              <RutaProtegida rolRequerido={ROL_GINECOLOGIA}>
                <Ginecologia />
              </RutaProtegida>
            }
          />
          <Route
            path="/fisioterapia"
            element={
              <RutaProtegida rolRequerido={ROL_FISIOTERAPIA}>
                <Fisioterapia />
              </RutaProtegida>
            }
          />
          <Route
            path="/medicina-general"
            element={
              <RutaProtegida rolRequerido={ROL_MEDICINA_GENERAL}>
                <MedicinaGeneral />
              </RutaProtegida>
            }
          />
          <Route
            path="/psicologia"
            element={
              <RutaProtegida rolRequerido={ROL_PSICOLOGIA}>
                <Psicologia />
              </RutaProtegida>
            }
          />
          <Route
            path="/odontologia"
            element={
              <RutaProtegida rolRequerido={ROL_ODONTOLOGIA}>
                <Odontologia />
              </RutaProtegida>
            }
          />
          <Route
            path="/nutricion"
            element={
              <RutaProtegida rolRequerido={ROL_NUTRICION}>
                <Nutricion />
              </RutaProtegida>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
