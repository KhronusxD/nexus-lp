import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import RevealOnScroll from "./components/RevealOnScroll";
import GlowCard from "./components/GlowCard";

const APP_URL = "https://nexus-lilac-iota.vercel.app";

/* Os planos seguem o ciclo: Grátis = Capturar + Executar; Sistema = o ciclo
   completo (Preparar + Equilibrar); Nexus AI = o Jarvis operando por você. */
const pricingPlans = [
  {
    name: "Grátis",
    price: "R$0",
    period: "",
    subPrice: "",
    description: "Capture e execute — sinta o sistema.",
    features: [
      "Captura rápida (⌘K, celular, atalho)",
      "Quadro de post-its do dia",
      "Agenda integrada + Google Calendar",
      "Até 3 Pilares, 3 Projetos e 3 hábitos",
      "Histórico de 7 dias",
    ],
    cta: "Criar conta grátis",
    href: `${APP_URL}/cadastro`,
    popular: false,
  },
  {
    name: "Sistema",
    price: "R$29,90",
    period: "/ mês",
    subPrice: "",
    description: "O ciclo completo: preparar e equilibrar.",
    features: [
      "Pilares, Projetos, Hábitos e Skills ilimitados",
      "Planning com rituais recorrentes — monte o dia em um clique",
      "Vetores de energia + Pulso semanal",
      "Canvas infinito estilo Miro por projeto",
      "Notas, documentos e exportação (LGPD)",
      "7 dias de Jarvis grátis pra experimentar",
    ],
    cta: "Começar com 7 dias grátis",
    href: `${APP_URL}/cadastro?plano=sistema`,
    popular: false,
  },
  {
    name: "Nexus AI",
    price: "R$69,90",
    period: "/ mês",
    subPrice: "ou R$179,90/trimestre · R$599,90/ano",
    description: "Tudo isso + o Jarvis operando por você.",
    features: [
      "Tudo do plano Sistema",
      "Jarvis permanente — no app e no seu WhatsApp",
      "\"Monta meu dia\" e balanço de energia por mensagem",
      "Capture por áudio (transcrição) e imagem",
      "Revisão semanal gerada por IA",
      "7 dias grátis — sem cobrança no início",
    ],
    cta: "Desbloquear o Jarvis",
    href: `${APP_URL}/cadastro?plano=nexus-ai`,
    popular: true,
  },
];

const ctaImages = [
  "/prints/01-Calendario-Mensal.png",
  "/prints/05-Habitos.png",
  "/prints/07-Projetos.png",
  "/prints/08-Projeto-Kanban.png",
  "/prints/13-Pilares.png",
  "/prints/15-Insights-Dashboard.png",
  "/prints/17-Jarvis-IA-Chat.png",
  "/prints/12-Notas-Editor.png",
];

// Logo colors — no purple
const LOGO = {
  cyan:   { hex: "#00CED1", bg: "rgba(0,206,209,0.12)",  text: "#00CED1", border: "rgba(0,206,209,0.28)"  },
  orange: { hex: "#FF6B35", bg: "rgba(255,107,53,0.12)", text: "#FF8055", border: "rgba(255,107,53,0.28)" },
  green:  { hex: "#32CD32", bg: "rgba(50,205,50,0.12)",  text: "#4ade80", border: "rgba(50,205,50,0.28)"  },
} as const;

type LogoColor = keyof typeof LOGO;

const cycle: { label: string; desc: string; color: LogoColor }[] = [
  { label: "Capturar",   desc: "Tire da cabeça: ⌘K, celular ou WhatsApp",            color: "cyan"   },
  { label: "Preparar",   desc: "Planning: sprint, rascunhos e rituais recorrentes",   color: "orange" },
  { label: "Executar",   desc: "Quadro de post-its do dia + calendário",              color: "green"  },
  { label: "Equilibrar", desc: "Vetores: quanto você repôs vs quanto gastou",         color: "cyan"   },
];

/* Os três vetores de energia — a física do produto (cores reais do app) */
const vectors = [
  { label: "Recarga",  desc: "O que repõe: descanso, esporte, hobby",          hex: "#22c55e", pct: 32 },
  { label: "Operação", desc: "O que gasta: trabalho, entregas, decisões",      hex: "#f59e0b", pct: 55 },
  { label: "Conexão",  desc: "O que ancora: pessoas, presença, vínculos",      hex: "#ec4899", pct: 13 },
];

