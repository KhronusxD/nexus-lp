import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Nexus",
  description: "Saiba como o Nexus coleta, usa e protege seus dados pessoais.",
};

const LAST_UPDATED = "22 de março de 2026";
const CONTACT_EMAIL = "privacidade@nexus.so";
const APP_NAME = "Nexus";
const COMPANY = "Nexus";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e8e8f0]">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-horizontal.png" alt="Nexus" className="h-7 w-auto" />
          </Link>
          <Link href="/termos" className="text-xs text-[#9898b0] hover:text-[#e8e8f0] transition-colors">
            Termos de Uso →
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
          <p className="text-sm text-[#9898b0]">Última atualização: {LAST_UPDATED}</p>
        </div>

        <div className="prose-legal">

          <Section title="1. Quem somos">
            <p>
              O <strong>{APP_NAME}</strong> é uma plataforma de produtividade pessoal desenvolvida e operada por <strong>{COMPANY}</strong>.
              Nesta política, "nós", "nosso" ou "{APP_NAME}" referem-se à empresa. "Você" ou "usuário" refere-se a qualquer pessoa que acesse ou utilize nossos serviços.
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar o {APP_NAME} e seus serviços associados.
            </p>
          </Section>

          <Section title="2. Dados que coletamos">
            <Subsection title="2.1 Dados fornecidos por você">
              <ul>
                <li><strong>Conta:</strong> nome completo, endereço de e-mail e senha (armazenada de forma criptografada).</li>
                <li><strong>Conteúdo:</strong> pilares, hábitos, projetos, tarefas, notas, eventos de calendário e demais informações que você inserir no app.</li>
                <li><strong>Preferências:</strong> configurações de tema, cor de destaque, fuso horário e notificações.</li>
              </ul>
            </Subsection>
            <Subsection title="2.2 Dados coletados automaticamente">
              <ul>
                <li><strong>Dados de uso:</strong> páginas acessadas, funcionalidades utilizadas, horários de acesso e frequência de uso.</li>
                <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional e identificadores de dispositivo.</li>
                <li><strong>Cookies e tecnologias similares:</strong> utilizados para manter sua sessão ativa e melhorar a experiência.</li>
              </ul>
            </Subsection>
            <Subsection title="2.3 Dados de integrações (opcional)">
              <ul>
                <li><strong>Google Calendar:</strong> ao conectar sua conta Google, coletamos tokens de acesso para sincronizar eventos. Não armazenamos sua senha do Google.</li>
              </ul>
            </Subsection>
          </Section>

          <Section title="3. Como usamos seus dados">
            <p>Utilizamos suas informações para:</p>
            <ul>
              <li>Criar e gerenciar sua conta;</li>
              <li>Fornecer e melhorar as funcionalidades do {APP_NAME};</li>
              <li>Processar pagamentos e gerenciar assinaturas (via Stripe);</li>
              <li>Enviar notificações relevantes sobre sua conta ou serviço;</li>
              <li>Operar o assistente de IA Jarbas, processando seu conteúdo para gerar insights personalizados;</li>
              <li>Cumprir obrigações legais e resolver disputas;</li>
              <li>Detectar e prevenir fraudes e abusos.</li>
            </ul>
            <p>
              <strong>Não vendemos</strong> seus dados pessoais a terceiros. Não utilizamos seu conteúdo para treinar modelos de IA de terceiros sem sua autorização explícita.
            </p>
          </Section>

          <Section title="4. Compartilhamento de dados">
            <p>Podemos compartilhar seus dados apenas nas seguintes situações:</p>
            <ul>
              <li><strong>Provedores de serviço:</strong> parceiros que nos auxiliam na operação da plataforma (Supabase para banco de dados, Stripe para pagamentos, Vercel para hospedagem, OpenAI/Anthropic para IA). Esses parceiros são contratualmente obrigados a proteger seus dados.</li>
              <li><strong>Obrigação legal:</strong> quando exigido por lei, ordem judicial ou autoridade governamental competente.</li>
              <li><strong>Proteção de direitos:</strong> para proteger os direitos, a propriedade ou a segurança do {APP_NAME}, de nossos usuários ou do público.</li>
              <li><strong>Transferência corporativa:</strong> em caso de fusão, aquisição ou venda de ativos, com aviso prévio aos usuários.</li>
            </ul>
          </Section>

          <Section title="5. Armazenamento e segurança">
            <p>
              Seus dados são armazenados em servidores seguros com criptografia em trânsito (TLS/HTTPS) e em repouso. Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.
            </p>
            <p>
              Senhas são armazenadas exclusivamente em formato hash (nunca em texto puro). Tokens de integração (ex: Google Calendar) são armazenados de forma criptografada.
            </p>
            <p>
              Apesar de nossos esforços, nenhum sistema é 100% seguro. Em caso de incidente de segurança que afete seus dados, notificaremos você conforme exigido pela legislação aplicável.
            </p>
          </Section>

          <Section title="6. Retenção de dados">
            <p>
              Mantemos seus dados enquanto sua conta estiver ativa. Após o cancelamento da conta, seus dados são excluídos permanentemente em até <strong>30 dias</strong>, salvo quando a retenção for necessária para cumprir obrigações legais.
            </p>
            <p>
              Dados de faturamento (transações e notas fiscais) podem ser retidos por até 5 anos conforme exigência fiscal brasileira.
            </p>
          </Section>

          <Section title="7. Seus direitos (LGPD)">
            <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul>
              <li><strong>Acesso:</strong> obter confirmação e cópia dos dados que tratamos sobre você;</li>
              <li><strong>Correção:</strong> solicitar a atualização de dados incompletos, inexatos ou desatualizados;</li>
              <li><strong>Exclusão:</strong> solicitar a eliminação dos seus dados pessoais;</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado e legível por máquina;</li>
              <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento;</li>
              <li><strong>Oposição:</strong> se opor a determinados tratamentos de dados;</li>
              <li><strong>Informação:</strong> ser informado sobre as entidades com quem compartilhamos seus dados.</li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato pelo e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Responderemos em até 15 dias úteis.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Utilizamos cookies essenciais para manter sua sessão autenticada e lembrar suas preferências. Não utilizamos cookies de rastreamento para publicidade de terceiros.
            </p>
            <p>
              Você pode configurar seu navegador para recusar cookies, mas isso pode impedir o funcionamento correto do {APP_NAME}.
            </p>
          </Section>

          <Section title="9. Crianças e adolescentes">
            <p>
              O {APP_NAME} não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se tomarmos conhecimento de que um menor forneceu dados pessoais, excluiremos essas informações imediatamente.
            </p>
          </Section>

          <Section title="10. Transferências internacionais">
            <p>
              Alguns de nossos provedores de serviço operam fora do Brasil. Nesses casos, garantimos que as transferências sejam realizadas com proteções adequadas, em conformidade com a LGPD e demais legislações aplicáveis.
            </p>
          </Section>

          <Section title="11. Alterações nesta política">
            <p>
              Podemos atualizar esta política periodicamente. Notificaremos você por e-mail ou por aviso em destaque no aplicativo sobre mudanças significativas, com antecedência mínima de 15 dias. O uso continuado do serviço após esse prazo implica aceitação das alterações.
            </p>
          </Section>

          <Section title="12. Contato">
            <p>
              Dúvidas, solicitações ou reclamações relacionadas à privacidade podem ser encaminhadas ao nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <p>
              <strong>E-mail:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </Section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9898b0]">
          <Link href="/" className="hover:text-[#e8e8f0] transition-colors">← Voltar ao início</Link>
          <Link href="/termos" className="hover:text-[#e8e8f0] transition-colors">Termos de Uso</Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/8">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-[#c8c8d8]">
        {children}
      </div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-[#e8e8f0] mb-2">{title}</h3>
      <div className="space-y-2 text-[15px] text-[#c8c8d8]">{children}</div>
    </div>
  );
}
