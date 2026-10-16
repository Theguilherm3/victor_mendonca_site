/** A linha de LED ondulada da parede do consultório — assinatura visual do site. */
export function GlowLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`glow-line ${className}`}
      viewBox="0 0 1200 180"
      preserveAspectRatio="none"
      aria-hidden="true"
      data-reveal
    >
      <path d="M-10 30 C 260 18, 400 158, 640 150 S 1010 96, 1210 128" pathLength={1} />
    </svg>
  );
}
