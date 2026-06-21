const { sendTestEmail } = require("../services/email.service");

const sendTestEmailController = async (req, res) => {
  try {
    const { email } = req.body;

    const response = await sendTestEmail(email);

    res.status(200).json({
      message: "Email envoyé avec succès",
      response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'envoi de l'email",
      error: error.message,
    });
  }
};

module.exports = {
  sendTestEmailController,
};