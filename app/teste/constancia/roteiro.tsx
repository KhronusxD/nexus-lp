"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Ctx, Roteiro } from "../_quiz/tipos";
import { VisualPilha, VisualSemana, VisualWhats, VisualXp } from "../_quiz/visuais";
import { ConversaJarvis, Galeria, Garantias, Perguntas, Planos, PrintCelular, Solucao } from "../_quiz/vendas";
import { gravarPonte, rastrear, type Ponte } from "../_quiz/util";
import { APP_URL, SITE_URL } from "../../config";
import { PERFIS, ehPerfil, type PerfilId } from "./perfis";

/* Versão "Constância" (quem começa e larga) do quiz de entrada.
   Roteiro: ER MKT/Nucly/"Quiz de entrada - 3 versoes - roteiro.md".
   Tudo que as falas prometem existe no app (conferido em 11/10/2026):
   hábito ligado a habilidade soma XP (migration 059), a sequência é
   calculada à parte (lib/habitos.ts), e às 21h o Jarvis pergunta no
   WhatsApp (cron habit-completion-check, planos pagos). */

export const CADASTRO = `${APP_URL}/cadastro?plano=sistema`;

/* O que a pessoa largou → o hábito que o app cria. Pilares e habilidades com
   os nomes do app (onboarding: PILLAR_PRESETS). */
const ITENS = {
  exercicio: { l: "Academia ou exercício", curto: "Academia", ic: "🏋️", habilidade: "Exercício físico", pilar: "Saúde", habito: (m: number) => `Treinar ${m} min`, comTempo: true },
  leitura: { l: "Leitura", curto: "Leitura", ic: "📖", habilidade: "Leitura", pilar: "Aprendizado", habito: (m: number) => `Ler ${m} min`, comTempo: true },
  idioma: { l: "Idioma ou curso", curto: "Inglês", ic: "🗣️", habilidade: "Estudos", pilar: "Aprendizado", habito: (m: number) => `Estudar ${m} min`, comTempo: true },
  dieta: { l: "Dieta", curto: "Dieta", ic: "🥗", habilidade: "Alimentação", pilar: "Saúde", habito: () => "Seguir o plano de alimentação", comTempo: false },
  meditacao: { l: "Meditação", curto: "Meditação", ic: "🧘", habilidade: "Meditação", pilar: "Saúde", habito: (m: number) => `Meditar ${m} min`, comTempo: true },
  acordar: { l: "Acordar cedo", curto: "Acordar cedo", ic: "⏰", habilidade: "Disciplina", pilar: "Saúde", habito: () => "Acordar no horário", comTempo: false },
  projeto: { l: "Projeto pessoal", curto: "Projeto", ic: "🚀", habilidade: "Projeto pessoal", pilar: "Carreira", habito: (m: number) => `${m} min no meu projeto`, comTempo: true },
} as const;
type ItemId = keyof typeof ITENS;

/* Começa com menos do que a pessoa tem: sobra folga pro dia ruim. */
const INICIO: Record<string, number> = { "10": 10, "30": 15, "60": 20, mais: 30 };
const ROTULO_TEMPO: Record<string, string> = { "10": "10 minutos", "30": "uns 30 minutos", "60": "1 hora", mais: "mais de 1 hora" };

const largou = (c: Ctx) => ((c.r.largou as string[] | undefined) ?? []).filter((v): v is ItemId => v in ITENS);
const itemId = (c: Ctx): ItemId => {
  const r = c.r.retomar as string | undefined;
  return r && r in ITENS ? (r as ItemId) : largou(c)[0] ?? "leitura";
};
const minutos = (c: Ctx) => INICIO[(c.r.tempo as string) ?? "30"] ?? 15;
const nomeHabito = (c: Ctx, m = minutos(c)) => ITENS[itemId(c)].habito(m);
const perfil = (c: Ctx): PerfilId => (ehPerfil(c.r.larga) ? c.r.larga : "fogo");
const xpDe = (m: number) => Math.round((m / 60) * 100); // lib/xp.ts: 1 h = 100 XP

/** "Camila, não é…" ou "Não é…" quando a pessoa não disse o nome. */
const comNome = (c: Ctx, resto: string) => (c.nome ? `${c.nome}, ${resto}` : resto.charAt(0).toUpperCase() + resto.slice(1));

