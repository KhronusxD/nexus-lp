"use client";

import { useEffect, useState } from "react";

/**
 * Aviso de cookies + Pixel da Meta, só depois do "Aceitar".
 *
 * Cópia do componente do app (nexus-app/components/rastreio/AvisoCookies.tsx)
 * com o visual da LP. A escolha mora no cookie `nucly_consent` do domínio
 * .nucly.com.br: aceitou aqui, o app já sabe — e o servidor do app só manda
 * conversão pra Meta (cadastro, compra) de quem aceitou.
 *
 * Eventos daqui: PageView e Lead (clique em qualquer link que leva ao
 * cadastro). Cadastro e compra são medidos no app, pelo servidor.
 */

const PIXEL_ID = "1117873707661010";
const SEIS_MESES = 60 * 60 * 24 * 180;

type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[] };
declare global {
  interface Window { fbq?: Fbq; _fbq?: Fbq }
}

function lerConsentimento(): "granted" | "denied" | null {
  const m = document.cookie.match(/(?:^|;\s*)nucly_consent=(granted|denied)/);
  return (m?.[1] as "granted" | "denied" | undefined) ?? null;
}

function gravarConsentimento(valor: "granted" | "denied") {
  const dominio = location.hostname.endsWith("nucly.com.br") ? "; domain=.nucly.com.br" : "";
  document.cookie = `nucly_consent=${valor}; path=/; max-age=${SEIS_MESES}; SameSite=Lax${dominio}${location.protocol === "https:" ? "; Secure" : ""}`;
}

function carregarPixel() {
  if (window.fbq) return;
  const fbq: Fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue!.push(args);
  } as Fbq;
  fbq.queue = [];
  Object.assign(fbq, { push: fbq, loaded: true, version: "2.0" });
  window.fbq = fbq;
  window._fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

/** Lead no clique de qualquer link pro cadastro — sem mexer em cada botão. */
function ouvirCliquesDeCadastro() {
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    if (!a || !a.href.includes("/cadastro")) return;
    const plano = new URL(a.href).searchParams.get("plano") ?? "gratuito";
    window.fbq?.("track", "Lead", { content_name: plano });
  }, true);
}

export function AvisoCookies() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const c = lerConsentimento();
    if (c === "granted") { carregarPixel(); ouvirCliquesDeCadastro(); }
    else if (c === null) setMostrar(true);
  }, []);

  if (!mostrar) return null;

  function decidir(valor: "granted" | "denied") {
    gravarConsentimento(valor);
    setMostrar(false);
    if (valor === "granted") { carregarPixel(); ouvirCliquesDeCadastro(); }
  }

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, display: "flex", justifyContent: "center", padding: "0 16px calc(16px + env(safe-area-inset-bottom))", pointerEvents: "none" }}
    >
      <div
        style={{ pointerEvents: "auto", width: "100%", maxWidth: 580, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, padding: 16, borderRadius: 14, background: "rgba(20,20,24,0.96)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 18px 50px -12px rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}
      >
        <p style={{ flex: "1 1 260px", margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.68)" }}>
          Usamos cookies da Meta pra medir de onde vêm os cadastros e melhorar nossos anúncios. Recusar não muda nada no seu acesso.{" "}
          <a href="https://app.nucly.com.br/privacidade" style={{ color: "#fff", textDecoration: "underline" }}>Política de privacidade</a>
        </p>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <button
            onClick={() => decidir("denied")}
            style={{ padding: "7px 14px", borderRadius: 10, fontSize: 12.5, fontWeight: 500, color: "rgba(255,255,255,0.75)", background: "transparent", border: "1px solid rgba(255,255,255,0.14)", cursor: "pointer" }}
          >
            Recusar
          </button>
          <button
            onClick={() => decidir("granted")}
            style={{ padding: "7px 14px", borderRadius: 10, fontSize: 12.5, fontWeight: 600, color: "#07140a", background: "#32CD32", border: "none", cursor: "pointer" }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
