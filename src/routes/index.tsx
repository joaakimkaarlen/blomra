import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLOMRA – Blommor, buketter & binderi" },
      { name: "description", content: "BLOMRA erbjuder buketter, bröllopsblommor, eventdekor och blomsterprenumerationer." },
      { property: "og:title", content: "BLOMRA – Blommor, buketter & binderi" },
      { property: "og:description", content: "Buketter, bröllop, event och prenumerationer från BLOMRA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["Buketter", "Handbundna buketter efter säsong – till vardag och fest."],
  ["Bröllop", "Brudbukett, kransar och dekor, formgivet tillsammans med er."],
  ["Event & företag", "Blomsterarrangemang för fester, kontor och evenemang."],
  ["Sorgbinderi", "Kransar och dekorationer med omsorg och respekt."],
];
const products = [
  ["Säsongens bukett", "Från 450 kr"],
  ["Blomsterprenumeration", "Från 390 kr / mån"],
  ["Krukväxter", "Från 199 kr"],
  ["Torkade blommor", "Från 295 kr"],
];

function Index() {
  return (
    <div className="font-sans">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl tracking-[0.3em]">BLOMRA</span>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#tjanster">Tjänster</a><a href="#produkter">Produkter</a><a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-accent">Blommor & binderi</p>
          <h1 className="font-display text-5xl leading-tight md:text-7xl">
            Blommor som <em>berättar</em> något.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Säsongsbundna buketter, bröllop och event – bundna för hand med känsla för detaljer.
          </p>
          <a href="#kontakt" className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-primary-foreground transition hover:bg-accent">
            Beställ eller fråga
          </a>
        </div>
        <img src={hero} alt="Handbunden bukett med rosor och eukalyptus" width={1600} height={1104} className="aspect-[4/5] w-full rounded-sm object-cover" />
      </section>

      <section id="tjanster" className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl">Tjänster</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {services.map(([t, d], i) => (
              <div key={t} className="bg-card p-8">
                <span className="font-display text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produkter" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl">Produkter</h2>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {products.map(([t, p]) => (
            <li key={t} className="flex items-baseline justify-between py-5">
              <span className="font-display text-2xl">{t}</span>
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="kontakt" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          <h2 className="font-display text-4xl">Hör av dig</h2>
          <div><p className="text-sm uppercase tracking-widest opacity-70">Kontakt</p><p className="mt-2">hej@blomra.se<br />070-000 00 00</p></div>
          <div><p className="text-sm uppercase tracking-widest opacity-70">Öppettider</p><p className="mt-2">Tis–Fre 10–18<br />Lör 10–15</p></div>
        </div>
        <p className="mx-auto mt-16 max-w-6xl px-6 text-sm opacity-60">© BLOMRA</p>
      </section>
    </div>
  );
}
