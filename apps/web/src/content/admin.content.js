export const adminContent = {
  common: {
    loading: "Chargement...",
    noData: "Aucune donnée disponible.",
    emptyValue: "—",
    yes: "Oui",
    no: "Non",
    unknown: "Non renseigné",
  },

  dashboard: {
    loading: "Chargement du dashboard...",
    error: "Impossible de charger les statistiques.",
    empty: "Aucune donnée disponible.",
    title: "Dashboard",
    description: "Vue d’ensemble des résultats du quiz et des prospects.",
    profileSectionTitle: "Répartition des profils",
    cards: {
      totalProspects: "Total participantes",
      newLeads: "Nouveaux leads",
      contactedLeads: "Contacts relancés",
      bookedCalls: "Rendez-vous pris",
    },
  },

  export: {
    title: "Export CSV",
    description:
      "Télécharge les données des participantes pour les analyser dans Excel, Google Sheets ou un autre outil.",
    panelTitle: "Export global",
    panelDescription:
      "Cet export contient les informations principales des participantes, leurs profils, leur statut et les données utiles au suivi.",
    button: "Télécharger le CSV",
  },

  prospects: {
    loading: "Chargement des participantes...",
    error: "Impossible de charger les participantes.",
    title: "Participantes",
    description: "Retrouve ici toutes les personnes ayant complété le quiz.",
    empty: "Aucune participante pour le moment.",
    detailLink: "Voir la fiche",
    tableHeaders: {
      firstName: "Prénom",
      email: "Email",
      profile: "Profil",
      status: "Statut",
      date: "Date",
      actions: "",
    },
  },

  prospectDetails: {
    loading: "Chargement de la fiche participante...",
    loadError: "Impossible de charger la fiche participante.",
    notFound: "Participante introuvable.",
    statusUpdateError: "Impossible de mettre à jour le statut.",
    noteAddError: "Impossible d’ajouter la note.",

    sections: {
      general: "Informations générales",
      followUp: "Suivi commercial",
      answers: "Réponses au quiz",
      history: "Historique",
      notes: "Notes internes",
    },

    labels: {
      profile: "Profil :",
      quizDate: "Date du quiz :",
      age: "Âge :",
      hormonalContraception: "Contraception hormonale :",
      hormonalContraceptionName: "Nom de la contraception :",
      status: "Statut",
    },

    empty: {
      answers: "Aucune réponse enregistrée.",
      history: "Aucun historique.",
      notes: "Aucune note pour le moment.",
      contraceptionName: "—",
    },

    noteForm: {
      placeholder: "Ajouter une note privée sur cette participante...",
      submit: "Ajouter la note",
      submitting: "Enregistrement...",
    },
  },

  statistics: {
    loading: "Chargement des statistiques...",
    error: "Impossible de charger les statistiques.",
    empty: "Aucune donnée disponible.",
    title: "Statistiques",
    description:
      "Analyse des profils, statuts et informations complémentaires.",
    sections: {
      profiles: "Profils dominants",
      statuses: "Statuts commerciaux",
      contraception: "Contraception hormonale",
      ageGroups: "Tranches d’âge",
      contactPermission: "Consentement à être recontactée",
    },
  },

  statusOptions: [
    { value: "NEW_LEAD", label: "Nouveau lead" },
    { value: "CALL_PROPOSED", label: "Appel proposé" },
    { value: "APPOINTMENT_SCHEDULED", label: "Rendez-vous planifié" },
    { value: "INTERVIEW_COMPLETED", label: "Entretien réalisé" },
    { value: "SUPPORT_PROPOSED", label: "Accompagnement proposé" },
    { value: "CLIENT", label: "Cliente" },
    { value: "ARCHIVED", label: "Archivée" },
  ],

  labels: {
    profiles: {
      BOULE_DE_NERFS: "Boule de nerfs",
      CROQUE_TOUT: "Croque-tout",
      DOUCE_MELANCOLIE: "Douce mélancolie",
      GONFLEE_A_BLOC: "Gonflée à bloc",
      MIXED_PROFILE: "Profil mixte",
    },

    statuses: {
      NEW_LEAD: "Nouveau lead",
      CALL_PROPOSED: "Appel proposé",
      APPOINTMENT_SCHEDULED: "Rendez-vous planifié",
      INTERVIEW_COMPLETED: "Entretien réalisé",
      SUPPORT_PROPOSED: "Accompagnement proposé",
      CLIENT: "Cliente",
      ARCHIVED: "Archivée",
    },

    ageGroups: {
      UNDER_18: "Moins de 18 ans",
      AGE_18_24: "18–24 ans",
      AGE_25_34: "25–34 ans",
      AGE_35_44: "35–44 ans",
      AGE_45_PLUS: "45 ans et +",
      UNKNOWN: "Non renseigné",
    },

    boolean: {
      yes: "Oui",
      no: "Non",
      unknown: "Non renseigné",
    },
  },

  layout: {
    brand: {
      eyebrow: "Test de Personnalité SPM",
      title: "Admin Mélanie",
    },

    nav: [
      {
        to: "/admin/dashboard",
        label: "Dashboard",
      },
      {
        to: "/admin/participantes",
        label: "Participantes",
      },
      {
        to: "/admin/statistiques",
        label: "Statistiques",
      },
      {
        to: "/admin/export",
        label: "Export CSV",
      },
    ],
  },
};
