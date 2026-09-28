export const ROL_ARCHIVO = "Archivo";
export const ROL_PRECLINICA = "PreClínica";
export const ROL_GINECOLOGIA = "Ginecología";
export const ROL_FISIOTERAPIA = "Fisioterapia";
export const ROL_MEDICINA_GENERAL = "Medicina General";
export const ROL_PSICOLOGIA = "Psicología";
export const ROL_ODONTOLOGIA = "Odontología";
export const ROL_NUTRICION = "Nutrición";

export const especialidadesRemision = [
  ROL_NUTRICION,
  ROL_GINECOLOGIA,
  ROL_FISIOTERAPIA,
  ROL_MEDICINA_GENERAL,
  ROL_PSICOLOGIA,
  ROL_ODONTOLOGIA,
];

export const usuariosPrueba = {
  [ROL_FISIOTERAPIA]: "Lic. Carlos Mendoza",
};

export const modulos = [
  { nombre: "Archivo", ruta: "/archivo", rol: ROL_ARCHIVO },
  {
    nombre: "PreClínica",
    ruta: "/preclinica",
    rol: ROL_PRECLINICA,
    hijos: [{ nombre: "Tratamientos", ruta: "/preclinica/tratamientos" }],
  },
  { nombre: "Ginecología", ruta: "/ginecologia", rol: ROL_GINECOLOGIA },
  { nombre: "Fisioterapia", ruta: "/fisioterapia", rol: ROL_FISIOTERAPIA },
  { nombre: "Medicina General", ruta: "/medicina-general", rol: ROL_MEDICINA_GENERAL },
  { nombre: "Psicología", ruta: "/psicologia", rol: ROL_PSICOLOGIA },
  { nombre: "Odontología", ruta: "/odontologia", rol: ROL_ODONTOLOGIA },
  { nombre: "Nutrición", ruta: "/nutricion", rol: ROL_NUTRICION },
];
