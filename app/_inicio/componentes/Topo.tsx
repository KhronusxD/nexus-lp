"use client";

import { useEffect, useState } from "react";
import { Marca } from "./Marca";
import { LINKS } from "../conteudo";

const ITENS = [
  { rotulo: "Como funciona", href: "#como-funciona" },
  { rotulo: "Jarvis", href: "#jarvis" },
  { rotulo: "Preços", href: "#precos" },
  { rotulo: "Perguntas", href: "#perguntas" },
];

/* Barra do topo: some o fundo enquanto está no alto da página e ganha vidro
   quando rola — o print do topo aparece inteiro na primeira tela. */
export function Topo() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const ver = () => setRolou(window.scrollY > 12);
    ver();
    window.addEventListener("scroll", ver, { passive: true });
    return () => window.removeEventListener("scroll", ver);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div
        className="mx-auto max-w-6xl px-4 md:px-6 transition-all duration-300"
        style={{ paddingTop: rolou ? 10 : 18 }}
      >
        <nav
          aria-label="Principal"
          className="flex h-14 items-center justify-between rounded-2xl px-4 md:px-5 transition-colors duration-300"
          style={{
            background: rolou || aberto ? "rgba(17,17,20,0.82)" : "transparent",
            border: `1px solid ${rolou || aberto ? "var(--border)" : "transparent"}`,
            backdropFilter: rolou || aberto ? "blur(14px)" : undefined,
          }}
        >
          <a href="#" aria-label="Nucly — início">
            <Marca />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {ITENS.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
                {i.rotulo}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={LINKS.entrar} className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
              Entrar
            </a>
            <a href={LINKS.teste} className="btn-primary-gradient text-white text-sm font-semibold px-4 h-9 rounded-lg inline-flex items-center active:scale-95">
              Testar grátis
            </a>
          </div>

          <button
            className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center text-[var(--foreground-muted)]"
            onClick={() => setAberto((a) => !a)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {aberto
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {aberto && (
          <div className="md:hidden mt-2 rounded-2xl p-2" style={{ background: "rgba(17,17,20,0.96)", border: "1px solid var(--border)", backdropFilter: "blur(14px)" }}>
            {ITENS.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setAberto(false)} className="block px-3 py-3 rounded-lg text-[15px] text-[var(--foreground)] hover:bg-[var(--surface-2)]">
                {i.rotulo}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 p-1 pt-2">
              <a href={LINKS.entrar} className="h-11 rounded-lg inline-flex items-center justify-center text-sm font-medium text-[var(--foreground)]" style={{ border: "1px solid var(--border)" }}>
                Entrar
              </a>
              <a href={LINKS.teste} className="btn-primary-gradient h-11 rounded-lg inline-flex items-center justify-center text-sm font-semibold text-white">
                Testar grátis
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
