import { Link } from "react-router-dom";

import QuizHeader from "../../components/common/QuizHeader.jsx";

import { quizContent } from "../../content/quiz.content.js";

export default function QuizConfirmation() {
  const { confirmation } = quizContent;

  return (
    <section className="quiz-confirmation animate-slide-up">
      <QuizHeader />

      <h1>{confirmation.title}</h1>

      <div className="quiz-confirmation__content">
        <p>{confirmation.message}</p>
        <p>{confirmation.spamReminder}</p>
        <p>{confirmation.confidentiality}</p>

        <p className="quiz-confirmation__disclaimer">
          {confirmation.medicalDisclaimer}
        </p>
      </div>

      <Link to="https://melaniedizet.com/contact/" className="btn-outline">
        {confirmation.backToContact}
      </Link>
    </section>
  );
}