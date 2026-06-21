const quizQuestions = [
  {
    id: "q1",
    title:
      "Durant ta phase pré-menstruelle, quelle est ton émotion dominante ?",

    answers: [
      {
        key: "anxiete",
        label: "Anxiété / peur",
        profiles: ["BOULE_DE_NERFS"],
      },

      {
        key: "fragilite",
        label: "Sensation de fragilité",
        profiles: ["CROQUE_TOUT"],
      },

      {
        key: "colere",
        label: "Colère",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "tristesse",
        label: "Dépression / tristesse",
        profiles: ["DOUCE_MELANCOLIE"],
      },
    ],
  },

  {
    id: "q2",
    title: "Quelle affirmation te représente le plus ?",

    answers: [
      {
        key: "insomnies",
        label: "J'ai des insomnies fréquentes",
        profiles: ["BOULE_DE_NERFS"],
      },

      {
        key: "injustice",
        label: "J'ai un fort sentiment d'injustice",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "apathique",
        label:
          "Je me sens apathique (perte de motivation, de désirs et d’émotions)",
        profiles: ["DOUCE_MELANCOLIE"],
      },

      {
        key: "fatigue",
        label: "Je suis toujours très fatiguée",
        profiles: ["CROQUE_TOUT"],
      },
    ],
  },

  {
    id: "q3",
    title: "Quelle combinaison te correspond le plus ?",

    answers: [
      {
        key: "irritabilite",
        label: "Irritabilité / sautes d’humeur",
        profiles: ["BOULE_DE_NERFS"],
      },

      {
        key: "epuisement",
        label: "Évanouissement / fatigue physique",
        profiles: ["CROQUE_TOUT"],
      },

      {
        key: "frustration",
        label: "Forte irritabilité / frustration",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "repli",
        label: "Mollesse / repli sur soi",
        profiles: ["DOUCE_MELANCOLIE"],
      },
    ],
  },

  {
    id: "q4",
    title:
      "Quel est le plus contraignant pendant ta phase prémenstruelle ?",

    answers: [
      {
        key: "pleurer",
        label: "Envie de pleurer",
        profiles: ["DOUCE_MELANCOLIE"],
      },

      {
        key: "acne",
        label: "Acné hormonale",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "fringale",
        label: "Fringale alimentaire",
        profiles: ["CROQUE_TOUT"],
      },

      {
        key: "maux_tete",
        label: "Maux de tête",
        profiles: ["BOULE_DE_NERFS"],
      },
    ],
  },

  {
    id: "q5",
    title:
      "Parmi les symptômes émotionnels suivants, lequel te correspond le plus ?",

    answers: [
      {
        key: "stress",
        label: "Nervosité / stress",
        profiles: ["BOULE_DE_NERFS"],
      },

      {
        key: "ruminations",
        label: "Ruminations",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "confusion",
        label: "Confusion (brouillard mental)",
        profiles: ["DOUCE_MELANCOLIE"],
      },

      {
        key: "fatigue_psychique",
        label: "Fatigue psychique (envie constante de sommeil)",
        profiles: ["CROQUE_TOUT"],
      },
    ],
  },

  {
    id: "q6",
    title:
      "Parmi les symptômes physiques suivants, lequel te correspond le plus ?",

    answers: [
      {
        key: "etourdissement",
        label: "Étourdissement",
        profiles: ["CROQUE_TOUT"],
      },

      {
        key: "gonflements",
        label: "Gonflements (pieds, mains, seins ou ventre)",
        profiles: ["GONFLEE_A_BLOC"],
      },

      {
        key: "migraine",
        label: "Migraine",
        profiles: ["DOUCE_MELANCOLIE"],
      },

      {
        key: "douleur_articulaire",
        label: "Douleur articulaire",
        profiles: ["BOULE_DE_NERFS"],
      },
    ],
  },
];

module.exports = quizQuestions;