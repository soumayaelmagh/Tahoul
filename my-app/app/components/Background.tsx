export default function Background() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60">
      <div className="absolute -left-20 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(70,130,180,0.3),transparent_70%)] blur-2xl" />
      <div className="float-slow absolute -right-10 top-40 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(48,83,118,0.25),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[420px] grid-dots opacity-40" />
    </div>
  );
}
