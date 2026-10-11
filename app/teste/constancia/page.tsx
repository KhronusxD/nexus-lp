import type { Metadata } from "next";
import { SITE_URL } from "../../config";
import { PERFIS, ehPerfil } from "./perfis";
import { QuizConstancia } from "./QuizConstancia";

/* Teste de constância — porta de entrada de quem "começa e larga".
   Com ?perfil=fogo (link compartilhado) a prévia mostra o perfil de quem
   mandou, e o teste abre com um convite. */

type Props = { searchParams: Promise<{ perfil?: string }> };

const URL_TESTE = `${SITE_URL}/teste/constancia`;
const TITULO = "Por que você larga tudo na 2ª semana? · Teste de constância";
const DESCRICAO = "Descubra seu perfil de constância em 60 segundos e saia com o primeiro hábito montado. Grátis.";

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { perfil } = await searchParams;
  const p = ehPerfil(perfil) ? PERFIS[perfil] : null;
  const titulo = p ? `Meu perfil de constância: ${p.nome} ${p.ic}` : TITULO;
  const imagem = `/teste/constancia/cartao/${p ? perfil : "geral"}/og`;
  return {
    title: titulo,
    description: DESCRICAO,
    alternates: { canonical: URL_TESTE },
    openGraph: { type: "website", locale: "pt_BR", url: URL_TESTE, title: titulo, description: DESCRICAO, siteName: "Nucly", images: [{ url: imagem, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: titulo, description: DESCRICAO, images: [imagem] },
  };
}

export default async function TesteConstancia({ searchParams }: Props) {
  const { perfil } = await searchParams;
  return <QuizConstancia convite={ehPerfil(perfil) ? perfil : null} />;
}
