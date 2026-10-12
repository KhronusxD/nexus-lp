/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { LINKS, PEDIDOS, PLANOS } from "../../_inicio/conteudo";

/* Blocos de venda do resultado dos quizzes: o resultado vira uma página de
   vendas sob medida — a dor que a pessoa marcou, como o Nucly resolve, o
   preço e o teste grátis. Planos, preços e pedidos do Jarvis vêm do mesmo
   conteudo.ts da página de vendas: nunca divergem. */

/** Print do app em formato de celular (vitrine com a usuária de exemplo). */
export function PrintCelular({ tela, alt }: { tela: string; alt: string }) {
  return (
    <div className="r-cel">
      <img src={`/prints/celular/${tela}.webp`} alt={alt} width={390} height={844} loading="lazy" decoding="async" />
    </div>
  );
}

/** Uma dor → como o Nucly resolve, com uma prova visual. */
export function Solucao({ dor, titulo, texto, visual }: { dor: string; titulo: string; texto: ReactNode; visual: ReactNode }) {
  return (
    <article className="r-sol">
      <p className="r-sol-dor">
        <span>O problema</span>
        {dor}
      </p>
      <h3>{titulo}</h3>
      <p className="r-sol-texto">{texto}</p>
      <div className="r-sol-visual">{visual}</div>
    </article>
  );
}

/** Pedidos reais do Jarvis no WhatsApp (os mesmos da página de vendas). */
export function ConversaJarvis({ quais = [0, 3, 2] }: { quais?: number[] }) {
  return (
    <div className="v-caixa v-conversa">
      {quais.map((i, n) => (
        <div key={i} className="v-conversa" style={{ gap: 6 }}>
          <span className="v-balao voce" style={{ animationDelay: `${0.2 + n * 0.5}s` }}>{PEDIDOS[i].pedido}</span>
          <span className="v-balao jarvis" style={{ animationDelay: `${0.45 + n * 0.5}s`, whiteSpace: "pre-line" }}>{PEDIDOS[i].resposta}</span>
        </div>
      ))}
    </div>
  );
}

/** Faixa de telas que dá pra arrastar de lado. */
export function Galeria({ telas }: { telas: { tela: string; titulo: string; texto: string }[] }) {
  return (
    <div className="r-galeria" role="list">
      {telas.map((t) => (
        <figure key={t.tela} className="r-galeria-item" role="listitem">
          <PrintCelular tela={t.tela} alt={t.titulo} />
          <figcaption>
            <b>{t.titulo}</b>
            {t.texto}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const SISTEMA = PLANOS.find((p) => p.nome === "Sistema")!;
const NUCLY_AI = PLANOS.find((p) => p.nome === "Nucly AI")!;
const porDia = (preco: string) => {
  const reais = Number(preco.replace(/[^\d,]/g, "").replace(",", ".")) / 30;
  return reais < 1 ? "Menos de R$ 1 por dia" : `R$ ${reais.toFixed(2).replace(".", ",")} por dia`;
};

/** Os dois planos pagos com o teste de 7 dias. `recomendado` ganha destaque. */
export function Planos({ recomendado, porque, aoEscolher }: { recomendado: "sistema" | "nexus-ai"; porque: string; aoEscolher: () => void }) {
  const cartoes = [
    { id: "sistema" as const, p: SISTEMA, href: LINKS.testeSistema, para: "Pra criar o hábito com o Jarvis no WhatsApp." },
    { id: "nexus-ai" as const, p: NUCLY_AI, href: LINKS.teste, para: "Pra quem vive no WhatsApp e manda áudio." },
  ];
  return (
    <div className="r-planos">
      {cartoes.map(({ id, p, href, para }) => {
        const destaque = id === recomendado;
        return (
          <div key={id} className={`r-plano${destaque ? " destaque" : ""}`}>
            {destaque && <span className="r-plano-selo">{porque}</span>}
            <div className="r-plano-topo">
              <span className="r-plano-nome">{p.nome}</span>
              <span className="r-plano-preco">
                {p.preco}
                <small>{p.periodo}</small>
              </span>
            </div>
            <p className="r-plano-dia">{porDia(p.preco)} · {para}</p>
            <ul>
              {p.itens.map((item) => (
                <li key={item}>
                  <span aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={href} className={`q-cta ${destaque ? "btn-primary-gradient" : "r-cta-secundario"}`} onClick={aoEscolher}>
              Testar 7 dias grátis
            </a>
          </div>
        );
      })}
    </div>
  );
}

/** O que tira o medo de começar o teste. Tudo conferido no app. */
export function Garantias() {
  return (
    <ul className="r-garantias">
      <li><span aria-hidden>✓</span>Sem cartão de crédito</li>
      <li><span aria-hidden>✓</span>Não assinou? Volta pro Grátis sozinho, sem cobrança, e o que você montou continua lá</li>
      <li><span aria-hidden>✓</span>Assinou e mudou de ideia? Cancela em 2 cliques, sem multa</li>
    </ul>
  );
}

export function Perguntas({ itens }: { itens: { p: string; r: ReactNode }[] }) {
  return (
    <div className="r-faq">
      {itens.map((i) => (
        <details key={i.p}>
          <summary>{i.p}</summary>
          <div>{i.r}</div>
        </details>
      ))}
    </div>
  );
}
