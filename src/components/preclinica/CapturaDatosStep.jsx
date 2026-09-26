import EncabezadoExpediente from "./EncabezadoExpediente";
import FichaNuevoPaciente from "./FichaNuevoPaciente";
import SignosVitalesSubsiguiente from "./SignosVitalesSubsiguiente";

function CapturaDatosStep({ paciente, onGuardar, onAtras }) {
  const esPrimeraVez = paciente?.visita === "Primera vez";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-bold text-gray-800 text-lg">Captura de datos</h2>
      <EncabezadoExpediente paciente={paciente} />

      {esPrimeraVez ? (
        <FichaNuevoPaciente
          paciente={paciente}
          onGuardar={onGuardar}
          onAtras={onAtras}
        />
      ) : (
        <SignosVitalesSubsiguiente
          paciente={paciente}
          onGuardar={onGuardar}
          onAtras={onAtras}
        />
      )}
    </div>
  );
}

export default CapturaDatosStep;
