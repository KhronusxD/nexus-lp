/* Peças comuns aos quizzes de entrada. Só navegador. */

type Fbq = (...args: unknown[]) => void;

/** Evento no pixel — só sai se a pessoa aceitou os cookies (o pixel só carrega aí). */
export function rastrear(evento: string, dados: Record<string, unknown>) {
  try {
    (window as unknown as { fbq?: Fbq }).fbq?.("trackCustom", evento, dados);
  } catch {}
}

/** O que o quiz deixa pronto no app. O app lê em lib/quiz-entrada.ts. */
export type Ponte = {
  v: 1;
  quiz: string;
  nome: string;
  perfil: string;
  /** Nomes dos pilares sugeridos (os do app: Saúde, Aprendizado, Carreira…). */
  pilares: string[];
  habito: { nome: string; icone: string; habilidade: string; pilar: string; minutos: number | null };
};

/**
 * Cookie do domínio .nucly.com.br: a página (nucly.com.br) grava, o app
 * (app.nucly.com.br) lê no cadastro e nos primeiros passos. Guarda só as
 * respostas que a própria pessoa deu, pra montar a conta dela — dura 7 dias.
 */
export function gravarPonte(dados: Ponte) {
  try {
    const valor = encodeURIComponent(JSON.stringify(dados));
    const dominio = location.hostname.endsWith("nucly.com.br") ? "; domain=.nucly.com.br" : "";
    const seguro = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `nucly_quiz=${valor}; path=/; max-age=${7 * 24 * 60 * 60}; SameSite=Lax${dominio}${seguro}`;
  } catch {}
}
