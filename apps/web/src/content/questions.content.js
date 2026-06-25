export const questionsContent = {
  page: {
    notFound: "Question introuvable",
    progressLabel: "Question",
    progressSeparator: "sur",
    backButton: "← Retour",
  },

  questions: [
    {
      id: "q1",
      category: "cycle",
      categoryTitle: "Pour commencer, quelques questions sur ton cycle",
      question: "Combien de temps dure ton cycle menstruel ?",
      answers: [
        {
          key: "cycle_moins_21",
          label: "Moins de 21 jours",
          profiles: ["DOUCE_MELANCOLIE"],
        },
        {
          key: "cycle_plus_35",
          label: "Plus de 35 jours",
          profiles: ["GONFLEE_A_BLOC"],
        },
        {
          key: "cycle_irregulier",
          label:
            "Cycle irrégulier (10 jours ou plus d'écart entre chaque cycle)",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "cycle_21_35",
          label: "Entre 21 et 35 jours",
          profiles: [],
        },
      ],
    },

    {
      id: "q2",
      category: "cycle",
      question: "Quelle est la durée de ta phase lutéale ?",
      answers: [
        {
          key: "luteale_13_16",
          label: "13 à 16 jours",
          profiles: [],
        },
        {
          key: "luteale_10_12",
          label: "Moins de 10 à 12 jours",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "luteale_moins_9",
          label: "Moins de 9 jours",
          profiles: ["GONFLEE_A_BLOC"],
        },
        {
          key: "luteale_inconnue",
          label: "Je ne sais pas",
          profiles: [],
        },
      ],
    },

    {
      id: "q3",
      category: "cycle",
      question: "Comment est ton flux ?",
      answers: [
        {
          key: "flux_tres_peu",
          label: "Très peu de saignement",
          profiles: ["CROQUE_TOUT", "DOUCE_MELANCOLIE"],
        },
        {
          key: "flux_abondant",
          label: "Abondant",
          profiles: ["GONFLEE_A_BLOC"],
        },
        {
          key: "flux_hemorragique",
          label: "Hémorragique",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "flux_normal",
          label: "Normal",
          profiles: [],
        },
      ],
    },

    {
      id: "q4",
      category: "cycle",
      question: "Quelle est la durée de tes règles ?",
      answers: [
        {
          key: "regles_1_2",
          label: "1 à 2 jours",
          profiles: ["DOUCE_MELANCOLIE"],
        },
        {
          key: "regles_3_7",
          label: "3 à 7 jours",
          profiles: [],
        },
        {
          key: "regles_plus_7",
          label: "Plus de 7 jours",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "regles_inconnue",
          label: "Je ne sais pas",
          profiles: [],
        },
      ],
    },

    {
      id: "q5",
      category: "cycle",
      question: "Qu'est-ce que tu as remarqué de plus durant tes règles ?",
      answers: [
        {
          key: "sang_epais",
          label: "Sang épais",
          profiles: ["GONFLEE_A_BLOC", "BOULE_DE_NERFS"],
        },
        {
          key: "gros_caillots",
          label: "Présence de gros caillots",
          profiles: ["CROQUE_TOUT"],
        },
        {
          key: "secheresse",
          label: "Sécheresse (peau, vulve...)",
          profiles: ["DOUCE_MELANCOLIE"],
        },
        {
          key: "remarque_inconnue",
          label: "Je ne sais pas",
          profiles: [],
        },
      ],
    },

    {
      id: "q6",
      category: "emotionnel",
      categoryTitle: "Pendant ta phase prémenstruelle",
      question:
        "Durant ta phase prémenstruelle, quelle est ton émotion dominante ?",
      answers: [
        {
          key: "anxiete",
          label: "Anxiété ou peur",
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
          label: "Dépression ou tristesse",
          profiles: ["DOUCE_MELANCOLIE"],
        },
      ],
    },

    {
      id: "q7",
      category: "emotionnel",
      question: "Quelle affirmation te représente le plus ?",
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
            "Je me sens apathique (perte de motivation, de désir ou d'émotions)",
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
      id: "q8",
      category: "emotionnel",
      question: "Quelle combinaison te correspond le plus ?",
      answers: [
        {
          key: "irritabilite",
          label: "Irritabilité et sautes d'humeur",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "epuisement",
          label: "Évanouissement ou fatigue physique",
          profiles: ["CROQUE_TOUT"],
        },
        {
          key: "frustration",
          label: "Forte irritabilité ou frustration",
          profiles: ["GONFLEE_A_BLOC"],
        },
        {
          key: "repli",
          label: "Mollesse ou repli sur soi",
          profiles: ["DOUCE_MELANCOLIE"],
        },
      ],
    },

    {
      id: "q9",
      category: "physique",
      categoryTitle: "Tes symptômes physiques et émotionnels",
      question:
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
          label: "Fringales alimentaires (sucre, chocolat, fromage...)",
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
      id: "q10",
      category: "emotionnel",
      question:
        "Parmi les symptômes émotionnels suivants, lequel te correspond le plus ?",
      answers: [
        {
          key: "stress",
          label: "Nervosité ou stress",
          profiles: ["BOULE_DE_NERFS"],
        },
        {
          key: "ruminations",
          label: "Ruminations",
          profiles: ["GONFLEE_A_BLOC"],
        },
        {
          key: "confusion",
          label: "Confusion ou brouillard mental",
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
      id: "q11",
      category: "physique",
      question:
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
          label: "Douleurs articulaires",
          profiles: ["BOULE_DE_NERFS"],
        },
      ],
    },
  ],
  
  steps: [
    {
      type: "category",
      stepNumber: 1,
      title: "Pour commencer, quelques questions sur ton cycle",
      description:
        "Ces premières questions permettent de mieux comprendre le rythme de ton cycle, la durée de tes règles et certains signaux observés pendant cette période.",
    },
    { type: "question", questionId: "q1" },
    { type: "question", questionId: "q2" },
    { type: "question", questionId: "q3" },
    { type: "question", questionId: "q4" },
    { type: "question", questionId: "q5" },

    {
      type: "category",
      stepNumber: 2,
      title: "Manifestations émotionnelles",
      description:
        "Cette partie explore les ressentis, réactions émotionnelles et variations d’humeur qui peuvent apparaître pendant ta phase prémenstruelle.",
    },
    { type: "question", questionId: "q6" },
    { type: "question", questionId: "q7" },
    { type: "question", questionId: "q8" },
    { type: "question", questionId: "q10" },

    {
      type: "category",
      stepNumber: 3,
      title: "Manifestations physiques",
      description:
        "Cette dernière partie s’intéresse aux symptômes corporels qui peuvent accompagner ta phase prémenstruelle.",
    },
    { type: "question", questionId: "q9" },
    { type: "question", questionId: "q11" },
  ],
};
