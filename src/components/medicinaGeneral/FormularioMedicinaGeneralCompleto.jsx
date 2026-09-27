import React, { useState } from 'react';

function FormularioMedicinaGeneralCompleto() {
  const [datos, setDatos] = useState({
    primerApellido: '', segundoApellido: '', nombres: '', noCuenta: '', noIdentidad: '',
    direccion: '', carrera: '', procedencia: '', fechaNacimiento: '', sexo: '', estadoCivil: '',
    telefono: '', contactoNombre: '', contactoTelefono: '',
    fechaHora: '', edad: '', peso: '', talla: '', imc: '', temperatura: '', presionArterial: '', pulso: '', seguroMedico: '',
    hea: ''
  });

  // Estado para antecedentes familiares (Guardando { opcion: 'Si'/'No', detalle: 'texto' })
  const [familiares, setFamiliares] = useState({
    diabetes: { opcion: '', detalle: '' },
    tbPulmonar: { opcion: '', detalle: '' },
    desnutricion: { opcion: '', detalle: '' },
    enfMentales: { opcion: '', detalle: '' },
    convulsiones: { opcion: '', detalle: '' },
    alcoholismo: { opcion: '', detalle: '' },
    alergias: { opcion: '', detalle: '' },
    cancer: { opcion: '', detalle: '' },
    otros: { opcion: '', detalle: '' }
  });

  // Estado para antecedentes personales
  const [personales, setPersonales] = useState({
    diabetes: { opcion: '', detalle: '' },
    tbPulmonar: { opcion: '', detalle: '' },
    its: { opcion: '', detalle: '' },
    desnutricion: { opcion: '', detalle: '' },
    enfMentales: { opcion: '', detalle: '' },
    convulsiones: { opcion: '', detalle: '' },
    alergias: { opcion: '', detalle: '' },
    cancer: { opcion: '', detalle: '' },
    hospitalarias: { opcion: '', detalle: '' },
    traumaticos: { opcion: '', detalle: '' },
    otros: { opcion: '', detalle: '' }
  });

  // Estado para hábitos toxicológicos
  const [toxicologicos, setToxicologicos] = useState({
    alcohol: { opcion: '', detalle: '' },
    tabaquismo: { opcion: '', detalle: '' },
    marihuana: { opcion: '', detalle: '' },
    cocaina: { opcion: '', detalle: '' },
    otros: { opcion: '', detalle: '' }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubChange = (setter, state, key, field, value) => {
    setter({
      ...state,
      [key]: { ...state[key], [field]: value }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos Historia Clínica Medicina General:", { datos, familiares, personales, toxicologicos });
    alert("Historia Clínica de Medicina General guardada correctamente.");
  };

  return (
    <div className="w-full max-w-full mx-auto p-4 bg-white rounded-lg border border-gray-300 text-sm">
      <h2 className="text-center font-bold text-lg mb-4" style={{ color: '#004A87' }}>HISTORIA CLÍNICA - MEDICINA GENERAL</h2>
      
      <form onSubmit={handleSubmit}>
        {/* DATOS GENERALES */}
        <fieldset className="mb-4 p-4 border border-gray-300 rounded-md bg-gray-50">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>Datos Generales del Paciente</legend>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3">
            <input type="text" name="primerApellido" placeholder="Primer Apellido" value={datos.primerApellido} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="segundoApellido" placeholder="Segundo Apellido" value={datos.segundoApellido} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="nombres" placeholder="Nombre(s)" value={datos.nombres} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="noCuenta" placeholder="No. de Cuenta" value={datos.noCuenta} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            <input type="text" name="direccion" placeholder="Dirección" value={datos.direccion} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="carrera" placeholder="Carrera" value={datos.carrera} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="noIdentidad" placeholder="No. de Identidad" value={datos.noIdentidad} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-3">
            <input type="text" name="procedencia" placeholder="Lugar de Procedencia" value={datos.procedencia} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="date" name="fechaNacimiento" value={datos.fechaNacimiento} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <div className="flex items-center gap-2 p-1 bg-white border rounded text-xs">
              <span className="font-semibold text-gray-600">Sexo:</span>
              <label><input type="radio" name="sexo" value="Hombre" checked={datos.sexo === 'Hombre'} onChange={handleInputChange} /> H</label>
              <label><input type="radio" name="sexo" value="Mujer" checked={datos.sexo === 'Mujer'} onChange={handleInputChange} /> M</label>
            </div>
            <select name="estadoCivil" value={datos.estadoCivil} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs">
              <option value="">Estado Civil...</option>
              <option value="Soltero">Soltero(a)</option>
              <option value="Union Libre">Unión Libre</option>
              <option value="Casado">Casado(a)</option>
              <option value="Divorciado">Divorciado(a)</option>
              <option value="Viudo">Viudo(a)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            <input type="text" name="telefono" placeholder="N° Teléfono" value={datos.telefono} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="contactoNombre" placeholder="Emergencia: Nombre" value={datos.contactoNombre} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
            <input type="text" name="contactoTelefono" placeholder="Emergencia: Teléfono" value={datos.contactoTelefono} onChange={handleInputChange} className="p-2 border rounded bg-white text-xs" />
          </div>

          {/* SIGNOS VITALES */}
          <div className="grid grid-cols-2 sm:grid-cols-9 gap-1">
            <input type="datetime-local" name="fechaHora" value={datos.fechaHora} onChange={handleInputChange} className="p-1 border rounded bg-white text-[10px]" />
            <input type="text" name="edad" placeholder="Edad" value={datos.edad} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="peso" placeholder="Peso Kg" value={datos.peso} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="talla" placeholder="Talla Cm" value={datos.talla} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="imc" placeholder="IMC" value={datos.imc} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="temperatura" placeholder="T° C" value={datos.temperatura} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="presionArterial" placeholder="P. Arterial" value={datos.presionArterial} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <input type="text" name="pulso" placeholder="Pulso" value={datos.pulso} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs" />
            <select name="seguroMedico" value={datos.seguroMedico} onChange={handleInputChange} className="p-1 border rounded bg-white text-xs">
              <option value="">Seguro...</option>
              <option value="Privado">Privado</option>
              <option value="IHSS">IHSS</option>
              <option value="No">No</option>
            </select>
          </div>
        </fieldset>

        {/* HEA */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>HEA (Historia de la Enfermedad Actual)</legend>
          <textarea name="hea" rows="3" value={datos.hea} onChange={handleInputChange} placeholder="Describa la historia de la enfermedad actual..." className="w-full p-2 border rounded text-xs" />
        </fieldset>

        {/* ANTECEDENTES FAMILIARES */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>ANTECEDENTES FAMILIARES (En caso de positivo detallar parentesco)</legend>
          <table className="w-full border-collapse border border-gray-300 text-xs mt-2">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 p-1 text-left">Descripción</th>
                <th className="border border-gray-300 p-1 w-20 text-center">Sí / No</th>
                <th className="border border-gray-300 p-1 text-left">Detalle / Parentesco</th>
              </tr>
            </thead>
            <tbody>
              {['Diabetes', 'T.B. Pulmonar', 'Desnutrición', 'Enf. Mentales', 'Convulsiones', 'Alcoholismo o Sustancias', 'Alergias', 'Cáncer', 'Otros'].map((item, idx) => {
                const key = Object.keys(familiares)[idx];
                return (
                  <tr key={key}>
                    <td className="border border-gray-300 p-1 font-medium">{idx + 1}. {item}</td>
                    <td className="border border-gray-300 p-1 text-center">
                      <div className="flex justify-center gap-2">
                        <label><input type="radio" name={`fam_${key}`} value="Si" checked={familiares[key].opcion === 'Si'} onChange={() => handleSubChange(setFamiliares, familiares, key, 'opcion', 'Si')} /> Sí</label>
                        <label><input type="radio" name={`fam_${key}`} value="No" checked={familiares[key].opcion === 'No'} onChange={() => handleSubChange(setFamiliares, familiares, key, 'opcion', 'No')} /> No</label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-1">
                      <input type="text" value={familiares[key].detalle} onChange={(e) => handleSubChange(setFamiliares, familiares, key, 'detalle', e.target.value)} placeholder="Detallar parentesco..." className="w-full p-1 border-0 text-xs" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </fieldset>

        {/* ANTECEDENTES PERSONALES */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>ANTECEDENTES PERSONALES (En caso de positivo detallar inicio y tratamiento)</legend>
          <table className="w-full border-collapse border border-gray-300 text-xs mt-2">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 p-1 text-left">Descripción</th>
                <th className="border border-gray-300 p-1 w-20 text-center">Sí / No</th>
                <th className="border border-gray-300 p-1 text-left">Detalle / Inicio y Tratamiento</th>
              </tr>
            </thead>
            <tbody>
              {['Diabetes', 'T.B. Pulmonar', 'I.T.S.', 'Desnutrición', 'Enf. Mentales', 'Convulsiones', 'Alergias', 'Cáncer', 'Hospitalarias y Quirúrgicas', 'Traumáticos', 'Otros'].map((item, idx) => {
                const key = Object.keys(personales)[idx];
                return (
                  <tr key={key}>
                    <td className="border border-gray-300 p-1 font-medium">{idx + 1}. {item}</td>
                    <td className="border border-gray-300 p-1 text-center">
                      <div className="flex justify-center gap-2">
                        <label><input type="radio" name={`per_${key}`} value="Si" checked={personales[key].opcion === 'Si'} onChange={() => handleSubChange(setPersonales, personales, key, 'opcion', 'Si')} /> Sí</label>
                        <label><input type="radio" name={`per_${key}`} value="No" checked={personales[key].opcion === 'No'} onChange={() => handleSubChange(setPersonales, personales, key, 'opcion', 'No')} /> No</label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-1">
                      <input type="text" value={personales[key].detalle} onChange={(e) => handleSubChange(setPersonales, personales, key, 'detalle', e.target.value)} placeholder="Detalle inicio y tratamiento..." className="w-full p-1 border-0 text-xs" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </fieldset>

        {/* HÁBITOS TOXICOLÓGICOS PERSONALES */}
        <fieldset className="mb-4 p-3 border border-gray-300 rounded-md bg-white">
          <legend className="font-bold px-2 text-xs" style={{ color: '#004A87' }}>HÁBITOS TOXICOLÓGICOS (En caso de positivo detallar tiempo de uso, frecuencia y tipo)</legend>
          <table className="w-full border-collapse border border-gray-300 text-xs mt-2">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 p-1 text-left">Descripción</th>
                <th className="border border-gray-300 p-1 w-20 text-center">Sí / No</th>
                <th className="border border-gray-300 p-1 text-left">Detalle / Frecuencia y Tipo</th>
              </tr>
            </thead>
            <tbody>
              {['Alcohol', 'Tabaquismo', 'Marihuana', 'Cocaína', 'Otros'].map((item, idx) => {
                const key = Object.keys(toxicologicos)[idx];
                return (
                  <tr key={key}>
                    <td className="border border-gray-300 p-1 font-medium">{idx + 1}. {item}</td>
                    <td className="border border-gray-300 p-1 text-center">
                      <div className="flex justify-center gap-2">
                        <label><input type="radio" name={`tox_${key}`} value="Si" checked={toxicologicos[key].opcion === 'Si'} onChange={() => handleSubChange(setToxicologicos, toxicologicos, key, 'opcion', 'Si')} /> Sí</label>
                        <label><input type="radio" name={`tox_${key}`} value="No" checked={toxicologicos[key].opcion === 'No'} onChange={() => handleSubChange(setToxicologicos, toxicologicos, key, 'opcion', 'No')} /> No</label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-1">
                      <input type="text" value={toxicologicos[key].detalle} onChange={(e) => handleSubChange(setToxicologicos, toxicologicos, key, 'detalle', e.target.value)} placeholder="Tiempo de uso, frecuencia y tipo..." className="w-full p-1 border-0 text-xs" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </fieldset>

        <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow transition text-xs" style={{ backgroundColor: '#004A87' }}>
          Guardar Historia Clínica Medicina General
        </button>
      </form>
    </div>
  );
}

export default FormularioMedicinaGeneralCompleto;