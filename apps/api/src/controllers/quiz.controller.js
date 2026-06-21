const { submitQuiz } = require("../services/quizSubmission.service");

const submitQuizController = async (req, res) => {
  try {
    const result = await submitQuiz(req.body);

    res.status(201).json({
      message: "Quiz envoyé avec succès",
      profiles: result.profiles,
      scores: result.scores,
      isNewProspect: result.isNewProspect,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la soumission du quiz",
      error: error.message,
    });
  }
};

module.exports = {
  submitQuizController,
};