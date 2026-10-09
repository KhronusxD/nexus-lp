import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uma política só: a do app. O Google exige que a página inicial aponte pra
  // MESMA política da tela de permissão do OAuth, e as cópias daqui ficaram
  // paradas na marca Nexus. Links antigos e buscadores caem na versão viva.
  async redirects() {
    return [
      { source: "/privacidade", destination: "https://app.nucly.com.br/privacidade", permanent: true },
      { source: "/termos", destination: "https://app.nucly.com.br/termos", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
