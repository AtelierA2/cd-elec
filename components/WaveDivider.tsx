interface WaveDividerProps {
  /** Color of the wave (the "from" color — what's above or below) */
  color?: string;
  /** If true, the wave points upward (used at the top of a section) */
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  color = "#ffffff",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        className="relative block w-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "clamp(40px, 5vw, 80px)" }}
      >
        <path
          d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
