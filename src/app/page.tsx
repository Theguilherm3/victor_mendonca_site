import type { CSSProperties } from "react";
import Image, { getImageProps } from "next/image";
import { GlowLine } from "@/components/GlowLine";
import { Photo } from "@/components/Photo";
import { RevealObserver } from "@/components/RevealObserver";
import { ArrowRight, ArrowUp, Chat, Instagram, Person, Pin, Plus, Shield, Trend } from "@/components/icons";
import { site } from "@/content/site";
import monograma from "../../public/img/monograma-branco.png";

const { photos, links } = site;
const results = photos.results.filter((p) => p.src);
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

// Hero com direção de arte: foto horizontal no desktop, vertical no celular.
const heroCommon = { alt: photos.hero.alt, sizes: "100vw", priority: true };
const {
  props: { srcSet: heroWide },
} = getImageProps({ ...heroCommon, src: photos.heroWide.src, width: 1280, height: 854 });
const {
  props: { srcSet: heroTall, ...heroImg },
} = getImageProps({ ...heroCommon, src: photos.hero.src, width: 854, height: 1280 });

export default function Home() {
  return (
    <div id="topo" className="page">
      <RevealObserver />

      {/* HERO */}
      <header className="hero">
        <div className="hero-media">
          <picture className="photo has-img hero-photo">
            <source media="(min-width: 900px)" srcSet={heroWide} />
            <img {...heroImg} srcSet={heroTall} alt={heroImg.alt} />
          </picture>
          <GlowLine className="hero-glow" />
        </div>

        <nav className="nav" aria-label="Principal">
          <a href="#topo" className="nav-brand">
            <Image className="nav-logo" src={monograma} alt="" sizes="96px" priority />
            <span className="nav-name">
              {site.name}
              <small>{site.registry}</small>
            </span>
          </a>
        </nav>

        <div className="hero-copy">
          <GlowLine className="hero-glow-m" />
          <p className="kicker load" style={delay(80)}>
            {site.profession} <span className="kicker-dot" /> {site.cityUf}
          </p>
          <h1 className="display hero-title load" style={delay(180)}>
            {site.hero.titleStart} <em>{site.hero.titleEm}</em>{" "}
            <span className="nowrap">{site.hero.titleEnd}</span>
          </h1>
          <p className="hero-lead load" style={delay(320)}>
            {site.hero.lead}
          </p>
          <div className="hero-ctas load" style={delay(440)}>
            <a className="btn btn-brass" href={links.whatsapp} {...ext}>
              Agendar pelo WhatsApp
              <span className="btn-icon">
                <ArrowRight />
              </span>
            </a>
            <a className="btn-link" href="#historia">
              Conheça o Victor
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* FAIXA */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <span key={copy}>
                {site.marquee.map((item) => (
                  <span key={item}>
                    {item}
                    <i />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* PILARES */}
        <section className="pillars wrap" aria-label="Como o Victor trabalha">
          {site.pillars.map((p, i) => (
            <div className="pillar" key={p.title} data-reveal style={delay(i * 90)}>
              <h2 className="pillar-title">{p.title}</h2>
              <p className="pillar-text">{p.text}</p>
            </div>
          ))}
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="story">
          <div className="wrap story-grid">
            <div className="story-photos">
              <Photo slot={photos.story} className="story-main" sizes="(max-width: 900px) 88vw, 560px" />
              <Photo
                slot={photos.storyDetail}
                className="story-detail"
                sizes="(max-width: 900px) 44vw, 240px"
                style={delay(260)}
              />
            </div>
            <div className="story-text">
              <h2 className="display h2" data-reveal>
                Uma forma de <em>trabalhar</em> que começa na conversa.
              </h2>
              {site.story.paragraphs.map((p) => (
                <p className="body" key={p} data-reveal>
                  {p}
                </p>
              ))}
              <a className="btn-link dark" href={links.whatsapp} {...ext} data-reveal>
                Converse com o Victor
              </a>
            </div>
          </div>
        </section>

        {/* LEMA */}
        <section className="motto" aria-label="Lema do consultório">
          <GlowLine className="motto-glow" />
          <p className="display motto-text" data-reveal>
            {site.motto.start} <em>{site.motto.em}</em> {site.motto.end}
          </p>
          <p className="motto-sign" data-reveal>
            Na parede do consultório — e em cada atendimento.
          </p>
        </section>

        {/* MÉTODO */}
        <section id="metodo" className="method">
          <Image className="method-mark" src={monograma} alt="" aria-hidden sizes="420px" />
          <div className="wrap">
            <div className="method-head">
              <h2 className="display h2" data-reveal>
                Um processo <em>claro,</em> do início ao fim.
              </h2>
              <p className="body light" data-reveal>
                {site.method.lead}
              </p>
            </div>
            <ol className="steps">
              {site.method.steps.map((s, i) => (
                <li className="step" key={s.title} data-reveal style={delay(i * 90)}>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-text">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONSULTÓRIO */}
        <section className="space">
          <div className="wrap">
            <div className="space-head">
              <h2 className="display h2" data-reveal>
                Pensado para você ficar <em>à vontade.</em>
              </h2>
            </div>
            <div className="space-grid">
              <Photo slot={photos.space} className="space-tall" sizes="(max-width: 900px) 50vw, 380px" />
              <Photo
                slot={photos.landscape}
                className="space-wide"
                sizes="(max-width: 900px) 100vw, 760px"
                style={delay(140)}
              >
                <span className="space-caption">{site.experience.caption}</span>
              </Photo>
              <div className="feature f-ink" data-reveal>
                <Person stroke="currentColor" />
                <span>{site.experience.tiles[0]}</span>
              </div>
              <div className="feature f-oak" data-reveal style={delay(80)}>
                <Shield stroke="currentColor" />
                <span>{site.experience.tiles[1]}</span>
              </div>
              <div className="feature f-sand" data-reveal style={delay(160)}>
                <Trend stroke="currentColor" />
                <span>{site.experience.tiles[2]}</span>
              </div>
              <div className="feature f-line" data-reveal style={delay(240)}>
                <Pin stroke="currentColor" />
                <span>{site.cityUf}</span>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTADOS — só aparece quando houver fotos de casos */}
        {results.length > 0 && (
          <section className="results">
            <div className="wrap">
              <h2 className="display h2" data-reveal>
                Trabalho que <em>fala por si.</em>
              </h2>
              <p className="body" data-reveal>
                {site.results.lead}
              </p>
            </div>
            <div className="results-strip">
              {results.map((slot, i) => (
                <Photo key={slot.label} slot={slot} className="result" sizes="(max-width: 520px) 78vw, 380px">
                  <span className="space-caption">{site.results.captions[i]}</span>
                </Photo>
              ))}
            </div>
          </section>
        )}

        {/* DÚVIDAS */}
        <section className="faq">
          <div className="wrap faq-grid">
            <div className="faq-head">
              <h2 className="display h2" data-reveal>
                Dúvidas <em>frequentes.</em>
              </h2>
            </div>
            <div className="faq-list">
              {site.faq.map((item, i) => (
                <details key={item.q} open={i === 0} data-reveal>
                  <summary>
                    {item.q}
                    <span className="faq-icon">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="contact">
          <GlowLine className="contact-glow" />
          <div className="wrap contact-inner">
            <div className="contact-portrait">
              <Photo slot={photos.contact} className="contact-photo" sizes="240px" />
            </div>
            <h2 className="display contact-title" data-reveal>
              Vamos <em>conversar?</em>
            </h2>
            <p className="body light" data-reveal>
              {site.contact.lead}
            </p>
            <div className="contact-ctas" data-reveal>
              <a className="btn btn-brass" href={links.whatsapp} {...ext}>
                Chamar no WhatsApp
                <span className="btn-icon">
                  <Chat />
                </span>
              </a>
              {links.instagram && (
                <a className="btn btn-ghost" href={links.instagram} {...ext}>
                  Ver o Instagram
                  <span className="btn-icon">
                    <Instagram />
                  </span>
                </a>
              )}
            </div>
            <a className="contact-phone" href={links.whatsappPlain} {...ext}>
              {site.phoneLabel}
            </a>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Image className="footer-logo" src={monograma} alt="Monograma VM" sizes="120px" />
            <div>
              <div className="footer-name">{site.title}</div>
              <div className="footer-meta">
                {site.profession} · {site.registry} · {site.cityUf}
              </div>
            </div>
          </div>
          <div className="footer-links">
            <a href={links.whatsappPlain} {...ext}>
              WhatsApp {site.phoneLabel}
            </a>
            {links.instagram && (
              <a href={links.instagram} {...ext}>
                @{links.instagramHandle}
              </a>
            )}
            <a href="#topo">
              Voltar ao topo <ArrowUp />
            </a>
          </div>
          <div className="footer-copy">
            © {site.copyrightYear} {site.title}. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a className="fab" href={links.whatsapp} aria-label="Fale comigo pelo WhatsApp" {...ext}>
        <Chat />
        Fale comigo
      </a>
    </div>
  );
}
