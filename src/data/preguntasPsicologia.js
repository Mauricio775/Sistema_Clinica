export const entrevistaPsicologica = {
  datosComplementarios: [
    { key: "psiTipoConsulta", label: "Tipo de consulta", type: "radio", options: ["Consulta espontánea", "Consulta referida"] },
    {
      key: "psiDrReferente",
      label: "Dr. (a) que refiere",
      type: "text",
      mostrarSi: { key: "psiTipoConsulta", valor: "Consulta referida" },
    },
    { key: "psiCorreo", label: "Correo electrónico institucional (personal)", type: "text" },
  ],

  consulta: [
    { key: "psiMotivoConsulta", label: "Motivo de consulta", type: "textarea" },
    { key: "psiFechaConsulta", label: "Fecha", type: "date" },
    { key: "psiHoraConsulta", label: "Hora", type: "time" },
    { key: "psiImpresionDiagnostica", label: "Impresión diagnóstica", type: "textarea" },
  ],

  antecedentesSituacion: [
    { key: "psiComoAfectaVida", label: "¿Cómo siente que esta situación ha afectado su vida?", type: "textarea" },
    { key: "psiHaceCuanto", label: "¿Hace cuánto se siente de esa manera?", type: "textarea" },
    { key: "psiAmbitosAfecta", label: "¿En qué ámbitos le afecta que se sienta de esa manera?", type: "textarea" },
  ],

  historiaFamiliar: [
    { key: "psiRelacionPadresNino", label: "¿Cómo era la relación con sus padres cuando era niño?", type: "textarea" },
    { key: "psiRelacionPadresActual", label: "¿Cómo describiría la relación con sus padres actualmente?", type: "textarea" },
    { key: "psiRelacionEntrePadres", label: "¿Cómo es la relación entre sus padres?", type: "textarea" },
    { key: "psiTieneHermanos", label: "¿Tiene hermanos?", type: "radio", options: ["Sí", "No"] },
    {
      key: "psiRelacionHermanos",
      label: "¿Cómo es su relación con sus hermanos?",
      type: "textarea",
      mostrarSi: { key: "psiTieneHermanos", valor: "Sí" },
    },
    { key: "psiFormaCastigo", label: "¿Cuándo era niño de qué forma lo castigaban?", type: "textarea" },
    { key: "psiRespuestaCastigos", label: "¿Cómo respondía a los castigos?", type: "textarea" },
    { key: "psiAcontecimientosFamilia", label: "¿Ha habido acontecimientos, enfermedades, accidentes o problemas que le preocupan dentro de la familia?", type: "textarea" },
    { key: "psiConQuienVive", label: "¿Con quiénes vive actualmente? Y ¿Cómo se siente con esas personas?", type: "textarea" },
  ],

  socializacion: [
    { key: "psiRelacionesActuales", label: "¿Cómo son sus relaciones con las demás personas actualmente?", type: "textarea" },
    { key: "psiAmistosaSolitaria", label: "¿Te consideras una persona amistosa o solitaria?", type: "text" },
    { key: "psiActividadesSoloOCon", label: "Prefiere realizar sus actividades laborales y recreativas solo o con otras personas", type: "text" },
  ],

  aspectosAcademicosLaborales: [
    { key: "psiComoSienteCarrera", label: "¿Cómo se siente en la profesión/carrera que estudia?", type: "textarea" },
    { key: "psiTrabaja", label: "Trabaja", type: "radio", options: ["Sí", "No"] },
    { key: "psiIndiceGlobal", label: "Índice global", type: "text" },
    { key: "psiIndicePeriodo", label: "Índice de período actualmente cursado", type: "text" },
    { key: "psiBeca", label: "¿Actualmente tiene beca estudiantil? ¿Qué tipo de beca es?", type: "text" },
    { key: "psiLabora", label: "¿Actualmente labora? ¿En qué labora?", type: "text" },
  ],

  antecedentesMedicosPsiquiatricos: [
    { key: "psiAtencionPrevia", label: "¿Anteriormente ha recibido atención psicológica o psiquiátrica? ¿Cuál fue el motivo?", type: "textarea" },
    { key: "psiAntecedenteFamiliar", label: "¿En su familia anteriormente alguien ha tenido algún antecedente psicológico?", type: "textarea" },
    { key: "psiEnfermedadesGraves", label: "¿Ha padecido o padece enfermedades médicas graves/accidentes?", type: "textarea" },
    { key: "psiMedicamento", label: "¿Toma algún medicamento actualmente? ¿Cuál y por qué?", type: "textarea" },
    { key: "psiIntervencionQuirurgica", label: "¿Ha sido intervenido quirúrgicamente? ¿De qué?", type: "textarea" },
  ],

  antecedentesMedicosPeriodo: [
    { key: "psiComoEsPeriodo", label: "¿Actualmente cómo es su periodo?", type: "textarea" },
    { key: "psiSintomasInusuales", label: "¿Tiene síntomas inusuales?", type: "textarea" },
  ],

  relacionesInterpersonalesSexual: [
    { key: "psiRelacionesAmorosas", label: "¿Ha tenido relaciones amorosas ya sea de noviazgo/matrimonio u otros?", type: "textarea" },
    { key: "psiExperienciasSexuales", label: "¿Ha tenido experiencias sexuales? ¿De qué tipo?", type: "textarea" },
  ],

  habitosJudicialesPersonalidad: [
    { key: "psiAntecedentesPenales", label: "¿Ha tenido antecedentes penales o se ha visto envuelto en problemas legales?", type: "radio", options: ["Sí", "No"] },
    {
      key: "psiAntecedentesPenalesTipo",
      label: "¿De qué tipo?",
      type: "text",
      mostrarSi: { key: "psiAntecedentesPenales", valor: "Sí" },
    },
    { key: "psiConsumeSustancias", label: "¿Consume algún tipo de sustancias?", type: "radio", options: ["Sí", "No"] },
    {
      key: "psiSustanciaCual",
      label: "Especifique cuál",
      type: "text",
      mostrarSi: { key: "psiConsumeSustancias", valor: "Sí" },
    },
    { key: "psiConsumeTabaco", label: "¿Consume tabaco?", type: "radio", options: ["Sí", "No"] },
    { key: "psiHabitoPerjudicial", label: "¿Tienes alguna rutina o hábito que consideres perjudicial para tu salud?", type: "textarea" },
    { key: "psiPersonalidad", label: "¿Me podría decir cómo es tu personalidad? ¿Sientes que algo de ti ha cambiado últimamente?", type: "textarea" },
    { key: "psiImportaOpinion", label: "¿Suele importarte mucho lo que piensen los demás de ti?", type: "textarea" },
    { key: "psiReaccionNoAgradar", label: "¿Qué reacción tiene cuando a alguien no le agrada?", type: "textarea" },
  ],

  conductaObservada: [
    { key: "psiLenguajeCorporal", label: "Lenguaje corporal", type: "textarea" },
    { key: "psiLenguajeVerbal", label: "Lenguaje verbal", type: "textarea" },
    { key: "psiSilencios", label: "Silencios", type: "textarea" },
  ],

  remision: [
    { key: "psiMotivoRemision", label: "Motivo de la remisión", type: "textarea" },
  ],
};

