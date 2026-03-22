import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso — Nexus",
  description: "Leia os Termos de Uso do Nexus antes de utilizar a plataforma.",
};

const LAST_UPDATED = "22 de março de 2026";
const CONTACT_EMAIL = "suporte@nexus.so";
const APP_NAME = "Nexus";
const COMPANY = "Nexus";

export default function TermsPage() {
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
          <Link href="/privacidade" className="text-xs text-[#9898b0] hover:text-[#e8e8f0] transition-colors">
            Política de Privacidade →
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6366f1] mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Termos de Uso</h1>
          <p className="text-sm text-[#9898b0]">Última atualização: {LAST_UPDATED}</p>
        </div>

        <div className="prose-legal">

          <Section title="1. Aceitação dos Termos">
            <p>
              Ao criar uma conta ou utilizar o <strong>{APP_NAME}</strong>, você declara que leu, compreendeu e concorda com estes Termos de Uso e com nossa{" "}
              <Link href="/privacidade" className="text-[#6366f1] hover:underline">Política de Privacidade</Link>.
              Se não concordar com algum destes termos, não utilize o serviço.
            </p>
            <p>
              Estes termos constituem um contrato legal entre você e <strong>{COMPANY}</strong>. Reservamo-nos o direito de atualizar estes termos a qualquer momento, com notificação prévia conforme descrito na seção 13.
            </p>
          </Section>

          <Section title="2. Descrição do serviço">
            <p>
              O {APP_NAME} é uma plataforma de produtividade pessoal que integra gestão de hábitos, projetos, agenda e notas em um sistema único, com suporte de inteligência artificial através do assistente Jarbas. Os serviços são oferecidos nos seguintes planos:
            </p>
            <ul>
              <li><strong>Plano Grátis:</strong> acesso a funcionalidades básicas com limites definidos;</li>
              <li><strong>Plano Sistema:</strong> acesso completo a recursos de produtividade, sem limites de criação, com trial de 30 dias do Jarbas;</li>
              <li><strong>Plano Nexus AI:</strong> acesso a todas as funcionalidades, incluindo o Jarbas com acesso permanente e recursos avançados de IA.</li>
            </ul>
            <p>
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer funcionalidade do serviço, com aviso prévio razoável quando possível.
            </p>
          </Section>

          <Section title="3. Elegibilidade e conta">
            <p>
              Para utilizar o {APP_NAME}, você deve ter pelo menos 18 anos de idade ou ter consentimento expresso de um responsável legal. Ao criar uma conta, você se compromete a:
            </p>
            <ul>
              <li>Fornecer informações verdadeiras, precisas e atualizadas;</li>
              <li>Manter a segurança da sua senha e não compartilhá-la com terceiros;</li>
              <li>Notificar-nos imediatamente em caso de uso não autorizado da sua conta;</li>
              <li>Ser responsável por todas as atividades realizadas na sua conta.</li>
            </ul>
            <p>
              Cada usuário pode ter apenas uma conta. Contas duplicadas poderão ser removidas.
            </p>
          </Section>

          <Section title="4. Uso permitido">
            <p>Você pode utilizar o {APP_NAME} para fins pessoais e legais de produtividade. É expressamente proibido:</p>
            <ul>
              <li>Usar o serviço para fins ilegais ou que violem direitos de terceiros;</li>
              <li>Tentar acessar dados de outros usuários sem autorização;</li>
              <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do serviço;</li>
              <li>Utilizar bots, scrapers ou automações não autorizadas para acessar o serviço;</li>
              <li>Sobrecarregar intencionalmente a infraestrutura do {APP_NAME};</li>
              <li>Revender, sublicenciar ou transferir o acesso ao serviço para terceiros;</li>
              <li>Inserir conteúdo ilegal, difamatório, obsceno ou que viole direitos de propriedade intelectual.</li>
            </ul>
          </Section>

          <Section title="5. Planos, pagamentos e cobranças">
            <Subsection title="5.1 Assinaturas">
              <p>
                Os planos pagos são cobrados de forma recorrente (mensal ou anual) via cartão de crédito, processados pelo Stripe. Ao assinar um plano pago, você autoriza a cobrança automática nos ciclos acordados.
              </p>
            </Subsection>
            <Subsection title="5.2 Trial">
              <p>
                O Plano Sistema inclui um período trial gratuito de 30 dias para o assistente Jarbas. Após o término do trial, o acesso ao Jarbas é suspenso automaticamente, sem custos adicionais.
              </p>
            </Subsection>
            <Subsection title="5.3 Cancelamento">
              <p>
                Você pode cancelar sua assinatura a qualquer momento nas configurações da conta. O cancelamento tem efeito ao final do período de faturamento vigente — você mantém acesso ao plano pago até o fim do ciclo já pago.
              </p>
            </Subsection>
            <Subsection title="5.4 Reembolsos">
              <p>
                Oferecemos reembolso integral dentro de <strong>7 dias corridos</strong> após o primeiro pagamento de um plano, mediante solicitação por e-mail. Após esse prazo, não são concedidos reembolsos proporcionais por períodos não utilizados.
              </p>
            </Subsection>
            <Subsection title="5.5 Alterações de preço">
              <p>
                Qualquer alteração nos preços dos planos será comunicada com pelo menos 30 dias de antecedência. Assinaturas ativas serão mantidas no preço vigente até o próximo ciclo de renovação após a notificação.
              </p>
            </Subsection>
          </Section>

          <Section title="6. Propriedade intelectual">
            <Subsection title="6.1 Seu conteúdo">
              <p>
                Você mantém todos os direitos sobre o conteúdo que criar no {APP_NAME} (notas, projetos, hábitos, etc.). Ao usar o serviço, você nos concede uma licença limitada, não exclusiva e revogável para processar seu conteúdo com a única finalidade de fornecer o serviço a você.
              </p>
            </Subsection>
            <Subsection title="6.2 Nossa propriedade">
              <p>
                O {APP_NAME}, incluindo seu código, design, marca, logotipos e funcionalidades, é propriedade exclusiva de {COMPANY} e está protegido por leis de propriedade intelectual. Você não adquire qualquer direito sobre nossa propriedade intelectual ao usar o serviço.
              </p>
            </Subsection>
          </Section>

          <Section title="7. Inteligência Artificial (Jarbas)">
            <p>
              O assistente Jarbas utiliza modelos de IA de terceiros para processar seu conteúdo e gerar respostas personalizadas. Ao usar o Jarbas, você compreende que:
            </p>
            <ul>
              <li>As respostas geradas por IA são sugestões e não substituem julgamento profissional (médico, jurídico, financeiro, etc.);</li>
              <li>Não garantimos a precisão absoluta das respostas do Jarbas;</li>
              <li>Seu conteúdo pode ser processado por APIs de IA de terceiros conforme descrito em nossa Política de Privacidade;</li>
              <li>Você é responsável pelo uso que faz das sugestões geradas pela IA.</li>
            </ul>
          </Section>

          <Section title="8. Disponibilidade e suporte">
            <p>
              Buscamos manter o serviço disponível 24 horas por dia, 7 dias por semana, mas não garantimos disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência quando possível.
            </p>
            <p>
              O suporte é fornecido por e-mail em <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Usuários dos planos pagos têm prioridade no atendimento.
            </p>
          </Section>

          <Section title="9. Limitação de responsabilidade">
            <p>
              Na extensão máxima permitida pela lei aplicável, o {APP_NAME} é fornecido "como está", sem garantias de qualquer natureza. Não nos responsabilizamos por:
            </p>
            <ul>
              <li>Perda de dados decorrente de falhas técnicas ou uso incorreto;</li>
              <li>Danos indiretos, incidentais ou consequenciais;</li>
              <li>Resultados obtidos ou não obtidos com base no uso do serviço;</li>
              <li>Interrupções temporárias do serviço por causas fora do nosso controle.</li>
            </ul>
            <p>
              Nossa responsabilidade total perante você, em qualquer circunstância, está limitada ao valor pago pelo serviço nos 12 meses anteriores ao evento que gerou a responsabilidade.
            </p>
          </Section>

          <Section title="10. Indenização">
            <p>
              Você concorda em defender, indenizar e isentar o {APP_NAME}, seus diretores, funcionários e parceiros de quaisquer reclamações, danos, perdas e custos (incluindo honorários advocatícios) decorrentes do seu uso do serviço, violação destes termos ou violação de direitos de terceiros.
            </p>
          </Section>

          <Section title="11. Suspensão e encerramento">
            <p>
              Podemos suspender ou encerrar sua conta, sem aviso prévio, em caso de:
            </p>
            <ul>
              <li>Violação destes Termos de Uso;</li>
              <li>Atividade fraudulenta ou abusiva;</li>
              <li>Solicitação de autoridades legais competentes.</li>
            </ul>
            <p>
              Você pode encerrar sua conta a qualquer momento nas configurações do app. Após o encerramento, seus dados serão excluídos conforme nossa Política de Privacidade.
            </p>
          </Section>

          <Section title="12. Lei aplicável e foro">
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente destes Termos será submetida ao foro da comarca de São Paulo — SP, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </Section>

          <Section title="13. Alterações nos Termos">
            <p>
              Podemos atualizar estes Termos a qualquer momento. Alterações significativas serão comunicadas por e-mail ou por aviso em destaque no aplicativo com pelo menos 15 dias de antecedência. O uso continuado do serviço após esse prazo constitui aceitação das alterações.
            </p>
          </Section>

          <Section title="14. Contato">
            <p>
              Para dúvidas, sugestões ou reclamações relacionadas a estes Termos:
            </p>
            <p>
              <strong>E-mail:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </Section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9898b0]">
          <Link href="/" className="hover:text-[#e8e8f0] transition-colors">← Voltar ao início</Link>
          <Link href="/privacidade" className="hover:text-[#e8e8f0] transition-colors">Política de Privacidade</Link>
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
