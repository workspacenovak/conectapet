import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import heroImg from "@/assets/hero.jpg";
import amazonImg from "@/assets/amazon.jpg";
import logoImg from "@/assets/logo.png";

const EMAIL = "conectapet_amazonas@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conecta Pet — Leve sua marca pet ao Amazonas" },
      { name: "description", content: "A Conecta Pet busca novas marcas de produtos para animais interessadas em expandir sua presença para o mercado do Amazonas." },
      { property: "og:title", content: "Conecta Pet — Leve sua marca pet ao Amazonas" },
      { property: "og:description", content: "Seja parceiro da Conecta Pet e expanda sua marca para o mercado amazonense." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#oportunidade", label: "Oportunidade" },
  { href: "#conecta-pet", label: "Conecta Pet" },
  { href: "#contato", label: "Contato" },
];

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Conecta Pet">
      <img src={logoImg} alt="Conecta Pet" className="h-23 w-30 object-contain" />
    </a>
  );
}

function Btn({ href, children, variant = "brand" }: { href: string; children: ReactNode; variant?: "brand" | "highlight" | "ghost" }) {
  const v = {
    brand: "bg-primary text-primary-foreground hover:brightness-95 shadow-soft",
    highlight: "bg-highlight text-highlight-foreground hover:brightness-95",
    ghost: "border border-border text-ink hover:border-brand hover:text-brand",
  }[variant];
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${v}`}>
      {children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">{n.label}</a>
            ))}
          </nav>
          <div className="hidden md:block"><Btn href="#contato">Quero ser parceiro</Btn></div>
          <button className="md:hidden rounded-lg border border-border px-3 py-2 text-sm" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
        </div>
        {open && (
          <div className="border-t border-border px-5 pb-5 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{n.label}</a>
            ))}
            <Btn href="#contato">Quero ser parceiro</Btn>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-soft" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="reveal">
            <h1 className="text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Sua marca pode chegar <span className="text-brand">ainda mais longe.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A Conecta Pet busca novas marcas interessadas em expandir sua presença e levar seus produtos para o mercado do Amazonas.
            </p>
          </div>
          <div className="reveal relative" style={{ animationDelay: "0.15s" }}>
            <img src={heroImg} alt="Cão e gato em ambiente com folhagem amazônica" width={1280} height={1280} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft md:aspect-square" />
            <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-border bg-background p-4 shadow-soft sm:right-auto">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Icon d="M3 12h4l3-8 4 16 3-8h4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Sua marca → Amazonas</p>
                <p className="text-xs text-muted-foreground">Conexão com um novo mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPORTUNIDADE */}
      <section id="oportunidade" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:items-center">
          <img src={amazonImg} alt="Rio na floresta amazônica" loading="lazy" width={1600} height={912} className="h-full max-h-[440px] w-full rounded-[2rem] object-cover" />
          <div>
            <Eyebrow>A oportunidade</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Novas marcas, novas oportunidades</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A Conecta Pet está buscando novas marcas e produtos para ampliar seu portfólio e trazer novas opções para o mercado do Amazonas.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A proposta é aproximar marcas de um novo mercado e criar oportunidades reais de crescimento e parceria.
            </p>
            <ul className="mt-8 space-y-3">
              {["Para marcas de produtos para animais", "Interessadas em expandir para a região norte", "Abertas a construir uma parceria"].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-ink">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-xs text-brand">✓</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="conecta-pet" className="bg-brand-soft/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <Eyebrow>Por que fazer parte?</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Uma ponte entre a sua marca e o mercado amazonense</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={b.t} className={`group rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-soft ${i === 0 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between" : ""}`}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Icon d={b.d} />
                </span>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-ink">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-brand px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-primary-foreground/10" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold sm:text-5xl">Tem uma marca pet e quer expandir para o Amazonas?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">
              Entre em contato com a Conecta Pet e apresente sua marca. A empresa está aberta a conhecer novas marcas e produtos que possam fazer parte desse projeto.
            </p>
            <div className="mt-10"><Btn href="#contato" variant="highlight">Tenho interesse →</Btn></div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Contato</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Vamos conversar sobre a sua marca</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Preencha o formulário ou envie um e-mail diretamente para a Conecta Pet.</p>
            <div className="mt-8 rounded-3xl border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">E-mail oficial</p>
              <a href={`mailto:${EMAIL}`} className="mt-2 block break-all font-display text-lg font-semibold text-brand">{EMAIL}</a>
              <div className="mt-5"><Btn href={`mailto:${EMAIL}?subject=${encodeURIComponent("Parceria Conecta Pet")}`}>Entrar em contato</Btn></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl justify-center px-5 py-12">
          <Logo />
        </div>
        <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Conecta Pet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

const benefits = [
  { t: "Expansão para o mercado amazonense", p: "Leve seus produtos a um novo território com o apoio de quem está conectado à região.", d: "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c3 3 4.5 6.5 4.5 10S15 19 12 22c-3-3-4.5-6.5-4.5-10S9 5 12 2z" },
  { t: "Maior presença regional", p: "Fortaleça a visibilidade da sua marca no Amazonas.", d: "M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12zM12 11a2 2 0 100-4 2 2 0 000 4z" },
  { t: "Novas oportunidades comerciais", p: "Abra caminhos para novos negócios e novos canais.", d: "M3 17l6-6 4 4 8-8M14 7h7v7" },
  { t: "Parceria e crescimento", p: "Uma relação construída para crescer junto.", d: "M8 12l3 3 5-6M12 22a10 10 0 110-20 10 10 0 010 20z" },
  { t: "Conexão com o mercado pet", p: "Aproxime sua marca de quem cuida dos animais na região.", d: "M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand"><span className="h-px w-8 bg-highlight" />{children}</p>;
}

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
}

type Fields = { nome: string; marca: string; email: string; telefone: string; mensagem: string };
const empty: Fields = { nome: "", marca: "", email: "", telefone: "", mensagem: "" };

function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [err, setErr] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<Fields> = {};
    if (f.nome.trim().length < 2) e.nome = "Informe seu nome";
    if (f.marca.trim().length < 2) e.marca = "Informe o nome da empresa/marca";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "E-mail inválido";
    if (f.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone/WhatsApp com DDD";
    if (f.mensagem.trim().length < 10) e.mensagem = "Conte um pouco sobre sua marca";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const body = `Nome: ${f.nome}\nEmpresa/Marca: ${f.marca}\nE-mail: ${f.email}\nTelefone/WhatsApp: ${f.telefone}\n\nMensagem:\n${f.mensagem}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Interesse em parceria — ${f.marca}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-brand-soft/60 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-2xl text-primary-foreground">✓</span>
        <h3 className="mt-5 text-xl font-semibold text-ink">Quase lá!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">Abrimos seu aplicativo de e-mail com a mensagem pronta. Basta clicar em enviar.</p>
        <button onClick={() => { setSent(false); setF(empty); }} className="mt-6 text-sm font-semibold text-brand">Enviar outra mensagem</button>
      </div>
    );
  }

  const field = (k: keyof Fields, label: string, type = "text") => (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      {k === "mensagem" ? (
        <textarea rows={4} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={inputCls(err[k])} maxLength={1000} />
      ) : (
        <input type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={inputCls(err[k])} maxLength={120} />
      )}
      {err[k] && <span className="mt-1 block text-xs text-destructive">{err[k]}</span>}
    </label>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl border border-border bg-background p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("nome", "Nome")}
        {field("marca", "Empresa/Marca")}
        {field("email", "E-mail", "email")}
        {field("telefone", "Telefone/WhatsApp", "tel")}
      </div>
      {field("mensagem", "Mensagem")}
      <button type="submit" className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-95">
        Enviar interesse
      </button>
    </form>
  );
}

const inputCls = (e?: string) =>
  `mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/20 ${e ? "border-destructive" : "border-border"}`;
