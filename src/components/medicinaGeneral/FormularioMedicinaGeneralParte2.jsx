import React, { useState } from 'react';

function FormularioMedicinaGeneralParte2() {
  const [datosGineco, setDatosGineco] = useState({
    actividadSexual: '', inicioVidaSexual: '', numParejas: '', practicasRiesgo: '',
    menarquia: '', fumDia: '', fumMes: '', fumAno: '', cicloDuracion: '',
    cicloPeriodicidad: '', cicloCaracteristicas: '', citologiaOpcion: '', citologiaFecha: '', citologiaResultado: '',
    planificacionOpcion: '', metodoElegido: '', observacionesGineco: '',
    hgoG: '', hgoP: '', hgoA: '', hgoC: '', hgoHv: '', hgoHm: '',
    ultimoEmbarazoDia: '', ultimoEmbarazoMes: '', ultimoEmbarazoAno: '', ultimoEmbarazoTermino: '',
    observacionesObstetricos: ''
  });

  const [examenFisico, setExamenFisico] = useState({
    cabeza: 'Normal', ojos: 'Normal', oidos: 'Normal', nariz: 'Normal',
    bocaGarganta: 'Normal', mamas: 'Normal', pulmones: 'Normal', corazon: 'Normal',
    sistDigestivo: 'Normal', genitourinario: 'Normal', muscEsqueletico: 'Normal',
    extremidades: 'Normal', ganglios: 'Normal', piel: 'Normal',
    observacionesFisico: '', impresionDiagnostica: '', indicaciones: '',
    remitidoA: '', citaOpcion: '', fechaCita: ''
  });

  const handleGinecoChange = (e) => {
    const { name, value } = e.target;
    setDatosGineco({ ...datosGineco, [name]: value });
  };

  const handleFisicoChange = (e) => {
    const { name, value } = e.target;
    setExamenFisico({ ...examenFisico, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos Parte 2 Medicina General:", { datosGineco, examenFisico });
    alert("Segunda parte de Medicina General guardada correctamente.");
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
    <div className="w-full max-w-full mx-auto p-4 bg-white rounded-lg border border-gray-300 mt-4 text-sm">
      <h3 className="text-center font-bold text-base mb-4" style={{ color: '#004A87' }}>HISTORIA CLÍNICA - MEDICINA GENERAL (PARTE 2)</h3>
      
      <form onSubmit={handleSubmit}>
        
        {/* ACTIVIDAD SEXUAL Y REPRODUCTIVA */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>ACTIVIDAD SEXUAL Y REPRODUCTIVA</legend>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-2 text-xs">
            <div className="p-2 border rounded">
              <span className="font-semibold block mb-1">Actividad Sexual:</span>
              <label className="mr-2"><input type="radio" name="actividadSexual" value="Si" checked={datosGineco.actividadSexual === 'Si'} onChange={handleGinecoChange} /> Sí</label>
              <label><input type="radio" name="actividadSexual" value="No" checked={datosGineco.actividadSexual === 'No'} onChange={handleGinecoChange} /> No</label>
            </div>
            <div>
              <label className="block font-semibold">Inicio de Vida Sexual:</label>
              <input type="text" name="inicioVidaSexual" value={datosGineco.inicioVidaSexual} onChange={handleGinecoChange} placeholder="Edad..." className="w-full p-2 border rounded text-xs" />
            </div>
            <div>
              <label className="block font-semibold">N° de Parejas Sexuales:</label>
              <input type="text" name="numParejas" value={datosGineco.numParejas} onChange={handleGinecoChange} placeholder="Cantidad..." className="w-full p-2 border rounded text-xs" />
            </div>
            <div>
              <label className="block font-semibold">Prácticas de Riesgo:</label>
              <input type="text" name="practicasRiesgo" value={datosGineco.practicasRiesgo} onChange={handleGinecoChange} placeholder="Describir..." className="w-full p-2 border rounded text-xs" />
            </div>
          </div>
        </fieldset>

        {/* ANTECEDENTES GINECOLÓGICOS */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-gray-50">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>ANTECEDENTES GINECOLÓGICOS (Únicamente paciente femenino)</legend>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3 text-xs">
            <div>
              <label className="block font-semibold">Menarquia a:</label>
              <input type="text" name="menarquia" value={datosGineco.menarquia} onChange={handleGinecoChange} className="w-full p-1 border rounded bg-white" />
            </div>
            <div className="col-span-2 border p-1 rounded bg-white">
              <label className="block font-semibold text-center">FUM</label>
              <div className="grid grid-cols-3 gap-1">
                <input type="text" name="fumDia" placeholder="Día" value={datosGineco.fumDia} onChange={handleGinecoChange} className="p-1 border rounded text-center" />
                <input type="text" name="fumMes" placeholder="Mes" value={datosGineco.fumMes} onChange={handleGinecoChange} className="p-1 border rounded text-center" />
                <input type="text" name="fumAno" placeholder="Año" value={datosGineco.fumAno} onChange={handleGinecoChange} className="p-1 border rounded text-center" />
              </div>
            </div>
            <div className="border p-1 rounded bg-white">
              <label className="block font-semibold">Citología:</label>
              <label className="block"><input type="radio" name="citologiaOpcion" value="No" checked={datosGineco.citologiaOpcion === 'No'} onChange={handleGinecoChange} /> No</label>
              <label className="block"><input type="radio" name="citologiaOpcion" value="Si" checked={datosGineco.citologiaOpcion === 'Si'} onChange={handleGinecoChange} /> Sí, Fecha:</label>
              <input type="text" name="citologiaFecha" placeholder="Fecha y Resultado" value={datosGineco.citologiaFecha} onChange={handleGinecoChange} className="w-full p-1 border rounded mt-1" />
            </div>
          </div>

          {/* Planificación Familiar */}
          <div className="p-2 border rounded bg-white text-xs mb-2">
            <span className="font-semibold block mb-1">PLANIFICACIÓN FAMILIAR ACTUALMENTE:</span>
            <div className="flex flex-wrap gap-4">
              <label><input type="radio" name="planificacionOpcion" value="Si" checked={datosGineco.planificacionOpcion === 'Si'} onChange={handleGinecoChange} /> Sí</label>
              <label><input type="radio" name="planificacionOpcion" value="No" checked={datosGineco.planificacionOpcion === 'No'} onChange={handleGinecoChange} /> No</label>
              {['DIU', 'Condón', 'Pastillas', 'Implante', 'Inyección Trimestral', 'Inyección Mensual', 'Ritmo', 'Esterilización'].map((metodo) => (
                <label key={metodo} className="cursor-pointer">
                  <input type="checkbox" name="metodoElegido" value={metodo} className="mr-1" /> {metodo}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold text-xs">Observaciones Ginecológicas:</label>
            <input type="text" name="observacionesGineco" value={datosGineco.observacionesGineco} onChange={handleGinecoChange} className="w-full p-1 border rounded bg-white text-xs" />
          </div>
        </fieldset>

        {/* ANTECEDENTES OBSTÉTRICOS */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>ANTECEDENTES OBSTÉTRICOS (HGO)</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
            <div className="flex gap-2 items-center">
              <span>HGO:</span>
              <input type="text" name="hgoG" placeholder="G" value={datosGineco.hgoG} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
              <input type="text" name="hgoP" placeholder="P" value={datosGineco.hgoP} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
              <input type="text" name="hgoA" placeholder="A" value={datosGineco.hgoA} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
              <input type="text" name="hgoC" placeholder="C" value={datosGineco.hgoC} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
              <input type="text" name="hgoHv" placeholder="HV" value={datosGineco.hgoHv} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
              <input type="text" name="hgoHm" placeholder="HM" value={datosGineco.hgoHm} onChange={handleGinecoChange} className="w-10 p-1 border rounded text-center" />
            </div>
            <div className="flex gap-2 items-center">
              <input type="text" name="ultimoEmbarazoTermino" placeholder="Cómo terminó último embarazo" value={datosGineco.ultimoEmbarazoTermino} onChange={handleGinecoChange} className="w-full p-1 border rounded" />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-xs">Observaciones Obstétricas:</label>
            <input type="text" name="observacionesObstetricos" value={datosGineco.observacionesObstetricos} onChange={handleGinecoChange} className="w-full p-1 border rounded text-xs" />
          </div>
        </fieldset>

        {/* EXAMEN FÍSICO */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>EXAMEN FÍSICO (En caso de anormalidad describa precedida por el número)</legend>
          
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-xs mt-2">
            {sistemasFisicos.map((sys) => (
              <div key={sys.key} className="border p-2 rounded bg-gray-50">
                <span className="font-bold block mb-1">{sys.label}</span>
                <label className="block"><input type="radio" name={sys.key} value="Normal" checked={examenFisico[sys.key] === 'Normal'} onChange={handleFisicoChange} /> Normal</label>
                <label className="block"><input type="radio" name={sys.key} value="Anormal" checked={examenFisico[sys.key] === 'Anormal'} onChange={handleFisicoChange} /> Anormal</label>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <label className="block font-semibold text-xs">Observaciones del Examen Físico:</label>
            <textarea name="observacionesFisico" rows="2" value={examenFisico.observacionesFisico} onChange={handleFisicoChange} className="w-full p-2 border rounded text-xs" />
          </div>
        </fieldset>

        {/* DIAGNÓSTICO E INDICACIONES */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>DIAGNÓSTICO E INDICACIONES</legend>
          <div className="mb-2">
            <label className="block font-semibold text-xs">Impresión Diagnóstica:</label>
            <textarea name="impresionDiagnostica" rows="2" value={examenFisico.impresionDiagnostica} onChange={handleFisicoChange} className="w-full p-2 border rounded text-xs" />
          </div>
          <div>
            <label className="block font-semibold text-xs">Indicaciones:</label>
            <textarea name="indicaciones" rows="2" value={examenFisico.indicaciones} onChange={handleFisicoChange} className="w-full p-2 border rounded text-xs" />
          </div>
        </fieldset>

        {/* REMISIÓN Y CIERRE */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-gray-50 text-xs">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>REMISIÓN Y CITAS</legend>
          <div className="flex flex-wrap gap-4 items-center mb-3">
            <span className="font-semibold">Remitido a:</span>
            {['Psicología', 'Nutrición', 'Odontología', 'Terapia funcional', 'CATFA', 'Trabajo Social'].slice(0, 5).map((area) => (
              <label key={area} className="cursor-pointer">
                <input type="checkbox" name="remitidoA" value={area} className="mr-1" /> {area}
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-2 bg-white border rounded">
              <span className="font-semibold">Cita:</span>
              <label><input type="radio" name="citaOpcion" value="Si" /> Sí</label>
              <label><input type="radio" name="citaOpcion" value="No" /> No</label>
              <input type="date" name="fechaCita" className="p-1 border rounded text-xs" />
            </div>
            <div className="p-2 bg-white border rounded">
              <span className="font-semibold block">Referido a otro nivel:</span>
              <input type="text" placeholder="Detalle..." className="w-full p-1 border-0 border-b text-xs" />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow transition text-xs" style={{ backgroundColor: '#004A87' }}>
          Guardar Parte 2 Medicina General
        </button>
      </form>
    </div>
  );
}

export default FormularioMedicinaGeneralParte2;