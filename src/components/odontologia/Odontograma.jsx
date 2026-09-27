import React, { useState } from 'react';

function Odontograma() {
  const dientesSuperioresDer = [18, 17, 16, 15, 14, 13, 12, 11];
  const dientesSuperioresIzq = [21, 22, 23, 24, 25, 26, 27, 28];
  const dientesInferioresDer = [48, 47, 46, 45, 44, 43, 42, 41];
  const dientesInferioresIzq = [31, 32, 33, 34, 35, 36, 37, 38];

  const [estadoDientes, setEstadoDientes] = useState({});

  const handleClickDiente = (numeroDiente) => {
    const estadoActual = estadoDientes[numeroDiente] || 'Sano';
    const siguienteEstado = 
      estadoActual === 'Sano' ? 'Cariado (C)' :
      estadoActual === 'Cariado (C)' ? 'Obturado (O)' :
      estadoActual === 'Obturado (O)' ? 'Extracción (EI)' : 'Sano';

    setEstadoDientes({ ...estadoDientes, [numeroDiente]: siguienteEstado });
  };

  const renderFilaDientes = (listaDientes) => (
    <div className="flex gap-1 justify-center my-1">
      {listaDientes.map((diente) => {
        const estado = estadoDientes[diente] || 'Sano';
        let colorFondo = 'bg-white';
        if (estado.includes('Cariado')) colorFondo = 'bg-red-100';
        if (estado.includes('Obturado')) colorFondo = 'bg-blue-100';
        if (estado.includes('Extracción')) colorFondo = 'bg-gray-200';

        return (
          <div 
            key={diente}
            onClick={() => handleClickDiente(diente)}
            className={`w-9 h-12 border border-gray-700 rounded flex flex-col items-center justify-center cursor-pointer ${colorFondo} text-[10px] font-bold`}
            title={`Diente ${diente} - Estado: ${estado}. Clic para cambiar.`}
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
      <h3 className="text-center font-bold text-base mb-2" style={{ color: '#004A87' }}>ODONTOGRAMA INICIAL</h3>
      
      {/* Instrucciones con Leyenda de Colores */}
      <div className="bg-gray-50 p-2 rounded border border-gray-200 mb-3 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-gray-600 font-medium">Haz clic sobre cualquier pieza dental para cambiar su estado:</span>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-white border border-gray-400 inline-block"></span>
            <span>Sano</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span>Cariado</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-blue-400 inline-block"></span>
            <span>Obturado</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span>
            <span>Extracción</span>
          </div>
        </div>
      </div>
      
      <div className="border-2 border-blue-900 p-3 rounded-md overflow-x-auto">
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
    </div>
  );
}

export default Odontograma;