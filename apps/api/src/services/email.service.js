const { Resend } = require("resend");

const {
  buildQuizResultEmail,
} = require("../templates/quizResultEmail.template");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendQuizResultEmail = async ({ firstName, email, profiles }) => {
  const html = buildQuizResultEmail({
    firstName,
    profiles,
  });

  const result = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Ton résultat au test SPM 🌸",
    html,
  });

  console.log("RESEND RESULT:", result);

  return result;
};

module.exports = {
  sendQuizResultEmail,
};
