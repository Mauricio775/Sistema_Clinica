import { useState } from "react";

function NuevoExpedienteStep({ onGuardar }) {
  const [form, setForm] = useState({
    primerApellido: "",
    segundoApellido: "",
    nombres: "",
    tipoPaciente: "Estudiante",
    numeroIdentidad: "",
    fechaNacimiento: "",
    seguroMedico: "No",
  });

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  const handleGuardar = () => {
    onGuardar(form);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg mb-4">
        Crear nuevo expediente
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Primer apellido
          </label>
          <input
            type="text"
            value={form.primerApellido}
            onChange={(e) => handleChange("primerApellido", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Segundo apellido
          </label>
          <input
            type="text"
            value={form.segundoApellido}
            onChange={(e) => handleChange("segundoApellido", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600 font-medium">Nombres</label>
        <input
          type="text"
          value={form.nombres}
          onChange={(e) => handleChange("nombres", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Tipo de paciente
          </label>
          <select
            value={form.tipoPaciente}
            onChange={(e) => handleChange("tipoPaciente", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Estudiante</option>
            <option>Docente</option>
            <option>Externo</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-600 font-medium">
            N.° de identidad
          </label>
          <input
            type="text"
            placeholder="0801-2000-00000"
            value={form.numeroIdentidad}
            onChange={(e) => handleChange("numeroIdentidad", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            value={form.fechaNacimiento}
            onChange={(e) => handleChange("fechaNacimiento", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600 font-medium">
            Seguro médico
          </label>
          <select
            value={form.seguroMedico}
            onChange={(e) => handleChange("seguroMedico", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>No</option>
            <option>Sí</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGuardar}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
      >
        Guardar y enviar a preclínica
      </button>
    </div>
  );
}

export default NuevoExpedienteStep;