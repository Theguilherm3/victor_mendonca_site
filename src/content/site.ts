// Todo o conteúdo editável do site fica aqui.
// Os textos são um rascunho de copy — revise com o Victor antes de publicar.

export type PhotoSlot = {
  /** Caminho em /public (ex.: "/fotos/retrato.jpg"). Sem src, mostra o placeholder. */
  src?: string;
  alt: string;
  /** Rótulo do placeholder enquanto não há foto. */
  label: string;
  /** Ponto focal da foto (CSS object-position). */
  position?: string;
};

const whatsappNumber = "558194332897";
const whatsappMessage = "Olá, Dr. Victor! Vim pelo site e gostaria de agendar uma conversa.";

export const site = {
  name: "Victor Mendonça",
  title: "Dr. Victor Mendonça",
  copyrightYear: 2026,
  profession: "Cirurgião-Dentista",
  registry: "CRO-PE 22604",
  city: "Toritama",
  cityUf: "Toritama · PE",
  phoneLabel: "(81) 9433-2897",

  links: {
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    whatsappPlain: `https://wa.me/${whatsappNumber}`,
    /** Deixe vazio para esconder os links de Instagram. Ex.: "https://instagram.com/usuario" */
    instagram: "",
    instagramHandle: "",
  },

  hero: {
    titleStart: "Odontologia feita com",
    titleEm: "cuidado",
    titleEnd: "e precisão.",
    lead: "Atendimento próximo, planejamento claro e atenção a cada detalhe — do primeiro contato ao acompanhamento.",
  },

  /** Frase que está na parede do consultório. */
  motto: { start: "O cuidado", em: "refinado", end: "que você merece." },

  pillars: [
    { title: "Escuta", text: "Entender você antes de qualquer procedimento." },
    { title: "Precisão", text: "Planejamento claro para decisões seguras." },
    { title: "Presença", text: "Do primeiro contato ao pós-tratamento." },
  ],

  marquee: ["Cirurgião-Dentista", "CRO-PE 22604", "Toritama · PE", "O cuidado refinado que você merece"],

  story: {
    paragraphs: [
      "Para o Victor, a odontologia começa antes da cadeira: na conversa. Entender o que incomoda, o que você espera e o seu ritmo é o que orienta cada decisão.",
      "Cada atendimento é conduzido com calma e transparência — você entende o que está sendo feito, por quê, e participa das escolhas.",
    ],
  },

  method: {
    lead: "Você sabe em que etapa está, o que vem depois e participa de cada decisão.",
    steps: [
      { title: "Escuta e avaliação", text: "Uma primeira consulta sem pressa para entender queixas, expectativas e histórico." },
      { title: "Planejamento", text: "Um plano claro, com opções, etapas e prazos explicados no seu ritmo." },
      { title: "Tratamento", text: "Execução cuidadosa, com técnica e atenção aos detalhes em cada sessão." },
      { title: "Acompanhamento", text: "Retornos e orientações para manter o resultado ao longo do tempo." },
    ],
  },

  experience: {
    tiles: ["Atendimento próximo", "Ambiente reservado", "Plano sob medida"],
    caption: "Planejamento feito com calma, junto com você.",
  },

  results: {
    lead: "Cada caso é único. Os resultados dependem da avaliação individual de cada paciente.",
    captions: ["[Legenda do resultado 1]", "[Legenda do resultado 2]", "[Legenda do resultado 3]"],
  },

  faq: [
    {
      q: "Como funciona o primeiro contato?",
      a: "Você chama no WhatsApp, conta o que está procurando e combinamos um horário para a primeira avaliação.",
    },
    {
      q: "Posso tirar dúvidas antes de marcar?",
      a: "Pode, sim. Pelo WhatsApp você tira dúvidas sobre o atendimento antes de qualquer agendamento.",
    },
    {
      q: "O atendimento é personalizado?",
      a: "Sim. Cada plano é montado a partir da avaliação, das suas necessidades e do que você espera do tratamento.",
    },
    {
      q: "Como faço para agendar?",
      a: "Toque em “Fale comigo” e envie uma mensagem. A resposta vem pelo próprio WhatsApp.",
    },
  ],

  contact: {
    lead: "Sem compromisso: mande uma mensagem e tire suas dúvidas pelo WhatsApp.",
  },

  photos: {
    hero: {
      src: "/fotos/hero-jaleco.jpg",
      alt: "Dr. Victor Mendonça de jaleco, apoiado na cadeira odontológica do consultório",
      label: "Foto principal",
      position: "46% 0%",
    },
    /** Versão horizontal do hero, usada no desktop. */
    heroWide: {
      src: "/fotos/planejamento.jpg",
      alt: "Dr. Victor Mendonça analisando um guia de facetas dentárias no consultório",
      label: "Foto principal · horizontal",
    },
    story: {
      src: "/fotos/historia-sofa.jpg",
      alt: "Victor Mendonça sentado no sofá da recepção, sob a frase “O cuidado refinado que você merece”",
      label: "Foto 2 · corpo inteiro",
      position: "50% 30%",
    },
    storyDetail: {
      src: "/fotos/historia-sorriso.jpg",
      alt: "Victor Mendonça sorrindo no consultório",
      label: "Foto 3",
      position: "50% 20%",
    },
    space: {
      src: "/fotos/consultorio.jpg",
      alt: "Consultório com cadeira odontológica e iluminação",
      label: "Foto 4 · ambiente",
      position: "70% 50%",
    },
    landscape: {
      src: "/fotos/planejamento.jpg",
      alt: "Victor Mendonça analisando um guia de facetas dentárias",
      label: "Foto 5 · paisagem",
      position: "62% 30%",
    },
    /** Fotos de casos (antes/depois). A seção só aparece quando houver ao menos uma com src. */
    results: [
      { alt: "Resultado 1", label: "Foto 6" },
      { alt: "Resultado 2", label: "Foto 7" },
      { alt: "Resultado 3", label: "Foto 8" },
    ] as PhotoSlot[],
    contact: {
      src: "/fotos/contato-rosto.jpg",
      alt: "Dr. Victor Mendonça",
      label: "Foto 9",
      position: "50% 10%",
    },
  } satisfies Record<string, PhotoSlot | PhotoSlot[]>,
};
