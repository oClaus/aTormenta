/**
 * Atmosfera de fundo compartilhada: um círculo arcano bem apagado e três
 * "brasas" desfocadas, fixos atrás de todo o conteúdo. Renderizado uma
 * única vez no layout raiz para que toda página nova já herde a mesma
 * atmosfera sem precisar duplicar nada.
 */
export default function AmbientAtmosphere() {
  return (
    <div className="ambient" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none" strokeWidth="1">
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="120" strokeDasharray="2 6" />
        <rect x="120" y="120" width="160" height="160" transform="rotate(45 200 200)" />
        <g strokeWidth=".7">
          <line x1="200" y1="20" x2="200" y2="55" />
          <line x1="200" y1="345" x2="200" y2="380" />
          <line x1="20" y1="200" x2="55" y2="200" />
          <line x1="345" y1="200" x2="380" y2="200" />
          <line x1="69" y1="69" x2="93" y2="93" />
          <line x1="331" y1="69" x2="307" y2="93" />
          <line x1="69" y1="331" x2="93" y2="307" />
          <line x1="331" y1="331" x2="307" y2="307" />
        </g>
      </svg>
      <div className="ember e1" />
      <div className="ember e2" />
      <div className="ember e3" />
    </div>
  );
}
