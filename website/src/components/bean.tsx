export default function Bean({
  className = "",
  size = 30,
  rotate = -15,
  base = "#2a0f3a",
  crease = "#6b2d8c",
  style,
}: {
  className?: string;
  size?: number;
  rotate?: number;
  base?: string;
  crease?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={className}
      style={{ width: size, height: size, position: "relative", ...style }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: base,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "18% 48% 18% 48%",
            background: crease,
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
