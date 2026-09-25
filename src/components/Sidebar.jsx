import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Archivo", ruta: "/archivo" },
    { nombre: "Nutrición", ruta: "/nutricion" },
    { nombre: "Solicitudes", ruta: "/solicitudes" },
    { nombre: "Notificaciones", ruta: "/notificaciones" },
    { nombre: "Perfil", ruta: "/perfil" },
  
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
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
        {links.map((link) => (
          <NavLink
            key={link.nombre}
            to={link.ruta}
            className={({ isActive }) =>
              `text-left px-4 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            {link.nombre}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;