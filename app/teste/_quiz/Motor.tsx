"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Ctx, Opcao, Respostas, Roteiro, Tela } from "./tipos";
import { Marca } from "../../_inicio/componentes/Marca";
import { rastrear, rastrearPadrao } from "./util";
import "./quiz.css";

/* Lições do funil do Desafio 28 (ER MKT/Funis Estudados, seção 3D): a 1ª tela
   já é a 1ª pergunta, uma pergunta por tela, a tela não rola e o botão fica
   preso embaixo, escolha única avança sozinha, e as falas não contam no
   progresso — o quiz parece curto. */

const PERGUNTA = new Set<Tela["tipo"]>(["unica", "varias", "nome"]);
const AVANCO_MS = 260;

/** Primeiro nome, com inicial maiúscula e sem exagero de tamanho. */
function primeiroNome(bruto: string) {
  const n = bruto.trim().split(/\s+/)[0]?.slice(0, 18) ?? "";
  return n ? n.charAt(0).toUpperCase() + n.slice(1).toLowerCase() : "";
}

const visivel = (t: Tela, c: Ctx) => !t.quando || t.quando(c);

export function Motor({ roteiro, convite }: { roteiro: Roteiro; convite?: ReactNode }) {
  const primeira = roteiro.telas[0].id;
  const [r, setR] = useState<Respostas>({});
  const [nome, setNome] = useState("");
  const [atual, setAtual] = useState(primeira);
  const [historico, setHistorico] = useState<string[]>([]);
  const avancando = useRef(false);
  const comecou = useRef(false);

  const ctx: Ctx = { r, nome };
  const tela = roteiro.telas.find((t) => t.id === atual) ?? roteiro.telas[0];

  function avancar(novoR: Respostas = r, novoNome: string = nome) {
    const c = { r: novoR, nome: novoNome };
    const i = roteiro.telas.findIndex((t) => t.id === atual);
    const proxima = roteiro.telas.slice(i + 1).find((t) => visivel(t, c));
    if (!proxima) return;
    if (PERGUNTA.has(tela.tipo)) {
      if (!comecou.current) {
        comecou.current = true;
        rastrear("QuizInicio", { quiz: `quiz-${roteiro.slug}` });
      }
      rastrear("QuizEtapa", { quiz: `quiz-${roteiro.slug}`, etapa: tela.id });
    }
    if (novoNome !== nome) setNome(novoNome); // o campo guarda o que foi digitado; aqui vira "Camila"
    setHistorico((h) => [...h, atual]);
    setAtual(proxima.id);
    avancando.current = false;
  }

  function voltar() {
    const anterior = historico[historico.length - 1];
    if (!anterior) return;
    setHistorico(historico.slice(0, -1));
    setAtual(anterior);
  }

  function refazer() {
    setR({});
    setNome("");
    setHistorico([]);
    setAtual(primeira);
  }

  // Progresso: só perguntas contam (as falas são "de graça").
  const perguntas = roteiro.telas.filter((t) => PERGUNTA.has(t.tipo) && visivel(t, ctx));
  const feitas = perguntas.filter((t) => historico.includes(t.id)).length;
  const pct = tela.tipo === "resultado" ? 100 : Math.round((feitas / Math.max(perguntas.length, 1)) * 100);
  const podeVoltar = historico.length > 0 && tela.tipo !== "carregando" && tela.tipo !== "resultado";

  let corpo: ReactNode = null;
  let rodape: ReactNode = null;

  switch (tela.tipo) {
    case "unica": {
      const opcoes = typeof tela.opcoes === "function" ? tela.opcoes(ctx) : tela.opcoes;
      const escolhida = r[tela.id];
      corpo = (
        <>
          {atual === primeira && historico.length === 0 && convite}
          <h1 className="q-titulo">{tela.titulo(ctx)}</h1>
          {tela.sub && <p className="q-sub">{tela.sub(ctx)}</p>}
          <div className="q-opcoes">
            {opcoes.map((o) => (
              <BotaoOpcao
                key={o.v}
                o={o}
                marcada={escolhida === o.v}
                onClick={() => {
                  if (avancando.current) return;
                  avancando.current = true;
                  const novoR = { ...r, [tela.id]: o.v };
                  setR(novoR);
                  setTimeout(() => avancar(novoR), AVANCO_MS);
                }}
              />
            ))}
          </div>
        </>
      );
      break;
    }
    case "varias": {
      const marcadas = (r[tela.id] as string[] | undefined) ?? [];
      corpo = (
        <>
          {atual === primeira && historico.length === 0 && convite}
          <h1 className="q-titulo">{tela.titulo(ctx)}</h1>
          {tela.sub && <p className="q-sub">{tela.sub(ctx)}</p>}
          <div className="q-grade">
            {tela.opcoes.map((o) => {
              const marcada = marcadas.includes(o.v);
              return (
                <button
                  key={o.v}
                  type="button"
                  className={`q-cartao${marcada ? " marcada" : ""}`}
                  aria-pressed={marcada}
                  onClick={() =>
                    setR({ ...r, [tela.id]: marcada ? marcadas.filter((v) => v !== o.v) : [...marcadas, o.v] })
                  }
                >
                  {o.ic && <span className="q-cartao-ic" aria-hidden>{o.ic}</span>}
                  <span>{o.l}</span>
                  <span className="q-check" aria-hidden>
                    <Visto />
                  </span>
                </button>
              );
            })}
          </div>
        </>
      );
      rodape = (
        <>
          <button type="button" className="q-cta btn-primary-gradient" disabled={marcadas.length === 0} onClick={() => avancar()}>
            Continuar
          </button>
          {marcadas.length === 0 && <p className="q-dica">Marque pelo menos uma</p>}
        </>
      );
      break;
    }
    case "nome": {
      corpo = (
        <>
          <h1 className="q-titulo">{tela.titulo(ctx)}</h1>
          {tela.sub && <p className="q-sub">{tela.sub(ctx)}</p>}
          <label className="q-rotulo" htmlFor="q-nome">Seu primeiro nome</label>
          <input
            id="q-nome"
            className="q-campo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && primeiroNome(nome).length >= 2) avancar(r, primeiroNome(nome));
            }}
            placeholder="Digite aqui"
            autoComplete="given-name"
            enterKeyHint="next"
            maxLength={40}
          />
        </>
      );
      const ok = primeiroNome(nome).length >= 2;
      rodape = (
        <>
          <button type="button" className="q-cta btn-primary-gradient" disabled={!ok} onClick={() => avancar(r, primeiroNome(nome))}>
            Continuar
          </button>
          <button type="button" className="q-link" onClick={() => avancar(r, "")}>
            Prefiro não dizer
          </button>
        </>
      );
      break;
    }
    case "fala": {
      corpo = (
        <>
          {tela.sobre && <p className="q-sobre">{tela.sobre(ctx)}</p>}
          <h1 className="q-titulo">{tela.titulo(ctx)}</h1>
          <div className="q-fala">{tela.texto(ctx)}</div>
          {tela.visual && <div className="q-visual">{tela.visual(ctx)}</div>}
        </>
      );
      rodape = (
        <button type="button" className="q-cta btn-primary-gradient" onClick={() => avancar()}>
          {tela.botao(ctx)} <span aria-hidden>→</span>
        </button>
      );
      break;
    }
    case "carregando":
      corpo = <Carregando titulo={tela.titulo} passos={tela.passos} aoTerminar={() => avancar()} />;
      break;
    case "resultado":
      corpo = <Resultado ctx={ctx} roteiro={roteiro}>{tela.conteudo(ctx, refazer)}</Resultado>;
      rodape = tela.rodape(ctx);
      break;
  }

  return (
    <div className="q-palco">
      <header className="q-topo">
        <div className="q-topo-linha">
          {podeVoltar ? (
            <button type="button" className="q-voltar" aria-label="Voltar" onClick={voltar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          ) : (
            <span className="q-voltar" aria-hidden />
          )}
          <Marca tamanho={22} />
          <span className="q-voltar" aria-hidden />
        </div>
        <div className="q-barra" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso do teste">
          <i style={{ width: `${pct}%` }} />
        </div>
      </header>

      <main className="q-corpo">
        <div key={atual} className="q-entra">
          {corpo}
        </div>
      </main>

      {rodape && <footer className="q-rodape">{rodape}</footer>}
    </div>
  );
}

