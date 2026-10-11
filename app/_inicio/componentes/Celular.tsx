/* eslint-disable @next/next/no-img-element */
import type { Mensagem } from "../conteudo";

/* Cores do WhatsApp no modo escuro — a conversa tem que ser reconhecida de
   longe como "é no meu WhatsApp", não como um chat qualquer. */
export const ZAP = {
  fundo: "#0b141a",
  barra: "#1f2c34",
  enviada: "#005c4b",
  recebida: "#1f2c34",
  texto: "#e9edef",
  sutil: "#8696a0",
  azul: "#53bdeb",
};

export function Balao({ m, animar, atraso = 0 }: { m: Mensagem; animar?: boolean; atraso?: number }) {
  const minha = m.de === "voce";
  return (
    <div className={`flex ${minha ? "justify-end" : "justify-start"} ${animar ? "balao-entra" : ""}`} style={animar ? { animationDelay: `${atraso}ms` } : undefined}>
      <div
        className="relative max-w-[82%] px-2.5 pt-1.5 pb-1 text-[13px] leading-[1.35] whitespace-pre-line"
        style={{
          background: minha ? ZAP.enviada : ZAP.recebida,
          color: ZAP.texto,
          borderRadius: 8,
          borderTopRightRadius: minha ? 2 : 8,
          borderTopLeftRadius: minha ? 8 : 2,
        }}
      >
        {m.texto}
        <span className="float-right ml-2 mt-1.5 -mb-0.5 text-[10px] inline-flex items-center gap-0.5" style={{ color: ZAP.sutil }}>
          07:02
          {minha && (
            <svg width="15" height="10" viewBox="0 0 16 11" aria-hidden><path d="M11.07.65 4.73 7.3 2.1 4.6.97 5.72l3.76 3.86 7.47-7.8L11.07.65Zm3.84 0L8.57 7.3l-.6-.62-1.12 1.17 1.72 1.77 7.47-7.8L14.91.65Z" fill={ZAP.azul} /></svg>
          )}
        </span>
      </div>
    </div>
  );
}

/** Um celular com a conversa do Jarvis no WhatsApp. `children` substitui a
    conversa fixa (a demonstração interativa usa isso). */
export function Celular({ mensagens = [], children, largura = 280, animar = false }: {
  mensagens?: Mensagem[]
  children?: React.ReactNode
  largura?: number
  animar?: boolean
}) {
  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width: largura,
        maxWidth: "100%",
        aspectRatio: "9 / 18.5",
        borderRadius: largura * 0.15,
        padding: largura * 0.035,
        background: "linear-gradient(160deg, #3a3a42, #17171b 40%, #26262c)",
        boxShadow: "0 40px 90px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden flex flex-col" style={{ borderRadius: largura * 0.12, background: ZAP.fundo }}>
        {/* Barra de status + ilha */}
        <div className="relative flex items-center justify-between px-6 pt-2.5 pb-1 text-[11px] font-semibold" style={{ color: ZAP.texto }}>
          <span>07:02</span>
          <span className="absolute left-1/2 top-2 -translate-x-1/2 h-[18px] w-[72px] rounded-full bg-black" />
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="10" viewBox="0 0 18 12" aria-hidden><path fill="currentColor" d="M1 9h2v3H1zM5 7h2v5H5zM9 4h2v8H9zM13 1h2v11h-2z" /></svg>
            <svg width="20" height="10" viewBox="0 0 24 12" aria-hidden><rect x="0.5" y="0.5" width="20" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5" /><rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" /></svg>
          </span>
        </div>

        {/* Cabeçalho da conversa */}
        <div className="flex items-center gap-2.5 px-3 py-2" style={{ background: ZAP.barra }}>
          <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden><path d="M8 1 2 8l6 7" stroke={ZAP.texto} strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
          <span className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center" style={{ background: "#0e0e10" }}>
            <img src="/nucly-simbolo-cheio.svg" alt="" className="w-[26px] h-[26px]" />
          </span>
          <span className="flex-1 min-w-0 leading-tight">
            <span className="block text-[13.5px] font-semibold" style={{ color: ZAP.texto }}>Jarvis</span>
            <span className="block text-[11px]" style={{ color: ZAP.sutil }}>Nucly · online</span>
          </span>
        </div>

        {/* Conversa */}
        <div
          className="flex-1 flex flex-col justify-end gap-1.5 px-2.5 py-3 overflow-hidden"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
        >
          {children ?? mensagens.map((m, i) => <Balao key={i} m={m} animar={animar} atraso={400 + i * 650} />)}
        </div>

        {/* Campo de mensagem */}
        <div className="flex items-center gap-2 px-2 pb-4 pt-1.5">
          <div className="flex-1 h-9 rounded-full px-4 flex items-center text-[13px]" style={{ background: ZAP.barra, color: ZAP.sutil }}>
            Mensagem
          </div>
          <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#00a884" }}>
            <svg width="14" height="18" viewBox="0 0 14 20" aria-hidden><rect x="3.5" y="1" width="7" height="12" rx="3.5" fill="#fff" /><path d="M1 9.5a6 6 0 0 0 12 0M7 15.5V19" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
}
