import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import RevealOnScroll from "./components/RevealOnScroll";
import GlowCard from "./components/GlowCard";

const APP_URL = "https://nexus-lilac-iota.vercel.app";

const logos = [
  { src: "https://assets.aceternity.com/logos/openai.png", alt: "OpenAI" },
  { src: "https://assets.aceternity.com/logos/hello-patient.png", alt: "Hello Patient" },
  { src: "https://assets.aceternity.com/logos/granola.png", alt: "Granola" },
  { src: "https://assets.aceternity.com/logos/characterai.png", alt: "Character AI" },
  { src: "https://assets.aceternity.com/logos/oracle.png", alt: "Oracle" },
  { src: "https://assets.aceternity.com/logos/portola.png", alt: "Portola" },
  { src: "https://assets.aceternity.com/logos/accel.png", alt: "Accel" },
  { src: "https://assets.aceternity.com/logos/bloomberg.png", alt: "Bloomberg" },
  { src: "https://assets.aceternity.com/logos/forbes.png", alt: "Forbes" },
  { src: "https://assets.aceternity.com/logos/softbank.png", alt: "SoftBank" },
  { src: "https://assets.aceternity.com/logos/the-guardian.png", alt: "The Guardian" },
  { src: "https://assets.aceternity.com/logos/wired.png", alt: "Wired" },
];

const testimonials = [
  {
    quote: "Eu usava Notion, Todoist, Google Calendar e ainda um caderno. O Nexus foi a primeira vez que senti que tudo estava no mesmo lugar — e se falando.",
    name: "Camila Ferreira",
    role: "Fundadora, Agência Plural",
    avatar: "https://assets.aceternity.com/avatars/manu.webp",
  },
  {
    quote: "O Jarbas reorganizou minha semana inteira em 30 segundos depois que eu disse que estava sobrecarregado. Isso não é produtividade — é inteligência de verdade.",
    name: "Rafael Mendes",
    role: "Head de Produto, Fintech Sólida",
    avatar: "https://assets.aceternity.com/avatars/1.webp",
  },
  {
    quote: "Finalmente entendi por que nunca conseguia manter meus hábitos. O Nexus me mostrou que eu quebrava sempre nas semanas com reuniões demais na segunda.",
    name: "Beatriz Leal",
    role: "Empreendedora e coach executiva",
    avatar: "https://assets.aceternity.com/avatars/2.webp",
  },
  {
    quote: "A hierarquia Pilares → Skills → Projetos mudou como eu penso sobre o meu tempo. Cada tarefa agora tem um propósito maior — e eu sei exatamente qual.",
    name: "Thiago Carvalho",
    role: "CTO, EdTech",
    avatar: "https://assets.aceternity.com/avatars/manu.webp",
  },
  {
    quote: "Substituiu minha sessão semanal de coaching. A revisão gerada pelo Jarbas é mais honesta do que qualquer pergunta que eu faria pra mim mesmo.",
    name: "Mariana Costa",
    role: "Diretora Comercial, Grupo Revelo",
    avatar: "https://assets.aceternity.com/avatars/1.webp",
  },
  {
    quote: "Gerencio uma agência, uma sociedade e ainda estudo inglês. O Nexus é o único sistema que aguenta a complexidade da minha vida sem explodir.",
    name: "Lucas Andrade",
    role: "Sócio, Consultoria de Growth",
    avatar: "https://assets.aceternity.com/avatars/2.webp",
  },
];

