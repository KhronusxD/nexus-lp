"use client";

import { Motor } from "../_quiz/Motor";
import { ROTEIRO } from "./roteiro";
import { PERFIS, type PerfilId } from "./perfis";

/* O roteiro tem funções (falas que dependem das respostas), então mora no
   navegador; a página só passa o perfil de quem compartilhou, se houver. */
export function QuizConstancia({ convite }: { convite: PerfilId | null }) {
  const p = convite ? PERFIS[convite] : null;
  return (
    <Motor
      roteiro={ROTEIRO}
      convite={
        p && (
          <div className="q-convite">
            <span className="q-convite-ic" aria-hidden>{p.ic}</span>
            <span>
              Te mandaram o perfil <b>{p.nome}</b>. Qual é o seu?
            </span>
          </div>
        )
      }
    />
  );
}
