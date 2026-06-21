export const quizContent = {
  header: {
    siteUrl: "https://melaniedizet.com",
    logoAlt: "Logo Mélanie Dizet",
    name: "Mélanie Dizet",
    badge: "Quiz SPM",
    externalLinkLabel: "Accéder au site de Mélanie Dizet",
  },

  home: {
    title: "Découvre ton profil SPM",

    introduction:
      "Ce questionnaire a été conçu pour t'aider à mieux comprendre les manifestations émotionnelles et physiques qui peuvent apparaître avant tes règles.",

    duration: "Durée estimée : moins de 2 minutes",

    confidentiality:
      "Tes réponses restent confidentielles. Ton résultat personnalisé te sera envoyé uniquement par email.",

    cta: "Commencer le test",
  },

  contact: {
    title: "Où souhaites-tu recevoir ton résultat ?",

    description:
      "Indique tes coordonnées pour recevoir ton profil personnalisé directement dans ta boîte mail.",

    fields: {
      firstname: {
        id: "firstname",
        label: "Prénom",
      },

      email: {
        id: "email",
        type: "email",
        label: "Email",
      },

      age: {
        id: "age",
        type: "number",
        label: "Ton âge",
        min: "10",
        max: "100",
      },

      hasHormonalContraception: {
        id: "hasHormonalContraception",
        label: "Utilises-tu une contraception hormonale ?",
        options: [
          {
            value: "",
            label: "Je préfère ne pas répondre",
          },
          {
            value: "yes",
            label: "Oui",
          },
          {
            value: "no",
            label: "Non",
          },
        ],
      },

      hormonalContraceptionName: {
        id: "hormonalContraceptionName",
        label: "Laquelle ?",
        placeholder: "Pilule, implant, stérilet hormonal...",
      },
    },

    consents: {
      email: "J'accepte de recevoir mon résultat personnalisé par email.",

      contact:
        "J'accepte que Mélanie Dizet puisse me recontacter à propos de mon résultat.",
    },

    submitButton: "Recevoir mon résultat",
    submittingButton: "Envoi...",
  },

  confirmation: {
    title: "Ton résultat est en route 🌸",

    message:
      "Ton profil SPM a bien été analysé. Tu recevras prochainement ton résultat personnalisé par email.",

    spamReminder:
      "Pense à vérifier tes courriers indésirables si tu ne vois pas l'email arriver.",

    confidentiality:
      "Tes informations restent confidentielles et ne seront jamais partagées.",

    backToHome: "Revenir à l’accueil du quiz",
  },

  validation: {
    answerRequired: "Sélectionne une réponse pour continuer.",

    answersRequired:
      "Toutes les questions doivent être complétées avant l’envoi.",

    firstnameRequired:
      "Indique ton prénom pour recevoir ton résultat personnalisé.",

    emailRequired: "Entre une adresse email valide pour recevoir ton résultat.",

    consentRequired:
      "Pour recevoir ton résultat et être recontactée, tu dois valider les consentements.",

    apiError:
      "Une erreur est survenue. Merci de réessayer dans quelques instants.",
  },
};


