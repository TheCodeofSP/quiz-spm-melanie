import { useNavigate, useParams } from "react-router-dom";

import QuizHeader from "../../components/common/QuizHeader.jsx";
import AnswerCard from "../../components/quiz/AnswerCard.jsx";
import ProgressBar from "../../components/quiz/ProgressBar.jsx";

import { questionsContent } from "../../content/questions.content.js";
import { useQuiz } from "../../contexts/QuizContext.jsx";

export default function QuizQuestion() {
  const navigate = useNavigate();
  const { questionNumber } = useParams();

  const { answers, saveAnswer } = useQuiz();

  const currentQuestionNumber = Number(questionNumber);
  const totalQuestions = questionsContent.questions.length;
  const question = questionsContent.questions[currentQuestionNumber - 1];

  if (!question) {
    return <h1>{questionsContent.page.notFound}</h1>;
  }

  const selectedAnswer = answers[question.id];

  const goToPreviousQuestion = () => {
    if (currentQuestionNumber === 1) {
      navigate("/quiz-spm");
      return;
    }

    navigate(`/quiz-spm/questions/${currentQuestionNumber - 1}`);
  };

  const goToNextStep = () => {
    const isLastQuestion = currentQuestionNumber === totalQuestions;

    if (isLastQuestion) {
      navigate("/quiz-spm/contact");
      return;
    }

    navigate(`/quiz-spm/questions/${currentQuestionNumber + 1}`);
  };

  const handleAnswerSelect = (answer) => {
    saveAnswer(question.id, {
      questionId: question.id,
      question: question.question,
      answerKey: answer.key,
      answerLabel: answer.label,
      profile: answer.profile,
    });

    goToNextStep();
  };

  const isSelected = (answer) => {
    return (
      selectedAnswer?.answerKey === answer.key ||
      selectedAnswer?.answerLabel === answer.label
    );
  };

  return (
    <section className="quiz-question animate-slide-up">
      <QuizHeader />

      <span className="quiz-question__step">
        {questionsContent.page.progressLabel} {currentQuestionNumber}{" "}
        {questionsContent.page.progressSeparator} {totalQuestions}
      </span>

      <ProgressBar
        currentQuestion={currentQuestionNumber}
        totalQuestions={totalQuestions}
      />

      <h2>{question.question}</h2>

      <div className="quiz-question__answers">
        {question.answers.map((answer) => (
          <AnswerCard
            key={answer.key}
            label={answer.label}
            selected={isSelected(answer)}
            onClick={() => handleAnswerSelect(answer)}
          />
        ))}
      </div>

      <button type="button" className="btn-outline" onClick={goToPreviousQuestion}>
        {questionsContent.page.backButton}
      </button>
    </section>
  );
}