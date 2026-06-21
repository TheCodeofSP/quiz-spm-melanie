const QuizProspect = require("../models/QuizProspect");

const getAllQuizProspects = async (req, res) => {
  try {
    const prospects = await QuizProspect.find().sort({
      createdAt: -1,
    });

    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des prospects",
      error: error.message,
    });
  }
};

const createQuizProspect = async (req, res) => {
  try {
    const prospect = await QuizProspect.create({
      ...req.body,

      history: [
        {
          action: "Quiz complété",
        },
      ],
    });

    res.status(201).json(prospect);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création du prospect",
      error: error.message,
    });
  }
};

const {
  calculateScores,
  getProfilesFromScores,
  enrichAnswers,
} = require("../services/quizScoring.service");

const testScoring = async (req, res) => {
  try {
    const answers = req.body.answers;

    const scores = calculateScores(answers);

    const profiles = getProfilesFromScores(scores);

    const enrichedAnswers = enrichAnswers(answers);

    res.status(200).json({
      scores,
      profiles,
      answers: enrichedAnswers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur scoring",
      error: error.message,
    });
  }
};

module.exports = {
  getAllQuizProspects,
  createQuizProspect,
  testScoring,
};