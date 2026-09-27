import React, { useState } from 'react';

function Subsiguiente() {
  const [datosPaciente, setDatosPaciente] = useState({
    primerApellido: '',
    segundoApellido: '',
    nombres: '',
    noCuenta: '',
    noIdentidad: '',
    direccion: '',
    edad: '',
    sexo: '',
    procedencia: ''
  });

  const [filasSubsiguiente, setFilasSubsiguiente] = useState([
    { id: 1, fechaHora: '', presion: '', pieza: '', tratamiento: '', firma: '', horaSalida: '', aporte: '', costo: '' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosPaciente({ ...datosPaciente, [name]: value });
  };

  const agregarFila = () => {
    setFilasSubsiguiente([
      ...filasSubsiguiente,
      { id: filasSubsiguiente.length + 1, fechaHora: '', presion: '', pieza: '', tratamiento: '', firma: '', horaSalida: '', aporte: '', costo: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de Historia Clínica Subsiguiente:", { datosPaciente, filasSubsiguiente });
    alert("Historia Clínica Subsiguiente guardada correctamente.");
  };

  return (
    <div className="w-full max-w-full mx-auto p-4 bg-white rounded-lg border border-gray-300 mt-4 text-sm">
      <h3 className="text-center font-bold text-base mb-4" style={{ color: '#004A87' }}>HISTORIA CLÍNICA ODONTOLÓGICA - SUBSIGUIENTE</h3>
      
      <form onSubmit={handleSubmit}>
        {/* DATOS GENERALES */}
        <fieldset className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>Datos del Paciente</legend>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3">
            <input type="text" name="primerApellido" placeholder="Primer Apellido" value={datosPaciente.primerApellido} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <input type="text" name="segundoApellido" placeholder="Segundo Apellido" value={datosPaciente.segundoApellido} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <input type="text" name="nombres" placeholder="Nombre(s)" value={datosPaciente.nombres} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <input type="text" name="noCuenta" placeholder="No. de Cuenta" value={datosPaciente.noCuenta} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            <input type="text" name="direccion" placeholder="Dirección" value={datosPaciente.direccion} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <input type="text" name="noIdentidad" placeholder="No. de Identidad" value={datosPaciente.noIdentidad} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <input type="text" name="procedencia" placeholder="Lugar de Procedencia" value={datosPaciente.procedencia} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input type="text" name="edad" placeholder="Edad" value={datosPaciente.edad} onChange={handleInputChange} className="p-2 border rounded w-full bg-white text-xs" />
            <div className="flex items-center gap-4 p-2 bg-white border rounded text-xs">
              <span className="font-semibold text-gray-600">Sexo:</span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="sexo" value="Hombre" checked={datosPaciente.sexo === 'Hombre'} onChange={handleInputChange} /> Hombre
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="sexo" value="Mujer" checked={datosPaciente.sexo === 'Mujer'} onChange={handleInputChange} /> Mujer
              </label>
            </div>
          </div>
        </fieldset>

        {/* TABLA DE EVOLUCIÓN SUBSIGUIENTE */}
        <h4 className="font-bold text-xs mb-2 text-gray-700">REGISTRO DE TRATAMIENTOS SUBSIGUIENTES</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-xs">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 p-1">FECHA Y HORA</th>
                <th className="border border-gray-300 p-1">PRESION ARTERIAL</th>
                <th className="border border-gray-300 p-1">PIEZA</th>
                <th className="border border-gray-300 p-1">TRATAMIENTO EFECTUADO</th>
                <th className="border border-gray-300 p-1">FIRMA MEDICO</th>
                <th className="border border-gray-300 p-1">HORA SALIDA</th>
                <th className="border border-gray-300 p-1">APORTE ESTUD.</th>
                <th className="border border-gray-300 p-1">COSTO REAL</th>
              </tr>
            </thead>
            <tbody>
              {filasSubsiguiente.map((fila) => (
                <tr key={fila.id}>
                  <td className="border border-gray-300 p-1"><input type="datetime-local" className="w-full text-[10px] p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="time" className="w-full text-[10px] p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                  <td className="border border-gray-300 p-1"><input type="text" className="w-full p-1 border-0" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-2 mt-3">
          <button 
            type="button" 
            onClick={agregarFila} 
            className="px-3 py-1 bg-green-600 text-white font-bold rounded text-xs shadow hover:bg-green-700 transition"
          >
            + Agregar Fila
          </button>

          <button 
            type="submit" 
            className="px-4 py-1 text-white font-bold rounded text-xs shadow transition" 
            style={{ backgroundColor: '#004A87' }}
          >
            Guardar Subsiguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default Subsiguiente;