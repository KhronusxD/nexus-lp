import type { ReactNode } from "react";

/* Motor dos quizzes de entrada (/teste/*). Um roteiro por público; o motor é
   o mesmo. Roteiros aprovados pelo Ed em 11/10/2026:
   ER MKT/Nucly/"Quiz de entrada - 3 versoes - roteiro.md". */

export type Respostas = Record<string, string | string[]>;

/** O que cada tela enxerga: as respostas até aqui e o primeiro nome. */
export type Ctx = { r: Respostas; nome: string };

export type Opcao = { v: string; l: string; ic?: ReactNode };

type Base = {
  id: string;
  /** A tela só aparece se devolver true (avaliado com as respostas do momento). */
  quando?: (c: Ctx) => boolean;
};

export type Tela =
  | (Base & {
      tipo: "unica";
      titulo: (c: Ctx) => ReactNode;
      sub?: (c: Ctx) => ReactNode;
      opcoes: Opcao[] | ((c: Ctx) => Opcao[]);
    })
  | (Base & {
      tipo: "varias";
      titulo: (c: Ctx) => ReactNode;
      sub?: (c: Ctx) => ReactNode;
      opcoes: Opcao[];
    })
  | (Base & { tipo: "nome"; titulo: (c: Ctx) => ReactNode; sub?: (c: Ctx) => ReactNode })
  | (Base & {
      tipo: "fala";
      sobre?: (c: Ctx) => string;
      titulo: (c: Ctx) => ReactNode;
      texto: (c: Ctx) => ReactNode;
      visual?: (c: Ctx) => ReactNode;
      botao: (c: Ctx) => string;
    })
  | (Base & {
      /** Tela de entrada antes da 1ª pergunta. Não conta no progresso; o
       *  clique no botão é o QuizInicio. */
      tipo: "abertura";
      conteudo: (c: Ctx) => ReactNode;
      botao: string;
      nota?: string;
    })
  | (Base & { tipo: "carregando"; titulo: string; passos: string[] })
  | (Base & {
      tipo: "resultado";
      conteudo: (c: Ctx, refazer: () => void) => ReactNode;
      rodape: (c: Ctx) => ReactNode;
    });

export type Roteiro = {
  /** Vai nos eventos do pixel: quiz-<slug>. */
  slug: string;
  telas: Tela[];
  /** Roda uma vez ao chegar no resultado (cookie da ponte com o app, etc.). */
  aoVerResultado?: (c: Ctx) => void;
  /** Dados extras do evento de resultado no pixel. */
  dadosDoResultado?: (c: Ctx) => Record<string, string>;
};
