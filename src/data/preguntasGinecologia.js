export const fichaGinecologica = {
  consulta: [
    { key: "motivoConsultaGine", label: "Motivo de consulta", type: "textarea" },
    { key: "fum", label: "FUM (fecha de última menstruación)", type: "date" },
    { key: "so2", label: "SO2", type: "text" },
  ],
  antecedentesGinecologicos: [
    { key: "menarquia", label: "Menarquia", type: "text" },
    { key: "cicloMenstrual", label: "Ciclo menstrual", type: "text" },
    { key: "menopausia", label: "Menopausia", type: "text" },
  ],
  metodosAnticonceptivos: [
    {
      key: "metodoHormonal",
      label: "Método anticonceptivo",
      type: "radio",
      options: ["Ninguno", "ACO", "DIU", "Condón", "Ritmo", "Inyección (1 mes / 3 meses)"],
    },
    { key: "otroMetodo", label: "Otro", type: "text" },
    { key: "otroMetodoCual", label: "¿Cuál?", type: "text" },
    { key: "desdeCuandoMetodo", label: "¿Desde cuándo?", type: "text" },
    { key: "fechaUltimaCitologia", label: "Fecha de última citología", type: "date" },
    { key: "resultadoAnterior", label: "Resultado anterior", type: "text" },
    { key: "vacunaVPH", label: "¿Se ha aplicado vacuna contra VPH?", type: "radio", options: ["Sí", "No"] },
  ],
  antecedentesObstetricosColumnas: ["Gestas", "Partos", "Cesáreas", "Óbitos", "Aborto", "Hijos vivos", "Hijos muertos"],
  patologiaCervical: [
    { key: "patCervCondilomas", label: "Condilomas", type: "checkbox" },
    { key: "patCervDisplasia", label: "Displasia", type: "checkbox" },
    { key: "patCervCancer", label: "Cáncer", type: "checkbox" },
    { key: "patCervTratamiento", label: "Tratamiento recibido", type: "textarea" },
  ],
  examenMamas: [
    { key: "mamasEstado", label: "Descripción de mamas", type: "radio", options: ["Normal", "Anormal"] },
    { key: "mamasDescriba", label: "Describa", type: "textarea" },
  ],
  examenGenital: [
    { key: "genitalEstado", label: "Inspección visual del área genital (Bus y Vulva)", type: "radio", options: ["Normal", "Anormal"] },
    { key: "genitalDescriba", label: "Describa", type: "textarea" },
  ],
  seRealizaCitologia: [
    { key: "seRealizaCitologia", label: "¿Se realizará toma de citología en esta consulta?", type: "radio", options: ["Sí", "No"] },
  ],
  requisitosCitologia: [
    { key: "cursaMenstruacion", label: "¿Actualmente cursa con la menstruación?", type: "radio", options: ["SI", "NO"] },
    { key: "relacionesUltimos3Dias", label: "¿Ha tenido relaciones sexuales en los últimos 3 días?", type: "radio", options: ["SI", "NO"] },
    { key: "tratamientoViaVaginal", label: "¿Ha usado tratamiento vía vaginal en los últimos días? (Ej. Óvulos)", type: "radio", options: ["SI", "NO"] },
    { key: "duchasVaginales", label: "¿Ha usado duchas vaginales, cremas o tampones en los últimos días?", type: "radio", options: ["SI", "NO"] },
  ],
  cervix: [
    { key: "cervixAspecto", label: "Aspecto del cérvix", type: "radio", options: ["Normal", "Inflamación", "Tumor", "Eritema"] },
    { key: "cervixSecrecion", label: "Secreción", type: "radio", options: ["Normal", "Leucorrea", "Hemorrágica", "Purulenta"] },
  ],
  citologiaDatos: [
    { key: "otrosDatosClinicos", label: "Otros datos clínicos", type: "textarea" },
    { key: "fechaHoraCitologia", label: "Fecha y hora de la toma de citología", type: "datetime-local" },
  ],
  resultadoCitologia: [
    { key: "resultadoCitologia", label: "Resultado de citología", type: "radio", options: ["Normal", "Anormal"] },
    { key: "resultadoDescriba", label: "Describa", type: "textarea" },
  ],
  plan: [
    { key: "diagnosticoGine", label: "Diagnóstico", type: "textarea" },
    { key: "tratamientoGine", label: "Tratamiento", type: "textarea" },
  ],
  remision: [
    { key: "motivoRemision", label: "Motivo de la remisión", type: "textarea" },
  ],
};