import { Link } from "react-router-dom";

import { quizContent } from "../../content/quiz.content.js";
import QuizHeader from "../../components/common/QuizHeader.jsx";

export default function QuizHome() {
  const { home } = quizContent;

  return (
    <section className="quiz-home animate-slide-up">
      <QuizHeader />

      <div className="quiz-home__hero">
        <h1>{home.title}</h1>
      </div>

      <div className="quiz-home__content">
        {home.sections.map((section) => (
          <article className="quiz-home__section" key={section.title}>
            <h2>{section.title}</h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.highlight && (
              <p className="quiz-home__highlight">{section.highlight}</p>
            )}
          </article>
        ))}
      </div>

      <div className="quiz-home__cta-card">
        <Link to="/quiz-spm/questions/1" className="btn-primary">
          {home.cta}
        </Link>
        <div className="quiz-home__info">
          <p>{home.duration}</p>
          <p>{home.confidentiality}</p>
        </div>
      </div>
    </section>
  );
}
