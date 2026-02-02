export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="glow-orb absolute left-10 top-24 h-56 w-56 opacity-55" />
      <div className="glow-orb blue absolute right-24 top-10 h-64 w-64 opacity-50" />
      <div className="glow-orb deep absolute bottom-16 left-1/3 h-72 w-72 opacity-42" />
      <div className="absolute inset-x-0 top-24 h-[360px] grid-dots opacity-35" />
      <div className="absolute inset-x-0 top-[520px] wave-line" />
    </div>
  );
}