function ponte(c: Ctx): Ponte {
  const it = ITENS[itemId(c)];
  const pilares = [...new Set([it.pilar, ...largou(c).map((i) => ITENS[i].pilar)])].slice(0, 3);
  return {
    v: 1,
    quiz: "constancia",
    nome: c.nome,
    perfil: perfil(c),
    pilares,
    habito: { nome: nomeHabito(c), icone: it.ic, habilidade: it.habilidade, pilar: it.pilar, minutos: it.comTempo ? minutos(c) : null },
  };
}

export const ROTEIRO: Roteiro = {
  slug: "constancia",
  aoVerResultado: (c) => gravarPonte(ponte(c)),
  dadosDoResultado: (c) => ({ perfil: perfil(c), habito: itemId(c) }),
  telas: [
    {
      id: "largou",
      tipo: "varias",
      titulo: () => <>O que você já <em>começou e largou</em>?</>,
      sub: () => "Marque tudo que vale. Ninguém está julgando.",
      opcoes: (Object.keys(ITENS) as ItemId[]).map((v) => ({ v, l: ITENS[v].l, ic: ITENS[v].ic })),
    },
    {
      id: "nome",
      tipo: "nome",
      titulo: () => <>Como você gosta que te <em>chamem</em>?</>,
      sub: () => "Pra eu falar com você, não com \"usuário\".",
    },
    {
      id: "larga",
      tipo: "unica",
      titulo: (c) => <>{comNome(c, "normalmente você larga")} <em>quando…</em></>,
      opcoes: [
        { v: "fogo", l: "Passa a empolgação" },
        { v: "tudo", l: "Falho um dia e desanimo" },
        { v: "dia", l: "A rotina aperta e eu esqueço" },
        { v: "mil", l: "Tento mudar muita coisa de uma vez" },
      ],
    },
    {
      id: "fala-larga",
      tipo: "fala",
      sobre: () => "Isso tem explicação",
      titulo: (c) => comNome(c, "não é falta de força de vontade."),
      texto: (c) => FALA_LARGA[perfil(c)].texto,
      visual: (c) => FALA_LARGA[perfil(c)].visual(c),
      botao: () => "É isso",
    },
    {
      id: "quantas",
      tipo: "unica",
      titulo: () => <>Quantas coisas você tenta mudar <em>ao mesmo tempo</em>?</>,
      opcoes: [
        { v: "1", l: "Uma só" },
        { v: "2-3", l: "Duas ou três" },
        { v: "4+", l: "Quatro ou mais" },
      ],
    },
    {
      id: "fala-tres",
      tipo: "fala",
      quando: (c) => c.r.quantas === "4+" && c.r.larga !== "mil",
      sobre: () => "Uma recomendação honesta",
      titulo: () => <>Comece com no máximo <em>3</em>.</>,
      texto: () => (
        <p>
          Vários hábitos novos ao mesmo tempo disputam a mesma energia, e no primeiro dia ruim caem juntos. No plano Grátis do Nucly
          são 3 hábitos, e não é por acaso.
        </p>
      ),
      visual: (c) => <VisualPilha itens={rotulosPilha(c)} fica={rotulosPilha(c).slice(0, 3)} />,
      botao: () => "Combinado",
    },
    {
      id: "perde",
      tipo: "unica",
      titulo: () => <>Quando perde um dia, <em>você…</em></>,
      opcoes: [
        { v: "volta", l: "Volto no dia seguinte" },
        { v: "culpa", l: "Sinto culpa, mas volto" },
        { v: "jaera", l: "Considero que já era" },
        { v: "nempercebe", l: "Nem percebo que perdi" },
      ],
    },
    {
      id: "motiva",
      tipo: "unica",
      titulo: () => <>O que mais te <em>motiva</em>?</>,
      opcoes: [
        { v: "progresso", l: "Ver meu progresso em números", ic: "📈" },
        { v: "cobranca", l: "Alguém me cobrando", ic: "👀" },
        { v: "recompensa", l: "Uma recompensa", ic: "🏅" },
        { v: "identidade", l: "Sentir que estou virando quem eu quero ser", ic: "🌱" },
      ],
    },
    {
      id: "fala-motiva",
      tipo: "fala",
      sobre: () => "Bom saber",
      titulo: (c) => FALA_MOTIVA[(c.r.motiva as keyof typeof FALA_MOTIVA) ?? "progresso"]?.titulo ?? "",
      texto: (c) => FALA_MOTIVA[(c.r.motiva as keyof typeof FALA_MOTIVA) ?? "progresso"]?.texto(c),
      visual: (c) => FALA_MOTIVA[(c.r.motiva as keyof typeof FALA_MOTIVA) ?? "progresso"]?.visual(c),
      botao: () => "Faz sentido",
    },
    {
      id: "tempo",
      tipo: "unica",
      titulo: () => <>Quanto tempo por dia você tem <em>de verdade</em>?</>,
      sub: () => "No dia normal, não no dia ideal.",
      opcoes: [
        { v: "10", l: "10 minutos" },
        { v: "30", l: "Uns 30 minutos" },
        { v: "60", l: "1 hora" },
        { v: "mais", l: "Mais de 1 hora" },
      ],
    },
    {
      id: "retomar",
      tipo: "unica",
      quando: (c) => largou(c).length > 1,
      titulo: () => <>Qual você quer <em>retomar agora</em>?</>,
      sub: () => "Um só. Os outros esperam a vez.",
      opcoes: (c) => largou(c).map((v) => ({ v, l: ITENS[v].l, ic: ITENS[v].ic })),
    },
    {
      id: "carregando",
      tipo: "carregando",
      titulo: "Montando sua primeira semana",
      passos: ["Lendo suas respostas", "Achando seu perfil de constância", "Montando seu primeiro hábito"],
    },
    {
      id: "resultado",
      tipo: "resultado",
      conteudo: (c, refazer) => <Resultado c={c} refazer={refazer} />,
      rodape: (c) => (
        <>
          <a href={CADASTRO} className="q-cta btn-primary-gradient" onClick={() => gravarPonte(ponte(c))}>
            Começar meus 7 dias grátis <span aria-hidden>→</span>
          </a>
          <p className="q-nota">Sem cartão · seu hábito já vai pronto</p>
        </>
      ),
    },
  ],
};

