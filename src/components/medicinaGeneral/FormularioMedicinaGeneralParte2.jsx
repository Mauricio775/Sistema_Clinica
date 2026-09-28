import React, { useState } from 'react';

function FormularioMedicinaGeneralParte2() {
  const [consulta, setConsulta] = useState({
    fechaHora: '',
    edad: '',
    peso: '',
    talla: '',
    temperatura: '',
    presionArterial: '',
    pulso: '',
    observaciones: '',
    diagnostico: '',
    indicaciones: '',
    remitidoA: [],
    citaOpcion: '',
    fechaCita: '',
    referidoOtroNivel: ''
  });

  const [examenFisico, setExamenFisico] = useState({
    cabeza: 'Normal', ojos: 'Normal', oidos: 'Normal', nariz: 'Normal',
    bocaGarganta: 'Normal', mamas: 'Normal', pulmones: 'Normal', corazon: 'Normal',
    sistDigestivo: 'Normal', genitourinario: 'Normal', muscEsqueletico: 'Normal',
    extremidades: 'Normal', ganglios: 'Normal', piel: 'Normal',
    observacionesFisico: ''
  });

  const handleConsultaChange = (e) => {
    const { name, value } = e.target;
    setConsulta({ ...consulta, [name]: value });
  };

  const handleRemitidoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setConsulta({ ...consulta, remitidoA: [...consulta.remitidoA, value] });
    } else {
      setConsulta({ ...consulta, remitidoA: consulta.remitidoA.filter(item => item !== value) });
    }
  };

  const handleFisicoChange = (e) => {
    const { name, value } = e.target;
    setExamenFisico({ ...examenFisico, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consulta de Medicina General guardada:", { consulta, examenFisico });
    alert("Consulta registrada exitosamente.");
  };

  const sistemasFisicos = [
    { key: 'cabeza', label: '1. Cabeza' },
    { key: 'ojos', label: '2. Ojos' },
    { key: 'oidos', label: '3. Oídos' },
    { key: 'nariz', label: '4. Nariz' },
    { key: 'bocaGarganta', label: '5. Boca y Garganta' },
    { key: 'mamas', label: '6. Mamas' },
    { key: 'pulmones', label: '7. Pulmones' },
    { key: 'corazon', label: '8. Corazón' },
    { key: 'sistDigestivo', label: '9. Sist. Digestivo' },
    { key: 'genitourinario', label: '10. Genitourinario' },
    { key: 'muscEsqueletico', label: '11. Musc. Esquel.' },
    { key: 'extremidades', label: '12. Ext. Sup. e Inf.' },
    { key: 'ganglios', label: '13. Ganglios' },
    { key: 'piel', label: '14. Piel' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg border border-gray-300 shadow-sm text-sm font-sans">
      <h3 className="text-center font-bold text-base mb-4 text-[#004A87]">
        SEGUIMIENTO Y EXAMEN FÍSICO - MEDICINA GENERAL
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* BLOQUE DE CONTROL / SIGNOS VITALES POR CONSULTA (Imagen 2) */}
        <fieldset className="p-3 border border-gray-300 rounded-md bg-gray-50">
          <legend className="font-bold px-2 text-xs text-[#004A87]">DATOS DE LA CONSULTA Y SIGNOS VITALES</legend>
          
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 mb-3 text-xs">
            <div>
              <label className="block font-semibold mb-1">Fecha y Hora:</label>
              <input type="datetime-local" name="fechaHora" value={consulta.fechaHora} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white text-[10px]" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Edad:</label>
              <input type="text" name="edad" value={consulta.edad} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Peso (Kg):</label>
              <input type="text" name="peso" value={consulta.peso} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Talla (Cm):</label>
              <input type="text" name="talla" value={consulta.talla} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Temp (°C):</label>
              <input type="text" name="temperatura" value={consulta.temperatura} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold mb-1">P. Arterial:</label>
              <input type="text" name="presionArterial" value={consulta.presionArterial} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Pulso:</label>
              <input type="text" name="pulso" value={consulta.pulso} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white" />
            </div>
          </div>

          <div className="mb-2">
            <label className="block font-semibold text-xs mb-1">Observaciones:</label>
            <input type="text" name="observaciones" value={consulta.observaciones} onChange={handleConsultaChange} className="w-full p-1 border rounded bg-white text-xs" />
          </div>
        </fieldset>

        {/* EXAMEN FÍSICO DE 14 PUNTOS (Imagen 1) */}
        <fieldset className="p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs text-[#004A87]">
            EXAMEN FÍSICO (En caso de anormalidad describa en observaciones precedida por el número)[cite: 7]
          </legend>
          
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-xs my-2">
            {sistemasFisicos.map((sys) => (
              <div key={sys.key} className="border p-2 rounded bg-gray-50">
                <span className="font-bold block mb-1">{sys.label}</span>
                <label className="block"><input type="radio" name={sys.key} value="Normal" checked={examenFisico[sys.key] === 'Normal'} onChange={handleFisicoChange} /> Normal</label>
                <label className="block"><input type="radio" name={sys.key} value="Anormal" checked={examenFisico[sys.key] === 'Anormal'} onChange={handleFisicoChange} /> Anormal</label>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <label className="block font-semibold text-xs mb-1">Observaciones del Examen Físico[cite: 7]:</label>
            <textarea name="observacionesFisico" rows="3" value={examenFisico.observacionesFisico} onChange={handleFisicoChange} placeholder="Ej: 2. Ojos: irritación leve..." className="w-full p-2 border rounded text-xs" />
          </div>
        </fieldset>

        {/* DIAGNÓSTICO E INDICACIONES (Imágenes 1 y 2) */}
        <fieldset className="p-3 border border-gray-300 rounded-md bg-white space-y-3">
          <legend className="font-bold px-2 text-xs text-[#004A87]">DIAGNÓSTICO E INDICACIONES</legend>
          <div>
            <label className="block font-semibold text-xs mb-1">Impresión Diagnóstica[cite: 7]:</label>
            <textarea name="diagnostico" rows="3" value={consulta.diagnostico} onChange={handleConsultaChange} placeholder="Escriba el diagnóstico..." className="w-full p-2 border rounded text-xs" required />
          </div>
          <div>
            <label className="block font-semibold text-xs mb-1">Indicaciones[cite: 7]:</label>
            <textarea name="indicaciones" rows="3" value={consulta.indicaciones} onChange={handleConsultaChange} placeholder="Escriba las indicaciones o receta..." className="w-full p-2 border rounded text-xs" />
          </div>
        </fieldset>

        {/* REMISIÓN Y CITAS (Imagen 2) */}
        <fieldset className="p-3 border border-gray-300 rounded-md bg-gray-50 text-xs space-y-3">
          <legend className="font-bold px-2 text-xs text-[#004A87]">REMISIÓN Y CITAS</legend>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-semibold">Remitido a[cite: 8]:</span>
            {['Psicología', 'Nutrición', 'Odontología', 'Terapia funcional', 'Trabajo Social'].map((area) => (
              <label key={area} className="cursor-pointer">
                <input type="checkbox" name="remitidoA" value={area} onChange={handleRemitidoChange} className="mr-1" /> {area}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-2 bg-white border rounded">
              <span className="font-semibold">Cita[cite: 8]:</span>
              <label><input type="radio" name="citaOpcion" value="Si" onChange={handleConsultaChange} /> Sí</label>
              <label><input type="radio" name="citaOpcion" value="No" onChange={handleConsultaChange} /> No</label>
              <input type="date" name="fechaCita" value={consulta.fechaCita} onChange={handleConsultaChange} className="p-1 border rounded text-xs" />
            </div>
            <div className="p-2 bg-white border rounded">
              <span className="font-semibold block mb-1">Referido a otro nivel[cite: 8]:</span>
              <input type="text" name="referidoOtroNivel" value={consulta.referidoOtroNivel} onChange={handleConsultaChange} placeholder="Detalle..." className="w-full p-1 border rounded text-xs" />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow transition text-xs bg-[#004A87] hover:bg-[#003366]">
          Guardar Registro de Consulta Médica
        </button>
      </form>
    </div>
  );
}

export default FormularioMedicinaGeneralParte2;