"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import GlowCard from "./GlowCard";
import { APP_URL } from "../config";

const LOGO = {
  cyan:   { text: "#00CED1" },
  orange: { text: "#FF8055" },
  green:  { text: "#4ade80" },
} as const;

type Period = "mensal" | "trimestral" | "anual";

const AI_PRICING: Record<Period, {
  price: string;
  period: string;
  monthlyEquivalent?: string;
  discount?: string;
  plano: string;
  cta: string;
}> = {
  mensal: {
    price: "R$69,90",
    period: "/ mês",
    plano: "nexus_ai_mensal",
    cta: "Desbloquear o Jarbas",
  },
  trimestral: {
    price: "R$179,90",
    period: "/ 3 meses",
    monthlyEquivalent: "R$59,97/mês",
    discount: "~14% off",
    plano: "nexus_ai_trimestral",
    cta: "Assinar trimestral",
  },
  anual: {
    price: "R$599,90",
    period: "/ ano",
    monthlyEquivalent: "R$49,99/mês",
    discount: "~28% off",
    plano: "nexus_ai_anual",
    cta: "Assinar anual",
  },
};

const FREE_FEATURES = [
  "Até 3 Pilares ativos",
  "Até 3 Skills e 3 Projetos",
  "10 tarefas por projeto",
  "3 hábitos rastreados",
  "Agenda integrada",
  "Histórico de 7 dias",
];

const SISTEMA_FEATURES = [
  "Pilares, Skills, Projetos e Hábitos ilimitados",
  "Histórico completo",
  "Notas, mind maps e modo Deep Work",
  "Relatórios e exportação (LGPD)",
  "Google Calendar sync",
  "30 dias de Jarbas IA grátis (depois R$69,90 ou volta ao Sistema)",
];

const AI_FEATURES = [
  "Tudo do plano Sistema",
  "Jarbas — agente de IA permanente",
  "Nexus no seu WhatsApp (envio e resumo diário)",
  "Transcrição de áudio e análise de imagens",
  "Revisão semanal gerada por IA",
  "Comandos em linguagem natural",
  "14 dias grátis — sem cobrança no início",
];

export default function PricingSection() {
  const [period, setPeriod] = useState<Period>("mensal");
  const ai = AI_PRICING[period];

  return (
    <section id="precos" className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 lg:py-32">
      <RevealOnScroll>
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--foreground)]">
          Substitui várias assinaturas.<br />Custa menos que uma.
        </h2>
        <p className="text-center text-[var(--foreground-subtle)] mt-3 text-sm">
          Comece grátis. Evolua quando quiser.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* ── Grátis ───────────────────────── */}
        <RevealOnScroll revealClass="reveal delay-100">
          <div className="neon-border-ring rounded-2xl h-full">
            <GlowCard glow="cyan" className="rounded-2xl p-6 h-full flex flex-col glass-card">
              <div className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-widest">Grátis</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--foreground)]">R$0</span>
              </div>
              <p className="mt-1.5 text-sm text-[var(--foreground-subtle)]">Para experimentar a estrutura do Nexus.</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground-muted)]">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: LOGO.cyan.text }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/cadastro`}
                className="mt-8 w-full h-10 rounded-lg text-sm font-semibold inline-flex items-center justify-center text-[var(--foreground)] active:scale-95 transition-transform"
                style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
              >
                Criar conta grátis
              </a>
            </GlowCard>
          </div>
        </RevealOnScroll>

        {/* ── Sistema ──────────────────────── */}
        <RevealOnScroll revealClass="reveal delay-200">
          <div className="neon-border-ring rounded-2xl h-full">
            <GlowCard glow="green" className="rounded-2xl p-6 h-full flex flex-col glass-card">
              <div className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-widest">Sistema</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--foreground)]">R$29,90</span>
                <span className="text-sm text-[var(--foreground-subtle)]">/ mês</span>
              </div>
              <p className="mt-1.5 text-sm text-[var(--foreground-subtle)]">Sistema completo + 30 dias de Jarbas grátis.</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {SISTEMA_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground-muted)]">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: LOGO.green.text }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/cadastro?plano=sistema_mensal`}
                className="mt-8 w-full h-10 rounded-lg text-sm font-semibold inline-flex items-center justify-center text-[var(--foreground)] active:scale-95 transition-transform"
                style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}
              >
                Começar 30 dias grátis
              </a>
            </GlowCard>
          </div>
        </RevealOnScroll>

        {/* ── Nexus AI (com toggle) ────────── */}
        <RevealOnScroll revealClass="reveal delay-300">
          <div className="neon-border-ring rounded-2xl h-full neon-border-active">
            <GlowCard
              glow="cyan"
              className="rounded-2xl p-6 h-full flex flex-col"
              style={{
                background: "linear-gradient(145deg, rgba(0,206,209,0.06) 0%, rgba(50,205,50,0.04) 100%)",
                border: "1px solid rgba(0,206,209,0.2)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full logo-gradient-text" style={{ background: "rgba(0,206,209,0.08)", border: "1px solid rgba(0,206,209,0.25)" }}>
                  Mais escolhido
                </span>
                {ai.discount && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(74,222,128,0.1)", color: LOGO.green.text, border: "1px solid rgba(74,222,128,0.3)" }}>
                    {ai.discount}
                  </span>
                )}
              </div>

              <div className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-widest">Nexus AI</div>

              {/* Period toggle */}
              <div className="mt-3 inline-flex rounded-lg p-0.5 self-start" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)" }}>
                {(["mensal", "trimestral", "anual"] as Period[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-md transition-colors ${period === p ? "text-white" : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"}`}
                    style={period === p ? { background: "rgba(0,206,209,0.18)", color: LOGO.cyan.text } : {}}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--foreground)]">{ai.price}</span>
                <span className="text-sm text-[var(--foreground-subtle)]">{ai.period}</span>
              </div>
              {ai.monthlyEquivalent && (
                <p className="text-[11px] text-[var(--foreground-subtle)] mt-0.5">
                  equivalente a <span className="font-semibold text-[var(--foreground-muted)]">{ai.monthlyEquivalent}</span>
                </p>
              )}
              <p className="mt-1.5 text-sm text-[var(--foreground-subtle)]">O sistema completo + Jarbas permanente + WhatsApp.</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {AI_FEATURES.map((f, fi) => {
                  const colors = [LOGO.cyan.text, LOGO.green.text, LOGO.orange.text];
                  return (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground-muted)]">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors[fi % 3] }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  );
                })}
              </ul>

              <a
                href={`${APP_URL}/cadastro?plano=${ai.plano}`}
                className="mt-8 w-full h-10 rounded-lg text-sm font-semibold btn-primary-gradient text-white inline-flex items-center justify-center active:scale-95 transition-transform"
              >
                {ai.cta}
              </a>
            </GlowCard>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
