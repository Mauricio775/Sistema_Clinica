function ConfirmacionStep({ onReiniciar }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-10 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
        ✓
      </div>
      <h2 className="font-bold text-gray-800 text-lg mb-1">
        Remitido con éxito
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        El expediente fue enviado al área correspondiente.
      </p>
      <button
        onClick={onReiniciar}
        className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
      >
        Atender otro paciente
      </button>
    </div>
  );
}

export default ConfirmacionStep;
