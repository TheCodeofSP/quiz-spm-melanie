const QuizProspect = require("../models/QuizProspect");

const { sendQuizResultEmail } = require("./email.service");

const {
  calculateScores,
  getProfilesFromScores,
  enrichAnswers,
} = require("./quizScoring.service");

const formatProfiles = (profiles) => {
  return profiles.join(" + ");
};

const buildQuizAttempt = ({ profiles, scores, answers }) => {
  return {
    quizDate: new Date(),
    profiles,
    scores,
    answers,
  };
};

const submitQuiz = async ({
  firstName,
  email,
  participantInfo,
  answers,
  consents,
}) => {
  const normalizedEmail = email.toLowerCase().trim();

  const scores = calculateScores(answers);

  const profiles = getProfilesFromScores(scores);

  const enrichedAnswers = enrichAnswers(answers);

  const quizAttempt = buildQuizAttempt({
    profiles,
    scores,
    answers: enrichedAnswers,
  });

  const existingProspect = await QuizProspect.findOne({
    email: normalizedEmail,
  });

  // NOUVEAU PROSPECT
  if (!existingProspect) {
    const prospect = await QuizProspect.create({
      firstName,
      email: normalizedEmail,

      participantInfo,

      quizDate: new Date(),

      profiles,
      scores,
      answers: enrichedAnswers,

      consents,

      quizAttempts: [quizAttempt],

      history: [
        {
          action: "Quiz réalisé",
        },
        {
          action: `Profil identifié : ${formatProfiles(profiles)}`,
        },
      ],
    });

    await sendQuizResultEmail({
      firstName,
      email: normalizedEmail,
      profiles,
    });

    return {
      prospect,
      scores,
      profiles,
      isNewProspect: true,
    };
  }

  const previousProfiles = existingProspect.profiles || [];

  existingProspect.firstName = firstName;

  existingProspect.participantInfo =
    participantInfo || existingProspect.participantInfo;

  existingProspect.quizDate = new Date();

  existingProspect.profiles = profiles;
  existingProspect.scores = scores;
  existingProspect.answers = enrichedAnswers;

  existingProspect.consents = consents;

  if (!existingProspect.quizAttempts) {
    existingProspect.quizAttempts = [];
  }

  if (!existingProspect.history) {
    existingProspect.history = [];
  }

  if (!Array.isArray(existingProspect.notes)) {
    existingProspect.notes = [];
  }

  existingProspect.quizAttempts.push(quizAttempt);

  existingProspect.history.push(
    {
      action: "Quiz réalisé",
    },
    {
      action: `Profil précédent : ${formatProfiles(previousProfiles)}`,
    },
    {
      action: `Profil actuel : ${formatProfiles(profiles)}`,
    },
  );

  await existingProspect.save();

  await sendQuizResultEmail({
    firstName,
    email: normalizedEmail,
    profiles,
  });

  return {
    prospect: existingProspect,
    scores,
    profiles,
    isNewProspect: false,
  };
};

module.exports = {
  submitQuiz,
};
