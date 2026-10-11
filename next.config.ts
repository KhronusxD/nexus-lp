import type { NextConfig } from "next";
import path from "path";

// Raiz FIXA do projeto. Um package-lock.json solto em ~ já fez o Next achar
// que o projeto era a pasta de usuário inteira e vigiar tudo — travou o Mac
// de 16 GB em 10/10/2026. `import.meta.dirname` não serve: o Next transpila
// o config e o valor se perde. O npm roda o script com o cwd na pasta do projeto.
const RAIZ = path.resolve(process.cwd());
// A trava só vale no Mac (na Vercel a pasta é /vercel/path0).
if (!process.env.VERCEL && !RAIZ.endsWith("/nexus-lp")) throw new Error(`raiz inesperada: ${RAIZ}`);

const nextConfig: NextConfig = {
  turbopack: { root: RAIZ },
  outputFileTracingRoot: RAIZ,
  // Uma política só: a do app. O Google exige que a página inicial aponte pra
  // MESMA política da tela de permissão do OAuth, e as cópias daqui ficaram
  // paradas na marca Nexus. Links antigos e buscadores caem na versão viva.
  async redirects() {
    return [
      { source: "/privacidade", destination: "https://app.nucly.com.br/privacidade", permanent: true },
      { source: "/termos", destination: "https://app.nucly.com.br/termos", permanent: true },
      // A versão B virou a home em 11/10/2026; /b foi o endereço de teste
      { source: "/b", destination: "/", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
