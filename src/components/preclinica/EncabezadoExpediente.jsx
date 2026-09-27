function EncabezadoExpediente({ paciente }) {
  return (
    <p className="text-gray-500 text-sm mb-4">
      {paciente?.nombre} {paciente?.cuenta}
    </p>
  );
}

export default EncabezadoExpediente;
