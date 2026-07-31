export default function Swatch({ gradient, className = '', label, children }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={label || 'Placeholder image'}
    >
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22 numOctaves=%222%22/></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23n)%22/></svg>')]" />
      {children}
    </div>
  );
}
