import React, { useState } from 'react';

function FormularioOdontologia() {
  const [datosPaciente, setDatosPaciente] = useState({
    primerApellido: '', segundoApellido: '', nombres: '', noCuenta: '',
    noIdentidad: '', direccion: '', sexo: '', procedencia: '',
    fechaHora: '', edad: '', peso: '', talla: '', temperatura: '',
    presionArterial: '', pulso: '', motivoConsulta: '', tratamientoActual: ''
  });

  const [antecedentes, setAntecedentes] = useState({
    anemia: false, artritis: false, asma: false, anginaPecho: false,
    amigdalitis: false, bulimia: false, endocarditis: false, diabetes: false,
    epilepsia: false, fiebreReumatica: false, gastritis: false, hemofilia: false,
    hepatitis: false, hipertiroidismo: false, leucemia: false, lipotimia: false,
    trastornosHipertensivos: false, sinusitis: false, cie10: false, tuberculosis: false,
    problemasCardiacos: false, problemasRenales: false, problemasNerviosos: false,
    trastornosPsicologicos: false, sangradoEncias: false, alergias: false,
    embarazoActual: false, otros: false
  });

  // Estados para Evaluación Clínica
  const [evaluacionClinica, setEvaluacionClinica] = useState({
    sanos: { simbolo: 'S', pre: '' },
    obturados: { simbolo: 'O', pre: '' },
    extraccion: { simbolo: 'Ei', pre: '' },
    cariados: { simbolo: 'C', pre: '' },
    perdido: { simbolo: 'P', pre: '' },
    periodontopatias: { simbolo: 'L', pre: '' },
    bruxismo: { simbolo: 'B', pre: '' }
  });

  // Estados para Examen Estomatológico
  const [examenEstomatologico, setExamenEstomatologico] = useState({
    encia: '', lengua: '', labios: '', carillos: '', pisoBoca: '',
    ganglios: '', salivacion: '', paladarBlando: '', paladarDuro: '',
    atm: '', endodoncia: '', supernumerarios: '', macrodoncia: '',
    microdoncia: '', amigdalas: '', otros: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosPaciente({ ...datosPaciente, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAntecedentes({ ...antecedentes, [name]: checked });
  };

  const handleEvaluacionChange = (key, value) => {
    setEvaluacionClinica({
      ...evaluacionClinica,
      [key]: { ...evaluacionClinica[key], pre: value }
    });
  };

  const handleEstomatologicoChange = (e) => {
    const { name, value } = e.target;
    setExamenEstomatologico({ ...examenEstomatologico, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de Historia Clínica Odontológica:", { datosPaciente, antecedentes, evaluacionClinica, examenEstomatologico });
    alert("Formulario de Odontología guardado correctamente.");
  };

  return (
    <div className="w-full max-w-full mx-auto p-4 bg-gray-50 rounded-lg text-sm">
      <h2 className="text-center font-bold text-lg mb-4" style={{ color: '#004A87' }}>HISTORIA CLÍNICA ODONTOLÓGICA</h2>
      
      <form onSubmit={handleSubmit}>
        {/* SECCIÓN 1: DATOS GENERALES */}
        <fieldset className="mb-4 p-4 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2" style={{ color: '#004A87' }}>Datos Generales</legend>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3">
            <input type="text" name="primerApellido" placeholder="Primer Apellido" value={datosPaciente.primerApellido} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="segundoApellido" placeholder="Segundo Apellido" value={datosPaciente.segundoApellido} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="nombres" placeholder="Nombre(s)" value={datosPaciente.nombres} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="noCuenta" placeholder="No. de Cuenta" value={datosPaciente.noCuenta} onChange={handleInputChange} className="p-2 border rounded w-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            <input type="text" name="direccion" placeholder="Dirección" value={datosPaciente.direccion} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="noIdentidad" placeholder="No. de Identidad" value={datosPaciente.noIdentidad} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="procedencia" placeholder="Lugar de Procedencia" value={datosPaciente.procedencia} onChange={handleInputChange} className="p-2 border rounded w-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
            <input type="datetime-local" name="fechaHora" value={datosPaciente.fechaHora} onChange={handleInputChange} className="p-1 border rounded w-full text-xs" />
            <input type="text" name="edad" placeholder="Edad" value={datosPaciente.edad} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="peso" placeholder="Peso" value={datosPaciente.peso} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="talla" placeholder="Talla" value={datosPaciente.talla} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="temperatura" placeholder="Temp." value={datosPaciente.temperatura} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="presionArterial" placeholder="P. Arterial" value={datosPaciente.presionArterial} onChange={handleInputChange} className="p-2 border rounded w-full" />
            <input type="text" name="pulso" placeholder="Pulso" value={datosPaciente.pulso} onChange={handleInputChange} className="p-2 border rounded w-full" />
          </div>
        </fieldset>

        {/* SECCIÓN 2: MOTIVO DE CONSULTA */}
        <fieldset className="mb-4 p-4 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2" style={{ color: '#004A87' }}>Motivo de Consulta</legend>
          <textarea 
            name="motivoConsulta" 
            rows="2" 
            className="w-full p-2 border rounded"
            placeholder="Escriba el motivo de la consulta..."
            value={datosPaciente.motivoConsulta}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* SECCIÓN 3: ANTECEDENTES PERSONALES */}
        <fieldset className="mb-4 p-4 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2" style={{ color: '#004A87' }}>Antecedentes Personales</legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {Object.keys(antecedentes).map((key) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name={key} 
                  checked={antecedentes[key]} 
                  onChange={handleCheckboxChange} 
                />
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
            ))}
          </div>
          <div className="mt-3">
            <input 
              type="text" 
              name="tratamientoActual" 
              placeholder="Tratamiento con medicamento actual..." 
              value={datosPaciente.tratamientoActual}
              onChange={handleInputChange}
              className="w-full p-2 border rounded text-sm" 
            />
          </div>
        </fieldset>

        {/* SECCIÓN 4: EVALUACIÓN CLÍNICA Y EXAMEN ESTOMATOLÓGICO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          {/* Evaluación Clínica */}
          <fieldset className="p-4 border border-gray-300 rounded-md bg-white">
            <legend className="font-bold px-2" style={{ color: '#004A87' }}>Evaluación Clínica</legend>
            <table className="w-full border-collapse border border-gray-300 text-xs mt-2">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-300 p-1 text-left">Descripción</th>
                  <th className="border border-gray-300 p-1 text-center">Símbolo</th>
                  <th className="border border-gray-300 p-1 text-center">Número (PRE)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries({
                  sanos: 'Dientes Sanos',
                  obturados: 'Dientes Obturados',
                  extraccion: 'Extracción Indicada',
                  cariados: 'Dientes Cariados',
                  perdido: 'Perdido',
                  periodontopatias: 'Periodontopatías',
                  bruxismo: 'Sintomatología Bruxismo'
                }).map(([key, label]) => (
                  <tr key={key}>
                    <td className="border border-gray-300 p-1 font-medium">{label}</td>
                    <td className="border border-gray-300 p-1 text-center font-bold bg-gray-50">{evaluacionClinica[key].simbolo}</td>
                    <td className="border border-gray-300 p-1 text-center">
                      <input 
                        type="text" 
                        value={evaluacionClinica[key].pre} 
                        onChange={(e) => handleEvaluacionChange(key, e.target.value)}
                        className="w-full p-1 text-center border rounded" 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>

          {/* Examen Estomatológico */}
          <fieldset className="p-4 border border-gray-300 rounded-md bg-white">
            <legend className="font-bold px-2" style={{ color: '#004A87' }}>Examen Estomatológico</legend>
            <table className="w-full border-collapse border border-gray-300 text-xs mt-2">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-300 p-1 text-left">Área</th>
                  <th className="border border-gray-300 p-1 text-left">Afectación</th>
                  <th className="border border-gray-300 p-1 text-left">Área</th>
                  <th className="border border-gray-300 p-1 text-left">Afectación</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['encia', 'Paladar Duro', 'paladarDuro'],
                  ['lengua', 'ATM', 'atm'],
                  ['labios', 'Endodoncia', 'endodoncia'],
                  ['carillos', 'Supernumerarios', 'supernumerarios'],
                  ['pisoBoca', 'Macrodoncia', 'macrodoncia'],
                  ['ganglios', 'Microdoncia', 'microdoncia'],
                  ['salivacion', 'Amígdalas', 'amigdalas'],
                  ['paladarBlando', 'Otros', 'otros']
                ].map(([area1, area2, key2], idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 p-1 font-medium capitalize">{area1.replace(/([A-Z])/g, ' $1')}</td>
                    <td className="border border-gray-300 p-1">
                      <input 
                        type="text" 
                        name={area1} 
                        value={examenEstomatologico[area1]} 
                        onChange={handleEstomatologicoChange}
                        className="w-full p-1 border-0" 
                      />
                    </td>
                    <td className="border border-gray-300 p-1 font-medium">{area2}</td>
                    <td className="border border-gray-300 p-1">
                      <input 
                        type="text" 
                        name={key2} 
                        value={examenEstomatologico[key2]} 
                        onChange={handleEstomatologicoChange}
                        className="w-full p-1 border-0" 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>

        </div>

        <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow transition" style={{ backgroundColor: '#004A87' }}>
          Guardar Historia Clínica
        </button>
      </form>
    </div>
  );
}

export default FormularioOdontologia;