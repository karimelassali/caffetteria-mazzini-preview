/* Piazza Aperitivo style: contemporary Italian editorial hospitality, asymmetrical layouts, burnt terracotta #C95F3D, cream paper surfaces, espresso brown rules, Fraunces + DM Sans, tactile micro-interactions. */

import {
  ArrowUpRight,
  Clock3,
  Compass,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";

const gallery = [
  {
    src: "/assets/caffetteria_mazzini_exterior.jpg",
    alt: "Exterior entrance of Caffetteria Mazzini",
    label: "Via Mazzini, 3",
  },
  {
    src: "/assets/caffetteria_mazzini_food_1.jpg",
    alt: "Aperitivo spread with sandwiches and small plates",
    label: "Aperitivo hour",
  },
  {
    src: "/assets/caffetteria_mazzini_exterior_2.jpg",
    alt: "Caffetteria Mazzini storefront on the street",
    label: "A familiar corner",
  },
  {
    src: "/assets/caffetteria_mazzini_food_2.jpg",
    alt: "Café food and aperitivo plates on a table",
    label: "Small kitchen",
  },
];

const hours = [
  ["Monday", "Closed"],
  ["Tuesday — Thursday", "07:00 — 21:00"],
  ["Friday — Sunday", "07:00 — 22:00"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f0e6] text-[#34251f]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Caffetteria Mazzini home">
            <span className="brand-mark flex h-10 w-10 items-center justify-center rounded-full bg-[#c95f3d] text-[#fff8ed] shadow-[0_8px_20px_rgba(52,37,31,0.15)]">
              <span className="h-4 w-2.5 rounded-[60%] border-2 border-[#fff8ed] rotate-[-35deg]" />
            </span>
            <span className="font-display text-lg font-semibold tracking-[0.14em] text-[#fff8ed]">M<span className="relative -top-px text-[#f5c35b]">·</span>ZZINI</span>
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fff8ed]/90 md:flex">
            <a className="transition-opacity hover:opacity-60" href="#menu">Menu</a>
            <a className="transition-opacity hover:opacity-60" href="#story">La storia</a>
            <a className="transition-opacity hover:opacity-60" href="#visit">Dove trovarci</a>
          </nav>
          <button
            className="rounded-full border border-[#fff8ed]/40 p-2 text-[#fff8ed] transition hover:bg-[#fff8ed]/15 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-5 rounded-2xl border border-[#fff8ed]/30 bg-[#34251f]/95 p-5 text-sm font-semibold text-[#fff8ed] shadow-xl md:hidden">
            <a className="block border-b border-[#fff8ed]/15 py-3" href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a className="block border-b border-[#fff8ed]/15 py-3" href="#story" onClick={() => setMenuOpen(false)}>La storia</a>
            <a className="block py-3" href="#visit" onClick={() => setMenuOpen(false)}>Dove trovarci</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden bg-[#34251f] text-[#fff8ed] lg:min-h-[790px]">
          <img src="./assets/mazzini-hero.jpg" alt="Espresso and aperitivo at a café table" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(52,37,31,0.88)_0%,rgba(52,37,31,0.58)_38%,rgba(52,37,31,0.08)_78%)]" />
          <div className="relative mx-auto flex min-h-[720px] max-w-[1380px] items-end px-5 pb-20 pt-36 sm:px-8 lg:min-h-[790px] lg:px-12 lg:pb-28">
            <div className="max-w-2xl animate-[rise_700ms_ease-out_both]">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#f5c35b]"><span className="h-px w-10 bg-[#f5c35b]" /> Castel San Giovanni · dal 2015</p>
              <h1 className="font-display max-w-[760px] text-[clamp(4rem,9vw,8.6rem)] font-semibold leading-[0.84] tracking-[-0.065em]">Caffè<br /><em className="font-normal text-[#f5c35b]">e compagnia.</em></h1>
              <p className="mt-8 max-w-md text-base leading-7 text-[#fff8ed]/78 sm:text-lg">Un piccolo bar, una piccola cucina, una buona ragione per prendere la strada lunga verso casa.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:+390523843413" className="inline-flex items-center gap-2 rounded-full bg-[#c95f3d] px-5 py-3 text-sm font-bold text-[#fff8ed] shadow-lg shadow-[#34251f]/20 transition hover:-translate-y-0.5 hover:bg-[#d66b47] active:scale-[0.97]"><Phone size={16} /> Chiama il bar</a>
                <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-[#fff8ed]/45 px-5 py-3 text-sm font-bold text-[#fff8ed] transition hover:bg-[#fff8ed]/12 active:scale-[0.97]">Scopri il menu <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#fff8ed]/65 sm:flex lg:right-12"><span className="h-px w-12 bg-[#fff8ed]/45" /> Piazza aperitivo</div>
        </section>

        <section className="relative mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" id="story">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-24">
            <div className="lg:pt-7"><p className="eyebrow">01 / La pausa giusta</p><h2 className="font-display mt-5 max-w-sm text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">Il quartiere, servito con cura.</h2></div>
            <div className="grid gap-8 sm:grid-cols-[1fr_0.8fr] sm:items-end"><p className="max-w-lg text-lg leading-8 text-[#6d574a]">Mazzini è il posto dove il primo caffè incontra il pranzo di lavoro e l’aperitivo arriva senza bisogno di invito. Una caffetteria di quartiere con una cucina piccola e idee grandi quanto la fame.</p><div className="border-l-2 border-[#c95f3d] pl-5"><p className="font-display text-3xl italic leading-tight text-[#c95f3d]">“Coffee first.<br />Aperitivo later.”</p></div></div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-[1.2fr_0.8fr]"><div className="overflow-hidden rounded-[2px] bg-[#dfc4ad]"><img src="./assets/mazzini-coffee.jpg" alt="Espresso and brioche at Caffetteria Mazzini" className="h-[420px] w-full object-cover transition duration-500 hover:scale-[1.03] sm:h-[520px]" /></div><div className="flex flex-col justify-between bg-[#ead8c6] p-7 sm:p-9"><div><Sparkles className="text-[#c95f3d]" size={22} /><p className="mt-12 font-display text-4xl leading-none tracking-[-0.04em]">Una pausa<br /><em className="font-normal">fatta bene.</em></p></div><div className="mt-12 border-t border-[#34251f]/20 pt-5 text-sm leading-6 text-[#6d574a]">Colazioni, piatti veloci, panini, piadine e aperitivi da condividere.</div></div></div>
        </section>

        <section id="menu" className="bg-[#34251f] px-5 py-20 text-[#fff8ed] sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1380px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow eyebrow-light">02 / Dalla cucina</p><h2 className="font-display mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl">Piccoli piatti,<br /><em className="font-normal text-[#f5c35b]">grandi pause.</em></h2></div><a href="tel:+390523843413" className="group hidden items-center gap-2 text-sm font-bold text-[#f5c35b] sm:flex">Chiedi cosa c’è oggi <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div><div className="mt-14 grid gap-x-14 gap-y-0 border-t border-[#fff8ed]/20 lg:grid-cols-2"><div className="menu-row"><span><small>01</small> Colazione Mazzini</span><strong>espresso · brioche</strong></div><div className="menu-row"><span><small>02</small> Panini caldi</span><strong>coppa · prosciutto · formaggi</strong></div><div className="menu-row"><span><small>03</small> Piatto del giorno</span><strong>chiedi al banco</strong></div><div className="menu-row"><span><small>04</small> Aperitivo</span><strong>cocktail · stuzzichini</strong></div><div className="menu-row"><span><small>05</small> Piadine</span><strong>fresche, farcite, veloci</strong></div><div className="menu-row"><span><small>06</small> Qualcosa di dolce</span><strong>pasticceria artigianale</strong></div></div></div>
        </section>

        <section className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow">03 / Dal vivo</p><h2 className="font-display mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-6xl">Qui succedono<br /><em className="font-normal text-[#c95f3d]">cose buone.</em></h2><p className="mt-7 max-w-sm text-base leading-7 text-[#6d574a]">Una vetrina sulla strada, tavoli all’aperto e il genere di atmosfera che non ha bisogno di spiegazioni.</p></div><div className="grid grid-cols-2 gap-3 sm:gap-5"><div className="gallery-card col-span-2"><img src={gallery[1].src} alt={gallery[1].alt} /><span>{gallery[1].label}</span></div><div className="gallery-card"><img src={gallery[0].src} alt={gallery[0].alt} /><span>{gallery[0].label}</span></div><div className="gallery-card"><img src={gallery[2].src} alt={gallery[2].alt} /><span>{gallery[2].label}</span></div></div></div></section>

        <section id="visit" className="relative border-t border-[#34251f]/10 bg-[#ead8c6] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="pointer-events-none absolute right-6 top-6 hidden rotate-3 border border-[#c95f3d]/40 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c95f3d] sm:block lg:right-12">Piazza aperitivo · 29015</div><div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow">04 / Passa a trovarci</p><h2 className="font-display mt-5 max-w-lg text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl">La tua prossima pausa è qui.</h2><div className="mt-10 flex flex-wrap gap-3"><a href="https://www.google.com/maps/dir/?api=1&destination=45.05926390,9.43597120" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c95f3d] px-5 py-3 text-sm font-bold text-[#fff8ed] transition hover:-translate-y-0.5 hover:bg-[#ad4e32] active:scale-[0.97]"><Compass size={16} /> Indicazioni stradali</a><a href="https://www.instagram.com/caffetteria_mazzini/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#34251f]/25 px-5 py-3 text-sm font-bold transition hover:bg-[#f7f0e6] active:scale-[0.97]"><Instagram size={16} /> Instagram</a></div></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1"><div className="border-t-2 border-[#34251f] pt-4"><div className="flex items-start gap-3"><MapPin className="mt-1 text-[#c95f3d]" size={18} /><div><p className="font-display text-2xl">Via Giuseppe Mazzini, 3</p><p className="mt-1 text-sm text-[#6d574a]">29015 Castel San Giovanni, PC</p></div></div></div><div className="border-t border-[#34251f]/20 pt-4"><div className="flex items-start gap-3"><Clock3 className="mt-1 text-[#c95f3d]" size={18} /><div className="w-full space-y-2 text-sm">{hours.map(([day, time]) => <div className="flex justify-between gap-4" key={day}><span>{day}</span><span className={time === "Closed" ? "font-semibold text-[#c95f3d]" : "font-semibold"}>{time}</span></div>)}</div></div></div><div className="border-t border-[#34251f]/20 pt-4"><div className="flex items-start gap-3"><Phone className="mt-1 text-[#c95f3d]" size={18} /><div><a href="tel:+390523843413" className="font-display text-2xl hover:text-[#c95f3d]">0523 843413</a><p className="mt-1 text-sm text-[#6d574a]">Chiamaci per sapere cosa bolle in pentola.</p></div></div></div></div></div></section>
      </main>

      <footer className="bg-[#34251f] px-5 py-8 text-[#fff8ed] sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="brand-mark flex h-8 w-8 items-center justify-center rounded-full bg-[#c95f3d] text-[#fff8ed]"><span className="h-3 w-2 rounded-[60%] border-2 border-[#fff8ed] rotate-[-35deg]" /></span><span className="text-xs font-bold uppercase tracking-[0.2em]">Caffetteria M<span className="text-[#f5c35b]">·</span>zzini</span></div><div className="flex items-center gap-5 text-xs text-[#fff8ed]/60"><span>Castel San Giovanni</span><span>·</span><a className="hover:text-[#f5c35b]" href="https://www.instagram.com/caffetteria_mazzini/" target="_blank" rel="noreferrer">@caffetteria_mazzini</a></div></div></footer>
    </div>
  );
}
