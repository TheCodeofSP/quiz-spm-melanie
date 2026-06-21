const initialProfilesStats = {
  BOULE_DE_NERFS: 0,
  CROQUE_TOUT: 0,
  DOUCE_MELANCOLIE: 0,
  GONFLEE_A_BLOC: 0,
  MIXED_PROFILE: 0,
};

const initialStatusStats = {
  NEW_LEAD: 0,
  CALL_PROPOSED: 0,
  APPOINTMENT_SCHEDULED: 0,
  INTERVIEW_COMPLETED: 0,
  SUPPORT_PROPOSED: 0,
  CLIENT: 0,
  ARCHIVED: 0,
};

const initialAgeGroups = {
  UNDER_18: 0,
  AGE_18_24: 0,
  AGE_25_34: 0,
  AGE_35_44: 0,
  AGE_45_PLUS: 0,
  UNKNOWN: 0,
};

const getAgeGroup = (age) => {
  if (!age) return "UNKNOWN";
  if (age < 18) return "UNDER_18";
  if (age >= 18 && age <= 24) return "AGE_18_24";
  if (age >= 25 && age <= 34) return "AGE_25_34";
  if (age >= 35 && age <= 44) return "AGE_35_44";
  return "AGE_45_PLUS";
};

const buildStats = (prospects) => {
  const stats = {
    totalProspects: prospects.length,

    contactPermission: {
      yes: 0,
      no: 0,
    },

    profiles: { ...initialProfilesStats },

    statuses: { ...initialStatusStats },

    contraception: {
      yes: 0,
      no: 0,
      unknown: 0,
    },

    ageGroups: { ...initialAgeGroups },
  };

  prospects.forEach((prospect) => {
    if (prospect.consents?.contactPermission) {
      stats.contactPermission.yes += 1;
    } else {
      stats.contactPermission.no += 1;
    }

    if (prospect.profiles?.length > 1) {
      stats.profiles.MIXED_PROFILE += 1;
    } else {
      const profile = prospect.profiles?.[0];

      if (profile && stats.profiles[profile] !== undefined) {
        stats.profiles[profile] += 1;
      }
    }

    if (prospect.status && stats.statuses[prospect.status] !== undefined) {
      stats.statuses[prospect.status] += 1;
    }

    const hasHormonalContraception =
      prospect.participantInfo?.hasHormonalContraception;

    if (hasHormonalContraception === true) {
      stats.contraception.yes += 1;
    } else if (hasHormonalContraception === false) {
      stats.contraception.no += 1;
    } else {
      stats.contraception.unknown += 1;
    }

    const ageGroup = getAgeGroup(prospect.participantInfo?.age);
    stats.ageGroups[ageGroup] += 1;
  });

  return stats;
};

module.exports = {
  buildStats,
};