function rotulosPilha(c: Ctx) {
  const meus = largou(c).map((i) => ITENS[i].curto);
  return meus.length >= 4 ? meus : ["Academia", "Leitura", "Dieta", "Inglês", "Meditação"];
}

const FALA_LARGA: Record<PerfilId, { texto: ReactNode; visual: (c: Ctx) => ReactNode }> = {
  fogo: {
    texto: (
      <>
        <p>Empolgação é combustível de largada, não de corrida. Quando ela acaba, não sobra nada segurando o hábito.</p>
        <p>O que segura é <b>ver o progresso</b>: no Nucly, cada vez que você faz o hábito, ganha XP e a habilidade sobe de nível.</p>
      </>
    ),
    visual: (c) => <VisualXp habilidade={ITENS[largou(c)[0] ?? "leitura"].habilidade} />,
  },
  tudo: {
    texto: (
      <>
        <p>Você mede pela sequência perfeita, então um dia perdido parece prova de que não deu.</p>
        <p>Só que um furo não apaga o que você já fez. No Nucly a sequência pode quebrar, mas <b>o XP e o nível ficam</b>.</p>
      </>
    ),
    visual: () => (
      <VisualSemana
        falhou={3}
        legenda={<>Furou na quinta. A sequência zerou, mas os <b>150 XP</b> da semana continuam lá.</>}
      />
    ),
  },
  dia: {
    texto: (
      <>
        <p>Você não larga, você esquece. É bem diferente, e tem conserto.</p>
        <p>Às 21h o Jarvis pergunta no seu WhatsApp se você fez. Responde <b>sim</b> e está marcado.</p>
      </>
    ),
    visual: (c) => <VisualWhats habito={ITENS[largou(c)[0] ?? "leitura"].habito(15)} />,
  },
  mil: {
    texto: (
      <>
        <p>Quem tenta mudar tudo de uma vez costuma não mudar nada: no primeiro dia ruim, cai tudo junto.</p>
        <p>O caminho é <b>um hábito pequeno</b>, e só depois o próximo.</p>
      </>
    ),
    visual: (c) => <VisualPilha itens={rotulosPilha(c)} fica={[rotulosPilha(c)[0]]} />,
  },
};

