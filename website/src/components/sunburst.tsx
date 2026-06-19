type SunburstVariant = "spiky" | "rounded-spiky" | "asymmetric-h" | "asymmetric-v";

const PATHS: Record<SunburstVariant, string> = {
  spiky:
    "M50 0 L58 32 L82 8 L66 38 L100 36 L68 50 L100 64 L66 62 L82 92 L58 68 L50 100 L42 68 L18 92 L34 62 L0 64 L32 50 L0 36 L34 38 L18 8 L42 32 Z",
  "rounded-spiky":
    "M50 4 C54 4 56 22 58 30 C64 20 76 10 80 12 C84 14 78 28 74 36 C84 32 98 32 98 38 C98 44 82 48 74 50 C82 54 98 60 96 66 C94 72 78 64 70 60 C74 70 80 86 74 88 C68 90 58 74 54 64 C52 72 48 88 42 88 C36 88 34 70 34 62 C28 70 18 84 12 80 C6 76 16 64 24 56 C14 56 0 54 0 48 C0 42 16 40 26 40 C18 32 6 20 10 16 C14 12 26 22 32 30 C34 20 40 4 50 4 Z",
  "asymmetric-h":
    "M0 50 L20 42 L8 24 L30 36 L26 8 L42 30 L50 0 L56 32 L74 10 L70 38 L94 24 L78 46 L100 50 L78 54 L94 76 L70 62 L74 90 L56 68 L50 100 L42 70 L26 92 L30 64 L8 76 L20 58 Z",
  "asymmetric-v":
    "M50 0 L60 24 L78 6 L70 32 L100 40 L72 48 L94 70 L64 60 L66 92 L50 66 L34 92 L36 60 L6 70 L28 48 L0 40 L30 32 L22 6 L40 24 Z",
};

export default function Sunburst({
  variant = "spiky",
  fill = "var(--color-orange)",
  className = "",
  style,
}: {
  variant?: SunburstVariant;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={PATHS[variant]} fill={fill} />
    </svg>
  );
}
