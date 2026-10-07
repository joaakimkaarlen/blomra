import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/blomra-logo.png.asset.json";
import hero from "@/assets/hero-anemones.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blomra – Blommor & upplevelser att minnas" },
      {
        name: "description",
        content:
          "Blomra skapar känslor, minnen och personliga upplevelser genom blommor. Bukettabonnemang, Swish & Grab-bod, bröllop, begravning samt event och workshops.",
      },
      { property: "og:title", content: "Blomra – Blommor & upplevelser att minnas" },
      {
        property: "og:description",
        content:
          "Blommor till livets alla ögonblick: buketter, abonnemang, bröllop, begravning och workshops för privatpersoner och företag.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const offerings = [
  {
    title: "Bukettabonnemang",
    body: "Få hem en vacker bukett varje vecka, var 14:e dag eller en gång i månaden – beroende på vad som passar just ditt liv.",
    span: "lg:col-span-2",
  },
  {
    title: "Swish & Grab-bod",
    body: "Här finns bland annat helgbuketter av säsongens utvalda snittblommor. Swisha, plocka med dig och gå.",
    span: "lg:col-span-2",
  },
  {
    title: "Bröllop",
    body: "Jag skapar allt ifrån brudbukett, corsage och större blomsterarrangemang – formgivet tillsammans med er.",
    span: "lg:col-span-2",
  },
  {
    title: "Begravning",
    body: "Jag skapar allt ifrån buketter, stående- och liggande kistdekoration, urndekoration och kransar. Med omsorg och respekt.",
    span: "lg:col-span-3",
  },
  {
    title: "Event & workshops",
    body: "Lär er binda exempelvis kransar tillsammans med ett härligt gäng. Bubbel & tilltugg ingår alltid.",
    span: "lg:col-span-3",
  },
];

