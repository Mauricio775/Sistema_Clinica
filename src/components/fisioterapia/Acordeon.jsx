import { useState } from "react";

function Acordeon({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setAbierto((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition text-left"
      >
        <span className="font-medium text-gray-800 text-sm">{titulo}</span>
        <span className="text-gray-400 text-sm">{abierto ? "▲" : "▼"}</span>
      </button>
      {abierto && (
        <div className="p-4 border-t border-gray-200">{children}</div>
      )}
    </div>
  );
}

export default Acordeon;
