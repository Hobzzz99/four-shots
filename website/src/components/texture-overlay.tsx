export default function TextureOverlay({
  opacity = 0.12,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      className={`halftone-overlay absolute inset-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
