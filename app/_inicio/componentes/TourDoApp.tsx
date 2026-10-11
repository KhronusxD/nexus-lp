"use client";

import Image from "next/image";
import { useState } from "react";
import { TELAS } from "../conteudo";

/* Uma tela por vez, em vez de oito prints soltos: a pessoa escolhe o que
   quer ver e lê a frase daquela tela. */
export function TourDoApp() {
  const [atual, setAtual] = useState(TELAS[0].id);
  const t = TELAS.find((x) => x.id === atual) ?? TELAS[0];

  return (
    <div>
      <div className="-mx-4 px-4 overflow-x-auto rolagem-oculta">
        <div role="tablist" aria-label="Telas do Nucly" className="inline-flex gap-1.5 p-1 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          {TELAS.map((x) => {
            const ativa = x.id === atual;
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={ativa}
                aria-controls="tour-tela"
                onClick={() => setAtual(x.id)}
                className="shrink-0 px-3.5 h-9 rounded-lg text-[13.5px] font-medium whitespace-nowrap transition-colors"
                style={ativa
                  ? { background: "var(--surface-3)", color: "var(--foreground)" }
                  : { color: "var(--foreground-muted)" }}
              >
                {x.aba}
              </button>
            );
          })}
        </div>
      </div>

      <div id="tour-tela" role="tabpanel" className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-6 lg:gap-10 items-center">
        <div className="lg:order-1 order-2">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--foreground)] text-balance">{t.titulo}</h3>
          <p className="mt-2 text-[15px] text-[var(--foreground-muted)] leading-relaxed">{t.texto}</p>
        </div>
        <div className="lg:order-2 order-1 rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8)" }}>
          <div className="flex items-center gap-1.5 px-3.5 py-2.5" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }} aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
            <span className="mx-auto text-[11px] text-[var(--foreground-subtle)]">app.nucly.com.br</span>
          </div>
          <Image
            key={t.id}
            src={t.print}
            alt={t.alt}
            width={2880}
            height={1800}
            sizes="(min-width: 1024px) 760px, 100vw"
            className="w-full h-auto block tour-entra"
          />
        </div>
      </div>
    </div>
  );
}