const FALA_MOTIVA = {
  progresso: {
    titulo: "Então você vai gostar disso.",
    texto: () => <p>Cada hábito fica ligado a uma habilidade. Fez, ganhou XP. Você vê o nível subir e as horas da semana somando.</p>,
    visual: (c: Ctx) => <VisualXp habilidade={ITENS[largou(c)[0] ?? "leitura"].habilidade} />,
  },
  cobranca: {
    titulo: "Alguém vai te cobrar. Sem julgamento.",
    texto: () => (
      <p>
        Todo dia às 21h o Jarvis pergunta no seu WhatsApp se você fez. Se a resposta for não, ele só diz que amanhã tem de novo.
      </p>
    ),
    visual: (c: Ctx) => <VisualWhats habito={ITENS[largou(c)[0] ?? "leitura"].habito(15)} resposta="não" />,
  },
  recompensa: {
    titulo: "A recompensa aparece todo dia.",
    texto: () => <p>Cada dia feito aumenta a sequência 🔥 e soma XP na habilidade. É pequeno, mas é todo dia.</p>,
    visual: () => <VisualSemana legenda={<>7 de 7: sequência de <b>7 dias</b> 🔥</>} />,
  },
  identidade: {
    titulo: "Você não só fez hoje. Você está virando alguém.",
    texto: (c: Ctx) => {
      const h = ITENS[largou(c)[0] ?? "leitura"].habilidade;
      return (
        <p>
          Cada hábito fica ligado a uma habilidade. Em vez de &quot;fiz hoje&quot;, você vê <b>{h} nível 4</b> e as horas que já colocou nela.
        </p>
      );
    },
    visual: (c: Ctx) => <VisualXp habilidade={ITENS[largou(c)[0] ?? "leitura"].habilidade} nivel={4} />,
  },
};

function tracos(c: Ctx): ReactNode[] {
  const p = perfil(c);
  const t: ReactNode[] = [];
  if (c.r.quantas === "4+" && p !== "mil")
    t.push(<>E um pouco de <b>Mil metas</b>: você tenta mudar 4 coisas ou mais de uma vez.</>);
  if (c.r.perde === "jaera" && p !== "tudo")
    t.push(<>E um pouco de <b>Tudo ou nada</b>: quando perde um dia, considera que já era.</>);
  if (c.r.perde === "nempercebe" && p !== "dia")
    t.push(<>E um pouco de <b>Dia corrido</b>: às vezes nem percebe que perdeu o dia.</>);
  return t;
}

/* A seção "Como o Nucly resolve isso": a dor do perfil primeiro, depois o
   que vale pra todo mundo. Cada promessa existe no app (conferido em
   12/10/2026): XP por habilidade, semana do hábito, "Fez hoje?" às 21h,
   resumo do dia às 7h e de domingo no WhatsApp, Entrada do Fluxo. */
type Sol = { dor: string; titulo: string; texto: ReactNode; visual: ReactNode };

const SOLUCAO_DO_PERFIL: Record<PerfilId, (c: Ctx) => Sol> = {
  fogo: () => ({
    dor: "A empolgação acaba, e não sobra nada segurando o hábito.",
    titulo: "Progresso que dá pra ver",
    texto: "Cada hábito fica ligado a uma habilidade. Fez, ganhou XP: a habilidade sobe de nível e as horas da semana vão somando. Dá vontade de não quebrar.",
    visual: <PrintCelular tela="habilidades" alt="Habilidades com nível, XP e horas da semana" />,
  }),
  tudo: () => ({
    dor: "Um dia perdido parece que apagou tudo.",
    titulo: "O que você fez não some",
    texto: "A sequência pode quebrar, mas o XP e o nível ficam. E cada hábito mostra a semana inteira, não só a sequência: 5 de 7 já é uma semana boa.",
    visual: <PrintCelular tela="habitos" alt="Hábitos com a semana marcada dia a dia" />,
  }),
  dia: (c) => ({
    dor: "A rotina aperta e o hábito fica pra depois.",
    titulo: "Alguém lembra por você",
    texto: <>Às 21h o Jarvis pergunta no seu WhatsApp se você fez. Responde <b>sim</b> e está marcado, sem abrir o app.</>,
    visual: <VisualWhats habito={nomeHabito(c)} />,
  }),
  mil: () => ({
    dor: "Muita coisa ao mesmo tempo, e no primeiro dia ruim cai tudo junto.",
    titulo: "Um de cada vez, o resto guardado",
    texto: "Você começa com um hábito. As outras ideias ficam na Entrada do Fluxo, esperando a vez, sem pesar na cabeça.",
    visual: <PrintCelular tela="fluxo" alt="Fluxo com Entrada, Planejamento e o quadro de hoje" />,
  }),
};

