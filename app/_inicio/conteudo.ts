/* Conteúdo da home (nucly.com.br) — nasceu como versão B. Roteiro aprovado
   pelo Ed em 10/10/2026: "Nucly - LP versao B - roteiro.md".

   Tudo aqui foi conferido no app (lib/plans, crons do WhatsApp, Jarvis).
   Antes de prometer coisa nova, confira no código — a página já prometeu o
   que o app não fazia e foi preciso corrigir. */

import { APP_URL } from "../config";

export const LINKS = {
  /* Botão principal: teste do Nucly AI (experiência completa, com áudio) */
  teste: `${APP_URL}/cadastro?plano=nexus-ai`,
  testeSistema: `${APP_URL}/cadastro?plano=sistema`,
  gratis: `${APP_URL}/cadastro`,
  entrar: `${APP_URL}/login`,
  privacidade: `${APP_URL}/privacidade`,
  termos: `${APP_URL}/termos`,
};

/* Cores das três energias e da marca (as mesmas do app) */
export const COR = {
  verde: "#32CD32",
  verdeTexto: "#4ade80",
  ciano: "#00CED1",
  laranja: "#FF6B35",
  recarga: "#22c55e",
  operacao: "#f59e0b",
  conexao: "#ec4899",
};

export type Mensagem = { de: "voce" | "jarvis"; texto: string };

/* A conversa do celular no topo */
export const CONVERSA_TOPO: Mensagem[] = [
  { de: "voce", texto: "Marca dentista quinta às 15h" },
  { de: "jarvis", texto: "Marquei: Dentista, quinta, 15h às 16h ✓\nTe aviso 30 min antes." },
  { de: "voce", texto: "Fiz 30 min de inglês" },
  { de: "jarvis", texto: "Registrei 30 min em Inglês — +50 XP 🔥" },
];

/* Demonstração do Jarvis: um pedido, uma resposta */
export const PEDIDOS: { pedido: string; resposta: string }[] = [
  { pedido: "Marca dentista quinta às 15h", resposta: "Marquei: Dentista, quinta, 15h às 16h ✓\nTe aviso 30 min antes." },
  { pedido: "O que eu tenho amanhã?", resposta: "Amanhã:\n• 9h reunião de equipe\n• 12h30 almoço com a Bia\n• 16h academia\nE 3 post-its no quadro." },
  { pedido: "Fiz 30 min de inglês", resposta: "Registrei 30 min em Inglês — +50 XP.\nFaltam 120 XP pro nível 5. 🔥" },
  { pedido: "Anota: ligar pro contador", resposta: "Tá na Entrada do Fluxo ✓\nSaiu da cabeça — organiza quando quiser." },
  { pedido: "Monta meu dia", resposta: "Mandei seus 2 rituais pro quadro, com a lista zerada.\nHoje são 3 compromissos — o primeiro é às 9h." },
];

/* Um dia com o Jarvis — tudo isso roda sozinho no app hoje
   (app/api/whatsapp/cron: daily-summary, event-reminders,
   event-completion-check, habit-completion-check, weekly-review) */
export const DIA: { hora: string; titulo: string; texto: string; tag?: string }[] = [
  { hora: "07:00", titulo: "Resumo do dia", texto: "Chega no WhatsApp: compromissos, prioridades e hábitos de hoje." },
  { hora: "09:30", titulo: "Lembrete", texto: "30 minutos antes da reunião, um aviso. E outro, 5 minutos antes." },
  { hora: "11:00", titulo: "Aconteceu?", texto: "A reunião acabou. Você responde “sim” e ela entra no balanço da semana." },
  { hora: "15:20", titulo: "Ideia no trânsito", texto: "Um áudio pro Jarvis e ela já está no Fluxo, esperando a vez.", tag: "Nucly AI" },
  { hora: "21:00", titulo: "Fez hoje?", texto: "“Fez a leitura hoje?” Um “fiz” e a sequência continua 🔥" },
  { hora: "Domingo", titulo: "Resumo da semana", texto: "Recarga em 15%, Conexão zerada. Você responde “marca um jantar com a família na quinta” — e ele marca." },
];

/* Tour do app em abas — prints com a usuária de exemplo (Camila) */
export const TELAS: { id: string; aba: string; titulo: string; texto: string; print: string; alt: string }[] = [
  { id: "hoje", aba: "Hoje", titulo: "A tela de abrir o dia", texto: "Agenda, o que é pra fazer e os hábitos — tudo que importa hoje, numa tela só.", print: "/prints/hoje.png", alt: "Tela Hoje: agenda, post-its e hábitos do dia" },
  { id: "fluxo", aba: "Fluxo", titulo: "Da ideia solta ao quadro do dia", texto: "Entrada, Planejamento e Quadro de hoje: o que surge na cabeça vira post-it e vai pro dia certo.", print: "/prints/fluxo.png", alt: "Fluxo: quadro de post-its do dia por pilar" },
  { id: "calendario", aba: "Calendário", titulo: "A semana com blocos de tempo", texto: "Compromissos e blocos pra proteger o que importa. Sincroniza com o Google Agenda.", print: "/prints/calendario.png", alt: "Calendário da semana com blocos de horário" },
  { id: "mapas", aba: "Mapas", titulo: "Projetos que cabem na cabeça", texto: "Cada projeto com tarefas e um mapa mental infinito.", print: "/prints/mapas.png", alt: "Projeto com mapa mental" },
  { id: "habilidades", aba: "Hábitos e Habilidades", titulo: "Hábito que vira XP", texto: "Ligue um hábito a uma habilidade e cada marcação soma XP, nível e horas da semana.", print: "/prints/habilidades.png", alt: "Habilidades com nível e horas da semana" },
  { id: "notas", aba: "Notas", titulo: "Notas — e notas com senha", texto: "Listas de tarefas, tags e pilares. E notas com senha, cifradas no seu aparelho, pra senhas e documentos.", print: "/prints/notas.png", alt: "Notas com lista de tarefas" },
  { id: "pulso", aba: "Pulso", titulo: "O balanço da semana", texto: "Energia, constância dos hábitos e os pilares que ficaram parados — sem preencher nada.", print: "/prints/pulso.png", alt: "Pulso: o balanço de energia do mês" },
];

