import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