function solucoes(c: Ctx): Sol[] {
  const pf = perfil(c);
  const porMensagem: Sol = pf === "dia"
    ? {
        dor: "O dia passa e você nem lembra o que tinha pra fazer.",
        titulo: "Seu dia numa tela só",
        texto: "Agenda, o que é pra fazer e os hábitos de hoje juntos. E às 7h o resumo do dia chega no seu WhatsApp.",
        visual: <PrintCelular tela="hoje" alt="Tela Hoje com agenda e hábitos" />,
      }
    : {
        dor: "Organizar dá mais trabalho do que fazer.",
        titulo: "Tudo por mensagem, no WhatsApp",
        texto: "Fala com o Jarvis como fala com um amigo: ele marca na agenda, anota no Fluxo e registra o que você fez.",
        visual: <ConversaJarvis />,
      };
  return [
    SOLUCAO_DO_PERFIL[pf](c),
    porMensagem,
    {
      dor: "Sem saber se está funcionando, a gente desanima.",
      titulo: "A semana em números, todo domingo",
      texto: "O Pulso mostra a constância dos hábitos, a energia da semana e o que ficou parado. No domingo, o resumo chega no seu WhatsApp.",
      visual: <PrintCelular tela="pulso" alt="Pulso com a energia e a constância da semana" />,
    },
  ];
}

/** Telas que não apareceram nas soluções. */
function galeria(c: Ctx) {
  const usadas = new Set(["pulso", perfil(c) === "fogo" ? "habilidades" : perfil(c) === "tudo" ? "habitos" : perfil(c) === "mil" ? "fluxo" : "hoje"]);
  return [
    { tela: "hoje", titulo: "Hoje", texto: "A tela de abrir o dia: agenda, o que é pra fazer e os hábitos." },
    { tela: "calendario", titulo: "Calendário", texto: "A semana com blocos de tempo. Sincroniza com o Google Agenda." },
    { tela: "fluxo", titulo: "Fluxo", texto: "Da ideia solta ao quadro do dia, em post-its." },
    { tela: "habitos", titulo: "Hábitos", texto: "A semana de cada hábito, dia a dia, com a sequência." },
    { tela: "habilidades", titulo: "Habilidades", texto: "Nível, XP e as horas que você colocou em cada uma." },
  ].filter((t) => !usadas.has(t.tela));
}

const LARGAR_DE_NOVO: Record<PerfilId, string> = {
  fogo: "No seu perfil a empolgação some mesmo, e por isso o hábito começa pequeno e o progresso fica na tela.",
  tudo: "Falhar um dia não zera nada: o XP e o nível ficam, e a semana mostra o total, não só a sequência.",
  dia: "No seu caso o problema é esquecer, e às 21h alguém pergunta. Voltar é responder sim.",
  mil: "Com um hábito só, fica bem mais difícil largar. Os outros esperam a vez no Fluxo.",
};

function perguntas(c: Ctx) {
  return [
    { p: "Preciso de cartão pra testar?", r: "Não. São 7 dias com tudo do plano liberado, sem cartão. Se não assinar, a conta volta pro Grátis sozinha, nada é cobrado e o que você montou continua lá." },
    { p: "E se eu largar de novo?", r: `${LARGAR_DE_NOVO[perfil(c)]} Se largar, o que você fez continua contando quando voltar.` },
    { p: "Funciona sem WhatsApp?", r: "Funciona inteiro no app. O WhatsApp é o atalho: o lembrete das 21h e anotar ou marcar por mensagem, sem abrir nada." },
    { p: "Posso cancelar?", r: "Sim, em 2 cliques em Configurações, sem multa e sem ligação." },
  ];
}

