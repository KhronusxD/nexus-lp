"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O que exatamente é o Nucly?",
    answer:
      "O Nucly é um sistema operacional de energia pessoal. Apps de produtividade medem quantas tarefas você riscou; o Nucly mede o que cada uma custou — e repôs — de você. O ciclo é simples: capture tudo que pesa na mente, prepare o dia com rituais recorrentes, execute no quadro de post-its e veja no Pulso, toda semana, se você repôs mais do que gastou. Pilares, projetos, hábitos, calendário e mapas visuais moram dentro desse ciclo.",
  },
  {
    question: "Em que o Nucly é diferente do Notion, Todoist ou Google Calendar?",
    answer:
      "Essas ferramentas são ótimas isoladamente — mas nenhuma delas sabe que você está atrasado na sua meta de leitura, que uma reunião conflita com seu foco da tarde, ou que você dorme mal nas semanas em que ignora determinado hábito. O Nucly mede a energia, não só a tarefa: cada atividade concluída — inclusive hábitos — pesa como Recarga, Operação ou Conexão, e o Pulso mostra o balanço da semana. E você não precisa abandonar o Google Calendar — o Nucly sincroniza com ele dos dois lados.",
  },
  {
    question: "Como funciona o trial? Precisa de cartão?",
    answer:
      "Não pedimos cartão pra testar. Ao escolher Sistema ou Nexus AI, você entra direto com 7 dias de acesso completo — Jarvis, WhatsApp, tudo — sem informar nenhum dado de pagamento. No fim dos 7 dias, se você não assinar, a conta volta pro plano Grátis sem cobrança nenhuma (seus dados ficam salvos). Quando decidir assinar, paga do jeito que preferir: cartão ou PIX.",
  },
  {
    question: "O WhatsApp é obrigatório? Como conecto?",
    answer:
      "Não é obrigatório — o Nucly funciona inteiro no app. Mas nos planos Sistema e Nexus AI, em 30 segundos você pareia seu número e o Jarvis vira mais um contato no seu WhatsApp: recebe resumo do dia, marca hábitos por mensagem, cria eventos por texto. No Nexus AI, você também pode mandar áudio (que vira tarefa) e imagem. Funciona com seu WhatsApp pessoal, sem chip dedicado.",
  },
  {
    question: "Qual a diferença entre Sistema e Nexus AI?",
    answer:
      "Os dois já vêm com o Jarvis e o WhatsApp — a diferença é volume e escala. O Sistema (R$29,90/mês) dá Pilares, Skills e Hábitos ilimitados, até 3 projetos, e o Jarvis com 300 mensagens por mês. O Nexus AI (R$49,90/mês ou R$499,90/ano) libera projetos e mapas mentais ilimitados, sobe o Jarvis pra 800 mensagens/mês e adiciona áudio e imagem no WhatsApp, além da revisão semanal gerada por IA.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, em 2 cliques dentro de Configurações → Plano. Sem multa, sem ligação. Você mantém acesso até o fim do período pago. Se voltar pro plano gratuito, seus dados não somem — só voltam os limites do plano (3 pilares, 1 projeto, etc.), e os itens excedentes ficam arquivados.",
  },
  {
    question: "Meus dados são meus? Como exporto?",
    answer:
      "Sim. Você pode exportar todos os seus dados em PDF a qualquer momento (Pilares, projetos, hábitos, notas, agenda). E se quiser deletar a conta, isso também é em 2 cliques — hard delete em até 30 dias, conforme LGPD. Não vendemos dados, não compartilhamos com terceiros e não usamos seu conteúdo pra treinar IA.",
  },
  {
    question: "Vocês usam meus dados pra treinar IA?",
    answer:
      "Não. Suas tarefas, notas e mensagens com o Jarvis nunca alimentam treinamento de modelos — nem nossos, nem de provedores externos. Usamos APIs com configuração explícita de no-training. Sua estrutura de vida é sua.",
  },
  {
    question: "Preciso migrar tudo de uma vez?",
    answer:
      "Não. Você começa pela estrutura que faz mais sentido agora — pode ser seus pilares de vida, seus projetos ativos ou seus hábitos — e vai expandindo. O onboarding de 5 minutos te guia. O Google Calendar sync ajuda quem já tem agenda cheia.",
  },
  {
    question: "Tem desconto pra anual?",
    answer:
      "Sim, no plano Nexus AI. O anual sai por R$499,90 — pague 10 meses, leve 12 (equivale a ~R$41,66/mês). Os 7 dias de trial grátis valem igual. O plano Sistema é só mensal por enquanto.",
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