export const NUMERO_CITAS = 7;


export const sintomasPsicologicosList = [
  { key: "problemasConcentrarse", label: "Problemas para concentrarse" },
  { key: "convulsiones", label: "Convulsiones" },
  { key: "onicofagia", label: "Onicofagia" },
  { key: "sonambulismo", label: "Sonambulismo" },
  { key: "pesadillasRecurrentes", label: "Pesadillas recurrentes" },
  { key: "alergias", label: "Alergias" },
  { key: "escuchaVoces", label: "Escucha voces" },
  { key: "hipersomniaInsomnio", label: "Hipersomnia o insomnio" },
  { key: "miedosFobias", label: "Miedos o fobias" },
  { key: "golpesFuertesCabeza", label: "Golpes fuertes en la cabeza" },
  { key: "pensamientosMorir", label: "Pensamientos de morir" },
  { key: "asma", label: "Asma" },
  { key: "alucinaciones", label: "Alucinaciones" },
  { key: "estreñimiento", label: "Estreñimiento" },
  { key: "mareosDesmayos", label: "Mareos o desmayos" },
  { key: "diarreaTensional", label: "Diarrea tensional" },
  { key: "accidentes", label: "Accidentes" },
  { key: "ticsNerviosos", label: "Tics nerviosos" },
  { key: "autolesiones", label: "Autolesiones" },
  { key: "demasiadoApetitoPocoApetito", label: "Demasiado apetito o poco apetito" },
];