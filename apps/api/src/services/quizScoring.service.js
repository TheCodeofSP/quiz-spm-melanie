const quizQuestions = require("../data/quizQuestions");

const initialScores = {
  bouleDeNerfs: 0,
  croqueTout: 0,
  douceMelancolie: 0,
  gonfleeABloc: 0,
};

const profileToScoreKey = {
  BOULE_DE_NERFS: "bouleDeNerfs",
  CROQUE_TOUT: "croqueTout",
  DOUCE_MELANCOLIE: "douceMelancolie",
  GONFLEE_A_BLOC: "gonfleeABloc",
};

const calculateScores = (answers) => {
  const scores = { ...initialScores };

  answers.forEach((userAnswer) => {
    const question = quizQuestions.find(
      (q) => q.id === userAnswer.questionId
    );

    if (!question) return;

    const selectedAnswer = question.answers.find(
      (answer) => answer.key === userAnswer.answerKey
    );

    if (!selectedAnswer) return;

    selectedAnswer.profiles.forEach((profile) => {
      const scoreKey = profileToScoreKey[profile];

      if (scoreKey) {
        scores[scoreKey] += 1;
      }
    });
  });

  return scores;
};

const getProfilesFromScores = (scores) => {
  const highestScore = Math.max(...Object.values(scores));

  const profiles = Object.entries(profileToScoreKey)
    .filter(([, scoreKey]) => scores[scoreKey] === highestScore)
    .map(([profile]) => profile);

  return profiles;
};

const enrichAnswers = (answers) => {
  return answers.map((userAnswer) => {
    const question = quizQuestions.find(
      (q) => q.id === userAnswer.questionId
    );

    const selectedAnswer = question?.answers.find(
      (answer) => answer.key === userAnswer.answerKey
    );

    return {
      questionId: userAnswer.questionId,
      answerKey: userAnswer.answerKey,
      answerLabel: selectedAnswer?.label || "",
    };
  });
};

module.exports = {
  calculateScores,
  getProfilesFromScores,
  enrichAnswers,
};