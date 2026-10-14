import type { CSSProperties } from "react";

/* Símbolos do quiz — no lugar dos emojis (pedido do Ed em 14/10/2026). São os
   mesmos desenhos do app (nexus/components/ui/Symbol.tsx), que vêm do Lucide
   (licença ISC, © Lucide Contributors): copiados aqui pra não puxar o pacote
   inteiro pra página. Traço, sem preenchimento, na cor do texto. Funciona
   também na imagem de compartilhar (next/og). */

const DESENHOS = {
  chama: [["path", {"d":"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]],
  meio: [["circle", {"cx":"12","cy":"12","r":"10"}], ["path", {"d":"M12 18a6 6 0 0 0 0-12v12z"}]],
  despertador: [["circle", {"cx":"12","cy":"13","r":"8"}], ["path", {"d":"M12 9v4l2 2"}], ["path", {"d":"M5 3 2 6"}], ["path", {"d":"m22 6-3-3"}], ["path", {"d":"M6.38 18.7 4 21"}], ["path", {"d":"M17.64 18.67 20 21"}]],
  camadas: [["path", {"d":"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}], ["path", {"d":"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}], ["path", {"d":"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]],
  haltere: [["path", {"d":"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}], ["path", {"d":"m2.5 21.5 1.4-1.4"}], ["path", {"d":"m20.1 3.9 1.4-1.4"}], ["path", {"d":"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}], ["path", {"d":"m9.6 14.4 4.8-4.8"}]],
  livro: [["path", {"d":"M12 7v14"}], ["path", {"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]],
  idiomas: [["path", {"d":"m5 8 6 6"}], ["path", {"d":"m4 14 6-6 2-3"}], ["path", {"d":"M2 5h12"}], ["path", {"d":"M7 2h1"}], ["path", {"d":"m22 22-5-10-5 10"}], ["path", {"d":"M14 18h6"}]],
  salada: [["path", {"d":"M7 21h10"}], ["path", {"d":"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}], ["path", {"d":"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}], ["path", {"d":"m13 12 4-4"}], ["path", {"d":"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]],
  flor: [["path", {"d":"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}], ["circle", {"cx":"12","cy":"8","r":"2"}], ["path", {"d":"M12 10v12"}], ["path", {"d":"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}], ["path", {"d":"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]],
  amanhecer: [["path", {"d":"M12 2v8"}], ["path", {"d":"m4.93 10.93 1.41 1.41"}], ["path", {"d":"M2 18h2"}], ["path", {"d":"M20 18h2"}], ["path", {"d":"m19.07 10.93-1.41 1.41"}], ["path", {"d":"M22 22H2"}], ["path", {"d":"m8 6 4-4 4 4"}], ["path", {"d":"M16 18a4 4 0 0 0-8 0"}]],
  foguete: [["path", {"d":"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}], ["path", {"d":"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"}], ["path", {"d":"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"}], ["path", {"d":"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"}]],
  grafico: [["path", {"d":"M3 3v16a2 2 0 0 0 2 2h16"}], ["path", {"d":"M18 17V9"}], ["path", {"d":"M13 17V5"}], ["path", {"d":"M8 17v-3"}]],
  sino: [["path", {"d":"M10.268 21a2 2 0 0 0 3.464 0"}], ["path", {"d":"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]],
  trofeu: [["path", {"d":"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"}], ["path", {"d":"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"}], ["path", {"d":"M18 9h1.5a1 1 0 0 0 0-5H18"}], ["path", {"d":"M4 22h16"}], ["path", {"d":"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"}], ["path", {"d":"M6 9H4.5a1 1 0 0 1 0-5H6"}]],
  broto: [["path", {"d":"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"}], ["path", {"d":"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"}], ["path", {"d":"M5 21h14"}]],
  calendario: [["path", {"d":"M8 2v4"}], ["path", {"d":"M16 2v4"}], ["rect", {"width":"18","height":"18","x":"3","y":"4","rx":"2"}], ["path", {"d":"M3 10h18"}], ["path", {"d":"M8 14h.01"}], ["path", {"d":"M12 14h.01"}], ["path", {"d":"M16 14h.01"}], ["path", {"d":"M8 18h.01"}], ["path", {"d":"M12 18h.01"}], ["path", {"d":"M16 18h.01"}]],
  conversa: [["path", {"d":"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]],
  alvo: [["circle", {"cx":"12","cy":"12","r":"10"}], ["circle", {"cx":"12","cy":"12","r":"6"}], ["circle", {"cx":"12","cy":"12","r":"2"}]],
} as const;

export type NomeSimbolo = keyof typeof DESENHOS;

export function Simbolo({ nome, tamanho = 20, cor = "currentColor", traco = 2, style }: { nome: NomeSimbolo; tamanho?: number; cor?: string; traco?: number; style?: CSSProperties }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke={cor}
      strokeWidth={traco}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ flex: "0 0 auto", ...style }}
    >
      {DESENHOS[nome].map(([tag, attrs], i) => {
        if (tag === "circle") return <circle key={i} {...(attrs as Record<string, string>)} />;
        if (tag === "rect") return <rect key={i} {...(attrs as Record<string, string>)} />;
        return <path key={i} {...(attrs as Record<string, string>)} />;
      })}
    </svg>
  );
}
