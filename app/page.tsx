import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import RevealOnScroll from "./components/RevealOnScroll";
import GlowCard from "./components/GlowCard";
import PricingSection from "./components/PricingSection";
import { APP_URL } from "./config";

const ctaImages = [
  "/prints/01-Calendario-Mensal.png",
  "/prints/05-Habitos.png",
  "/prints/07-Projetos.png",
  "/prints/08-Projeto-Kanban.png",
  "/prints/13-Pilares.png",
  "/prints/15-Insights-Dashboard.png",
  "/prints/17-Jarbas-IA-Chat.png",
  "/prints/12-Notas-Editor.png",
];

// Logo colors — no purple
const LOGO = {
  cyan:   { hex: "#00CED1", bg: "rgba(0,206,209,0.12)",  text: "#00CED1", border: "rgba(0,206,209,0.28)"  },
  orange: { hex: "#FF6B35", bg: "rgba(255,107,53,0.12)", text: "#FF8055", border: "rgba(255,107,53,0.28)" },
  green:  { hex: "#32CD32", bg: "rgba(50,205,50,0.12)",  text: "#4ade80", border: "rgba(50,205,50,0.28)"  },
} as const;

type LogoColor = keyof typeof LOGO;

const hierarchy: { label: string; desc: string; color: LogoColor }[] = [
  { label: "Pilares",  desc: "As grandes áreas da sua vida",     color: "cyan"   },
  { label: "Skills",   desc: "Competências que você desenvolve", color: "orange" },
  { label: "Projetos", desc: "Iniciativas com começo e fim",     color: "green"  },
  { label: "Hábitos",  desc: "Ações que constroem quem você é",  color: "cyan"   },
  { label: "Agenda",   desc: "O que você vai fazer hoje",        color: "orange" },
];

