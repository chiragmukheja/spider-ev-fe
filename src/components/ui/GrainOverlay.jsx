const GRAIN_SVG =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"160\" height=\"160\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"160\" height=\"160\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')";

const GrainOverlay = ({ className = "opacity-[0.08]" }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{ backgroundImage: GRAIN_SVG }}
    aria-hidden
  />
);

export default GrainOverlay;
