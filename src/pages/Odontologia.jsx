import React from 'react';
import FormularioOdontologia from '../components/odontologia/FormularioOdontologia';
import Odontograma from '../components/odontologia/Odontograma';
import EvolucionTratamiento from '../components/odontologia/EvolucionTratamiento';
import Subsiguiente from '../components/odontologia/Subsiguiente';

function Odontologia() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Odontología</h1>
        <p className="text-sm text-gray-500 mt-1">Historia Clínica Odontológica y Odontograma</p>
      </div>

      {/* Aquí insertamos los componentes que creamos */}
      <FormularioOdontologia />
      <Odontograma />
      <EvolucionTratamiento />
      <Subsiguiente />
    </div>
  );
}

export default Odontologia;