export const ENERGIAS = [
  { nome: "Recarga", exemplo: "descanso, esporte, hobby", cor: COR.recarga, pct: 32 },
  { nome: "Operação", exemplo: "trabalho, entregas, decisões", cor: COR.operacao, pct: 55 },
  { nome: "Conexão", exemplo: "pessoas, presença, vínculos", cor: COR.conexao, pct: 13 },
];

/* Conferido com lib/plans (PLAN_LIMITS) e lib/abacatepay (preços) */
export const PLANOS = [
  {
    nome: "Grátis",
    preco: "R$ 0",
    periodo: "pra sempre",
    nota: "sem cartão",
    paraQuem: "Pra conhecer o sistema.",
    itens: [
      "3 pilares, 3 habilidades e 3 hábitos",
      "1 projeto com mapa mental (até 10 tarefas)",
      "Fluxo, Hoje e Calendário",
      "Pulso dos últimos 7 dias",
    ],
    botao: "Criar conta grátis",
    href: LINKS.gratis,
    destaque: false,
  },
  {
    nome: "Sistema",
    preco: "R$ 29,90",
    periodo: "/mês",
    nota: "7 dias grátis, sem cartão",
    paraQuem: "Pra organizar a vida com o Jarvis no WhatsApp.",
    itens: [
      "Pilares, habilidades, hábitos e notas ilimitados",
      "Até 3 projetos",
      "Jarvis no app e no WhatsApp — 300 mensagens/mês",
      "Resumo do dia, lembretes e resumo da semana no WhatsApp",
      "Google Agenda, histórico completo, notas com senha e exportação",
    ],
    botao: "Testar 7 dias grátis",
    href: LINKS.testeSistema,
    destaque: false,
  },
  {
    nome: "Nucly AI",
    preco: "R$ 49,90",
    periodo: "/mês",
    nota: "ou R$ 499,90/ano — 2 meses grátis",
    paraQuem: "Pra quem vive no WhatsApp e toca muitos projetos.",
    itens: [
      "Tudo do Sistema",
      "Projetos ilimitados",
      "Jarvis — 800 mensagens/mês",
      "Áudio de até 10 min e foto no WhatsApp",
    ],
    botao: "Testar 7 dias grátis",
    href: LINKS.teste,
    destaque: true,
  },
];

export const PERGUNTAS: { p: string; r: string }[] = [
  { p: "Preciso de cartão pra testar?", r: "Não. Os 7 dias são livres, com tudo do plano escolhido liberado — Jarvis e WhatsApp inclusos. Se você não assinar, a conta volta pro plano Grátis sozinha e nada é cobrado. Seus dados ficam salvos." },
  { p: "O WhatsApp é obrigatório?", r: "Não, o Nucly funciona inteiro no app. Nos planos pagos você conecta seu número em 30 segundos e o Jarvis vira mais um contato no seu WhatsApp — sem chip extra e sem instalar nada." },
  { p: "Qual a diferença entre Sistema e Nucly AI?", r: "Os dois têm o Jarvis no app e no WhatsApp, com resumo do dia, lembretes e resumo da semana. O Nucly AI libera projetos ilimitados, sobe o Jarvis de 300 pra 800 mensagens por mês e aceita áudio (até 10 min) e foto no WhatsApp." },
  { p: "Funciona no celular?", r: "Sim. O Nucly abre no navegador de qualquer celular e dá pra adicionar à tela inicial — ele vira app, sem loja. E com o WhatsApp conectado, muita coisa você resolve sem nem abrir." },
  { p: "Em que é diferente do Notion, Todoist ou Google Agenda?", r: "Eles organizam o que fazer, cada um num canto. O Nucly junta agenda, tarefas, hábitos, projetos e notas — e mede o que cada coisa custou de você em Recarga, Operação e Conexão. E sincroniza com o Google Agenda: você não precisa largar o seu." },
  { p: "Meus dados treinam IA?", r: "Não — nem a nossa, nem a de ninguém. E pra senhas e documentos existem as notas com senha: o texto é cifrado no seu aparelho, nem a equipe do Nucly consegue ler." },
  { p: "Posso cancelar quando quiser?", r: "Sim, em 2 cliques em Configurações, sem multa e sem ligação. Se voltar pro Grátis, seus dados ficam guardados — só voltam os limites do plano." },
  { p: "Tem plano anual?", r: "No Nucly AI: R$ 499,90 por ano, o equivalente a 2 meses grátis. Os 7 dias de teste valem igual." },
];
