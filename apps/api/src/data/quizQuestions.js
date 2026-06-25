const quizQuestions = [
  {
    id: "q1",
    category: "cycle",
    categoryTitle: "Pour commencer, quelques questions sur ton cycle",
    title: "Combien de temps dure ton cycle menstruel ?",
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
        label: "Cycle irrégulier (10 jours ou plus d'écart entre chaque cycle)",
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
    title: "Quelle est la durée de ta phase lutéale ?",
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
    title: "Comment est ton flux ?",
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
    title: "Quelle est la durée de tes règles ?",
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
    title: "Qu'est-ce que tu as remarqué de plus durant tes règles ?",
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
    title: "Durant ta phase prémenstruelle, quelle est ton émotion dominante ?",
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
    title: "Quelle combinaison te correspond le plus ?",
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
    title: "Quel est le plus contraignant pendant ta phase prémenstruelle ?",
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
    title:
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
        label: "Douleurs articulaires",
        profiles: ["BOULE_DE_NERFS"],
      },
    ],
  },
];

module.exports = quizQuestions;
