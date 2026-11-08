import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/blomra-logo.png.asset.json";
import workDahliaLilac from "@/assets/work-dahlia-lilac.jpg.asset.json";
import workPinkDahlia from "@/assets/work-pink-dahlia.jpg.asset.json";
import workRedSummer from "@/assets/work-red-summer.jpg.asset.json";
import workCreamDahlia from "@/assets/work-cream-dahlia.jpg.asset.json";
import workPoppies from "@/assets/work-poppies.jpg.asset.json";
import workMossWild from "@/assets/work-moss-wild.jpg.asset.json";
import workPeachTureen from "@/assets/work-peach-tureen.jpg.asset.json";
import funeralWreath from "@/assets/funeral-wreath.webp.asset.json";
import funeralWinter from "@/assets/funeral-winter.jpg.asset.json";
import funeralBlue from "@/assets/funeral-blue.jpg.asset.json";
import funeralUrn from "@/assets/funeral-urn-plain.jpg.asset.json";
import funeralWhite from "@/assets/funeral-white.jpg.asset.json";
import workBridesCascade from "@/assets/work-brides-cascade.jpg.asset.json";
import workRoseBox from "@/assets/work-rose-box.jpg.asset.json";
import workPastelBouquet from "@/assets/work-pastel-bouquet.jpg.asset.json";
import weddingAutumnRosor from "@/assets/wedding-autumn-rosor.jpg.asset.json";
import weddingCorsage from "@/assets/wedding-corsage.jpg.asset.json";
import abonnemangBud from "@/assets/abonnemang-blomsterbud-cut.png.asset.json";
import abonnemangBouquet from "@/assets/abonnemang-bouquet-cut.png.asset.json";
import workshopJulkrans from "@/assets/workshop-julkrans.png.asset.json";
import workshopKransHand from "@/assets/workshop-krans-hand.png.asset.json";
import workshopKransRosor from "@/assets/workshop-krans-rosor.png.asset.json";

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

type Offering = {
  title: string;
  body: string;
  extra?: string;
  prices?: { label: string; price: string }[];
  note?: string[];
  gift?: string;
  href?: string;
  span: string;
};

const offerings: Offering[] = [
  {
    title: "Bukettabonnemang",
    body: "Få hem en vacker bukett varje vecka, var 14:e dag eller en gång i månaden – beroende på vad som passar just ditt liv.",
    extra: "Floristen skapar bukett utifrån säsong med utvalda kvalitetsblommor. Välj mellan bukettstorlek:",
    prices: [
      { label: "Liten", price: "259 kr" },
      { label: "Mellan", price: "379 kr" },
      { label: "Stor", price: "499 kr" },
      { label: "Lyx", price: "795 kr" },
    ],
    href: "#abonnemang",
    gift: "Visste du att du också kan ge bort en blomsterprenumeration? Köp ett presentkort hos Blomra – eller mejla mig uppgifter till den som ska få hämta eller bli levererad en bukett.",
    span: "lg:col-span-2",
  },
  {
    title: "Swish & Grab-bod",
    body: "Här finns bland annat helgbuketter av säsongens utvalda snittblommor. Välj dina blommor, swisha, plocka med dig & njut.",
    extra: "Även växter och annat smått utifrån säsong kan finnas. Beror på efterfrågan, men tveka inte att höra av dig om du har ett önskemål om något jag ska ta in – det brukar jag kunna lösa.",
    span: "lg:col-span-2",
  },
  {
    title: "Bröllop",
    body: "Skapar allt ifrån brudbukett, corsage och större blomsterarrangemang – formgivet tillsammans med er.",
    href: "#brollop",
    span: "lg:col-span-2",
  },
  {
    title: "Begravning",
    body: "Skapar allt ifrån buketter, stående- och liggande kistdekoration, urndekoration och kransar. Med omsorg och respekt.",
    href: "#begravning",
    span: "lg:col-span-2",
  },
  {
    title: "Event & workshops",
    body: "Lär er binda exempelvis kransar tillsammans med ett härligt gäng. Bubbel & tilltugg ingår alltid.",
    href: "#workshops",
    span: "lg:col-span-2",
  },
  {
    title: "Presentkort",
    body: "Skickas digitalt efter betalningsbekräftelse eller kan upphämtas som ett fysiskt presentkort. Mejla Blomra för beställning/köp.",
    href: "#kontakt",
    span: "lg:col-span-2",
  },
];

