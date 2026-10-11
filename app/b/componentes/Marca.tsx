/* Assinatura do Nucly: o símbolo redesenhado (o mesmo do app) + "Nucly" em
   Geist 800, -0.035em — a regra da marca desde 09/10/2026. O PNG antigo da
   página A (logo-horizontal.png) ainda é o símbolo velho. */
/* eslint-disable @next/next/no-img-element */
export function Marca({ tamanho = 28 }: { tamanho?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <img src="/nucly-simbolo-cheio.svg" alt="" width={tamanho} height={tamanho} style={{ width: tamanho, height: tamanho }} />
      <span style={{ fontWeight: 800, letterSpacing: "-0.035em", fontSize: tamanho * 0.72, lineHeight: 1 }} className="text-[var(--foreground)]">
        Nucly
      </span>
    </span>
  );
}
