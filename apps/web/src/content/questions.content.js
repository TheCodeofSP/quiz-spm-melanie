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
      question:
        "Durant ta phase prémenstruelle, quelle est ton émotion dominante ?",
      answers: [
        { key: "anxiete", label: "Anxiété ou peur", profile: "BOULE_DE_NERFS" },
        { key: "fragilite", label: "Sensation de fragilité", profile: "CROQUE_TOUT" },
        { key: "colere", label: "Colère", profile: "GONFLEE_A_BLOC" },
        { key: "tristesse", label: "Tristesse ou découragement", profile: "DOUCE_MELANCOLIE" },
      ],
    },
    {
      id: "q2",
      question: "Quelle affirmation te représente le plus ?",
      answers: [
        { key: "insomnies", label: "J'ai des insomnies fréquentes", profile: "BOULE_DE_NERFS" },
        { key: "injustice", label: "J'ai un fort sentiment d'injustice", profile: "GONFLEE_A_BLOC" },
        {
          key: "apathique",
          label: "Je me sens apathique (perte de motivation, de désir ou d'émotions)",
          profile: "DOUCE_MELANCOLIE",
        },
        { key: "fatigue", label: "Je suis toujours très fatiguée", profile: "CROQUE_TOUT" },
      ],
    },
    {
      id: "q3",
      question: "Quelle combinaison te correspond le plus ?",
      answers: [
        { key: "irritabilite", label: "Irritabilité et sautes d'humeur", profile: "BOULE_DE_NERFS" },
        { key: "epuisement", label: "Évanouissements ou fatigue physique", profile: "CROQUE_TOUT" },
        { key: "frustration", label: "Forte irritabilité ou frustration", profile: "GONFLEE_A_BLOC" },
        { key: "repli", label: "Molesse ou repli sur soi", profile: "DOUCE_MELANCOLIE" },
      ],
    },
    {
      id: "q4",
      question: "Quel est le plus contraignant pendant ta phase prémenstruelle ?",
      answers: [
        { key: "pleurer", label: "Envie de pleurer", profile: "DOUCE_MELANCOLIE" },
        { key: "acne", label: "Acné hormonale", profile: "GONFLEE_A_BLOC" },
        { key: "fringale", label: "Fringales alimentaires (sucre, chocolat, fromage...)", profile: "CROQUE_TOUT" },
        { key: "maux_tete", label: "Maux de tête", profile: "BOULE_DE_NERFS" },
      ],
    },
    {
      id: "q5",
      question:
        "Parmi les symptômes émotionnels suivants, lequel te correspond le plus ?",
      answers: [
        { key: "stress", label: "Nervosité ou stress", profile: "BOULE_DE_NERFS" },
        { key: "ruminations", label: "Ruminations", profile: "GONFLEE_A_BLOC" },
        { key: "confusion", label: "Confusion ou brouillard mental", profile: "DOUCE_MELANCOLIE" },
        { key: "fatigue_psychique", label: "Fatigue psychique", profile: "CROQUE_TOUT" },
      ],
    },
    {
      id: "q6",
      question:
        "Parmi les symptômes physiques suivants, lequel te correspond le plus ?",
      answers: [
        { key: "etourdissement", label: "Étourdissements", profile: "CROQUE_TOUT" },
        { key: "gonflements", label: "Gonflements (pieds, mains, seins ou ventre)", profile: "GONFLEE_A_BLOC" },
        { key: "migraine", label: "Migraine", profile: "DOUCE_MELANCOLIE" },
        { key: "douleur_articulaire", label: "Douleurs articulaires", profile: "BOULE_DE_NERFS" },
      ],
    },
  ],
};