import React from 'react';
import FormularioMedicinaGeneralCompleto from '../components/medicinaGeneral/FormularioMedicinaGeneralCompleto';
import FormularioMedicinaGeneralParte2 from '../components/medicinaGeneral/FormularioMedicinaGeneralParte2';
function MedicinaGeneral() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Medicina General</h1>
        <p className="text-sm text-gray-500 mt-1">Historia Clínica y Antecedentes Médicos</p>
      </div>

      <FormularioMedicinaGeneralCompleto />
      <FormularioMedicinaGeneralParte2 />
    </div>
  );
}

export default MedicinaGeneral;
