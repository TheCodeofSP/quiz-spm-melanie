const { Parser } = require("json2csv");

const buildProspectsCsv = (prospects) => {
  const rows = prospects.map((prospect) => ({
    firstName: prospect.firstName,
    email: prospect.email,

    profiles: prospect.profiles.join(" + "),

    status: prospect.status,

    contactPermission: prospect.consents?.contactPermission ? "Oui" : "Non",

    lastQuizDate: prospect.quizDate,

    quizCount: prospect.quizAttempts?.length || 0,

    firstContactAt: prospect.firstContactAt || "",

    lastContactAt: prospect.lastContactAt || "",

    createdAt: prospect.createdAt,

    age: prospect.participantInfo?.age || "",

    hasHormonalContraception: prospect.participantInfo?.hasHormonalContraception
      ? "Oui"
      : "Non",

    hormonalContraceptionName:
      prospect.participantInfo?.hormonalContraceptionName || "",
  }));

  const parser = new Parser({
    fields: [
      "firstName",
      "email",
      "profiles",
      "status",
      "contactPermission",
      "lastQuizDate",
      "quizCount",
      "firstContactAt",
      "lastContactAt",
      "createdAt",
      "age",
      "hasHormonalContraception",
      "hormonalContraceptionName",
    ],
  });

  return parser.parse(rows);
};

module.exports = {
  buildProspectsCsv,
};
