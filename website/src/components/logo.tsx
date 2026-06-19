type LogoVariant = "micro" | "standard" | "display" | "signature";

// Default sizing per variant — pass a text-size className to override (e.g. for
// the hero/footer "display"/"signature" use-cases, which need a custom large size).
const SIZE_CLASSES: Partial<Record<LogoVariant, string>> = {
  standard: "text-3xl sm:text-4xl",
};

function MicroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 40 C8 36 8 28 16 26 C12 20 16 12 24 14 C26 8 36 8 38 14 C46 12 50 20 46 26 C54 28 54 36 48 40 C52 46 48 54 40 52 C38 58 28 58 26 52 C18 54 14 46 18 40 C12 42 10 44 14 40 Z"
        fill="none"
        stroke="var(--color-purple)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="40"
        fill="var(--color-ink)"
      >
        4
      </text>
    </svg>
  );
}

export default function Logo({
  variant = "standard",
  className = "",
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  if (variant === "micro") {
    return <MicroMark className={className} />;
  }

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`${SIZE_CLASSES[variant] ?? ""} italic -skew-x-6 tracking-tight`}
        style={{ fontFamily: "var(--font-caveat), cursive" }}
      >
        FourShots
      </span>
      {variant === "signature" && (
        <span className="font-sans text-xs uppercase tracking-[0.3em] mt-1">
          More Than Coffee
        </span>
      )}
    </span>
  );
}