export default function Home() {
  return (
    <>
      {/* Fixed ambient background — matches the app */}
      <div className="nexus-ambient" />

      <Navbar />

      <main className="relative z-10">
        {/* ==================== HERO ==================== */}
        <div className="relative min-h-screen w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 hero-gradient" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 md:px-8 md:pt-40 md:pb-32">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <a
                href="#precos"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 active:scale-[0.98]"
                style={{
                  background: "rgba(50,205,50,0.1)",
                  color: "#4ade80",
                  border: "1px solid rgba(50,205,50,0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#32CD32" }} />
                Early access — primeiros 100 usuários
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--foreground)] animate-fade-in-up delay-100 leading-[1.1]">
              Sua vida inteira em<br />
              <span className="logo-gradient-text">
                um único contexto.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base md:text-lg text-[var(--foreground-muted)] animate-fade-in-up delay-200 leading-relaxed">
              Abandone a fragmentação de dezenas de apps isolados. O Nexus conecta seus hábitos, projetos e agenda em uma estrutura única — com uma inteligência artificial que trabalha ativamente para garantir que você execute o que realmente importa.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center gap-3 animate-fade-in-up delay-300">
              <a href={`${APP_URL}/cadastro`} className="btn-primary-gradient text-white font-semibold px-6 h-11 rounded-lg inline-flex items-center gap-2 text-sm active:scale-95">
                Começar grátis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#produto"
                className="text-sm font-medium px-6 h-11 rounded-lg inline-flex items-center gap-2 transition-colors duration-200 active:scale-95"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                Ver como funciona
              </a>
            </div>

            {/* Trust indicators — honestos pra early access */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-in-up delay-400">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold" style={{ color: LOGO.green.text }}>7 dias</span>
                <span className="text-xs text-[var(--foreground-subtle)]">grátis em qualquer plano pago</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold" style={{ color: LOGO.cyan.text }}>Sem cartão</span>
                <span className="text-xs text-[var(--foreground-subtle)]">pra começar grátis</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold" style={{ color: LOGO.orange.text }}>Cancela quando quiser</span>
                <span className="text-xs text-[var(--foreground-subtle)]">sem multa</span>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-16 md:mt-24 animate-scale-in delay-500">
              <div className="dashboard-frame rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="mx-auto text-xs text-[var(--foreground-subtle)]">nexus.app</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/prints/hero-dashboard.png"
                  alt="Preview do Nexus"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PROBLEMA ==================== */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealOnScroll revealClass="reveal-left">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: LOGO.orange.text }}>O problema</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
                  Você tem ferramentas.<br />O que falta é contexto.
                </h2>
                <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
                  Suas metas estão em algum lugar que nunca abre. Seus hábitos ficam num app esquecido. Sua agenda não sabe nada sobre seus projetos. O resultado? Você gasta mais energia gerenciando aplicativos do que vivendo a sua vida.
                </p>
                <p className="mt-3 text-[var(--foreground-muted)] leading-relaxed">
                  Notion, Todoist e Google Calendar são ótimos — mas nenhum deles sabe que você está atrasado na sua meta de leitura, que essa reunião conflita com seu momento de foco, ou que você dorme mal nas semanas em que ignora determinado hábito.
                </p>
              </div>
            </RevealOnScroll>

            {/* App chaos visual */}
            <RevealOnScroll revealClass="reveal-right">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { app: "Notion",           logo: "https://cdn.simpleicons.org/notion/ffffff",          desc: "metas e notas",    warning: "nunca abre" },
                  { app: "Todoist",          logo: "https://cdn.simpleicons.org/todoist/E44332",         desc: "tarefas do dia",   warning: "sem contexto" },
                  { app: "Google Calendar",  logo: "https://cdn.simpleicons.org/googlecalendar/4285F4",  desc: "agenda",           warning: "cega aos projetos" },
                  { app: "Habitica",         logo: "https://cdn.simpleicons.org/habitica/9a59ff",        desc: "hábitos",          warning: "isolado" },
                  { app: "Strava",           logo: "https://cdn.simpleicons.org/strava/FC4C02",          desc: "saúde",            warning: "não conversa" },
                  { app: "WhatsApp",         logo: "https://cdn.simpleicons.org/whatsapp/25D366",        desc: "planos e metas",   warning: "caos total" },
                ].map((item) => (
                  <div key={item.app} className="glass-card rounded-xl p-4">
                    <div className="mb-2 h-8 w-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.logo} alt={item.app} width={32} height={32} className="h-8 w-8 object-contain" />
                    </div>
                    <div className="text-xs font-semibold text-[var(--foreground)]">{item.app}</div>
                    <div className="text-[10px] text-[var(--foreground-subtle)]">{item.desc}</div>
                    <div className="mt-2 inline-block text-[9px] rounded px-1.5 py-0.5 font-medium" style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}>
                      {item.warning}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ==================== FEATURES ==================== */}
        <section id="produto" className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: LOGO.cyan.text }}>A solução</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
              Uma hierarquia que conecta tudo
            </h2>
            <p className="text-sm md:text-base text-[var(--foreground-muted)] mt-2">
              Do propósito à execução diária — em uma estrutura só.
            </p>
          </RevealOnScroll>

          {/* Bento Grid */}
          <div className="mx-auto mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:grid-rows-2">

            {/* Card 1: Hierarquia (spans 2 rows) */}
            <RevealOnScroll className="md:row-span-2">
              <GlowCard glow="cyan" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">Do propósito ao dia</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Cada ação pequena alimenta um objetivo maior. A hierarquia do Nexus garante que nada fique perdido.
                  </p>

                  <div className="mt-6 flex-1 flex flex-col gap-3">
                    {hierarchy.map((item, i) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold"
                          style={{ background: LOGO[item.color].bg, color: LOGO[item.color].text, border: `1px solid ${LOGO[item.color].border}` }}
                        >
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-[var(--foreground)]">{item.label}</div>
                          <div className="text-[11px] text-[var(--foreground-subtle)]">{item.desc}</div>
                        </div>
                        {i < hierarchy.length - 1 && (
                          <svg className="w-3.5 h-3.5 text-[var(--border)] rotate-90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl p-4" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)" }}>
                    <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                      <span className="font-semibold text-[var(--foreground)]">Nada perde contexto.</span> Conclua uma tarefa e o projeto avança. Avance o projeto e a skill evolui. Evolua a skill e o pilar ganha tração.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 2: Tudo fala com tudo */}
            <RevealOnScroll revealClass="reveal delay-100">
              <GlowCard glow="orange" className="glass-card card-hover-glow rounded-2xl">
                <div className="p-6">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">Tudo fala com tudo</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Concluiu uma tarefa? O projeto avança. O projeto avança? A skill evolui. O Nexus enxerga a cadeia toda.
                  </p>
                  <div className="mt-5 relative h-36 rounded-xl overflow-hidden" style={{ background: "var(--surface-elevated)" }}>
                    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.4) 0%, transparent 50%)" }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          {["Tarefa", "Projeto", "Skill", "Pilar"].map((item, i, arr) => (
                            <div key={item} className="flex items-center gap-1.5">
                              <div className="text-[10px] font-medium rounded px-2 py-1" style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                                {item}
                              </div>
                              {i < arr.length - 1 && (
                                <svg className="w-3 h-3 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-[var(--foreground-subtle)]">cada ação propaga contexto</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 3: Jarbas (spans 2 rows) */}
            <RevealOnScroll revealClass="reveal delay-200" className="md:row-span-2">
              <GlowCard glow="cyan" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg btn-primary-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      J
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)] leading-none">Jarbas</h3>
                      <p className="text-[10px] logo-gradient-text font-semibold">seu agente de IA</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    Não é um chatbot. É um agente que vive dentro do seu sistema — e age nele.
                  </p>

                  <div className="mt-5 flex-1 flex flex-col gap-3">
                    {[
                      { from: "user", text: "Jarbas, estou sobrecarregado essa semana." },
                      { from: "jarbas", text: "Identifiquei 3 reuniões que podem ser assíncronas. Quer que eu libere sua tarde de quinta?" },
                      { from: "user", text: "Sim. E como estão meus hábitos?" },
                      { from: "jarbas", text: "Você zerou leitura e exercício. Historicamente, isso acontece quando há mais de 4 reuniões na segunda. Quer ajustar o padrão?" },
                      { from: "user", text: "Sim, ajusta." },
                      { from: "jarbas", text: "Feito. Limitei reuniões às segundas para max 2 e bloqueei 30min de leitura às 7h. ✓" },
                    ].map((msg, i) => (
                      <div key={i} className={`flex items-end gap-2 ${msg.from === "user" ? "self-end flex-row-reverse" : ""}`}>
                        {msg.from === "jarbas" ? (
                          <div className="w-5 h-5 rounded-full btn-primary-gradient flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">J</div>
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="https://assets.aceternity.com/avatars/2.webp" alt="Você" className="w-5 h-5 rounded-full flex-shrink-0" />
                        )}
                        <div
                          className="rounded-xl px-3 py-2 text-xs max-w-[200px] leading-relaxed"
                          style={
                            msg.from === "jarbas"
                              ? { background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", color: "var(--foreground)", borderTopLeftRadius: 2 }
                              : { background: "var(--accent-muted)", border: "1px solid rgba(99,102,241,0.25)", color: "var(--foreground)", borderTopRightRadius: 2 }
                          }
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 4: Revisão semanal */}
            <RevealOnScroll revealClass="reveal delay-300">
              <GlowCard glow="green" className="glass-card card-hover-glow rounded-2xl">
                <div className="p-6">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">Revisão semanal com IA</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Todo domingo, o Jarbas analisa sua semana e entrega um relatório honesto — sem você preencher nada.
                  </p>
                  <div className="mt-4 rounded-xl p-4 text-xs space-y-2.5" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}>
                    <div className="text-[var(--foreground-subtle)] mb-3 font-medium">📊 Revisão — semana 12</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Hábitos cumpridos</span>
                      <span className="font-semibold text-emerald-400">71%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Tarefas concluídas</span>
                      <span className="font-semibold text-emerald-400">18 / 23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Skill em destaque</span>
                      <span className="font-semibold text-[var(--accent)]">Liderança ↑</span>
                    </div>
                    <div className="mt-1 p-2 rounded-lg text-[10px] font-medium" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#fbbf24" }}>
                      ⚠ Gap: 0 sessões de deep work na quarta e quinta.
                    </div>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>
          </div>
        </section>

        {/* ==================== ANTES E DEPOIS ==================== */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: LOGO.green.text }}>Na prática</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Contexto muda tudo
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sem contexto — laranja */}
            <RevealOnScroll revealClass="reveal-left">
              <GlowCard glow="orange" className="rounded-2xl p-6 h-full glass-card card-hover-glow" style={{ borderColor: LOGO.orange.border }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: LOGO.orange.hex }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: LOGO.orange.text }}>Sem o Nexus</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
                  <p>Você dorme mal três dias seguidos. Seu app de tarefas não liga. Sua agenda marca uma reunião complexa às 8h da manhã.</p>
                  <p>Você abre o Google Calendar e o Todoist mas nenhum dos dois sabe do outro. Você abre o Notion para ver suas metas — e lembra que não abre há duas semanas.</p>
                  <p className="italic" style={{ color: LOGO.orange.text, opacity: 0.7 }}>Resultado: mais energia gerenciando apps do que vivendo.</p>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Com o Nexus — verde */}
            <RevealOnScroll revealClass="reveal-right">
              <GlowCard glow="green" className="rounded-2xl p-6 h-full card-hover-glow" style={{ background: LOGO.green.bg, border: `1px solid ${LOGO.green.border}` }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: LOGO.green.hex }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: LOGO.green.text }}>Com o Nexus</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
                  <p>O Jarbas percebe pelo rastreio de hábitos que seu sono está ruim há três dias.</p>
                  <p>Ele cruza com sua agenda, identifica a reunião complexa às 8h e sugere bloquear a manhã para recuperação. Automaticamente reordena sua lista de tarefas para focar só no que é inadiável.</p>
                  <p className="font-medium" style={{ color: LOGO.green.text }}>Você acorda com um plano que já leva sua realidade em conta — sem ter feito nada.</p>
                </div>
              </GlowCard>
            </RevealOnScroll>
          </div>
        </section>

        {/* ==================== WHATSAPP + INTEGRAÇÕES ==================== */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#25D366" }}>Onde você já está</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                Seu sistema mora no seu WhatsApp
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-[var(--foreground-muted)]">
                Não precisa abrir o app. O Nexus te encontra onde você já vive — e seu calendário continua sendo o seu calendário.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* WhatsApp card */}
            <RevealOnScroll className="md:col-span-2">
              <GlowCard glow="green" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#25D366" }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)] leading-none">WhatsApp nativo</h3>
                      <p className="text-[10px] font-semibold" style={{ color: "#25D366" }}>conversas que viram ações</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    Pareie em 30 segundos. O Jarbas vira mais um contato — e responde como gente.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    {[
                      { from: "jarbas", text: "Bom dia! Hoje você tem 4 tarefas e 1 reunião às 14h. Quer que eu mande o resumo agora?" },
                      { from: "user", text: "feito academia ✓" },
                      { from: "jarbas", text: "Marcado. 5 dias seguidos — sequência mais longa do mês." },
                      { from: "user", text: "moveu reunião do silva pra quinta às 10h" },
                      { from: "jarbas", text: "Pronto. Reagendei e avisei que ele confirmou. Bloqueei 30min antes pra você se preparar." },
                      { from: "user", text: "[áudio 12s] 'agendar consulta dentista próxima terça à tarde'" },
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className="rounded-xl px-3 py-2 text-xs leading-relaxed"
                        style={
                          msg.from === "jarbas"
                            ? { background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", color: "var(--foreground)" }
                            : { background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", color: "var(--foreground-muted)" }
                        }
                      >
                        <span className="font-medium" style={{ color: msg.from === "jarbas" ? "#25D366" : "var(--foreground-subtle)" }}>
                          {msg.from === "jarbas" ? "Jarbas · " : "Você · "}
                        </span>
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[10px] text-[var(--foreground-subtle)]">
                    Áudio transcrito, foto analisada, tarefa criada. Disponível no plano <span className="font-semibold" style={{ color: LOGO.cyan.text }}>Nexus AI</span>.
                  </p>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Google Calendar card */}
            <RevealOnScroll revealClass="reveal delay-100">
              <GlowCard glow="cyan" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(66,133,244,0.12)", border: "1px solid rgba(66,133,244,0.25)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://cdn.simpleicons.org/googlecalendar/4285F4" alt="Google Calendar" className="w-4 h-4 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)] leading-none">Google Calendar</h3>
                      <p className="text-[10px] font-semibold" style={{ color: "#4285F4" }}>sync bidirecional</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    Não migre. Conecte. Tudo que você marca no Nexus aparece no Google — e vice-versa.
                  </p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {[
                      "Eventos do Google aparecem no Nexus",
                      "Eventos do Nexus aparecem no Google",
                      "Múltiplos calendários (pessoal, trabalho, família)",
                      "Reagendamento do Jarbas atualiza nos dois lados",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--foreground-muted)]">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#4285F4" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </RevealOnScroll>
          </div>
        </section>

        {/* ==================== FEATURES SECUNDÁRIAS ==================== */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 pb-16 md:pb-24">
          <RevealOnScroll>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: LOGO.orange.text }}>Mais do que tarefas</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                As ferramentas que o sistema operacional precisa ter
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Notas com editor rich",
                desc: "Capture ideias, anote reuniões e atrele às pillars/projetos relevantes.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                color: LOGO.cyan,
              },
              {
                title: "Mind maps visuais",
                desc: "Estruture pensamentos em nós conectados, com zoom e arraste.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="18" r="2.5" /><circle cx="12" cy="12" r="2.5" />
                    <path strokeLinecap="round" d="M8 7l3 3m5-3l-3 3m-5 7l3-3m5 3l-3-3" />
                  </svg>
                ),
                color: LOGO.green,
              },
              {
                title: "Modo Deep Work",
                desc: "Tela cheia, timer, métricas. Quando você precisa entrar em flow.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: LOGO.orange,
              },
              {
                title: "Command palette ⌘K",
                desc: "Qualquer ação em 1 segundo. Sem clicar em menu.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9V7a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2" />
                  </svg>
                ),
                color: LOGO.cyan,
              },
              {
                title: "PWA + push notifications",
                desc: "Instale como app no celular e desktop. Notificações nativas.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                color: LOGO.green,
              },
              {
                title: "Exportação total (LGPD)",
                desc: "Seus dados são seus. Exporte em PDF a qualquer momento.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                ),
                color: LOGO.orange,
              },
            ].map((f) => (
              <RevealOnScroll key={f.title}>
                <div className="glass-card rounded-2xl p-5 h-full">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: f.color.bg, color: f.color.text, border: `1px solid ${f.color.border}` }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">{f.title}</h3>
                  <p className="mt-1 text-xs text-[var(--foreground-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ==================== PRICING ==================== */}
        <PricingSection />

        {/* ==================== FAQ ==================== */}
        <section id="faq" className="mx-auto max-w-2xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <h2 className="text-center text-2xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Perguntas frequentes
            </h2>
            <p className="text-center text-[var(--foreground-subtle)] mt-2 text-sm">
              Tudo que você precisa saber sobre o Nexus.
            </p>
          </RevealOnScroll>
          <div className="mt-8">
            <FAQ />
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <div className="relative rounded-3xl overflow-hidden dots-pattern" style={{ background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.15)" }}>
            {/* Glow behind */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16">
              <div className="max-w-lg">
                <RevealOnScroll revealClass="reveal-left">
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
                    Pronto para organizar sua vida em um contexto só?
                  </h2>
                  <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
                    Comece grátis. Sem cartão de crédito. Em menos de 5 minutos você tem sua estrutura de vida montada — e o Jarbas pronto para trabalhar.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <a href={`${APP_URL}/cadastro`} className="btn-primary-gradient text-white font-semibold px-6 h-11 rounded-lg inline-flex items-center gap-2 text-sm active:scale-95">
                      Começar grátis
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a href="mailto:contato@nexus.app" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1">
                      Falar com a equipe
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Scrolling images */}
              <div className="hidden md:flex gap-4">
                <div className="cta-images-col">
                  <div className="animate-scroll-images flex flex-col gap-4">
                    {[...ctaImages, ...ctaImages].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={src} alt="Screenshot do Nexus" className="w-52 rounded-xl object-cover" style={{ border: "1px solid var(--border)" }} />
                    ))}
                  </div>
                </div>
                <div className="cta-images-col">
                  <div className="animate-scroll-images flex flex-col gap-4" style={{ animationDelay: "-10s" }}>
                    {[...ctaImages, ...ctaImages].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={src} alt="Screenshot do Nexus" className="w-52 rounded-xl object-cover" style={{ border: "1px solid var(--border)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative z-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="overflow-hidden px-4 pt-16 pb-4">
          <div className="footer-brand select-none text-center">NEXUS</div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-horizontal.png" alt="Nexus" className="h-7 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { label: "Produto",     href: "#produto" },
              { label: "Preços",      href: "#precos" },
              { label: "FAQ",         href: "#faq" },
              { label: "Privacidade", href: "/privacidade" },
              { label: "Termos",      href: "/termos" },
              { label: "Contato",     href: "mailto:contato@nexus.app" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="footer-link text-xs">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-center md:text-right" style={{ color: "var(--foreground-subtle)" }}>
            © {new Date().getFullYear()} Nexus.<br className="md:hidden" />
            <span className="md:ml-1">Todos os direitos reservados.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
