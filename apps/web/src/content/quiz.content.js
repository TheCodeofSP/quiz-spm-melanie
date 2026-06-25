export const quizContent = {
  header: {
    siteUrl: "https://melaniedizet.com",
    logoAlt: "Logo Mélanie Dizet",
    name: "Mélanie Dizet",
    badge: "Test de Personnalité SPM",
    externalLinkLabel: "Accéder au site de Mélanie Dizet",
  },

  home: {
    title: "Découvre ton profil SPM",

    sections: [
      {
        title: "SPM, c’est quoi ?",
        paragraphs: [
          "Le syndrome prémenstruel, ou SPM, est une problématique très fréquente : on estime que plus de 80 % des femmes ressentent des symptômes physiques ou émotionnels dans les jours précédant leurs règles, à des degrés très variables.",
          "Pourtant, beaucoup de femmes ont encore le sentiment que leur souffrance est banalisée.",
        ],
      },
      {
        title: "Une information essentielle",
        paragraphs: [
          "Le SPM n’est pas une phase à part entière du cycle menstruel. C’est avant tout un signal que ton corps t’envoie pour indiquer qu’il existe un ou plusieurs déséquilibres qui méritent d’être explorés.",
        ],
        highlight: "Le SPM n’est pas une fatalité !",
      },
      {
        title: "Une période qui peut devenir plus confortable",
        paragraphs: [
          "Bien sûr, la période prémenstruelle restera toujours une phase particulière du cycle. Les fluctuations hormonales qui l’accompagnent peuvent nous rendre plus sensibles, plus introspectives ou plus vulnérables.",
          "Mais il est tout à fait possible de vivre cette période avec beaucoup plus de confort, de sérénité et même d’en apprécier certaines facettes.",
        ],
      },
      {
        title: "Alors, le SPM, c’est quoi exactement ?",
        paragraphs: [
          "Le syndrome prémenstruel correspond à l’ensemble des symptômes physiques, émotionnels et psychologiques qui apparaissent après l’ovulation et disparaissent avec l’arrivée des règles, ou dans les premiers jours du cycle.",
          "C’est pourquoi il est important d’observer la temporalité de ses symptômes. S’ils sont présents tout au long du cycle, s’ils apparaissent avant l’ovulation ou persistent après les règles, il peut s’agir d’autre chose qu’un SPM.",
        ],
      },
      {
        title: "Ce que tes symptômes peuvent révéler",
        paragraphs: [
          "Dans de nombreux cas, le SPM est associé à un déséquilibre hormonal, c’est-à-dire à une difficulté pour le corps à maintenir un équilibre optimal entre les œstrogènes et la progestérone.",
          "Les symptômes que tu ressens peuvent alors donner de précieux indices sur les mécanismes en jeu.",
          "Mais les hormones ne fonctionnent jamais seules. Leur production est influencée par de nombreux facteurs liés à ton hygiène de vie, ton environnement et ton vécu émotionnel.",
        ],
      },
      {
        title: "Pourquoi faire ce test ?",
        paragraphs: [
          "Ce test a été conçu pour t’aider à identifier le profil de SPM qui te correspond le plus et à mieux comprendre les besoins de ton corps, sous l’angle de la Gyn’écologie émotionnelle.",
        ],
      },
    ],

    duration: "Durée estimée : moins de 2 minutes",

    confidentiality:
      "Tes réponses restent confidentielles. Ton résultat personnalisé te sera envoyé uniquement par email.",

    cta: "Commencer le test",
  },

  contact: {
    title: "Ton profil est prêt à être révélé 🌸",

    description:
      "Renseigne tes informations pour recevoir ton résultat personnalisé et découvrir ce que ton corps cherche peut-être à te dire.",
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
      resultEmail: "J’accepte de recevoir mon résultat personnalisé par email.",

      newsletter:
        "J’accepte de recevoir les emails de Mélanie Dizet autour du cycle, du SPM et de la gyn’écologie émotionnelle.",

      contact:
        "J’accepte que Mélanie Dizet puisse me recontacter à propos de mon résultat.",
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

    medicalDisclaimer:
      "Ce test n’a pas vocation à poser un diagnostic médical. Il s’agit d’un outil de compréhension pour t’aider à mieux observer les manifestations possibles de ton SPM.",
    backToHome: "Revenir à l’accueil du quiz",
    backToContact: "Contacter Mélanie DIZET",
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
