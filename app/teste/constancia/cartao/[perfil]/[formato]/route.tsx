import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PERFIS, ehPerfil } from "../../../perfis";
import { Simbolo } from "../../../../_quiz/simbolos";

/* Imagem do perfil pra compartilhar: "story" (1080x1920, vai junto no
   compartilhar do celular) e "og" (1200x630, a prévia do link). Gerada no
   build, uma por perfil + a "geral" do teste — sem custo por acesso. */

export const dynamicParams = false;

const FORMATOS = { story: [1080, 1920], og: [1200, 630] } as const;

export function generateStaticParams() {
  const perfis = [...Object.keys(PERFIS), "geral"];
  return perfis.flatMap((perfil) => Object.keys(FORMATOS).map((formato) => ({ perfil, formato })));
}

/** Geist inteira do Google Fonts, num peso. Recortar só as letras do título
 *  misturava pesos no meio das palavras ("ç" e números em outro peso). */
async function geist(peso: 400 | 800): Promise<{ name: string; data: ArrayBuffer; weight: 400 | 800; style: "normal" } | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Geist:wght@${peso}`)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return null;
    const r = await fetch(src[1]);
    return r.ok ? { name: "Geist", data: await r.arrayBuffer(), weight: peso, style: "normal" } : null;
  } catch {
    return null;
  }
}

export async function GET(_req: Request, { params }: { params: Promise<{ perfil: string; formato: string }> }) {
  const { perfil, formato } = await params;
  const [largura, altura] = FORMATOS[formato as keyof typeof FORMATOS] ?? FORMATOS.og;
  const story = formato === "story";
  const p = ehPerfil(perfil) ? PERFIS[perfil] : null;
  const cor = p?.cor ?? "#32CD32";

  const simbolo = `data:image/svg+xml;base64,${(await readFile(path.join(process.cwd(), "public/nucly-simbolo-cheio.svg"))).toString("base64")}`;

  const sobre = p ? "MEU PERFIL DE CONSTÂNCIA" : "TESTE DE CONSTÂNCIA · 60 SEGUNDOS";
  const titulo = p ? p.nome : "Por que você larga tudo na 2ª semana?";
  const frase = p ? p.frase : "Descubra seu perfil e saia com o primeiro hábito montado.";
  const chamada = p ? "Descubra o seu em 60 segundos" : "Faça o teste grátis";
  const fontes = (await Promise.all([geist(400), geist(800)])).filter((f) => f !== null);

  const s = story ? 1 : 0.62; // escala dos textos no formato horizontal

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: story ? "140px 96px 130px" : "64px 72px",
          background: `radial-gradient(120% 70% at 10% 0%, ${cor}55, transparent 60%), #0b0b0d`,
          color: "#f3f3f5",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={simbolo} width={story ? 76 : 52} height={story ? 76 : 52} alt="" />
          <span style={{ fontSize: story ? 56 : 38, fontWeight: 800, letterSpacing: "-0.035em" }}>Nucly</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 34 * s + (story ? 0 : 6), letterSpacing: "0.14em", color: cor, fontWeight: 800 }}>{sobre}</span>
          {p && (
            <div style={{ display: "flex", marginTop: story ? 40 : 18 }}>
              <Simbolo nome={p.simbolo} tamanho={story ? 170 : 100} cor={cor} traco={1.8} />
            </div>
          )}
          <span
            style={{
              fontSize: p ? (story ? 150 : 96) : story ? 112 : 70,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              marginTop: story ? 36 : 14,
            }}
          >
            {titulo}
          </span>
          <span style={{ fontSize: story ? 54 : 32, lineHeight: 1.3, marginTop: story ? 36 : 16, color: "rgba(243,243,245,0.78)" }}>{frase}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: story ? 14 : 6 }}>
          <span style={{ fontSize: story ? 46 : 28, color: "rgba(243,243,245,0.85)" }}>{chamada}</span>
          <span style={{ fontSize: story ? 46 : 28, color: "#4ade80", fontWeight: 800 }}>nucly.com.br/teste/constancia</span>
        </div>
      </div>
    ),
    {
      width: largura,
      height: altura,
      fonts: fontes.length ? fontes : undefined,
    },
  );
}