export default function Home() {
  return (
    <>
      {/* Ambient background agora vive no layout.tsx — cobre todas as páginas */}
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
              Você não administra tempo.<br />
              <span className="logo-gradient-text">
                Você administra energia.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base md:text-lg text-[var(--foreground-muted)] animate-fade-in-up delay-200 leading-relaxed">
              O Nucly é o sistema operacional de energia pessoal. Capture tudo que pesa na mente, prepare o dia com rituais recorrentes, execute no quadro de post-its — e veja, toda semana, se você repôs mais do que gastou. Com o Jarvis, o agente que monta seu dia por WhatsApp.
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
                <span className="text-sm font-semibold" style={{ color: LOGO.green.text }}>7 dias grátis</span>
                <span className="text-xs text-[var(--foreground-subtle)]">em qualquer plano pago</span>
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
                  <div className="mx-auto text-xs text-[var(--foreground-subtle)]">app.nexus.so</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/prints/hero-dashboard.png"
                  alt="Preview do Nucly"
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
                  Sua checklist está verde.<br />E você, esgotado.
                </h2>
                <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
                  Todo app de produtividade mede a mesma coisa: quantas tarefas você riscou. Nenhum mede o que cada tarefa custou de você. É assim que se chega à sexta-feira com a semana "100% produtiva" — e sem energia pra viver o que ela deveria financiar.
                </p>
                <p className="mt-3 text-[var(--foreground-muted)] leading-relaxed">
                  Notion, Todoist e Google Calendar são ótimos em organizar o que fazer. Mas nenhum deles percebe que faz 12 dias que nada te recarrega, que a semana teve zero momentos com quem importa, ou que aquele pilar que você jura ser prioridade está há um mês sem uma única atividade.
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: LOGO.cyan.text }}>A física</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
              Um ciclo. Três energias.
            </h2>
            <p className="text-sm md:text-base text-[var(--foreground-muted)] mt-2">
              Capturar → Preparar → Executar → Equilibrar — com cada atividade pesando no vetor certo.
            </p>
          </RevealOnScroll>

          {/* Bento Grid */}
          <div className="mx-auto mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:grid-rows-2">

            {/* Card 1: Hierarquia (spans 2 rows) */}
            <RevealOnScroll className="md:row-span-2">
              <GlowCard glow="cyan" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">O ciclo do dia</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Da ideia solta ao balanço da semana — quatro movimentos, um sistema.
                  </p>

                  <div className="mt-6 flex-1 flex flex-col gap-3">
                    {cycle.map((item, i) => (
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
                        {i < cycle.length - 1 && (
                          <svg className="w-3.5 h-3.5 text-[var(--border)] rotate-90 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl p-4" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)" }}>
                    <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                      <span className="font-semibold text-[var(--foreground)]">Rituais recorrentes.</span> O que se repete vira modelo: toda manhã, "monta meu dia" traz seus rituais pro quadro com a checklist limpa — e o modelo fica guardado pra amanhã.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 2: Tudo fala com tudo */}
            <RevealOnScroll revealClass="reveal delay-100">
              <GlowCard glow="orange" className="glass-card card-hover-glow rounded-2xl">
                <div className="p-6">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">Vetores de energia</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Toda atividade pesa em um dos três. O pilar dá o padrão; você ajusta a exceção.
                  </p>
                  <div className="mt-5 rounded-xl p-4 space-y-3" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)" }}>
                    {vectors.map((v) => (
                      <div key={v.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold" style={{ color: v.hex }}>{v.label}</span>
                          <span className="text-[10px] text-[var(--foreground-subtle)]">{v.desc}</span>
                        </div>
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface)" }}>
                          <div className="h-full rounded-full" style={{ width: `${v.pct}%`, background: v.hex }} />
                        </div>
                      </div>
                    ))}
                    <div className="text-[10px] text-[var(--foreground-subtle)] pt-1">um almoço de equipe é Conexão — mesmo no pilar Trabalho</div>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Card 3: Jarvis (spans 2 rows) */}
            <RevealOnScroll revealClass="reveal delay-200" className="md:row-span-2">
              <GlowCard glow="cyan" className="glass-card card-hover-glow rounded-2xl h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg btn-primary-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      J
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)] leading-none">Jarvis</h3>
                      <p className="text-[10px] logo-gradient-text font-semibold">seu agente de IA</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    Não é um chatbot. É um agente que vive dentro do seu sistema — e age nele, inclusive pelo WhatsApp.
                  </p>

                  <div className="mt-5 flex-1 flex flex-col gap-3">
                    {[
                      { from: "user", text: "Jarvis, monta meu dia." },
                      { from: "jarbas", text: "Mandei seus 3 rituais pro quadro: Rotina de trabalho, Treino e Leitura — checklist limpa. Bora. ✓" },
                      { from: "user", text: "Como está minha recarga essa semana?" },
                      { from: "jarbas", text: "Recarga 18%, Operação 71%. Rapaz, você gastou bem mais do que repôs — que tal um bloco de descanso amanhã cedo?" },
                      { from: "user", text: "Boa. E anota aí: ligar pro contador." },
                      { from: "jarbas", text: "Capturado no Fluxo ✓ — sai da sua cabeça agora, organiza quando quiser." },
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
                  <h3 className="text-base font-semibold text-[var(--foreground)]">Pulso — o relatório de segunda</h3>
                  <p className="mt-1.5 text-sm text-[var(--foreground-muted)]">
                    Balanço de energia, pilares com fome e suas correntes — sem preencher nada.
                  </p>
                  <div className="mt-4 rounded-xl p-4 text-xs space-y-2.5" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}>
                    <div className="text-[var(--foreground-subtle)] mb-3 font-medium">⚡ Pulso — últimos 7 dias</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Recarga</span>
                      <span className="font-semibold" style={{ color: "#22c55e" }}>32% ↑</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Operação</span>
                      <span className="font-semibold" style={{ color: "#f59e0b" }}>55%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">Correntes vivas</span>
                      <span className="font-semibold text-emerald-400">🔥 Treino · 12 dias</span>
                    </div>
                    <div className="mt-1 p-2 rounded-lg text-[10px] font-medium" style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)", color: "#f472b6" }}>
                      ⚠ Pilar Família: 5 dias sem atividade — que tal hoje?
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
              Energia muda tudo
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sem contexto — laranja */}
            <RevealOnScroll revealClass="reveal-left">
              <GlowCard glow="orange" className="rounded-2xl p-6 h-full glass-card card-hover-glow" style={{ borderColor: LOGO.orange.border }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: LOGO.orange.hex }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: LOGO.orange.text }}>Sem o Nucly</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
                  <p>Sexta-feira, 18h. Checklist da semana: 100% verde. Doze entregas, quatro reuniões por dia, inbox zerado.</p>
                  <p>E você, vazio. Nenhum app percebeu que em cinco dias não houve UMA atividade que repusesse energia — porque nenhum deles mede isso. Sábado você apaga no sofá e chama de descanso.</p>
                  <p className="italic" style={{ color: LOGO.orange.text, opacity: 0.7 }}>Resultado: produtividade que cobra juros.</p>
                </div>
              </GlowCard>
            </RevealOnScroll>

            {/* Com o Nucly — verde */}
            <RevealOnScroll revealClass="reveal-right">
              <GlowCard glow="green" className="rounded-2xl p-6 h-full card-hover-glow" style={{ background: LOGO.green.bg, border: `1px solid ${LOGO.green.border}` }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: LOGO.green.hex }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: LOGO.green.text }}>Com o Nucly</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--foreground-muted)] leading-relaxed">
                  <p>Quarta-feira, o Pulso acende: Recarga em 15%, Conexão zerada. O Jarvis manda no WhatsApp: "rapaz, você está gastando bem mais do que repõe".</p>
                  <p>Você arrasta um post-it de Recarga pro quadro de quinta, agenda o jantar que vinha adiando — e o sistema conta os dois no balanço.</p>
                  <p className="font-medium" style={{ color: LOGO.green.text }}>Sexta chega com a checklist verde E energia no azul. Isso é o que o Nucly mede.</p>
                </div>
              </GlowCard>
            </RevealOnScroll>
          </div>
        </section>

        {/* ==================== PRICING ==================== */}
        <section id="precos" className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
              Substitui várias assinaturas.<br />Custa menos que uma.
            </h2>
            <p className="text-center text-[var(--foreground-subtle)] mt-3 text-sm">
              Comece grátis. Evolua quando quiser.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan, i) => {
              const planGlow = (["cyan", "green", "cyan"] as const)[i];
              return (
              <RevealOnScroll key={plan.name} revealClass={`reveal delay-${(i + 1) * 100}`}>
                <div className={`neon-border-ring rounded-2xl h-full ${plan.popular ? "neon-border-active" : ""}`}>
                  <GlowCard
                    glow={planGlow}
                    className={`rounded-2xl p-6 h-full flex flex-col ${plan.popular ? "" : "glass-card"}`}
                    style={plan.popular ? {
                      background: "linear-gradient(145deg, rgba(0,206,209,0.06) 0%, rgba(50,205,50,0.04) 100%)",
                      border: "1px solid rgba(0,206,209,0.2)",
                    } : {}}
                  >
                    {plan.popular && (
                      <div className="mb-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full logo-gradient-text" style={{ background: "rgba(0,206,209,0.08)", border: "1px solid rgba(0,206,209,0.25)" }}>
                          Mais escolhido
                        </span>
                      </div>
                    )}
                    <div className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-widest">{plan.name}</div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--foreground)]">{plan.price}</span>
                      {plan.period && <span className="text-sm text-[var(--foreground-subtle)]">{plan.period}</span>}
                    </div>
                    {plan.subPrice && (
                      <p className="mt-1 text-[11px]" style={{ color: LOGO.green.text }}>{plan.subPrice}</p>
                    )}
                    <p className="mt-1.5 text-sm text-[var(--foreground-subtle)]">{plan.description}</p>

                    <ul className="mt-6 space-y-2.5 flex-1">
                      {plan.features.map((feature, fi) => {
                        const checkColors = [LOGO.cyan.text, LOGO.green.text, LOGO.orange.text];
                        const checkColor = plan.popular ? checkColors[fi % checkColors.length] : LOGO.cyan.text;
                        return (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--foreground-muted)]">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: checkColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>

                    <a
                      href={plan.href}
                      className={`mt-8 w-full h-10 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 inline-flex items-center justify-center ${
                        plan.popular
                          ? "btn-primary-gradient text-white"
                          : "text-[var(--foreground)]"
                      }`}
                      style={!plan.popular ? { background: "var(--surface-elevated)", border: "1px solid var(--border)" } : {}}
                    >
                      {plan.cta}
                    </a>
                  </GlowCard>
                </div>
              </RevealOnScroll>
              );
            })}
          </div>
        </section>

        {/* ==================== FAQ ==================== */}
        <section id="faq" className="mx-auto max-w-2xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <RevealOnScroll>
            <h2 className="text-center text-2xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              Perguntas frequentes
            </h2>
            <p className="text-center text-[var(--foreground-subtle)] mt-2 text-sm">
              Tudo que você precisa saber sobre o Nucly.
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
                    Pronto pra parar de gerenciar apps e começar a gerenciar energia?
                  </h2>
                  <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
                    Comece grátis, sem cartão. Em 5 minutos: pilares montados, primeiro post-it no quadro — e o Jarvis pronto pra montar seu dia amanhã cedo.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <a href={`${APP_URL}/login`} className="btn-primary-gradient text-white font-semibold px-6 h-11 rounded-lg inline-flex items-center gap-2 text-sm active:scale-95">
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
                      <img key={i} src={src} alt="Screenshot do Nucly" className="w-52 rounded-xl object-cover" style={{ border: "1px solid var(--border)" }} />
                    ))}
                  </div>
                </div>
                <div className="cta-images-col">
                  <div className="animate-scroll-images flex flex-col gap-4" style={{ animationDelay: "-10s" }}>
                    {[...ctaImages, ...ctaImages].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={i} src={src} alt="Screenshot do Nucly" className="w-52 rounded-xl object-cover" style={{ border: "1px solid var(--border)" }} />
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
          <div className="footer-brand select-none text-center">NUCLY</div>
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-horizontal.png" alt="Nucly" className="h-7 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { label: "Produto",       href: "#produto" },
              { label: "Preços",        href: "#precos" },
              { label: "Blog",          href: "#" },
              { label: "Documentação",  href: "#" },
              { label: "Changelog",     href: "#" },
              { label: "Privacidade",   href: "/privacidade" },
              { label: "Termos",        href: "/termos" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="footer-link text-xs">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs" style={{ color: "var(--foreground-subtle)" }}>© {new Date().getFullYear()} Nucly. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
