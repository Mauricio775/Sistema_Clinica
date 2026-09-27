import { NavLink } from "react-router-dom";
import { modulos } from "../data/roles";
import { useRol } from "../hooks/useRol";

const inicio = { nombre: "Inicio", ruta: "/" };

const navLinkClass = ({ isActive }) =>
  `text-left px-4 py-2 rounded-lg font-medium transition ${
    isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
  }`;

function Sidebar() {
  const { rolActual, setRolActual } = useRol();
  const modulosPermitidos = modulos.filter((m) => m.rol === rolActual);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-6 flex flex-col overflow-y-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-blue-100 mb-3 flex items-center justify-center text-2xl">
          🎓
        </div>
        <h2 className="font-bold text-gray-800 leading-tight">
          SISTEMA_CLINICA
        </h2>
        <p className="text-xs text-blue-600 font-semibold mt-1">
          MÓDULOS
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        <NavLink to={inicio.ruta} className={navLinkClass}>
          {inicio.nombre}
        </NavLink>
        {modulosPermitidos.map((m) => (
          <NavLink key={m.ruta} to={m.ruta} className={navLinkClass}>
            {m.nombre}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 block">
          Rol actual
        </label>
        <select
          value={rolActual}
          onChange={(e) => setRolActual(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {modulos.map((m) => (
            <option key={m.rol} value={m.rol}>
              {m.rol}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;
