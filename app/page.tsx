import type { Metadata } from "next";
import Image from "next/image";
import "./_inicio/b.css";
import { SITE_URL } from "./config";
import RevealOnScroll from "./components/RevealOnScroll";
import { Topo } from "./_inicio/componentes/Topo";
import { Marca } from "./_inicio/componentes/Marca";
import { Celular } from "./_inicio/componentes/Celular";
import { DemoJarvis } from "./_inicio/componentes/DemoJarvis";
import { TourDoApp } from "./_inicio/componentes/TourDoApp";
import { Perguntas } from "./_inicio/componentes/Perguntas";
import { BarraFixa } from "./_inicio/componentes/BarraFixa";
import { LINKS, COR, CONVERSA_TOPO, DIA, ENERGIAS, PLANOS } from "./_inicio/conteudo";

/* Página de vendas (home). Nasceu como versão B — roteiro aprovado em
   10/10/2026 — e virou a home no dia seguinte, a pedido do Ed. A versão
   anterior mora em /lp-a (fora do Google), pra teste A/B nos anúncios.
   Peças e textos em app/_inicio (pasta com _ não vira rota). */
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

/* ── Peças pequenas ─────────────────────────────────────────────────────── */

function Selo({ children, cor = COR.verde }: { children: React.ReactNode; cor?: string }) {
  return (
    <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: cor }}>
      {children}
    </span>
  );
}

