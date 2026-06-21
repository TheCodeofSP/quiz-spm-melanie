import { Link } from "react-router-dom";

import QuizHeader from "../../components/common/QuizHeader.jsx";

import { quizContent } from "../../content/quiz.content.js";

export default function QuizConfirmation() {
  const { confirmation } = quizContent;

  return (
    <section className="quiz-confirmation animate-slide-up">
      <QuizHeader />

      <h1>{confirmation.title}</h1>

      <p>{confirmation.message}</p>
      <p>{confirmation.spamReminder}</p>
      <p>{confirmation.confidentiality}</p>

      <Link to="/quiz-spm" className="btn-outline">
        {confirmation.backToHome}
      </Link>
    </section>
  );
}
