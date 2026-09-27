import React, { useState } from 'react';

function EvolucionTratamiento() {
  const dientesSuperioresDer = [18, 17, 16, 15, 14, 13, 12, 11];
  const dientesSuperioresIzq = [21, 22, 23, 24, 25, 26, 27, 28];
  const dientesInferioresDer = [48, 47, 46, 45, 44, 43, 42, 41];
  const dientesInferioresIzq = [31, 32, 33, 34, 35, 36, 37, 38];

  const [estadoReevaluacion, setEstadoReevaluacion] = useState({});
  const [filasEvolucion, setFilasEvolucion] = useState([
    { id: 1, fechaHora: '', presion: '', pieza: '', tratamiento: '', firma: '', horaSalida: '', aporte: '', costo: '' }
  ]);

  const handleClickDiente = (numeroDiente) => {
    const estadoActual = estadoReevaluacion[numeroDiente] || 'Sano';
    const siguienteEstado = 
      estadoActual === 'Sano' ? 'Cariado (C)' :
      estadoActual === 'Cariado (C)' ? 'Obturado (O)' :
      estadoActual === 'Obturado (O)' ? 'Extracción (EI)' : 'Sano';

    setEstadoReevaluacion({ ...estadoReevaluacion, [numeroDiente]: siguienteEstado });
  };

  const agregarFila = () => {
    setFilasEvolucion([
      ...filasEvolucion,
      { id: filasEvolucion.length + 1, fechaHora: '', presion: '', pieza: '', tratamiento: '', firma: '', horaSalida: '', aporte: '', costo: '' }
    ]);
  };

  const renderFilaDientes = (listaDientes) => (
    <div className="flex gap-1 justify-center my-1">
      {listaDientes.map((diente) => {
        const estado = estadoReevaluacion[diente] || 'Sano';
        let colorFondo = 'bg-white';
        if (estado.includes('Cariado')) colorFondo = 'bg-red-100';
        if (estado.includes('Obturado')) colorFondo = 'bg-blue-100';
        if (estado.includes('Extracción')) colorFondo = 'bg-gray-200';

        return (
          <div 
            key={diente}
            onClick={() => handleClickDiente(diente)}
            className={`w-9 h-12 border border-gray-700 rounded flex flex-col items-center justify-center cursor-pointer ${colorFondo} text-[10px] font-bold`}
            title={`Diente ${diente} - Estado: ${estado}`}
          >
            <span>{diente}</span>
            <div className="w-5 h-5 border border-dashed border-gray-500 rounded-full mt-1 flex items-center justify-center text-[8px]">
              🦷
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full max-w-full mx-auto p-4 bg-white rounded-lg border border-gray-300 mt-4 text-sm">
      {/* ODONTOGRAMA DE REEVALUACIÓN */}
      <h3 className="text-center font-bold text-base mb-2" style={{ color: '#004A87' }}>ODONTOGRAMA DE REEVALUACIÓN</h3>
      
      <div className="border-2 border-blue-900 p-3 rounded-md overflow-x-auto mb-4">
        <div className="flex justify-center gap-4 border-b border-gray-300 pb-2">
          <div>{renderFilaDientes(dientesSuperioresDer)}</div>
          <div className="border-l border-dashed border-gray-400 mx-1"></div>
          <div>{renderFilaDientes(dientesSuperioresIzq)}</div>
        </div>
        <div className="flex justify-center gap-4 pt-2">
          <div>{renderFilaDientes(dientesInferioresDer)}</div>
          <div className="border-l border-dashed border-gray-400 mx-1"></div>
          <div>{renderFilaDientes(dientesInferioresIzq)}</div>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs font-semibold text-gray-600">FECHA DE REEVALUACION:</label>
        <input type="date" className="p-1 border rounded ml-2 text-xs" />
      </div>

      {/* EVOLUCIÓN DEL TRATAMIENTO */}
      <h3 className="text-center font-bold text-base mb-2" style={{ color: '#004A87' }}>EVOLUCIÓN DEL TRATAMIENTO</h3>
      
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
            {filasEvolucion.map((fila) => (
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

      <button 
        type="button" 
        onClick={agregarFila} 
        className="mt-3 px-3 py-1 bg-green-600 text-white font-bold rounded text-xs shadow hover:bg-green-700 transition"
      >
        + Agregar Fila de Tratamiento
      </button>
    </div>
  );
}

export default EvolucionTratamiento;