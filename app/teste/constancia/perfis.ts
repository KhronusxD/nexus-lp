/* Os 4 perfis do teste de constância. Fica fora do roteiro (que é do
   navegador) porque a página e a imagem de compartilhar também usam.
   Nomes sem gênero: o teste não pergunta, e "O Arrancador" seria masculino
   pra todo mundo. */

export const PERFIS = {
  fogo: {
    nome: "Fogo de palha",
    ic: "🔥",
    cor: "#FF6B35",
    frase: "Começa com tudo. Some na segunda semana.",
    porque:
      "Empolgação é combustível de largada, não de corrida. Quando ela acaba (e sempre acaba), não sobra nada segurando o hábito, e a meta que animava vira peso.",
    funciona:
      "Começar menor do que dá vontade e ver o progresso acumulando. Progresso que dá pra ver faz o papel que a empolgação fazia.",
    nucly:
      "No Nucly, cada vez que você faz o hábito ele vira XP na habilidade, e o nível sobe. O progresso fica na tela mesmo no dia sem vontade.",
  },
  tudo: {
    nome: "Tudo ou nada",
    ic: "⚖️",
    cor: "#00CED1",
    frase: "Perdeu um dia? Então já era.",
    porque:
      "Você mede pela sequência perfeita. Aí um dia perdido parece prova de que não deu, e o resto vai junto.",
    funciona:
      "Trocar a perfeição pela regra dos dois dias: pode falhar um, nunca dois seguidos. E olhar o total da semana, não a sequência.",
    nucly:
      "No Nucly a sequência pode quebrar, mas o XP e o nível ficam. O que você já fez continua contando.",
  },
  dia: {
    nome: "Dia corrido",
    ic: "🌀",
    cor: "#f59e0b",
    frase: "Você não larga. Você esquece.",
    porque:
      "O hábito não tem hora nem ninguém lembrando. Aí perde pra qualquer urgência do dia, e quando você lembra já é amanhã.",
    funciona: "Um lembrete fixo, todo dia no mesmo horário. Sem depender de lembrar.",
    nucly: "Às 21h o Jarvis pergunta no seu WhatsApp se você fez. Responde \"sim\" e está marcado.",
  },
  mil: {
    nome: "Mil metas",
    ic: "🧱",
    cor: "#ec4899",
    frase: "Quer mudar tudo. Acaba não mudando nada.",
    porque:
      "Vários hábitos novos disputam a mesma energia. No primeiro dia ruim caem todos juntos, e fica a sensação de que nada funciona.",
    funciona: "Um hábito por vez. Quando ele ficar automático, entra o próximo.",
    nucly:
      "No Nucly você vê a sequência e as horas de cada hábito. Dá pra saber quando ele firmou e chegou a hora do próximo.",
  },
} as const;

export type PerfilId = keyof typeof PERFIS;

export const ehPerfil = (v: unknown): v is PerfilId => typeof v === "string" && v in PERFIS;
