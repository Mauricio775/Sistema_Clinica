import ListaPsicologia from "../components/psicologia/ListaPsicologia";

function Psicologia() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Psicología</h1>
        <p className="text-sm text-gray-500 mt-1">
          Pacientes remitidos desde PreClínica
        </p>
      </div>

      <ListaPsicologia />
    </div>
  );
}

export default Psicologia;