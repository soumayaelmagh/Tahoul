import { promise } from "../content";

export default function Promise() {
  return (
    <section className="relative flex min-h-screen items-center bg-[#6f6f6f] py-16 pt-28 md:py-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.08)_75%,transparent_75%,transparent)] bg-size-[72px_72px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.15),transparent_65%)]" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[40%] bg-right bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/section-bg.png')",
          backgroundSize: "contain",
        }}
      />
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="slide-in text-center text-white">
          <div className="text-5xl text-white/60 md:text-6xl">“</div>
          <h2 className="mt-6 text-2xl font-semibold uppercase tracking-[0.25em] text-white md:text-4xl">
            {promise.title}
          </h2>
          <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-white/60" />
          <p className="mt-6 text-lg font-semibold text-white">
            {promise.eyebrow}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-white/85 md:text-lg">
            {promise.body}
          </p>
        </div>
      </div>
    </section>
  );
}