const pricingPlans = [
  {
    name: "Grátis",
    price: "R$0",
    period: "",
    description: "Para experimentar o sistema com calma.",
    features: [
      "Até 3 Pilares ativos",
      "10 tarefas por projeto",
      "Hábitos básicos",
      "Agenda integrada",
      "Acesso web e mobile",
    ],
    cta: "Criar conta grátis",
    href: `${APP_URL}/login`,
    popular: false,
  },
  {
    name: "Sistema",
    price: "R$29",
    period: "/ mês",
    description: "Acesso completo à estrutura visual do Nexus.",
    features: [
      "Pilares, Skills e Projetos ilimitados",
      "Hábitos e Agenda sem limites",
      "Tudo conectado e em contexto",
      "Relatórios de progresso",
      "Histórico completo",
      "Suporte prioritário",
    ],
    cta: "Começar agora",
    href: "https://buy.stripe.com/test_cNibJ2fayaslcj55MO1oI00",
    popular: false,
  },
  {
    name: "Nexus AI",
    price: "R$69",
    period: "/ mês",
    description: "O sistema completo + o Jarbas, seu agente de IA.",
    features: [
      "Tudo do plano Sistema",
      "Jarbas — agente de IA ativo",
      "Automação de agenda por IA",
      "Revisão semanal gerada por IA",
      "Análise de gaps de comportamento",
      "Comandos em linguagem natural",
      "Insights preditivos de rotina",
    ],
    cta: "Desbloquear o Jarbas",
    href: "https://buy.stripe.com/test_5kQ8wQ9Qe7g93Mzb781oI01",
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
                href="#produto"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 active:scale-[0.98]"
                style={{
                  background: "rgba(0,206,209,0.1)",
                  color: "#00CED1",
                  border: "1px solid rgba(0,206,209,0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--logo-cyan)" }} />
                Apresentando o Sistema Operacional Pessoal
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
              <div className="neon-border-ring neon-border-active rounded-lg">
                <a href={`${APP_URL}/login`} className="btn-primary-gradient text-white font-semibold px-6 h-11 rounded-lg inline-flex items-center gap-2 text-sm active:scale-95">
                  Começar grátis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <a
                href="#produto"
                className="text-sm font-medium px-6 h-11 rounded-lg inline-flex items-center gap-2 transition-colors duration-200 active:scale-95"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              >
                Ver como funciona
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-6 animate-fade-in-up delay-400">
              {[
                { value: "12k+", label: "usuários ativos",  color: LOGO.cyan.text   },
                { value: "4.9★", label: "avaliação média",  color: LOGO.orange.text },
                { value: "3x",   label: "mais execução",    color: LOGO.green.text  },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold" style={{ color: stat.color }}>{stat.value}</span>
                  <span className="text-xs text-[var(--foreground-subtle)]">{stat.label}</span>
                </div>
              ))}
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
                  alt="Preview do Nexus"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== LOGOS ==================== */}
        <RevealOnScroll>
          <section className="py-16 md:py-24">
            <p className="mx-auto max-w-sm text-center text-sm text-[var(--foreground-subtle)]">
              Para quem tem muita coisa para gerir — e quer clareza, não mais ferramentas.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-4 md:grid-cols-6 gap-y-8 px-4">
              {logos.map((logo) => (
                <div key={logo.alt} className="flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 object-contain invert filter opacity-30 hover:opacity-70 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

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
                  { app: "Habitica",         logo: "https://logo.clearbit.com/habitica.com",            desc: "hábitos",          warning: "isolado" },
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
                    <p className="text-xs text-[var(--foreground-muted)] italic">
                      &ldquo;A hierarquia Pilares → Skills → Projetos mudou como eu penso sobre o meu tempo. Cada tarefa agora tem um propósito maior.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://assets.aceternity.com/avatars/manu.webp" alt="Thiago" className="w-5 h-5 rounded-full" />
                      <div>
                        <div className="text-xs font-medium text-[var(--foreground)]">Thiago Carvalho</div>
                        <div className="text-[10px] text-[var(--foreground-subtle)]">CTO, EdTech</div>
                      </div>
                    </div>
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

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="py-16 md:py-24 overflow-hidden">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl text-center text-2xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)] px-4">
              Quem usa, não volta atrás
            </h2>
            <p className="text-center text-[var(--foreground-subtle)] mt-2 text-sm">De empreendedores a executivos de alto desempenho.</p>
          </RevealOnScroll>

          <div className="mt-10 space-y-4">
            <div className="marquee-container">
              <div className="marquee-track animate-marquee-left">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="glass-card min-w-[300px] max-w-xs rounded-2xl p-5 flex-shrink-0">
                    <p className="text-sm text-[var(--foreground-muted)] italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-2.5 mt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.avatar} alt={t.name} className="w-6 h-6 rounded-full" />
                      <div>
                        <div className="text-xs font-semibold text-[var(--foreground)]">{t.name}</div>
                        <div className="text-[10px] text-[var(--foreground-subtle)]">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="marquee-container">
              <div className="marquee-track animate-marquee-right">
                {[...testimonials.slice(3), ...testimonials, ...testimonials.slice(0, 3)].map((t, i) => (
                  <div key={i} className="glass-card min-w-[300px] max-w-xs rounded-2xl p-5 flex-shrink-0">
                    <p className="text-sm text-[var(--foreground-muted)] italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-2.5 mt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.avatar} alt={t.name} className="w-6 h-6 rounded-full" />
                      <div>
                        <div className="text-xs font-semibold text-[var(--foreground)]">{t.name}</div>
                        <div className="text-[10px] text-[var(--foreground-subtle)]">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
        <section className="mx-auto max-w-2xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
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
                    <div className="neon-border-ring neon-border-active rounded-lg">
                      <a href={`${APP_URL}/login`} className="btn-primary-gradient text-white font-semibold px-6 h-11 rounded-lg inline-flex items-center gap-2 text-sm active:scale-95">
                        Começar grátis
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
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
              { label: "Produto",       href: "#produto" },
              { label: "Preços",        href: "#precos" },
              { label: "Blog",          href: "#" },
              { label: "Documentação",  href: "#" },
              { label: "Changelog",     href: "#" },
              { label: "Privacidade",   href: "#" },
              { label: "Termos",        href: "#" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="footer-link text-xs">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs" style={{ color: "var(--foreground-subtle)" }}>© {new Date().getFullYear()} Nexus. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
