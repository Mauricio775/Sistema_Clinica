import { useState } from "react";
import { useExpedientes } from "../hooks/useExpedientes";
import { useRol } from "../hooks/useRol";
import { TIPO_MEDICACION } from "../data/tratamientos";
import SolicitudTratamiento from "../components/fisioterapia/SolicitudTratamiento";
import ConfirmacionStep from "../components/preclinica/ConfirmacionStep";
import ListaEsperaStep from "../components/fisioterapia/ListaEsperaStep";
import FichaPreclinicaCompleta from "../components/fisioterapia/FichaPreclinicaCompleta";
import Acordeon from "../components/fisioterapia/Acordeon";
import HojaProcedimientos from "../components/fisioterapia/incisos/HojaProcedimientos";
import EscalaDaniels from "../components/fisioterapia/incisos/EscalaDaniels";
import GoniometriaTabuadela from "../components/fisioterapia/incisos/GoniometriaTabuadela";
import TestSOT from "../components/fisioterapia/incisos/TestSOT";
import EscalaPrension from "../components/fisioterapia/incisos/EscalaPrension";
import IndiceKatz from "../components/fisioterapia/incisos/IndiceKatz";
import EvaluacionPatologica from "../components/fisioterapia/incisos/EvaluacionPatologica";

const tratamientoInicial = { tipo: "", via: "", indicaciones: "" };

function Fisioterapia() {
  const { expedientes, actualizarExpediente, agregarSolicitudTratamiento } =
    useExpedientes();
  const { usuarioActual } = useRol();
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);
  const [guardado, setGuardado] = useState(false);
  const [desearTratamiento, setDesearTratamiento] = useState(false);
  const [tratamiento, setTratamiento] = useState(tratamientoInicial);
  const [intentoGuardar, setIntentoGuardar] = useState(false);

  const expedientesFisioterapia = expedientes.filter(
    (exp) => exp.remitirA === "Fisioterapia" && !exp.fisioterapiaFinalizada
  );
  const pacienteSeleccionado =
    expedientesFisioterapia.find((exp) => exp.cuenta === cuentaSeleccionada) ?? null;

  const atenderPaciente = (paciente) => setCuentaSeleccionada(paciente.cuenta);
  const volverALista = () => {
    setCuentaSeleccionada(null);
    setGuardado(false);
    setDesearTratamiento(false);
    setTratamiento(tratamientoInicial);
    setIntentoGuardar(false);
  };

  const handleTratamientoChange = (campo, valor) =>
    setTratamiento((prev) => ({
      ...prev,
      [campo]: valor,
      ...(campo === "tipo" && valor !== TIPO_MEDICACION ? { via: "" } : {}),
    }));

  const tratamientoIncompleto =
    desearTratamiento &&
    (!tratamiento.tipo ||
      (tratamiento.tipo === TIPO_MEDICACION && !tratamiento.via));

  const handleGuardar = () => {
    if (tratamientoIncompleto) {
      setIntentoGuardar(true);
      return;
    }
    if (desearTratamiento) {
      agregarSolicitudTratamiento(cuentaSeleccionada, {
        id: String(Date.now()),
        ...tratamiento,
        origen: "Fisioterapia",
        solicitadoPor: usuarioActual,
        estado: "Pendiente",
      });
    }
    actualizarExpediente(cuentaSeleccionada, { fisioterapiaFinalizada: true });
    setGuardado(true);
  };

  if (guardado) {
    return (
      <ConfirmacionStep
        titulo="Evaluación guardada con éxito"
        mensaje="La evaluación de fisioterapia fue registrada correctamente."
        onReiniciar={volverALista}
      />
    );
  }

  if (!pacienteSeleccionado) {
    return (
      <ListaEsperaStep
        expedientes={expedientesFisioterapia}
        onSeleccionar={atenderPaciente}
      />
    );
  }

  return (
    <div className="w-full space-y-6">
      <FichaPreclinicaCompleta
        paciente={pacienteSeleccionado}
        onVolver={volverALista}
        ocultarActividadSexual
      />

      <div className="space-y-3">
        <Acordeon titulo="1. Hoja de Procedimientos y Evolución">
          <HojaProcedimientos terapeuta={usuarioActual} />
        </Acordeon>
        <Acordeon titulo="2. Escala de Valoración según Daniels (Fuerza Muscular)">
          <EscalaDaniels />
        </Acordeon>
        <Acordeon titulo="3. Escala de Goniometría según Tabuadela">
          <GoniometriaTabuadela />
        </Acordeon>
        <Acordeon titulo="4. Test de SOT (Sensory Organization Test)">
          <TestSOT />
        </Acordeon>
        <Acordeon titulo="5. Escala de Prensión">
          <EscalaPrension />
        </Acordeon>
        <Acordeon titulo="6. Índice de Katz Modificada">
          <IndiceKatz />
        </Acordeon>
        <Acordeon titulo="7. Evaluación Patológica">
          <EvaluacionPatologica />
        </Acordeon>
      </div>

      <SolicitudTratamiento
        desea={desearTratamiento}
        onDeseaChange={setDesearTratamiento}
        valores={tratamiento}
        onChange={handleTratamientoChange}
      />

      {intentoGuardar && tratamientoIncompleto && (
        <p className="text-sm text-red-600">
          Seleccione el tipo de tratamiento y, para medicación, la vía de administración.
        </p>
      )}

      <button
        onClick={handleGuardar}
        className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Guardar Evaluación
      </button>
    </div>
  );
}

export default Fisioterapia;
