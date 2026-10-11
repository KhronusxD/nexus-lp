"use client";

import { useEffect, useRef, useState } from "react";
import { Celular, Balao, ZAP } from "./Celular";
import { PEDIDOS } from "../conteudo";

const DIGITANDO_MS = 900;
const TROCA_MS = 5200;

/* Toque num pedido e veja o Jarvis responder. Sozinha, a demonstração passa
   pelos pedidos em ordem; depois que a pessoa toca, para de trocar — quem
   está lendo não pode ter a resposta arrancada da tela. */
export function DemoJarvis() {
  // Trocar de pedido e começar a "digitar" é uma mudança só
  const [{ atual, digitando }, setEstado] = useState({ atual: 0, digitando: true });
  const [tocou, setTocou] = useState(false);
  const ir = (i: number) => setEstado({ atual: i, digitando: true });
  const visivel = useRef(false);
  const raiz = useRef<HTMLDivElement>(null);

  // Só anda quando a seção está na tela
  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { visivel.current = e.isIntersecting }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!digitando) return;
    const t = setTimeout(() => setEstado((e) => ({ ...e, digitando: false })), DIGITANDO_MS);
    return () => clearTimeout(t);
  }, [atual, digitando]);

  useEffect(() => {
    if (tocou) return;
    const t = setInterval(() => {
      if (visivel.current) setEstado((e) => ({ atual: (e.atual + 1) % PEDIDOS.length, digitando: true }));
    }, TROCA_MS);
    return () => clearInterval(t);
  }, [tocou]);

  const p = PEDIDOS[atual];

  return (
    <div ref={raiz} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
      <div className="max-w-xl">
        <p className="text-[13px] font-medium text-[var(--foreground-subtle)] mb-3">Toque num pedido:</p>
        <div className="flex flex-col gap-2" role="tablist" aria-label="Pedidos de exemplo">
          {PEDIDOS.map((x, i) => {
            const ativo = i === atual;
            return (
              <button
                key={x.pedido}
                role="tab"
                aria-selected={ativo}
                onClick={() => { setTocou(true); ir(i); }}
                className="group w-full text-left rounded-xl px-4 py-3.5 transition-all duration-200 flex items-center gap-3"
                style={{
                  background: ativo ? "rgba(50,205,50,0.08)" : "var(--surface)",
                  border: `1px solid ${ativo ? "rgba(50,205,50,0.35)" : "var(--border)"}`,
                }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[13px]"
                  style={{ background: ativo ? "#00a884" : "var(--surface-3)", color: "#fff" }}
                  aria-hidden
                >
                  {ativo ? "▸" : i + 1}
                </span>
                <span className={`text-[15px] ${ativo ? "text-[var(--foreground)] font-medium" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"}`}>
                  “{x.pedido}”
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-5 text-[13.5px] text-[var(--foreground-muted)] leading-relaxed max-w-md">
          No plano <span className="text-[var(--foreground)] font-medium">Nucly AI</span> você também manda <span className="text-[var(--foreground)] font-medium">áudio</span> — ele transcreve e faz — e <span className="text-[var(--foreground)] font-medium">foto</span>.
        </p>
      </div>

      <div className="flex justify-center">
        <Celular largura={300}>
          {/* As duas conversas anteriores ficam em cima, mais apagadas */}
          {[2, 1].map((volta) => {
            const q = PEDIDOS[(atual - volta + PEDIDOS.length) % PEDIDOS.length];
            return (
              <div key={`${atual}-${volta}`} className="flex flex-col gap-1.5 mb-1.5" style={{ opacity: 0.55 }}>
                <Balao m={{ de: "voce", texto: q.pedido }} />
                <Balao m={{ de: "jarvis", texto: q.resposta }} />
              </div>
            );
          })}
          <div key={atual} className="flex flex-col gap-1.5">
            <Balao m={{ de: "voce", texto: p.pedido }} animar />
            {digitando ? (
              <div className="flex justify-start balao-entra" style={{ animationDelay: "250ms" }}>
                <div className="px-3 py-2.5 rounded-lg inline-flex gap-1" style={{ background: ZAP.recebida, borderTopLeftRadius: 2 }} aria-label="digitando">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full digitando-ponto" style={{ background: ZAP.sutil, animationDelay: `${i * 160}ms` }} />
                  ))}
                </div>
              </div>
            ) : (
              <Balao m={{ de: "jarvis", texto: p.resposta }} animar />
            )}
          </div>
        </Celular>
      </div>

      {/* Leitor de tela: a resposta inteira, sem depender da animação */}
      <p className="sr-only" aria-live="polite">Jarvis responde: {p.resposta}</p>
    </div>
  );
}
