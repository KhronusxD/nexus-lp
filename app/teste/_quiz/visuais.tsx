import type { ReactNode } from "react";
import { Simbolo } from "./simbolos";

/* Um elemento animado por fala: texto sozinho não segura atenção (lição do
   Desafio 28). Tudo aqui imita o que o app faz de verdade — as mensagens do
   WhatsApp são as de lib/whatsapp/message-templates.ts (habitCheck e
   habitPositive). */

const DIAS = ["S", "T", "Q", "Q", "S", "S", "D"];

/** Barra de XP da habilidade enchendo. 1 h = 100 XP (lib/xp.ts). */
export function VisualXp({ habilidade, nivel = 2, ganho = 25 }: { habilidade: string; nivel?: number; ganho?: number }) {
  return (
    <div className="v-caixa">
      <div className="v-linha">
        <span className="v-rotulo">{habilidade} · nível {nivel}</span>
        <span className="v-ganho">+{ganho} XP</span>
      </div>
      <div className="v-trilho">
        <div className="v-enche" style={{ width: "68%", ["--de" as string]: 0.6 }} />
      </div>
      <div className="v-linha" style={{ marginTop: 8 }}>
        <span className="v-fraco">Faltam 90 XP pro nível {nivel + 1}</span>
        <span className="v-fraco v-com-simbolo"><Simbolo nome="chama" tamanho={13} cor="#f59e0b" /> 4 dias</span>
      </div>
    </div>
  );
}

/** A semana em bolinhas. `falhou` marca o dia que furou. */
export function VisualSemana({ falhou, legenda }: { falhou?: number; legenda: ReactNode }) {
  return (
    <div className="v-caixa">
      <div className="v-dias">
        {DIAS.map((d, i) => (
          <div key={i} className="v-dia">
            <span className={`v-bola ${i === falhou ? "falhou" : "feito"}`} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
              {i === falhou ? "–" : "✓"}
            </span>
            {d}
          </div>
        ))}
      </div>
      <p className="v-fraco" style={{ margin: "14px 0 0", lineHeight: 1.45 }}>{legenda}</p>
    </div>
  );
}

/** A pergunta das 21h no WhatsApp, com as mensagens reais do Jarvis
 *  (habitCheck, habitPositive e habitNegative). */
export function VisualWhats({ habito, resposta = "sim" }: { habito: string; resposta?: "sim" | "não" }) {
  return (
    <div className="v-caixa v-conversa">
      <span className="v-hora">21:00</span>
      <span className="v-balao jarvis" style={{ animationDelay: "0.3s" }}>
        🎯 E aí, fez <b>{habito}</b> hoje? Manda <b>sim</b> ou <b>não</b>.
      </span>
      <span className="v-balao voce" style={{ animationDelay: "1.1s" }}>{resposta}</span>
      <span className="v-balao jarvis" style={{ animationDelay: "1.8s" }}>
        {resposta === "sim" ? (
          <>🔥 Mandou! <b>{habito}</b> feito. Streak de <b>5</b> dias 🔥</>
        ) : (
          <>Tranquilo, <b>{habito}</b> fica pra amanhã. Sem stress 🌱</>
        )}
      </span>
    </div>
  );
}

/** Várias metas apagando e uma ficando. */
export function VisualPilha({ itens, fica }: { itens: string[]; fica: string[] }) {
  return (
    <div className="v-caixa">
      <div className="v-pilha">
        {itens.map((t, i) => (
          <span key={t} className={`v-chip${fica.includes(t) ? " fica" : ""}`} style={{ animationDelay: `${0.4 + i * 0.15}s` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