const priceExamples = [
  { label: "Bukett Liten", four: "995 kr", one: "259 kr" },
  { label: "Bukett Mellan", four: "1 435 kr", one: "379 kr" },
  { label: "Bukett Större", four: "1 895 kr", one: "499 kr" },
  { label: "Bukett Lyx", four: "3 025 kr", one: "795 kr" },
];

const works = [
  {
    src: workPeachTureen,
    alt: "Antik skål med persikorosor, nejlikor och lövkvistar",
    caption: "Rococoinspirerat arrangemang",
    w: 1500,
    h: 1000,
  },
  {
    src: workDahliaLilac,
    alt: "Bukett med lila och grädde dahlia, nejlikor och rosa omslag",
    caption: "Bukett Mellan – Sommardröm med dahlior, anthurium, nejlika &\u00A0riddarsporre",
    w: 900,
    h: 1200,
  },
  {
    src: workPoppies,
    alt: "Glassvas med vallmor i orange, aprikos och vitt samt grönska",
    caption: "Vårbukett i björkkonstruktion med vallmo & tulpaner",
    w: 900,
    h: 1200,
  },
  {
    src: workRedSummer,
    alt: "Sommarbukett i röda och rosa toner med dahlia och vädd",
    caption: "Sensommarbukett med dahlior & eterneller",
    w: 900,
    h: 1200,
  },
  {
    src: workMossWild,
    alt: "Arrangemang i mossa med orange ranunkler, agapant och gräs",
    caption: "Vårig bordsdekoration med mossa, ranunklar & afrikanska liljor",
    w: 900,
    h: 1200,
  },
  {
    src: workCreamDahlia,
    alt: "Bukett med vit dahlia, rosa grupp och röd anthurium",
    caption: "Bukett Liten – Dahlior & Anthurium i mjuka toner",
    w: 900,
    h: 1200,
  },
];

type Wedding = {
  src: { url: string };
  alt: string;
  caption: string;
  w: number;
  h: number;
  credit?: string;
};

const weddings: Wedding[] = [
  {
    src: workBridesCascade,
    alt: "Brudbukett i kaskad med kalla, anthurium och sötvätt",
    caption: "Färgstark Brudbukett i kaskad",
    w: 900,
    h: 1200,
  },
  {
    src: workRoseBox,
    alt: "Brudbukett i pastell med rosor och eucalyptus på rosa låda",
    caption: "Brudbukett redo för leverans",
    w: 900,
    h: 1200,
  },
  {
    src: workPastelBouquet,
    alt: "Brudbukett i vitt och rosa med rosor, nejlikor, slöjblommor och eucalyptus",
    caption: "Brudbukett i vitt, rosa & persikofärg",
    w: 900,
    h: 1200,
  },
  {
    src: weddingAutumnRosor,
    alt: "Brudbukett med puderrosa rosor, persikofärgade nejlikor, torkade strån och eukalyptus, hållen i båda händerna",
    caption: "Brudbukett med höstens torkade & färska trädgårdsrosor",
    credit: "Fotograf: Alice @greveholmphotography",
    w: 900,
    h: 1200,
  },
  {
    src: weddingCorsage,
    alt: "Corsage med aprikosfärgad nejlika, torkade strån och eukalyptus fäst på ett mörkt kavajslag",
    caption: "Matchande Corsage på mannens kavaj",
    credit: "Fotograf: Alice @greveholmphotography",
    w: 900,
    h: 1200,
  },
];

