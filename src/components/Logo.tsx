export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stamp-animate"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" stroke="#C9A227" strokeWidth="3.5" fill="none" />
      {/* Inner circle */}
      <circle cx="50" cy="50" r="38" stroke="#C9A227" strokeWidth="1.5" fill="none" />
      {/* Building silhouette */}
      <rect x="28" y="55" width="44" height="22" fill="#1B3A6B" />
      <rect x="34" y="42" width="14" height="13" fill="#1B3A6B" />
      <rect x="52" y="42" width="14" height="13" fill="#1B3A6B" />
      <rect x="40" y="46" width="6" height="9" fill="#C9A227" />
      <rect x="54" y="46" width="6" height="9" fill="#C9A227" />
      {/* Door */}
      <rect x="44" y="63" width="12" height="14" fill="#C9A227" />
      {/* Windows row */}
      <rect x="30" y="58" width="8" height="6" fill="#C9A227" />
      <rect x="62" y="58" width="8" height="6" fill="#C9A227" />
      {/* Flag pole */}
      <line x1="50" y1="22" x2="50" y2="42" stroke="#C9A227" strokeWidth="2" />
      <polygon points="50,22 62,28 50,34" fill="#C9A227" />
      {/* Stars decoration */}
      <circle cx="22" cy="50" r="2" fill="#C9A227" />
      <circle cx="78" cy="50" r="2" fill="#C9A227" />
      <circle cx="50" cy="11" r="2" fill="#C9A227" />
      <circle cx="50" cy="89" r="2" fill="#C9A227" />
    </svg>
  );
}