function Index() {
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Blomra"
              width={1255}
              height={1255}
              loading="lazy"
              className="h-11 w-11 mix-blend-multiply"
            />
            <span className="label-caps text-forest">Blomra</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-cerise" href="#erbjudanden">
              Erbjudanden
            </a>
            <a className="transition-colors hover:text-cerise" href="#workshops">
              Workshops
            </a>
            <a className="transition-colors hover:text-cerise" href="#kontakt">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero: the logo, big */}
      <section id="top" className="hero-glow">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-14 text-center sm:pb-24 sm:pt-20">
          <img
            src={logoAsset.url}
            alt="Blomra – Blommor & upplevelser att minnas"
            width={1255}
            height={1255}
            className="w-[min(74vw,440px)] mix-blend-multiply sm:w-[min(52vw,520px)]"
          />
          <h1 className="mt-10 font-display text-3xl leading-tight text-forest sm:text-5xl">
            Blommor till livets alla ögonblick.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Blomra erbjuder mer än bara växter, vackra buketter och arrangemang – jag
            skapar känslor, minnen och personliga upplevelser genom blommor, för både
            privatpersoner och företag.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cerise-deep"
            >
              Hör av dig
            </a>
            <a
              href="#erbjudanden"
              className="rounded-full border border-forest/30 px-8 py-3 text-sm uppercase tracking-[0.18em] text-forest transition-colors hover:border-cerise hover:text-cerise"
            >
              Se vad jag erbjuder
            </a>
          </div>
        </div>
      </section>

      {/* Photo band */}
      <div className="mx-auto max-w-6xl px-6">
        <img
          src={hero}
          alt="Bukett av cerisefärgade anemoner och ljusrosa ranunkler"
          width={1600}
          height={900}
          loading="lazy"
          className="h-[240px] w-full rounded-sm object-cover sm:h-[380px]"
        />
      </div>

      {/* Erbjudanden */}
      <section id="erbjudanden" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="label-caps text-cerise">Det här erbjuder Blomra</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-forest sm:text-5xl">
          Fem sätt att låta dig blomra
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-6">
          {offerings.map((o, i) => (
            <article
              key={o.title}
              className={`group bg-background p-8 transition-colors hover:bg-blush/50 sm:p-10 ${o.span}`}
            >
              <span className="label-caps text-cerise">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-forest sm:text-3xl">
                {o.title}
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground">{o.body}</p>
              <span className="mt-6 block h-px w-10 bg-forest/25 transition-all duration-300 group-hover:w-24 group-hover:bg-cerise" />
            </article>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-2">
          <img
            src={workshop}
            alt="Händer som binder en bukett av cerisefärgade anemoner och ljusrosa rosor"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full rounded-sm object-cover"
          />
          <div>
            <p className="label-caps text-blush-deep">Workshops & event</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Binda tillsammans, bubbel & tilltugg ingår
            </h2>
            <p className="mt-6 max-w-md text-lg text-blush/80">
              Jag erbjuder workshops där ni tillsammans med ett härligt gäng får lära er
              binda exempelvis kransar med mig. Perfekt för vennmiddagar, företagsevent,
              möhippor och alla andra tillfällen som förtjänar blommor och gemenskap.
            </p>
            <a
              href="#kontakt"
              className="mt-9 inline-block rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-blush hover:text-forest"
            >
              Boka en workshop
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-blush">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="font-display text-3xl italic leading-snug text-forest sm:text-4xl">
            ”Blommor till Livets alla ögonblick erbjuder Blomra. Så låt Blomra få dig att
            blomra!”
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="label-caps text-cerise">Kontakt</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Hör av dig
            </h2>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Berätta vad du har på gång – ett bröllop, en workshop, ett abonnemang eller
              bara en bukett till någon du gillar.
            </p>
            <a
              href="mailto:theresia@blomra.se"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cerise-deep"
            >
              Skicka ett mejl
            </a>
          </div>
          <div>
            <p className="label-caps text-cerise">Så når du mig</p>
            <ul className="mt-5 space-y-3 text-forest">
              <li>
                <a
                  className="transition-colors hover:text-cerise"
                  href="mailto:theresia@blomra.se"
                >
                  theresia@blomra.se
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-cerise"
                  href="tel:+46735029029"
                >
                  +46 73 502 90 29
                </a>
              </li>
            </ul>
            <p className="label-caps mt-8 text-cerise">Besök boden</p>
            <a
              className="mt-5 block text-forest transition-colors hover:text-cerise"
              href="https://www.google.com/maps/search/?api=1&query=Joachim+Becks+gata+12+233+63+Bara"
              target="_blank"
              rel="noreferrer"
            >
              Joachim Becks gata 12
              <br />
              233 63 Bara
            </a>
            <p className="label-caps mt-8 text-cerise">Öppettider</p>
            <p className="mt-5 text-forest">
              Fredag–söndag kl. 10–21
              <span className="mt-2 block text-sm text-muted-foreground">
                Tiderna kan variera – följ mig på{" "}
                <a
                  className="underline underline-offset-4 transition-colors hover:text-cerise"
                  href="https://www.instagram.com/blomra.se/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>{" "}
                eller{" "}
                <a
                  className="underline underline-offset-4 transition-colors hover:text-cerise"
                  href="https://www.facebook.com/blomra"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>{" "}
                för uppdateringar.
              </span>
            </p>
          </div>
          <div>
            <p className="label-caps text-cerise">Följ mig</p>
            <ul className="mt-5 space-y-3 text-forest">
              <li>
                <a
                  className="transition-colors hover:text-cerise"
                  href="https://www.instagram.com/blomra.se/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: blomra.se
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-cerise"
                  href="https://www.facebook.com/blomra"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook: blomra
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-forest-deep text-forest-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <img
            src={logoAsset.url}
            alt="Blomra"
            width={1255}
            height={1255}
            loading="lazy"
            className="h-12 w-12 rounded-full bg-background p-1"
          />
          <p className="label-caps text-blush/80">Blommor & upplevelser att minnas</p>
          <p className="text-sm text-blush/60">© {new Date().getFullYear()} Blomra</p>
        </div>
      </footer>
    </div>
  );
}
