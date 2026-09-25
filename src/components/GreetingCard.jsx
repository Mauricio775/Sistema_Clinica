function GreetingCard({ nombre, fecha, cuenta }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-yellow-400 p-6 flex justify-between items-center">
      <div>
        <p className="text-sm text-blue-600 font-medium mb-1">{fecha}</p>
        <h1 className="text-2xl font-bold text-gray-800">
          ¡Buenos días, {nombre}!
        </h1>
      </div>
      <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
        🎓 Cuenta {cuenta}
      </div>
    </div>
  );
}

export default GreetingCard;