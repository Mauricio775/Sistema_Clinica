import { useRef } from "react";

const ANCHO = 260;
const ALTO = 220;

export function DibujoMama() {
  return (
    <g fill="none" stroke="#6b7280" strokeWidth="2">
      <circle cx="130" cy="110" r="85" />
      <circle cx="130" cy="110" r="18" />
      <circle cx="130" cy="110" r="4" fill="#6b7280" />
      <line x1="130" y1="15" x2="130" y2="205" strokeDasharray="4 4" strokeWidth="1" />
      <line x1="35" y1="110" x2="225" y2="110" strokeDasharray="4 4" strokeWidth="1" />
    </g>
  );
}

export function DibujoVulva() {
  return (
    <g fill="none" stroke="#6b7280" strokeWidth="2">
      <path d="M130 20 C 60 30, 50 120, 100 190 Q130 215 160 190 C 210 120, 200 30, 130 20 Z" />
      <ellipse cx="130" cy="110" rx="22" ry="48" />
      <line x1="130" y1="62" x2="130" y2="158" strokeWidth="1" />
    </g>
  );
}

export function DibujoCervix() {
  return (
    <g fill="none" stroke="#6b7280" strokeWidth="2">
      <circle cx="130" cy="110" r="90" />
      <line x1="130" y1="20" x2="130" y2="200" />
      <line x1="40" y1="110" x2="220" y2="110" />
    </g>
  );
}

function DiagramaMarcable({ titulo, marcas = [], onChange, children }) {
  const svgRef = useRef(null);

  const agregar = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * ANCHO);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * ALTO);
    onChange([...marcas, { x, y }]);
  };

  const quitar = (indice, e) => {
    e.stopPropagation();
    onChange(marcas.filter((_, i) => i !== indice));
  };

  return (
    <div>
      <p className="text-sm text-gray-700 mb-1">{titulo}</p>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        onClick={agregar}
        className="w-full max-w-xs border border-gray-200 rounded-lg bg-gray-50 cursor-crosshair"
      >
        {children}
        {marcas.map((m, i) => (
          <g key={i} onClick={(e) => quitar(i, e)} className="cursor-pointer">
            <circle cx={m.x} cy={m.y} r="8" fill="rgba(220,38,38,0.25)" stroke="#dc2626" strokeWidth="2" />
            <circle cx={m.x} cy={m.y} r="2" fill="#dc2626" />
          </g>
        ))}
      </svg>
      <div className="flex items-center justify-between max-w-xs mt-1">
        <span className="text-xs text-gray-500">Clic para marcar · clic en una marca para quitarla</span>
        {marcas.length > 0 && (
          <button
            type="button"
            onClick={() => onChange([])}
            className="text-xs text-gray-600 hover:text-gray-900 font-medium"
          >
            Limpiar
          </button>
        )}
      </div>
    </div>
  );
}

export default DiagramaMarcable;