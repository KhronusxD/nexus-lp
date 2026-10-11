"use client";

import { useState } from "react";
import { PERGUNTAS } from "../conteudo";

export function Perguntas() {
  const [aberta, setAberta] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--border)] rounded-2xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
      {PERGUNTAS.map((q, i) => {
        const on = aberta === i;
        return (
          <div key={q.p}>
            <button
              className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
              aria-expanded={on}
              aria-controls={`resp-${i}`}
              onClick={() => setAberta(on ? null : i)}
            >
              <span className="text-[15px] font-medium text-[var(--foreground)]">{q.p}</span>
              <svg className={`w-4 h-4 shrink-0 text-[var(--foreground-subtle)] transition-transform duration-300 ${on ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <div id={`resp-${i}`} className={`grid transition-all duration-300 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-5 text-[14.5px] text-[var(--foreground-muted)] leading-relaxed max-w-2xl">{q.r}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
