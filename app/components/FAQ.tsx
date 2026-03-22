"use client";

import { useState } from "react";

const faqs = [
  {
    question: "O que exatamente é o Nexus?",
    answer:
      "O Nexus é um Sistema Operacional Pessoal — não mais um app de produtividade isolado. Ele conecta todas as dimensões da sua vida (Pilares, Skills, Projetos, Hábitos e Agenda) em uma única estrutura coerente, onde cada ação do dia alimenta um propósito maior.",
  },
  {
    question: "O que é o Jarbas e como ele funciona?",
    answer:
      "O Jarbas é seu agente de IA que vive dentro do seu sistema. Diferente de chatbots comuns, ele não apenas responde — ele executa. Fale em linguagem natural e ele reorganiza sua agenda, marca hábitos concluídos, cria tarefas, identifica gaps de comportamento e conduz sua revisão semanal automaticamente.",
  },
  {
    question: "Em que o Nexus é diferente do Notion, Todoist ou Google Calendar?",
    answer:
      "Essas ferramentas são ótimas isoladamente — mas nenhuma delas sabe que você está atrasado na sua meta de leitura, que uma reunião conflita com seu foco da tarde, ou que você dorme mal nas semanas em que ignora determinado hábito. O Nexus enxerga a pessoa inteira, não só a tarefa.",
  },
  {
    question: "Preciso migrar tudo de uma vez?",
    answer:
      "Não. Você começa pela estrutura que faz mais sentido para você agora — pode ser seus pilares de vida, seus projetos ativos ou seus hábitos — e vai expandindo naturalmente. O Nexus foi projetado para crescer com você.",
  },
  {
    question: "Para quem o Nexus foi feito?",
    answer:
      "Para profissionais de alto desempenho, empreendedores e mentes inquietas que gerenciam múltiplas frentes ao mesmo tempo. Se você já testou Notion e Todoist mas ainda sente que falta uma visão sistêmica que conecte planejamento e execução, o Nexus é para você.",
  },
  {
    question: "Qual a diferença entre o Plano Sistema e o Plano Nexus AI?",
    answer:
      "O Plano Sistema dá acesso completo à estrutura visual — Pilares, Skills, Projetos, Hábitos e Agenda com tudo conectado. O Plano Nexus AI desbloqueia o Jarbas: automação ativa, revisões semanais geradas por IA, análise de gaps de comportamento e comandos em linguagem natural.",
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
              openIndex === i ? "max-h-48 pb-4" : "max-h-0"
            }`}
          >
            <p className="px-5 text-sm text-neutral-400 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