function Resultado({ c, refazer }: { c: Ctx; refazer: () => void }) {
  const p = PERFIS[perfil(c)];
  const it = ITENS[itemId(c)];
  const m = minutos(c);
  const tempo = (c.r.tempo as string) ?? "30";
  const porqueTempo = !it.comTempo
    ? "Sem meta de tempo: o que conta é fazer todo dia."
    : tempo === "10"
      ? "10 minutos bastam pra começar. Agora o que importa é aparecer todo dia."
      : `Você disse que tem ${ROTULO_TEMPO[tempo]}. Começa com ${m}: sobra folga pro dia ruim, e dá pra subir depois.`;

  return (
    <>
      <p className="q-sobre">Seu perfil de constância</p>
      <h1 className="q-titulo">{comNome(c, "seu perfil é")}</h1>
      <div className="r-perfil" style={{ ["--cor" as string]: p.cor }}>
        <div className="r-perfil-ic" aria-hidden>{p.ic}</div>
        <p className="r-perfil-nome">{p.nome}</p>
        <p className="r-perfil-frase">{p.frase}</p>
      </div>
      {tracos(c).map((t, i) => (
        <p key={i} className="r-traco">{t}</p>
      ))}
      <div className="r-bloco">
        <h2>Por que você larga</h2>
        <p>{p.porque}</p>
      </div>
      <div className="r-bloco">
        <h2>O que funciona</h2>
        <p>{p.funciona}</p>
      </div>

      <h2 className="r-secao">Como o Nucly resolve isso</h2>
      {solucoes(c).map((x) => (
        <Solucao key={x.titulo} {...x} />
      ))}

      <div className="r-semana">
        <h2>Sua primeira semana</h2>
        <div className="r-habito">
          <span className="r-habito-ic" aria-hidden>{it.ic}</span>
          <div>
            <div className="r-habito-nome">{nomeHabito(c)}</div>
            <div className="r-habito-sub">
              conta XP em {it.habilidade}
              {it.comTempo ? ` · +${xpDe(m)} XP por dia` : ""}
            </div>
          </div>
        </div>
        <ul className="r-itens">
          <li><span aria-hidden>📅</span><span>Todo dia{it.comTempo ? `, ${m} minutos` : ""}</span></li>
          <li><span aria-hidden>💬</span><span>Às 21h o Jarvis pergunta no WhatsApp se você fez</span></li>
          <li><span aria-hidden>🎯</span><span>Meta: 5 de 7 dias. A regra é aparecer, não ser perfeito</span></li>
        </ul>
        <p className="r-porque">{porqueTempo}</p>
        <p className="r-porque">Ao montar seu Nucly, esse hábito já entra pronto, ligado à habilidade {it.habilidade}.</p>
      </div>

      <h2 className="r-secao">E ainda tem</h2>
      <Galeria telas={galeria(c)} />

      <h2 className="r-secao">Comece hoje. Os 7 primeiros dias são por nossa conta</h2>
      <p className="r-secao-sub">Tudo do plano liberado no teste. Escolha um:</p>
      <Planos recomendado="sistema" porque={`Recomendado pro perfil ${p.nome}`} aoEscolher={() => gravarPonte(ponte(c))} />
      <Garantias />
      <p className="r-letrinha">No teste, o Jarvis responde até 100 mensagens. Assinando, são 300 por mês no Sistema e 800 no Nucly AI.</p>

      <h2 className="r-secao">Perguntas</h2>
      <Perguntas itens={perguntas(c)} />

      <div className="r-rodape-acoes">
        <Compartilhar id={perfil(c)} />
        <button type="button" className="q-link" onClick={refazer}>Refazer o teste</button>
      </div>
    </>
  );
}

/** Compartilha a imagem do perfil (story) com o link do teste. A imagem é
 *  buscada antes do clique: no iPhone o share só vale colado no toque. */
function Compartilhar({ id }: { id: PerfilId }) {
  const [copiado, setCopiado] = useState(false);
  const arquivo = useRef<File | null>(null);
  const p = PERFIS[id];
  const url = `${SITE_URL}/teste/constancia?perfil=${id}`;
  const texto = `Meu perfil de constância é ${p.nome} ${p.ic}. Descobre o seu em 60 segundos:`;

  useEffect(() => {
    let vivo = true;
    fetch(`/teste/constancia/cartao/${id}/story`)
      .then((r) => (r.ok ? r.blob() : null))
      .then((b) => {
        if (vivo && b) arquivo.current = new File([b], `perfil-${id}.png`, { type: "image/png" });
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
  }, [id]);

  async function compartilhar() {
    rastrear("QuizCompartilhar", { quiz: "quiz-constancia", perfil: id });
    const f = arquivo.current;
    try {
      if (f && navigator.canShare?.({ files: [f] })) {
        await navigator.share({ files: [f], text: `${texto} ${url}` });
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "Meu perfil de constância", text: texto, url });
        return;
      }
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(`${texto} ${url}`);
      setCopiado(true);
    } catch {}
  }

  return (
    <button type="button" className="q-link" onClick={compartilhar}>
      {copiado ? "Link copiado ✓" : "Compartilhar meu perfil"}
    </button>
  );
}