function BotaoOpcao({ o, marcada, onClick }: { o: Opcao; marcada: boolean; onClick: () => void }) {
  return (
    <button type="button" className={`q-opcao${marcada ? " marcada" : ""}`} aria-pressed={marcada} onClick={onClick}>
      {o.ic && <span className="q-opcao-ic" aria-hidden>{o.ic}</span>}
      <span className="q-opcao-texto">{o.l}</span>
      <span className="q-check" aria-hidden>
        <Visto />
      </span>
    </button>
  );
}

function Visto() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Uns 3,5 s de "montando": dá peso ao resultado sem enrolar. */
function Carregando({ titulo, passos, aoTerminar }: { titulo: string; passos: string[]; aoTerminar: () => void }) {
  const [feitos, setFeitos] = useState(0);
  const fim = useRef(aoTerminar);
  useEffect(() => {
    fim.current = aoTerminar;
  });

  useEffect(() => {
    const timers = passos.map((_, i) => setTimeout(() => setFeitos(i + 1), 900 * (i + 1)));
    timers.push(setTimeout(() => fim.current(), 900 * passos.length + 500));
    return () => timers.forEach(clearTimeout);
  }, [passos]);

  return (
    <div className="q-carregando">
      <div className="q-anel" aria-hidden>
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="27" className="q-anel-fundo" />
          <circle cx="32" cy="32" r="27" className="q-anel-arco" style={{ strokeDashoffset: 170 - (170 * feitos) / passos.length }} />
        </svg>
      </div>
      <h1 className="q-titulo" style={{ textAlign: "center" }}>{titulo}</h1>
      <ul className="q-passos" aria-live="polite">
        {passos.map((p, i) => (
          <li key={p} className={i < feitos ? "feito" : i === feitos ? "agora" : ""}>
            <span className="q-check" aria-hidden><Visto /></span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Resultado({ ctx, roteiro, children }: { ctx: Ctx; roteiro: Roteiro; children: ReactNode }) {
  const ctxRef = useRef(ctx);
  useEffect(() => {
    roteiro.aoVerResultado?.(ctxRef.current);
    // Quiz concluído = Lead (pedido do Ed em 12/10/2026). O clique no teste
    // grátis vira evento próprio (AvisoCookies), pra não contar Lead em dobro.
    const dados = roteiro.dadosDoResultado?.(ctxRef.current) ?? {};
    rastrearPadrao("Lead", { content_category: `quiz-${roteiro.slug}`, content_name: dados.perfil ?? roteiro.slug });
    rastrear("QuizResultado", { quiz: `quiz-${roteiro.slug}`, ...dados });
  }, [roteiro]);
  return <>{children}</>;
}