function Titulo({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-3 text-3xl md:text-[2.6rem] font-semibold tracking-tight text-[var(--foreground)] leading-[1.1] text-balance ${className}`}>
      {children}
    </h2>
  );
}

function Seta() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function Check({ cor = COR.verdeTexto }: { cor?: string }) {
  return (
    <svg className="w-4 h-4 shrink-0 mt-[3px]" style={{ color: cor }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Recorte ampliado de um print: a tela inteira nesse tamanho fica ilegível. */
function Recorte({ src, alt, foco, zoom }: { src: string; alt: string; foco: string; zoom: number }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)", background: "var(--background)" }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 400px, 100vw"
        className="object-cover"
        style={{ objectPosition: foco, transform: `scale(${zoom})`, transformOrigin: foco }}
      />
    </div>
  );
}

/* Ícones simples (traço) das faixas */
const ICONE: Record<string, React.ReactNode> = {
  presente: <path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Zm0 0h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />,
  conversa: <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.5 8.5 0 1 1 21 11.5Z" />,
  escudo: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  cartao: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  cadeado: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  ia: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />,
  baixar: <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v3h16v-3" />,
  google: <path d="M21 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5a4.3 4.3 0 0 1-1.9 2.8v2.3h3A9 9 0 0 0 21 12.2ZM12 21c2.5 0 4.6-.8 6.1-2.2l-3-2.3a5.4 5.4 0 0 1-8-2.8H4v2.4A9 9 0 0 0 12 21Z" />,
  lixo: <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />,
  rede: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  tarefa: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="m8 12 3 3 5-6" /></>,
  agenda: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  planilha: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" /></>,
  nota: <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5" />,
};

function Icone({ nome, cor = "currentColor", tamanho = 20 }: { nome: string; cor?: string; tamanho?: number }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="none" stroke={cor} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONE[nome]}
    </svg>
  );
}

/* ── Página ─────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Topo />

      <main className="relative z-10 overflow-x-clip">
        {/* ═══════════ TOPO ═══════════ */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 hero-gradient" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-28 md:pt-40 pb-16 md:pb-28 grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-14 lg:gap-4 items-center">
            <div className="animate-fade-in-up">
              <a
                href="#precos"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: "rgba(50,205,50,0.1)", color: COR.verdeTexto, border: "1px solid rgba(50,205,50,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COR.verde }} />
                Early access — primeiros 100 usuários
              </a>

              <h1 className="mt-6 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.15rem] font-semibold tracking-tight leading-[1.07] text-[var(--foreground)] text-balance">
                Sua vida inteira num app só.{" "}
                {/* Em linha própria: antes o "E" colorido ficava sobrando no fim da linha de cima */}
                <span className="logo-gradient-text lg:block">E um assistente que resolve tudo pelo WhatsApp.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
                Compromissos, tarefas, hábitos, projetos e notas no mesmo lugar — com o Jarvis, que marca, lembra e anota por você numa mensagem de WhatsApp. E no fim da semana, o Nucly mostra se você repôs mais energia do que gastou.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={LINKS.teste} className="btn-primary-gradient text-white font-semibold px-6 h-12 rounded-xl inline-flex items-center justify-center gap-2 text-[15px] active:scale-[0.98]">
                  Testar 7 dias grátis <Seta />
                </a>
                <a
                  href="#jarvis"
                  className="px-6 h-12 rounded-xl inline-flex items-center justify-center text-[15px] font-medium text-[var(--foreground)]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  Ver o Jarvis em ação
                </a>
              </div>
              <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
                Sem cartão · Entre com o Google em 1 clique · Cancela quando quiser
              </p>
              <div id="fim-do-topo" aria-hidden />
            </div>

            {/* O app de verdade + o Jarvis no celular, na frente */}
            <div className="relative animate-scale-in delay-300">
              <div className="hidden lg:block rounded-xl overflow-hidden ml-24 w-[600px] xl:w-[680px] -mr-40" style={{ border: "1px solid var(--border)", boxShadow: "0 40px 100px -30px rgba(0,0,0,0.9)" }}>
                <div className="flex items-center gap-1.5 px-3.5 py-2.5" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }} aria-hidden>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                  <span className="mx-auto text-[11px] text-[var(--foreground-subtle)]">app.nucly.com.br</span>
                </div>
                <Image
                  src="/prints/hoje.png"
                  alt="Tela Hoje do Nucly: agenda, post-its e hábitos do dia"
                  width={2880}
                  height={1800}
                  preload
                  sizes="(min-width: 1024px) 680px, 0px"
                  className="w-full h-auto block"
                />
              </div>
              <div className="lg:absolute lg:left-0 lg:-bottom-24">
                <Celular mensagens={CONVERSA_TOPO} largura={250} animar />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CONFIANÇA ═══════════ */}
        <section aria-label="Garantias" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", background: "rgba(20,20,23,0.5)" }}>
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            {[
              { icone: "presente", forte: "7 dias grátis", fraco: "sem cartão" },
              { icone: "conversa", forte: "No seu WhatsApp", fraco: "sem chip nem app extra" },
              { icone: "escudo", forte: "Seus dados não treinam IA", fraco: "nem nossa, nem de ninguém" },
              { icone: "cartao", forte: "PIX ou cartão", fraco: "cancela em 2 cliques" },
            ].map((g) => (
              <div key={g.forte} className="flex items-start gap-3">
                <span className="mt-0.5 text-[var(--foreground-muted)]"><Icone nome={g.icone} /></span>
                <span className="leading-snug">
                  <span className="block text-[14px] font-semibold text-[var(--foreground)]">{g.forte}</span>
                  <span className="block text-[12.5px] text-[var(--foreground-subtle)]">{g.fraco}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ PROBLEMA ═══════════ */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll revealClass="reveal-left">
            <Selo cor={COR.laranja}>O problema</Selo>
            <Titulo>Cinco apps. Nenhum conversa com o outro.</Titulo>
            <p className="mt-5 text-[16px] text-[var(--foreground-muted)] leading-relaxed">
              A tarefa está num app, o compromisso em outro, o hábito numa planilha que você já abandonou e a ideia no bloco de notas do celular. O lembrete importante? Uma mensagem que você mandou pra você mesmo no WhatsApp.
            </p>
            <p className="mt-4 text-[16px] text-[var(--foreground-muted)] leading-relaxed">
              No fim da semana a lista está toda riscada — e você, esgotado, sem saber por quê. <span className="text-[var(--foreground)]">Nenhum desses apps mede o que cada coisa custou de você.</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll revealClass="reveal-right">
            <div className="relative">
              <div className="grid grid-cols-1 gap-2">
                {[
                  { icone: "tarefa", app: "App de tarefas", aviso: "sem contexto" },
                  { icone: "agenda", app: "Agenda", aviso: "não sabe dos projetos" },
                  { icone: "planilha", app: "Planilha de hábitos", aviso: "abandonada" },
                  { icone: "nota", app: "Notas do celular", aviso: "perdidas" },
                  { icone: "conversa", app: "WhatsApp pra você mesmo", aviso: "caos" },
                ].map((x) => (
                  <div key={x.app} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span className="text-[var(--foreground-subtle)]"><Icone nome={x.icone} tamanho={18} /></span>
                    <span className="flex-1 text-[14px] text-[var(--foreground-muted)]">{x.app}</span>
                    <span className="text-[11.5px] font-medium rounded-md px-2 py-0.5" style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}>{x.aviso}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center py-3 text-[var(--foreground-subtle)]" aria-hidden>
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M10 2v22M3 17l7 7 7-7" /></svg>
              </div>
              <div className="flex items-center gap-3 rounded-xl px-4 py-3.5" style={{ background: "rgba(50,205,50,0.08)", border: "1px solid rgba(50,205,50,0.3)" }}>
                <Marca tamanho={24} />
                <span className="flex-1 text-[14px] text-[var(--foreground)]">Tudo no mesmo lugar</span>
                <span className="text-[11.5px] font-medium rounded-md px-2 py-0.5" style={{ background: "rgba(50,205,50,0.12)", color: COR.verdeTexto, border: "1px solid rgba(50,205,50,0.28)" }}>e no WhatsApp</span>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════ COMO FUNCIONA ═══════════ */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 scroll-mt-20">
          <RevealOnScroll>
            <Selo cor={COR.ciano}>Como funciona</Selo>
            <Titulo>Três movimentos. Todo dia.</Titulo>
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { n: 1, titulo: "Tire da cabeça.", texto: "Escreveu, saiu da cabeça: ⌘K no computador, atalho no celular ou uma mensagem pro Jarvis. Tudo cai na Entrada do Fluxo e espera a vez, sem pesar.", src: "/prints/fluxo.png", alt: "Post-its no Fluxo", foco: "62% 42%", zoom: 1.7, cor: COR.ciano },
              { n: 2, titulo: "Faça o dia.", texto: "Abra o Hoje e o dia já está ali: compromissos, o que é pra fazer e os hábitos. O que você faz todo dia vira ritual e vai pro quadro com um toque.", src: "/prints/hoje.png", alt: "A tela Hoje", foco: "58% 38%", zoom: 1.45, cor: COR.laranja },
              { n: 3, titulo: "Veja o balanço.", texto: "No fim da semana o Pulso mostra quanto você gastou e quanto repôs — em Recarga, Operação e Conexão. Semana boa é semana equilibrada, não só cheia.", src: "/prints/pulso.png", alt: "O Pulso com o balanço de energia", foco: "60% 30%", zoom: 1.5, cor: COR.verde },
            ].map((p, i) => (
              <RevealOnScroll key={p.n} revealClass={`reveal delay-${(i + 1) * 100}`}>
                <div className="h-full rounded-2xl p-5 flex flex-col gap-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <Recorte src={p.src} alt={p.alt} foco={p.foco} zoom={p.zoom} />
                  <div>
                    <span className="inline-flex w-7 h-7 rounded-lg items-center justify-center text-[13px] font-bold" style={{ color: p.cor, background: `color-mix(in srgb, ${p.cor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${p.cor} 32%, transparent)` }}>{p.n}</span>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{p.titulo}</h3>
                    <p className="mt-1.5 text-[14.5px] text-[var(--foreground-muted)] leading-relaxed">{p.texto}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════ JARVIS ═══════════ */}
        <section id="jarvis" className="relative scroll-mt-20" style={{ background: "linear-gradient(180deg, transparent, rgba(0,168,132,0.05) 30%, rgba(0,168,132,0.05) 70%, transparent)" }}>
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
            <RevealOnScroll>
              <Selo>O Jarvis</Selo>
              <Titulo>O Jarvis faz por você. Pelo WhatsApp.</Titulo>
              <p className="mt-4 max-w-2xl text-[16px] text-[var(--foreground-muted)] leading-relaxed">
                Não é um chatbot que tira dúvida. Ele mexe no seu Nucly: marca, remarca, anota, conclui e lembra — numa mensagem, do jeito que você escreve.
              </p>
            </RevealOnScroll>
            <div className="mt-12">
              <DemoJarvis />
            </div>
          </div>
        </section>

        {/* ═══════════ UM DIA COM O JARVIS ═══════════ */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <RevealOnScroll>
            <div className="lg:sticky lg:top-28">
              <Selo cor={COR.ciano}>Um dia com o Jarvis</Selo>
              <Titulo>Ele trabalha mesmo quando você não abre o app.</Titulo>
              <p className="mt-4 text-[16px] text-[var(--foreground-muted)] leading-relaxed">
                Resumo de manhã, lembrete antes de cada compromisso, a pergunta certa na hora certa. Você só responde — e o Nucly se atualiza sozinho.
              </p>
              <a href={LINKS.teste} className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold" style={{ color: COR.verdeTexto }}>
                Testar com o meu WhatsApp <Seta />
              </a>
            </div>
          </RevealOnScroll>

          <ol className="relative">
            <span className="absolute left-[39px] top-3 bottom-3 w-px" style={{ background: "linear-gradient(var(--border), var(--border-strong), var(--border))" }} aria-hidden />
            {DIA.map((d, i) => (
              <RevealOnScroll key={d.hora} revealClass={`reveal delay-${Math.min(i, 5) * 100}`}>
                <li className="relative grid grid-cols-[80px_1fr] gap-4 pb-7 last:pb-0">
                  <span className="relative z-10 justify-self-center h-7 px-2.5 rounded-full inline-flex items-center text-[12px] font-semibold tabular-nums" style={{ background: "var(--surface-2)", border: "1px solid var(--border-strong)", color: "var(--foreground)" }}>
                    {d.hora}
                  </span>
                  <div className="rounded-xl px-4 py-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[15px] font-semibold text-[var(--foreground)]">{d.titulo}</span>
                      {d.tag && <span className="text-[11px] font-medium rounded-md px-1.5 py-0.5" style={{ color: COR.ciano, background: "rgba(0,206,209,0.1)", border: "1px solid rgba(0,206,209,0.25)" }}>{d.tag}</span>}
                    </div>
                    <p className="mt-1 text-[14px] text-[var(--foreground-muted)] leading-relaxed">{d.texto}</p>
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </section>

        {/* ═══════════ AS TELAS ═══════════ */}
        <section id="telas" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 scroll-mt-20">
          <RevealOnScroll>
            <Selo cor={COR.laranja}>Tudo num lugar só</Selo>
            <Titulo>Um app no lugar de cinco.</Titulo>
          </RevealOnScroll>
          <div className="mt-10">
            <TourDoApp />
          </div>
        </section>

        {/* ═══════════ ENERGIA ═══════════ */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <RevealOnScroll revealClass="reveal-left">
            <Selo>O diferencial</Selo>
            <Titulo>Todo app conta tarefas. O Nucly mede energia.</Titulo>
            <p className="mt-5 text-[16px] text-[var(--foreground-muted)] leading-relaxed">
              Cada coisa que você conclui pesa em uma de três energias. O pilar dá o padrão e você ajusta a exceção — um almoço de equipe é Conexão, mesmo no pilar Trabalho.
            </p>
            <p className="mt-4 text-[16px] text-[var(--foreground-muted)] leading-relaxed">
              É assim que o Nucly percebe o que nenhum outro app percebe: que faz duas semanas que nada te recarrega, ou que um pilar que você jura ser prioridade ficou parado.
            </p>
          </RevealOnScroll>

          <RevealOnScroll revealClass="reveal-right">
            <div className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <p className="text-[13px] font-medium text-[var(--foreground-subtle)]">Pulso · últimos 7 dias</p>
              <div className="mt-5 flex h-3 rounded-full overflow-hidden" aria-hidden>
                {ENERGIAS.map((e) => <span key={e.nome} style={{ width: `${e.pct}%`, background: e.cor }} />)}
              </div>
              <ul className="mt-5 space-y-3">
                {ENERGIAS.map((e) => (
                  <li key={e.nome} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: e.cor }} />
                    <span className="text-[15px] font-semibold w-24" style={{ color: e.cor }}>{e.nome}</span>
                    <span className="flex-1 text-[13.5px] text-[var(--foreground-subtle)]">{e.exemplo}</span>
                    <span className="text-[14px] font-semibold tabular-nums text-[var(--foreground)]">{e.pct}%</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl px-4 py-3 text-[13.5px] font-medium" style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.22)", color: "#f472b6" }}>
                ⚠ Família: 15 dias sem atividade — que tal hoje?
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══════════ PRIVACIDADE ═══════════ */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
          <RevealOnScroll>
            <Selo cor={COR.ciano}>Privacidade</Selo>
            <Titulo>Seus dados são seus.</Titulo>
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icone: "ia", titulo: "A IA não treina com o que é seu", texto: "Nem a nossa, nem a de ninguém. O Jarvis usa seus dados só pra responder você." },
              { icone: "cadeado", titulo: "Notas com senha", texto: "Pra senhas e documentos: o texto é cifrado no seu aparelho. Nem a equipe do Nucly consegue ler." },
              { icone: "baixar", titulo: "Exporte tudo", texto: "Seus pilares, projetos, hábitos, notas e agenda em PDF, quando quiser." },
              { icone: "google", titulo: "Entre com o Google", texto: "Sem criar mais uma senha. Em 1 clique, a conta está pronta." },
              { icone: "rede", titulo: "Cada conta isolada", texto: "Conexão criptografada e isolamento entre contas aplicado no próprio banco de dados." },
              { icone: "lixo", titulo: "Apague quando quiser", texto: "A conta sai em 2 cliques, com todos os dados, como manda a LGPD." },
            ].map((x, i) => (
              <RevealOnScroll key={x.titulo} revealClass={`reveal delay-${(i % 3 + 1) * 100}`}>
                <div className="h-full rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <span className="inline-flex w-10 h-10 rounded-xl items-center justify-center" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                    <Icone nome={x.icone} cor="var(--foreground)" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[var(--foreground)]">{x.titulo}</h3>
                  <p className="mt-1.5 text-[14px] text-[var(--foreground-muted)] leading-relaxed">{x.texto}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ═══════════ PREÇOS ═══════════ */}
        <section id="precos" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 scroll-mt-20">
          <RevealOnScroll>
            <div className="text-center">
              <Selo>Preços</Selo>
              <Titulo className="mx-auto max-w-2xl">Comece grátis. Fique pelo Jarvis.</Titulo>
              <p className="mt-4 mx-auto max-w-xl text-[15.5px] text-[var(--foreground-muted)] leading-relaxed">
                7 dias grátis em qualquer plano pago, sem cartão. Se não assinar, a conta volta pro Grátis sozinha — nada é cobrado.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {PLANOS.map((p, i) => (
              <RevealOnScroll key={p.nome} revealClass={`reveal delay-${(i + 1) * 100}`} className={p.destaque ? "md:-mt-3" : ""}>
                <div className={`neon-border-ring rounded-2xl h-full ${p.destaque ? "neon-border-active" : ""}`}>
                  <div
                    className="relative rounded-2xl p-6 h-full flex flex-col"
                    style={p.destaque
                      ? { background: "linear-gradient(160deg, rgba(0,206,209,0.07), rgba(50,205,50,0.05)), var(--surface)", border: "1px solid rgba(0,206,209,0.25)" }
                      : { background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground-muted)]">{p.nome}</span>
                      {p.destaque && (
                        <span className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(0,206,209,0.12)", border: "1px solid rgba(0,206,209,0.32)", color: COR.ciano }}>
                          Recomendado
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tracking-tight text-[var(--foreground)] tabular-nums">{p.preco}</span>
                      <span className="text-[14px] text-[var(--foreground-subtle)]">{p.periodo}</span>
                    </div>
                    <p className="mt-1 text-[13px]" style={{ color: COR.verdeTexto }}>{p.nota}</p>
                    <p className="mt-3 text-[14.5px] text-[var(--foreground)]">{p.paraQuem}</p>

                    <ul className="mt-5 space-y-2.5 flex-1">
                      {p.itens.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[14px] text-[var(--foreground-muted)] leading-snug">
                          <Check cor={p.destaque ? COR.ciano : COR.verdeTexto} />
                          {it}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={p.href}
                      className={`mt-7 h-12 rounded-xl inline-flex items-center justify-center text-[15px] font-semibold active:scale-[0.98] ${p.destaque ? "btn-primary-gradient text-white" : "text-[var(--foreground)]"}`}
                      style={p.destaque ? undefined : { background: "var(--surface-2)", border: "1px solid var(--border-strong)" }}
                    >
                      {p.botao}
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="mt-6 text-center text-[13.5px] text-[var(--foreground-subtle)]">
            Pague com PIX ou cartão. Cancela em 2 cliques, sem multa.
          </p>
        </section>

        {/* ═══════════ PERGUNTAS ═══════════ */}
        <section id="perguntas" className="mx-auto max-w-3xl px-4 md:px-6 py-20 md:py-28 scroll-mt-20">
          <RevealOnScroll>
            <div className="text-center">
              <Selo cor={COR.ciano}>Perguntas</Selo>
              <Titulo>O que costumam perguntar.</Titulo>
            </div>
          </RevealOnScroll>
          <div className="mt-10">
            <Perguntas />
          </div>
        </section>

        {/* ═══════════ FECHAMENTO ═══════════ */}
        <section id="fechamento" className="mx-auto max-w-6xl px-4 md:px-6 pb-24 md:pb-32">
          <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(140deg, rgba(0,206,209,0.08), rgba(50,205,50,0.06) 55%, rgba(255,107,53,0.05))", border: "1px solid rgba(0,206,209,0.18)" }}>
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="p-8 md:p-14">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.08] text-[var(--foreground)] text-balance">
                  Sua cabeça mais leve a partir de hoje.
                </h2>
                <p className="mt-5 max-w-lg text-[16px] text-[var(--foreground-muted)] leading-relaxed">
                  Em 2 minutos: entre com o Google, escolha seus pilares e conecte o WhatsApp. Amanhã às 7h o Jarvis já te manda o primeiro resumo do dia.
                </p>
                <a href={LINKS.teste} className="mt-8 btn-primary-gradient text-white font-semibold px-7 h-12 rounded-xl inline-flex items-center gap-2 text-[15px] active:scale-[0.98]">
                  Testar 7 dias grátis <Seta />
                </a>
                <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">Sem cartão · Cancela quando quiser</p>
              </div>
              <div className="hidden md:flex justify-center self-end pt-10 -mb-24" aria-hidden>
                <Celular mensagens={[
                  { de: "jarvis", texto: "Bom dia! ☀️ Hoje você tem 3 compromissos — o primeiro é às 9h.\nE 2 rituais já estão no quadro." },
                  { de: "voce", texto: "Valeu, Jarvis" },
                ]} largura={240} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ RODAPÉ ═══════════ */}
      <footer className="relative z-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Marca tamanho={26} />
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Rodapé">
            {[
              { rotulo: "Como funciona", href: "#como-funciona" },
              { rotulo: "Preços", href: "#precos" },
              { rotulo: "Perguntas", href: "#perguntas" },
              { rotulo: "Entrar", href: LINKS.entrar },
              { rotulo: "Privacidade", href: LINKS.privacidade },
              { rotulo: "Termos", href: LINKS.termos },
            ].map((l) => (
              <a key={l.rotulo} href={l.href} className="footer-link text-xs">{l.rotulo}</a>
            ))}
          </nav>
          <div className="text-center md:text-right">
            <p className="text-xs text-[var(--foreground-subtle)]">© {new Date().getFullYear()} Nucly. Todos os direitos reservados.</p>
            <p className="text-xs mt-1 text-[var(--foreground-subtle)]">
              ER Marketing · CNPJ 41.079.306/0001-62 · <a href="mailto:ola@nucly.com.br" className="footer-link">ola@nucly.com.br</a>
            </p>
          </div>
        </div>
      </footer>

      <BarraFixa />
    </>
  );
}
