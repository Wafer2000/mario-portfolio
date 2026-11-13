"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { additionalPriorityIds, aiCloudDirection, categories, text, type Category, type Copy, type Lang } from "@/lib/portfolio-data";
import type { PortfolioContent, PortfolioProject as Project } from "@/lib/portfolio-content";

/* ---------- Language (persisted, same key as before) ---------- */
let memoryLanguage: Lang = "es";
function readLanguage(): Lang {
  try { const v = localStorage.getItem("mario-portfolio-language"); if (v === "es" || v === "en") return v; } catch {}
  return memoryLanguage;
}
function subscribeLanguage(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener("mario-language-change", cb);
  return () => { window.removeEventListener("storage", cb); window.removeEventListener("mario-language-change", cb); };
}
function setLang(v: Lang) {
  memoryLanguage = v;
  try { localStorage.setItem("mario-portfolio-language", v); } catch {}
  window.dispatchEvent(new Event("mario-language-change"));
}

type Mode = "magia" | "ing";

/* Shipped work first; the planned AI platform lives in the lab, not at the top. */
const FEATURED = ["mesaflow", "commerce", "random-playlist", "banking", "device-control", "cloud-solutions"] as const;
const ORIGIN = "11.38°N 72.24°W";

function hash7(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

function host(url: string) {
  try { return new URL(url).host.replace(/^www\./, ""); } catch { return url; }
}

function isVerified(status: string) {
  return /activo|publicado|producción|production|active|published|validado|validated|comprobad|confirmed|completada|completed|implementado|implemented/i.test(status);
}

export default function Portfolio({ initialContent }: { initialContent: PortfolioContent }) {
  const lang = useSyncExternalStore(subscribeLanguage, readLanguage, () => "es" as Lang);
  const t = useCallback((v: Copy) => text(v, lang), [lang]);
  const L = useCallback((es: string, en: string) => (lang === "es" ? es : en), [lang]);
  const c = initialContent;
  const p = c.profile;

  const [mode, setModeState] = useState<Mode>("magia");
  const [open, setOpen] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { document.documentElement.dataset.mode = mode; }, [mode]);

  const switchMode = useCallback((next: Mode, origin?: HTMLElement | null) => {
    const root = document.documentElement;
    if (origin) {
      const r = origin.getBoundingClientRect();
      root.style.setProperty("--vx", `${r.left + r.width / 2}px`);
      root.style.setProperty("--vy", `${r.top + r.height / 2}px`);
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduce) doc.startViewTransition(() => { flushSync(() => setModeState(next)); });
    else setModeState(next);
  }, []);

  const featured = useMemo(() => FEATURED.map(id => c.projects.find(x => x.id === id)).filter((x): x is Project => Boolean(x)), [c.projects]);
  const archive = useMemo(() => {
    const rest = c.projects.filter(x => !FEATURED.includes(x.id as (typeof FEATURED)[number]));
    const prio = (id: string) => { const i = (additionalPriorityIds as readonly string[]).indexOf(id); return i === -1 ? 999 : i; };
    return rest.sort((a, b) => prio(a.id) - prio(b.id));
  }, [c.projects]);
  const archiveCats = useMemo(() => categories.filter(cat => cat.id === "all" || archive.some(x => x.category === cat.id)), [archive]);
  const filtered = archive.filter(x => filter === "all" || x.category === filter);
  const visibleArchive = showAll ? filtered : filtered.slice(0, 6);
  const teaching = c.projects.find(x => x.id === "dev-minds");
  const cv = lang === "es" ? p.cvEsUrl : p.cvEnUrl;

  return (
    <div className="mg" data-mode={mode}>
      <a className="skip" href="#trabajo">{L("Saltar al trabajo", "Skip to work")}</a>
      <div className="sheet-grid" aria-hidden="true" />

      <header className="nav">
        <a className="mono-mark" href="#top" aria-label="Mario Gonsalvez, inicio">
          <span className="mm">MG</span>
          <span className="mm-txt"><b>{p.shortName}</b><small>{p.role}</small></span>
        </a>
        <nav aria-label={L("Secciones", "Sections")}>
          <a href="#trabajo">{L("Trabajo", "Work")}</a>
          <a href="#lab">Lab</a>
          <a href="#trayectoria">{L("Trayectoria", "Journey")}</a>
          <a href="#contacto">{L("Contacto", "Contact")}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang" role="group" aria-label={L("Idioma", "Language")}>
            <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>ES</button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          </div>
          <ModeSwitch mode={mode} onChange={switchMode} L={L} />
        </div>
      </header>

      <main id="top">
        <Hero c={c} lang={lang} L={L} t={t} cv={cv} mode={mode} />

        {/* ---------- Featured work ---------- */}
        <section className="sec" id="trabajo" aria-labelledby="trabajo-h">
          <div className="sec-head">
            <span className="tag">{L("Hoja 02 · Trabajo en producción", "Sheet 02 · Work in production")}</span>
            <h2 id="trabajo-h">{L("Lo que está funcionando hoy.", "What is running today.")}</h2>
            <p className="lede">{L("Primero lo que ya usan personas reales. Cada caso tiene dos caras: lo que hace y cómo está construido.", "Real users first. Every case has two sides: what it does and how it is built.")}</p>
          </div>
          <ol className="cases">
            {featured.map((x, i) => <CaseRow key={x.id} x={x} i={i} t={t} L={L} mode={mode} onOpen={() => setOpen(x)} />)}
          </ol>
        </section>

        {/* ---------- Lab ---------- */}
        <section className="sec lab" id="lab" aria-labelledby="lab-h">
          <div className="lab-grid">
            <div className="sec-head">
              <span className="tag">{L("Hoja 03 · Laboratorio", "Sheet 03 · Lab")}</span>
              <h2 id="lab-h">{L("IA local. Acciones con control.", "Local AI. Controlled actions.")}</h2>
              <p className="lede">{L("MAYA es mi agente local-first: modelos con Ollama, memoria en SQLite e identidad Ed25519. Cada acción pasa por un motor de políticas antes de ejecutarse. Pruébalo:", "MAYA is my local-first agent: Ollama models, SQLite memory and Ed25519 identity. Every action goes through a policy engine before it runs. Try it:")}</p>
              <p className="next">
                <span className="tag">{L("Próximo", "Next")}</span>
                <span><b>{aiCloudDirection.name}</b> · {t(aiCloudDirection.headline)}</span>
              </p>
            </div>
            <PolicyTerminal L={L} />
          </div>
        </section>

        {/* ---------- Archive ---------- */}
        <section className="sec" id="archivo" aria-labelledby="archivo-h">
          <div className="sec-head row">
            <div>
              <span className="tag">{L("Hoja 04 · Archivo técnico", "Sheet 04 · Technical archive")}</span>
              <h2 id="archivo-h">{L("Más productos, automatización y experimentos.", "More products, automation and experiments.")}</h2>
            </div>
            <div className="chips" role="group" aria-label={L("Filtrar por categoría", "Filter by category")}>
              {archiveCats.map(cat => (
                <button key={cat.id} type="button" aria-pressed={filter === cat.id} onClick={() => { setFilter(cat.id); setShowAll(false); }}>
                  {t(cat.label)} <span>{cat.id === "all" ? archive.length : archive.filter(x => x.category === cat.id).length}</span>
                </button>
              ))}
            </div>
          </div>
          <ul className="archive">
            {visibleArchive.map(x => (
              <li key={x.id} className="rv">
                <button type="button" className="arc" onClick={() => setOpen(x)}>
                  <span className="arc-n">{x.number}</span>
                  <span className="arc-main">
                    <span className="arc-type">{t(x.type)}</span>
                    <b>{x.name}</b>
                    <span className="arc-head">{t(x.headline)}</span>
                  </span>
                  <span className="arc-meta">
                    <span className={`st ${isVerified(t(x.status)) ? "ok" : "wip"}`}>{t(x.status)}</span>
                    <span className="arc-stack">{x.stack.slice(0, 3).join(" · ")}</span>
                  </span>
                  <span className="arc-go" aria-hidden="true">↗</span>
                </button>
              </li>
            ))}
          </ul>
          {filtered.length > 6 && (
            <button type="button" className="btn ghost more" onClick={() => setShowAll(s => !s)}>
              {showAll ? L("Mostrar menos", "Show less") : L(`Ver todos (${filtered.length})`, `See all (${filtered.length})`)}
            </button>
          )}
        </section>

        {/* ---------- Journey as git log ---------- */}
        <section className="sec" id="trayectoria" aria-labelledby="tray-h">
          <div className="sec-head">
            <span className="tag">{L("Hoja 05 · Trayectoria", "Sheet 05 · Journey")}</span>
            <h2 id="tray-h">{L("Siete años de commits.", "Seven years of commits.")}</h2>
            <p className="lede">{t(p.about[0] ?? p.introduction)}</p>
          </div>
          <div className="gitlog" role="list">
            <div className="gl-cmd" aria-hidden="true"><span className="pr">$</span> git log --career --graph</div>
            {c.experience.map((e, i) => (
              <div className="gl-row rv" role="listitem" key={e.company + e.role}>
                <span className="gl-graph" aria-hidden="true"><i className={i === 0 ? "head" : ""} /></span>
                <span className="gl-hash" aria-hidden="true">{hash7(e.company + e.role)}</span>
                <div className="gl-body">
                  <div className="gl-title">
                    {e.current && <span className="gl-ref">HEAD → {e.company}</span>}
                    {!e.current && <span className="gl-co">{e.company}</span>}
                    <b>{e.role}</b>
                  </div>
                  <span className="gl-date">{t(e.dates)}</span>
                  <p>{t(e.description)}</p>
                </div>
              </div>
            ))}
            <div className="gl-row rv root" role="listitem">
              <span className="gl-graph" aria-hidden="true"><i /></span>
              <span className="gl-hash" aria-hidden="true">{hash7(p.university)}</span>
              <div className="gl-body">
                <div className="gl-title"><span className="gl-co">{L("commit inicial", "initial commit")}</span><b>{t(p.education)}</b></div>
                <span className="gl-date">{p.university}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Expertise + credentials ---------- */}
        <section className="sec" id="stack" aria-labelledby="stack-h">
          <div className="sec-head">
            <span className="tag">{L("Hoja 06 · Módulos", "Sheet 06 · Modules")}</span>
            <h2 id="stack-h">{L("Con qué construyo.", "What I build with.")}</h2>
          </div>
          <div className="modules">
            {c.expertise.map((m, i) => (
              <article className="module rv" key={i}>
                <span className="mod-id">M{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(m.title)}</h3>
                <p>{t(m.note)}</p>
                <ul>{m.items.map(it => <li key={it}>{it}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="creds">
            <h3>{L("Credenciales", "Credentials")}</h3>
            <ul>
              {c.certificates.map(cert => (
                <li key={cert.issuer + cert.name} className={/expir/i.test(t(cert.kind)) ? "old" : ""}>
                  <span className="cr-iss">{cert.issuer}</span>
                  <b>{cert.name}</b>
                  <span className="cr-kind">{t(cert.kind)}{cert.year ? ` · ${cert.year}` : ""}</span>
                </li>
              ))}
            </ul>
            <p className="cr-note">{p.training} — {t(p.trainingNote)}</p>
          </div>
        </section>

        {/* ---------- Teaching ---------- */}
        {teaching && (
          <section className="sec teach" aria-labelledby="teach-h">
            <div className="teach-in rv">
              <span className="tag">{L("Hoja 07 · También enseño", "Sheet 07 · I also teach")}</span>
              <h2 id="teach-h">{t(teaching.headline)}</h2>
              <p className="lede">{t(teaching.description)}</p>
              <button type="button" className="btn ghost" onClick={() => setOpen(teaching)}>{L("Ver Dev-Minds", "See Dev-Minds")} <span aria-hidden="true">↗</span></button>
            </div>
          </section>
        )}

        {/* ---------- Contact ---------- */}
        <section className="contact" id="contacto" aria-labelledby="contact-h">
          <div className="contact-in">
            <span className="tag">{L("Hoja 08 · Contacto", "Sheet 08 · Contact")}</span>
            <h2 id="contact-h">{L("¿Construimos algo", "Shall we build something")}<br /><em>{L("que funcione de verdad?", "that actually works?")}</em></h2>
            <div className="contact-grid">
              <CopyRow label="Email" value={c.contact.email} L={L} />
              <a className="c-link" href={c.contact.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><b>{host(c.contact.linkedin)}</b><i aria-hidden="true">↗</i></a>
              <a className="c-link" href={c.contact.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><b>{host(c.contact.github)}{new URL(c.contact.github).pathname}</b><i aria-hidden="true">↗</i></a>
              <a className="c-link" href={c.contact.whatsapp} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><b>{L("Escríbeme", "Message me")}</b><i aria-hidden="true">↗</i></a>
            </div>
            <div className="cv-row">
              <a className="btn solid" href={p.cvEsUrl} download>CV · Español <span aria-hidden="true">↓</span></a>
              <a className="btn ghost light" href={p.cvEnUrl} download>CV · English <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {p.fullName}</span>
        <span className="foot-mid">{p.location} · {ORIGIN}</span>
        <span>{L("Diseñado y construido por mí. Sin plantillas.", "Designed and built by me. No templates.")}</span>
      </footer>

      <CaseDialog x={open} onClose={() => setOpen(null)} t={t} L={L} />
    </div>
  );
}

/* ================= Mode switch ================= */
function ModeSwitch({ mode, onChange, L }: { mode: Mode; onChange: (m: Mode, el?: HTMLElement | null) => void; L: (a: string, b: string) => string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const ing = mode === "ing";
  return (
    <button ref={ref} type="button" className="mode" role="switch" aria-checked={ing} onClick={() => onChange(ing ? "magia" : "ing", ref.current)}
      title={L("Cambiar entre la vista pulida y el plano de ingeniería", "Switch between the polished view and the engineering blueprint")}>
      <span className={!ing ? "on" : ""}>{L("Magia", "Magic")}</span>
      <span className="knob" aria-hidden="true" />
      <span className={ing ? "on" : ""}>{L("Ingeniería", "Engineering")}</span>
    </button>
  );
}

/* ================= Hero with X-ray lens ================= */
function Hero({ c, lang, L, t, cv, mode }: { c: PortfolioContent; lang: Lang; L: (a: string, b: string) => string; t: (v: Copy) => string; cv: string; mode: Mode }) {
  const p = c.profile;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let x = el.clientWidth * 0.62, y = el.clientHeight * 0.45, tx = x, ty = y, last = -1e9, raf = 0;
    const set = () => { el.style.setProperty("--lx", `${x}px`); el.style.setProperty("--ly", `${y}px`); };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left; ty = e.clientY - r.top; last = performance.now();
      el.classList.add("lens-on");
    };
    const leave = () => { last = -1e9; };
    const loop = (now: number) => {
      if (now - last > 2200) {
        // idle: the lens wanders slowly over the hero so touch screens see it too
        const k = (now - t0) / 1000, w = el.clientWidth, h = el.clientHeight;
        tx = w * (0.5 + 0.34 * Math.sin(k * 0.42)); ty = h * (0.5 + 0.28 * Math.sin(k * 0.67 + 1));
      }
      x += (tx - x) * 0.12; y += (ty - y) * 0.12; set();
      raf = requestAnimationFrame(loop);
    };
    set();
    if (!reduce) {
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      raf = requestAnimationFrame(loop);
    }
    const io = new IntersectionObserver(([en]) => {
      cancelAnimationFrame(raf);
      if (en.isIntersecting && !reduce) raf = requestAnimationFrame(loop);
    });
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, []);

  const spec = [
    ["role", `"${p.role}"`],
    ["now", `"${c.experience.find(e => e.current)?.company ?? p.currentCompany} · ${c.experience.find(e => e.current)?.role ?? ""}"`],
    ["since", "2018"],
    ["origin", `"${p.location.split("·")[0].trim()} · ${ORIGIN}"`],
    ["stack", `["Flutter", "Python", "FastAPI", "TypeScript", "GCP"]`],
    ["principle", lang === "es" ? `"Menos magia. Más ingeniería."` : `"Less magic. More engineering."`],
    ["ships", lang === "es" ? `"cuando las pruebas pasan"` : `"when the tests pass"`],
  ];

  const copyblock = (x: boolean) => (
    <div className="hero-copy">
      <div className="who">
        <span className="avatar">{!x && <img src={p.photoUrl} alt={p.fullName} width={64} height={64} />}{x && <span className="av-x">64×64</span>}</span>
        <span><b>{p.shortName}</b><small>{p.location}</small></span>
      </div>
      <h1 aria-label={L("Menos magia. Más ingeniería.", "Less magic. More engineering.")}>
        <span className="l1">{L("Menos magia.", "Less magic.")}</span>
        <span className="l2">{L("Más ingeniería.", "More engineering.")}</span>
        {x && <span className="dim" aria-hidden="true"><i /> h1 · Archivo 800 · clamp(52px, 8.4vw, 132px)</span>}
      </h1>
      <p className="intro">{t(p.introduction)}</p>
      <div className="cta">
        <a className="btn solid" href="#trabajo">{L("Ver mi trabajo", "See my work")} <span aria-hidden="true">↓</span></a>
        <a className="btn ghost" href={cv} download>{L("Descargar CV", "Download CV")}</a>
        <a className="txt" href={c.contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
      <dl className="facts">
        <div><dt>{L("Años en software", "Years in software")}</dt><dd>{p.softwareYears}</dd></div>
        <div><dt>{L("Años con Flutter", "Years with Flutter")}</dt><dd>{p.flutterYears}</dd></div>
        <div><dt>{L("Hoy en", "Now at")}</dt><dd>{p.currentCompany}</dd></div>
      </dl>
    </div>
  );

  return (
    <section ref={ref} className={`hero ${mode === "ing" ? "full-x" : ""}`} aria-label={L("Presentación", "Introduction")}>
      <div className="hero-layer magic">
        {copyblock(false)}
        <figure className="portrait">
          <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
          <img src={p.photoUrl} alt="" width={480} height={600} />
          <figcaption><span>Fig. 01</span> {p.fullName}</figcaption>
        </figure>
      </div>
      <div className="hero-layer xray" aria-hidden="true">
        {copyblock(true)}
        <pre className="spec"><code>
          <span className="cm">{"// mario.config.ts"}</span>{"\n"}
          <span className="kw">export const</span> mario = {"{"}{"\n"}
          {spec.map(([k, v]) => <span key={k}>{"  "}<span className="k">{k}</span>: <span className="v">{v}</span>,{"\n"}</span>)}
          {"}"};{"\n"}
          <span className="ok">✓ 7 checks passed</span>
        </code></pre>
      </div>
      <div className="lens-ring" aria-hidden="true"><span>X-RAY</span></div>
      <p className="hero-hint" aria-hidden="true">{L("Pasa el cursor: así está hecho por dentro.", "Hover: this is how it is built inside.")}</p>
    </section>
  );
}

/* ================= Featured case row ================= */
function CaseRow({ x, i, t, L, mode, onOpen }: { x: Project; i: number; t: (v: Copy) => string; L: (a: string, b: string) => string; mode: Mode; onOpen: () => void }) {
  const [eng, setEng] = useState(false);
  const showEng = eng || mode === "ing";
  const st = t(x.status);
  return (
    <li className={`case rv ${showEng ? "eng" : ""}`}>
      <div className="case-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
      <div className="case-body">
        <div className="case-top">
          <span className="case-type">{t(x.type)}</span>
          <span className={`st ${isVerified(st) ? "ok" : "wip"}`}>{st}</span>
        </div>
        <h3>{x.name}</h3>
        {!showEng ? (
          <div className="face front" key="front">
            <p className="case-head">{t(x.headline)}</p>
            <p className="case-desc">{t(x.description)}</p>
          </div>
        ) : (
          <div className="face back" key="back">
            <p className="eng-label">{L("Problema", "Problem")}</p>
            <p className="case-desc">{t(x.problem)}</p>
            <p className="eng-label">{L("Decisiones", "Decisions")}</p>
            <ul className="decisions">{x.decisions.slice(0, 3).map((d, k) => <li key={k}>{t(d)}</li>)}</ul>
            <p className="eng-label">{L("Evidencia", "Evidence")}</p>
            <p className="evidence">{t(x.validation)}</p>
          </div>
        )}
        <div className="case-foot">
          <ul className="stack">{x.stack.slice(0, showEng ? 8 : 3).map(s => <li key={s}>{s}</li>)}</ul>
          <div className="case-actions">
            {mode !== "ing" && (
              <button type="button" className="flip" aria-pressed={eng} onClick={() => setEng(v => !v)}>
                {eng ? L("Ver producto", "See product") : L("Ver ingeniería", "See engineering")}
              </button>
            )}
            <button type="button" className="btn ghost sm" onClick={onOpen}>{L("Caso completo", "Full case")}</button>
            {x.link && <a className="btn solid sm" href={x.link} target="_blank" rel="noopener noreferrer">{host(x.link)} ↗</a>}
          </div>
        </div>
      </div>
    </li>
  );
}

/* ================= MAYA policy terminal ================= */
type Line = { k: "cmd" | "ok" | "no" | "info"; s: string };
function PolicyTerminal({ L }: { L: (a: string, b: string) => string }) {
  const [lines, setLines] = useState<Line[]>([{ k: "info", s: "maya v0.7.3 · policy engine ready · workspace: ~/proyectos" }]);
  const [busy, setBusy] = useState(false);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = (kind: "read" | "write" | "shell") => {
    if (busy) return;
    setBusy(true);
    const scripts: Record<string, Line[]> = {
      read: [
        { k: "cmd", s: "› list_files ./src" },
        { k: "info", s: L("policy: lectura · workspace autorizado · identidad Ed25519 verificada", "policy: read · authorized workspace · Ed25519 identity verified") },
        { k: "ok", s: L("SAFE · ejecutado · 14 archivos · auditado", "SAFE · executed · 14 files · audited") },
      ],
      write: [
        { k: "cmd", s: "› write_file remote:/etc/hosts" },
        { k: "info", s: L("policy: escritura fuera del workspace · worker remoto", "policy: write outside workspace · remote worker") },
        { k: "no", s: L("BLOCKED · requiere aprobación local en el dispositivo", "BLOCKED · requires local approval on the device") },
      ],
      shell: [
        { k: "cmd", s: "› run_shell \"git status\"" },
        { k: "info", s: L("policy: comando de solo lectura · lease 30s", "policy: read-only command · 30s lease") },
        { k: "ok", s: L("SAFE · ejecutado · sin cambios pendientes", "SAFE · executed · working tree clean") },
      ],
    };
    const seq = scripts[kind];
    seq.forEach((ln, idx) => {
      timers.current.push(window.setTimeout(() => {
        setLines(prev => [...prev.slice(-9), ln]);
        if (idx === seq.length - 1) setBusy(false);
      }, 380 + idx * 520));
    });
  };

  return (
    <div className="term rv">
      <div className="term-bar"><i /><i /><i /><span>maya — policy engine</span></div>
      <div className="term-out" role="log" aria-live="polite">
        {lines.map((ln, i) => <div key={i} className={`tl ${ln.k}`}>{ln.s}</div>)}
        <div className="tl caret" aria-hidden="true">▍</div>
      </div>
      <div className="term-btns">
        <button type="button" onClick={() => run("read")} disabled={busy}>{L("Simular lectura", "Simulate read")}</button>
        <button type="button" onClick={() => run("shell")} disabled={busy}>{L("Comando seguro", "Safe command")}</button>
        <button type="button" className="danger" onClick={() => run("write")} disabled={busy}>{L("Escritura remota", "Remote write")}</button>
      </div>
      <p className="term-note">{L("Simulación de la política. No accede a tus archivos.", "Policy simulation. It does not access your files.")}</p>
    </div>
  );
}

/* ================= Copy row ================= */
function CopyRow({ label, value, L }: { label: string; value: string; L: (a: string, b: string) => string }) {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  return (
    <div className="c-link copy">
      <span>{label}</span>
      <b ref={ref}>{value}</b>
      <button type="button" onClick={() => {
        navigator.clipboard?.writeText(value).then(() => { setDone(true); setTimeout(() => setDone(false), 1600); }).catch(() => {
          const r = document.createRange(); if (ref.current) { r.selectNodeContents(ref.current); getSelection()?.removeAllRanges(); getSelection()?.addRange(r); }
        });
      }}>{done ? L("Copiado", "Copied") : L("Copiar", "Copy")}</button>
    </div>
  );
}

/* ================= Case dialog ================= */
function CaseDialog({ x, onClose, t, L }: { x: Project | null; onClose: () => void; t: (v: Copy) => string; L: (a: string, b: string) => string }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current; if (!d) return;
    if (x && !d.open) d.showModal();
    if (!x && d.open) d.close();
  }, [x]);
  const cs = x?.caseStudy;
  const list = (title: string, items?: readonly Copy[]) => items && items.length > 0 && (
    <div className="cd-block"><h4>{title}</h4><ul>{items.map((it, i) => <li key={i}>{t(it)}</li>)}</ul></div>
  );
  return (
    <dialog ref={ref} className="cd" onClose={onClose} onClick={e => { if (e.target === ref.current) onClose(); }} aria-labelledby="cd-title">
      {x && (
        <div className="cd-in">
          <div className="cd-top">
            <span className="tag">{L("Caso", "Case")} {x.number} · {x.year}</span>
            <button type="button" className="cd-x" onClick={onClose} aria-label={L("Cerrar", "Close")}>✕</button>
          </div>
          <span className="case-type">{t(x.type)}</span>
          <h3 id="cd-title">{x.name}</h3>
          <p className="cd-head">{t(x.headline)}</p>
          <span className={`st ${isVerified(t(x.status)) ? "ok" : "wip"}`}>{t(x.status)}</span>
          <div className="cd-grid">
            <div className="cd-block"><h4>{L("Problema", "Problem")}</h4><p>{t(x.problem)}</p></div>
            <div className="cd-block"><h4>{L("Mi aporte", "My contribution")}</h4><p>{t(x.contribution)}</p></div>
            {cs?.role && <div className="cd-block"><h4>{L("Rol", "Role")}</h4><p>{t(cs.role)}</p></div>}
            {list(L("Funcionalidades", "Features"), x.features)}
            {list(L("Decisiones", "Decisions"), x.decisions)}
            {list(L("Arquitectura", "Architecture"), cs?.architecture)}
            {list(L("Retos", "Challenges"), cs?.challenges)}
            {list(L("Seguridad", "Security"), cs?.security)}
            {list(L("Pruebas", "Testing"), cs?.testing)}
            {list(L("Despliegue", "Deployment"), cs?.deployment)}
            {list(L("Resultados", "Results"), cs?.results)}
            <div className="cd-block ev"><h4>{L("Evidencia", "Evidence")}</h4><p>{t(x.validation)}</p></div>
          </div>
          {x.gallery && x.gallery.length > 0 && (
            <div className="cd-gallery">{x.gallery.map((g, i) => <figure key={i}><img src={g.url} alt={t(g.caption)} loading="lazy" /><figcaption>{t(g.caption)}</figcaption></figure>)}</div>
          )}
          <ul className="stack">{x.stack.map(s => <li key={s}>{s}</li>)}</ul>
          <div className="cd-links">
            {x.link && <a className="btn solid" href={x.link} target="_blank" rel="noopener noreferrer">{host(x.link)} ↗</a>}
            {x.repo && <a className="btn ghost" href={x.repo} target="_blank" rel="noopener noreferrer">{L("Repositorio", "Repository")} ↗</a>}
          </div>
        </div>
      )}
    </dialog>
  );
}
