import { Link } from "react-router-dom";

import { quizContent } from "../../content/quiz.content.js";
import QuizHeader from "../../components/common/QuizHeader.jsx";
export default function QuizHome() {
  const { home } = quizContent;

  return (
    <section className="quiz-home animate-slide-up">
      <QuizHeader />
      <h1>{home.title}</h1>

      <p className="quiz-home__intro">{home.introduction}</p>

      <div className="quiz-home__info card">
        <p>{home.duration}</p>
        <p>{home.confidentiality}</p>
      </div>

      <Link to="/quiz-spm/questions/1" className="btn-primary">
        {home.cta}
      </Link>
    </section>
  );
}
