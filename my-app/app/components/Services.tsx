import { services } from "../content";

export default function Services() {
  return (
    <section
      id="services"
      className="snap-section mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-3">
          <p className="section-eyebrow text-xs uppercase tracking-[0.4em]">
            Our Services
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="fade-up group card-hover rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${0.05 + index * 0.05}s` }}
          >
            <div className="mb-4 h-1 w-14 rounded-full bg-(--color-steel) transition group-hover:w-20" />
            <h3 className="font-display text-xl text-(--color-deep)">
              {service.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-(--color-ink)/75">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--color-steel)" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
