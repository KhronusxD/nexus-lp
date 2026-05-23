"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O que exatamente é o Nexus?",
    answer:
      "O Nexus é um Sistema Operacional Pessoal — não mais um app de produtividade isolado. Ele conecta todas as dimensões da sua vida (Pilares, Skills, Projetos, Hábitos e Agenda) em uma única estrutura coerente, onde cada ação do dia alimenta um propósito maior.",
  },
  {
    question: "Em que o Nexus é diferente do Notion, Todoist ou Google Calendar?",
    answer:
      "Essas ferramentas são ótimas isoladamente — mas nenhuma delas sabe que você está atrasado na sua meta de leitura, que uma reunião conflita com seu foco da tarde, ou que você dorme mal nas semanas em que ignora determinado hábito. O Nexus enxerga a pessoa inteira, não só a tarefa. E você não precisa abandonar o Google Calendar — o Nexus sincroniza com ele dos dois lados.",
  },
  {
    question: "Como funciona o trial? Vocês cobram o cartão antes?",
    answer:
      "Todos os planos pagos têm 7 dias grátis. No Sistema, esses 7 dias incluem acesso completo ao Jarbas (depois ele desliga, mas o resto do app continua funcionando no R$29,90/mês). No Nexus AI, são 7 dias sem cobrança com acesso completo a Jarbas + WhatsApp. Exigimos cartão no início pra você não perder o acesso quando o trial acabar — mas a primeira cobrança só acontece no 8º dia. Se cancelar antes, não é cobrado nada. No plano Grátis, não pedimos cartão.",
  },
  {
    question: "O WhatsApp é obrigatório? Como conecto?",
    answer:
      "Não é obrigatório — o Nexus funciona inteiro no app. Mas se você assina o plano Nexus AI, em 30 segundos você pareia seu número e o Jarbas vira mais um contato no seu WhatsApp. Recebe resumo do dia, marca hábitos por mensagem, manda áudio que vira tarefa. Funciona com seu WhatsApp pessoal, sem precisar de chip dedicado.",
  },
  {
    question: "Qual a diferença entre Sistema e Nexus AI?",
    answer:
      "O Sistema (R$29,90/mês) dá acesso ilimitado a Pilares, Skills, Projetos, Hábitos, notas, mind maps, Google Calendar sync e exportação — tudo conectado, sem limites de quantidade. Você ainda ganha 7 dias grátis do Jarbas pra experimentar. O Nexus AI (R$69,90/mês, R$179,90/3 meses ou R$599,90/ano) inclui o Jarbas permanente + WhatsApp nativo + transcrição de áudio + análise de imagens + revisão semanal automática.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, em 2 cliques dentro de Configurações → Assinatura. Sem multa, sem ligação. Você mantém acesso até o fim do período pago. Se voltar pro plano gratuito, seus dados não somem — só voltam os limites do plano (3 pilares, 3 projetos, etc.), e os itens excedentes ficam arquivados.",
  },
  {
    question: "Meus dados são meus? Como exporto?",
    answer:
      "Sim. Você pode exportar todos os seus dados em PDF a qualquer momento (Pilares, projetos, hábitos, notas, agenda). E se quiser deletar a conta, isso também é em 2 cliques — hard delete em até 30 dias, conforme LGPD. Não vendemos dados, não compartilhamos com terceiros e não usamos seu conteúdo pra treinar IA.",
  },
  {
    question: "Vocês usam meus dados pra treinar IA?",
    answer:
      "Não. Suas tarefas, notas e mensagens com o Jarbas nunca alimentam treinamento de modelos — nem nossos, nem de provedores externos. Usamos APIs com configuração explícita de no-training. Sua estrutura de vida é sua.",
  },
  {
    question: "Preciso migrar tudo de uma vez?",
    answer:
      "Não. Você começa pela estrutura que faz mais sentido agora — pode ser seus pilares de vida, seus projetos ativos ou seus hábitos — e vai expandindo. O onboarding de 5 minutos te guia. O Google Calendar sync ajuda quem já tem agenda cheia.",
  },
  {
    question: "Tem desconto pra anual ou trimestral?",
    answer:
      "Sim, no plano Nexus AI. Trimestral sai por R$179,90 (≈14% de desconto sobre o mensal, equivalente a R$59,97/mês). Anual sai por R$599,90 (≈28% de desconto, equivalente a R$49,99/mês). Todos com 7 dias de trial grátis. O plano Sistema é só mensal por enquanto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl bg-neutral-900 ring-1 ring-white/10 overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-sm font-medium text-white">{faq.question}</span>
            <svg
              className={`w-4 h-4 text-neutral-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === i ? "max-h-[28rem] pb-4" : "max-h-0"
            }`}
          >
            <p className="px-5 text-sm text-neutral-400 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
