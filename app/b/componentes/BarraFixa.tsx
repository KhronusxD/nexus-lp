"use client";

import { useEffect, useState } from "react";
import { LINKS } from "../conteudo";

/* Celular: depois que o botão do topo sai da tela, o "Testar grátis" fica
   preso embaixo. Some de novo no fechamento, que já tem o próprio botão. */
export function BarraFixa() {
  const [passouTopo, setPassouTopo] = useState(false);
  const [noFim, setNoFim] = useState(false);

  useEffect(() => {
    const topo = document.getElementById("fim-do-topo");
    const fim = document.getElementById("fechamento");
    const obs: IntersectionObserver[] = [];
    if (topo) {
      const o = new IntersectionObserver(([e]) => setPassouTopo(!e.isIntersecting && e.boundingClientRect.top < 0));
      o.observe(topo);
      obs.push(o);
    }
    if (fim) {
      const o = new IntersectionObserver(([e]) => setNoFim(e.isIntersecting), { threshold: 0.15 });
      o.observe(fim);
      obs.push(o);
    }
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const mostrar = passouTopo && !noFim;

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 px-3 transition-transform duration-300"
      style={{
        transform: mostrar ? "translateY(0)" : "translateY(120%)",
        paddingBottom: "calc(10px + env(safe-area-inset-bottom, 0px))",
      }}
      aria-hidden={!mostrar}
    >
      <div className="flex items-center gap-3 rounded-2xl p-2.5 pl-4" style={{ background: "rgba(17,17,20,0.94)", border: "1px solid var(--border)", backdropFilter: "blur(14px)", boxShadow: "0 -10px 40px -10px rgba(0,0,0,0.7)" }}>
        <span className="flex-1 min-w-0 leading-tight">
          <span className="block text-[14px] font-semibold text-[var(--foreground)]">7 dias grátis</span>
          <span className="block text-[12px] text-[var(--foreground-subtle)]">sem cartão</span>
        </span>
        <a href={LINKS.teste} tabIndex={mostrar ? 0 : -1} className="btn-primary-gradient h-11 px-5 rounded-xl inline-flex items-center text-[14px] font-semibold text-white">
          Começar
        </a>
      </div>
    </div>
  );
}
