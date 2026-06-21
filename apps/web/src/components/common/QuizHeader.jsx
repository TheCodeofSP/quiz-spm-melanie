import Logo from "../../assets/logo_melanie.webp";
import { quizContent } from "../../content/quiz.content";

export default function QuizHeader() {
  const { header } = quizContent;

  return (
    <a
      href={header.siteUrl}
      target="_blank"
      rel="noreferrer"
      className="quiz-header"
      aria-label={header.externalLinkLabel}
    >
      <div className="quiz-header__brand">
        <img src={Logo} alt={header.logoAlt} className="quiz-header__logo" />

        <div className="quiz-header__text">
          <span className="quiz-header__name">{header.name}</span>
          <span className="badge badge-pink">{header.badge}</span>
        </div>
      </div>
    </a>
  );
}