const funerals = [
  {
    src: funeralWreath,
    alt: "Begravningskrans i pastell med rosor, nejlikor och blå riddarsporre",
    caption: "Krans i pastell",
    w: 1500,
    h: 1000,
    span: true,
  },
  {
    src: funeralWinter,
    alt: "Liggande kistdekoration med snödropptor, vita nejlikor och gran",
    caption: "Vinterlig kistdekoration",
    w: 900,
    h: 1200,
    span: false,
  },
  {
    src: funeralBlue,
    alt: "Stående arrangemang i vitt och blått med rosor och eucalyptus",
    caption: "Stående dekoration",
    w: 900,
    h: 1200,
    span: false,
  },
  {
    src: funeralUrn,
    alt: "Urndekoration i en ljusgrön urna med dahlior i burgundy och persika, vita riddarsporre, kosmos, nejlikor och korn",
    caption: "Urndekoration i varma toner av sensommar-höst",
    w: 1536,
    h: 1734,
    span: false,
  },
  {
    src: funeralWhite,
    alt: "Liggande arrangemang i vitt och gult med rosor och eucalyptus",
    caption: "Ljust farväl – Liggande bukett",
    w: 900,
    h: 1200,
    span: false,
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
            <a className="transition-colors hover:text-cerise" href="#verk">
              Mina verk
            </a>
            <a className="transition-colors hover:text-cerise" href="#brollop">
              Bröllop
            </a>
            <a className="transition-colors hover:text-cerise" href="#begravning">
              Begravning
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
          <a
            href="#workshops"
            className="mt-10 block w-full max-w-md rounded-sm border border-burgundy/25 stripes-burgundy p-4 text-left shadow-sm transition-colors hover:border-burgundy"
          >
            <div className="rounded-sm bg-blush p-5">
              <p className="label-caps text-burgundy">Aktuellt just nu</p>
              <p className="mt-2 font-display text-2xl text-burgundy">
                Höstens workshops
              </p>
              <ul className="mt-3 space-y-3 text-burgundy">
                <li>
                  <div className="flex items-baseline justify-between gap-4">
                    <span>Vinter- och julkrans</span>
                    <span className="font-display text-lg">595 kr</span>
                  </div>
                  <p className="mt-0.5 text-sm text-burgundy/70">
                    Torsdag 19 november kl. 17.30–19.30{" "}
                    <span className="font-medium uppercase tracking-wider">(Fullbokad)</span>
                  </p>
                  <p className="text-sm text-burgundy/70">
                    Lördag 21 november kl. 13–15
                  </p>
                </li>
                <li>
                  <span>Adventsljusstake</span>
                  <span className="text-burgundy/70"> (krans eller rektangulär)</span>
                  <p className="mt-0.5 text-sm text-burgundy/70">
                    Söndag 29 november (1:a advent) kl. 13–15
                  </p>
                </li>
              </ul>
              <p className="mt-4 text-sm text-burgundy/70">
                Begränsat antal platser – dags att boka din plats!
              </p>
            </div>
          </a>
        </div>
      </section>
      {/* Workshops */}
      <section id="workshops" className="stripes-burgundy text-burgundy">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <img
              src={workshopJulkrans.url}
              alt="Julkrans med barrkvistar, eukalyptus, kottar, torkade apelsinskivor och en stor vinröd sidenros med hängande band"
              width={1080}
              height={1080}
              loading="lazy"
              className="w-full rounded-sm object-contain drop-shadow-lg"
            />
            <img
              src={workshopKransHand.url}
              alt="Vinterkrans med barr, vinröda nejlikor, hortensia och mörkgrönt sidenband, hållen upp av en hand"
              width={1440}
              height={1920}
              loading="lazy"
              className="-ml-6 w-[85%] max-w-md self-start object-contain drop-shadow-lg"
            />
            <img
              src={workshopKransRosor.url}
              alt="Krans med rosa rosor, lila smultronblommor och mörkgrönt sidenband"
              width={1440}
              height={1920}
              loading="lazy"
              className="w-[85%] max-w-md self-center object-contain drop-shadow-lg"
            />
          </div>
          <div className="rounded-sm bg-blush/95 p-8 sm:p-10">
            <p className="label-caps text-cerise">Workshops & event</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-burgundy sm:text-5xl">
              Binda tillsammans, bubbel & tilltugg ingår
            </h2>
            <p className="mt-6 max-w-md text-lg text-burgundy/80">
              Jag erbjuder workshops där ni tillsammans med ett härligt gäng får lära er
              binda exempelvis kransar med mig. Perfekt för middagar med vänner,
              företagsevent, möhippor och alla andra tillfällen som förtjänar blommor
              och gemenskap.
            </p>
            <p className="mt-4 max-w-md text-lg text-burgundy/80">
              Inga förkunskaper krävs. Allt material är förberett och jag visar er hur man
              gör, längs hela vägen.
            </p>
            <div className="mt-8 max-w-md rounded-sm bg-burgundy p-6">
              <p className="label-caps text-blush-deep">Höstens workshops</p>
              <ul className="mt-3 space-y-2 text-blush">
                <li className="font-bold">Höstkrans</li>
                <li className="font-bold">Vinter- och julkrans</li>
                <li className="font-bold">
                  Adventsljusstake{" "}
                  <span className="text-sm font-normal">(krans eller rektangulär)</span>
                </li>
              </ul>
            </div>
            <a
              href="#kontakt"
              className="mt-9 inline-block rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cerise-deep"
            >
              Boka en workshop
            </a>
          </div>
        </div>
      </section>


      {/* Photo band */}
      <div className="bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 sm:py-16 md:grid-cols-2 md:gap-16">
          <img
            src={workPinkDahlia.url}
            alt="Handbukett med ceriseröd dahlia, rosa nejlikor, anthurium och vit riddarsporre"
            width={1440}
            height={1920}
            loading="lazy"
            className="mx-auto h-[300px] w-auto rounded-sm sm:h-[440px] md:h-[520px]"
          />
          <div className="md:pl-4">
            <p className="label-caps text-cerise">Egenodlat i säsong</p>
            <p className="mt-5 max-w-md text-muted-foreground">
              En handbukett redo att överlämnas – skapad med mina egenodlade blommor i
              kombination av noga utvalda snittblommor av hög kvalitet.
            </p>
            <a
              href="#verk"
              className="mt-8 inline-block rounded-full border border-forest/30 px-8 py-3 text-sm uppercase tracking-[0.18em] text-forest transition-colors hover:border-cerise hover:text-cerise"
            >
              Se fler verk
            </a>
          </div>
        </div>
      </div>

      {/* Erbjudanden */}
      <section id="erbjudanden" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="label-caps text-cerise">Det här erbjuder Blomra</p>
        <div className="mt-8 max-w-3xl rounded-sm border border-cerise/25 bg-blush/60 p-6 sm:p-8">
          <p className="label-caps text-forest-deep">Beställ alla dagar i veckan</p>
          <p className="mt-3 text-forest">
            Jag tar emot beställningar alla dagar i veckan, även om blomsterboden just nu
            endast är öppen fredag–söndag. Allt ifrån buketter och blomsterbud till andra
            blomsterarrangemang. Jag har ett öppet kreativt sinne inför att möta dina
            behov och önskemål.
          </p>
          <a
            href="#kontakt"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cerise-deep"
          >
            Kontakta mig
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-6">
          {offerings.map((o, i) => {
            const className = `group bg-background p-8 transition-colors hover:bg-blush/50 sm:p-10 ${o.span}`;
            const inner = (
              <>
                <span className="label-caps text-cerise">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-forest sm:text-3xl">
                  {o.title}
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">{o.body}</p>
                {o.extra && (
                  <p className="mt-4 max-w-md text-muted-foreground">{o.extra}</p>
                )}
                {o.prices && (
                  <dl className="mt-6 max-w-sm border-t border-border">
                    {o.prices.map((p) => (
                      <div
                        key={p.label}
                        className="flex items-baseline justify-between gap-6 border-b border-border py-2.5"
                      >
                        <dt className="label-caps text-forest">{p.label}</dt>
                        <dd className="font-display text-xl text-forest">
                          {p.price}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
                {o.note && (
                  <div className="mt-3 space-y-1.5 text-sm text-forest/80">
                    {o.note.map((n) => (
                      <p key={n}>{n}</p>
                    ))}
                  </div>
                )}
                {o.gift && (
                  <div className="mt-6 max-w-md rounded-sm border border-cerise/25 bg-blush/60 p-5">
                    <p className="label-caps text-cerise">Ge bort</p>
                    <p className="mt-2 text-sm leading-snug text-forest">{o.gift}</p>
                  </div>
                )}
                <span className="mt-6 block h-px w-10 bg-forest/25 transition-all duration-300 group-hover:w-24 group-hover:bg-cerise" />
              </>
            );
            return o.href ? (
              <a key={o.title} href={o.href} className={className}>
                {inner}
              </a>
            ) : (
              <article key={o.title} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </section>

      {/* Ur Blomras verk */}
      <section id="verk" className="bg-cerise-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label-caps text-primary-foreground/80">Buketter & arrangemang</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Ur Blomras verk
          </h2>
          <p className="mt-5 max-w-xl text-primary-foreground/90">
            Ett litet urval av buketter och arrangemang som skapats i Blomras
            anda – ofta med säsongens bästa blommor.
          </p>
          <div className="mt-12 columns-2 gap-4 sm:gap-5 lg:columns-3">
            {works.map((w) => (
              <figure key={w.caption} className="mb-4 break-inside-avoid sm:mb-5">
                <img
                  src={w.src.url}
                  alt={w.alt}
                  width={w.w}
                  height={w.h}
                  loading="lazy"
                  className="w-full rounded-sm"
                />
                <figcaption className="mt-3 text-[0.95rem] leading-snug text-primary-foreground/90">
                  {w.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Bröllop */}
      <section id="brollop" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label-caps text-cerise">Formgivet tillsammans med er</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Bröllop
          </h2>
          <p className="mt-5 font-display text-2xl leading-snug text-forest sm:text-3xl">
            Blommor för er stora dag
          </p>
          <div className="mt-5 max-w-2xl space-y-4 text-muted-foreground">
            <p>
              Blommor sätter tonen för en av livets mest minnesvärda dagar. Jag
              skapar allt från personliga brudbuketter och corsage till
              blomsterarrangemang som förhöjer känslan genom hela bröllopet.
            </p>
            <p>
              Tillsammans formar vi ett blomsterspråk som speglar er, er stil och
              vision – från de första idéerna till de små detaljerna som gör dagen
              unik. Med omtanke om varje blomma och varje önskemål skapar vi något
              personligt, vackert och alldeles ert eget.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {weddings.map((w) => (
              <figure key={w.caption}>
                <div className="relative">
                  <img
                    src={w.src.url}
                    alt={w.alt}
                    width={w.w}
                    height={w.h}
                    loading="lazy"
                    className="w-full rounded-sm"
                  />
                  {w.credit && (
                    <p className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1 rounded-sm bg-forest-deep/65 px-1.5 py-1 text-[0.7rem] font-medium leading-none text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85),0_0_1px_rgba(0,0,0,0.9)]">
                      <span aria-hidden="true">📷</span>
                      <span>{w.credit}</span>
                    </p>
                  )}
                </div>
                <figcaption className="mt-3 text-[0.95rem] leading-snug text-muted-foreground">
                  {w.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Begravning */}
      <section id="begravning" className="bg-moss">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label-caps text-blush-deep">Med omsorg & respekt</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Begravning
          </h2>
          <p className="mt-5 max-w-2xl text-primary-foreground/85">
            Att ta avsked är svårt. Skapar kistdekorationer, kransar,
            urndekorationer och buketter med omsorg – personligt formade efter
            minnet av den som gått bort.
          </p>
          <div className="mt-5 max-w-2xl space-y-4 text-primary-foreground/85">
            <p>
              Du kan beställa dina begravningsblommor direkt hos mig som florist –
              du behöver alltså inte gå via en begravningsbyrå. Att låta
              begravningsbyrån sköta beställningen kan vara ett bekvämt alternativ
              när du vill lämna över det praktiska, men genom att kontakta mig
              direkt slipper du en mellanhand och får ofta ett förmånligare pris.
            </p>
            <p>
              Framför allt får du möjlighet att själv vara delaktig i utformningen
              och berätta om dina tankar, önskemål och personliga detaljer.
              Tillsammans skapar vi ett blomsterarrangemang.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {funerals.map((f) => (
              <figure
                key={f.caption}
                
              >
                <img
                  src={f.src.url}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  loading="lazy"
                  className="w-full rounded-sm"
                />
                <figcaption className="mt-3 text-[0.95rem] leading-snug text-primary-foreground/80">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blomsterabonnemang */}
      <section id="abonnemang" className="bg-blush">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="label-caps text-cerise">Blomsterabonnemang</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-forest sm:text-5xl">
                Förgyll hemmet med en vacker bukett
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                Varje vecka, varannan vecka eller en gång i månaden – beroende på
                vad som passar dig eller den personen du överraskar. Floristen
                skapar bukett utifrån säsong med utvalda kvalitetsblommor.
              </p>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Leverans/upphämtning sker på torsdagar samt fredagar. För leverans
                tillkommer fraktkostnad. Fri leverans inom Bara tätort.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[24rem] sm:max-w-[29rem]">
              <div className="flex items-end justify-center gap-1">
                <img
                  src={abonnemangBud.url}
                  alt="Blomsterbud inslaget i kraftpapper med vinrött silkespapper och ett BLOMRA-kort"
                  width={1600}
                  height={1920}
                  loading="lazy"
                  className="w-1/2 drop-shadow-xl"
                />
                <img
                  src={abonnemangBouquet.url}
                  alt="Bukett med mörkröda rosor och prydnadsgräs inslagen i vitt och prickigt papper med vinrött band"
                  width={1440}
                  height={1832}
                  loading="lazy"
                  className="w-1/2 drop-shadow-xl"
                />
              </div>
              <figcaption className="mt-4 text-center text-[0.95rem] leading-snug text-muted-foreground">
                Exempel på blomsterbud.
              </figcaption>
            </figure>
          </div>
          <div className="mt-12 rounded-sm border border-forest/10 bg-background p-6 sm:p-8">
            <p className="label-caps text-cerise">Prisexempel</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {priceExamples.map((p) => (
                <div key={p.label}>
                  <p className="label-caps text-forest">{p.label}</p>
                  <p className="mt-3 flex items-baseline justify-between gap-4 text-forest">
                    <span>4 buketter</span>
                    <span className="font-display text-xl">{p.four}</span>
                  </p>
                  <p className="mt-1 flex items-baseline justify-between gap-4 text-forest">
                    <span>1 bukett</span>
                    <span className="font-display text-xl">{p.one}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-forest/15 pt-8">
            <p className="label-caps text-cerise">Betalningsvillkor</p>
            <div className="mt-4 max-w-3xl space-y-3 text-sm italic text-muted-foreground">
              <p>Du väljer själv det betalningsalternativ som passar dig bäst.</p>
              <p>
                Betala för fyra buketter i förskott till ett förmånligt upplägg,
                eller välj att betala inför varje enskild leverans. Betalningen
                sker oavsett alltid i förskott, senast 5 dagar före planerad
                leverans eller upphämtning.
              </p>
              <p>
                Ingen bindningstid – jag fortsätter att skicka faktura och
                leverera tills ni aktivt meddelar att ni vill avsluta
                prenumerationen, vilket måste göras 5 dagar innan nästa leverans.
              </p>
              <p>
                Om ni av någon anledning inte är hemma när buketten ska hämtas
                eller levereras – till exempel om ni är iväg och reser – kan ni
                minst 3 dagar innan pausa buketten, eller meddela att den ska
                överlåtas till någon ni känner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-cerise">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <p className="font-display text-3xl italic leading-snug text-primary-foreground sm:text-4xl">
            Blomra erbjuder blommor till livets alla ögonblick. Så låt oss få dig att
            blomra!
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

      <footer className="border-t border-border bg-blush">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <img
            src={logoAsset.url}
            alt="Blomra"
            width={1255}
            height={1255}
            loading="lazy"
            className="h-12 w-12 rounded-full bg-background p-1"
          />
          <p className="label-caps text-cerise">Blommor & upplevelser att minnas</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Blomra</p>
        </div>
      </footer>
    </div>
  );
}
