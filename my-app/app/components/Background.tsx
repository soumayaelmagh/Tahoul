export default function Background() {
  const bubbles = [
    { text: "Strategy", top: "10%", side: "left", size: "120px", delay: "0s" },
    { text: "Transformation", top: "30%", side: "left", size: "140px", delay: "2s" },
    { text: "Value", top: "48%", side: "left", size: "100px", delay: "4s" },
    { text: "Execution", top: "70%", side: "left", size: "120px", delay: "6s" },
    { text: "Governance", top: "14%", side: "right", size: "120px", delay: "1s" },
    { text: "Insights", top: "36%", side: "right", size: "105px", delay: "3s" },
    { text: "Operating Model", top: "56%", side: "right", size: "150px", delay: "5s" },
    { text: "Alignment", top: "78%", side: "right", size: "110px", delay: "7s" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="glow-orb absolute left-10 top-24 h-56 w-56 opacity-55" />
      <div className="glow-orb blue absolute right-24 top-10 h-64 w-64 opacity-50" />
      <div className="glow-orb deep absolute bottom-16 left-1/3 h-72 w-72 opacity-42" />
      <div className="absolute inset-x-0 top-24 h-[360px] grid-dots opacity-35" />
      <div className="absolute inset-x-0 top-[520px] wave-line" />
      <div className="bubble-field left">
        {bubbles
          .filter((bubble) => bubble.side === "left")
          .map((bubble) => (
            <span
              key={`${bubble.text}-${bubble.top}-${bubble.side}`}
              className="bubble-pop"
              style={{
                top: bubble.top,
                left: "14%",
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
              }}
            >
              <span>{bubble.text}</span>
            </span>
          ))}
      </div>
      <div className="bubble-field right">
        {bubbles
          .filter((bubble) => bubble.side === "right")
          .map((bubble) => (
            <span
              key={`${bubble.text}-${bubble.top}-${bubble.side}`}
              className="bubble-pop"
              style={{
                top: bubble.top,
                right: "14%",
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
              }}
            >
              <span>{bubble.text}</span>
            </span>
          ))}
      </div>
    </div>
  );
}
