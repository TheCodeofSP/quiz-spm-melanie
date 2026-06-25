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

  const currentStepNumber = Number(questionNumber);
  const currentStep = questionsContent.steps[currentStepNumber - 1];

  const totalQuestions = questionsContent.questions.length;
  const totalCategories = questionsContent.steps.filter(
    (step) => step.type === "category",
  ).length;

  if (!currentStep) {
    return <h1>{questionsContent.page.notFound}</h1>;
  }

  const goToPreviousStep = () => {
    if (currentStepNumber === 1) {
      navigate("/quiz-spm");
      return;
    }

    navigate(`/quiz-spm/questions/${currentStepNumber - 1}`);
  };

  const goToNextStep = () => {
    const isLastStep = currentStepNumber === questionsContent.steps.length;

    if (isLastStep) {
      navigate("/quiz-spm/contact");
      return;
    }

    navigate(`/quiz-spm/questions/${currentStepNumber + 1}`);
  };

  const getQuestionProgressNumber = () => {
    const previousSteps = questionsContent.steps.slice(0, currentStepNumber);

    return previousSteps.filter((step) => step.type === "question").length;
  };

  if (currentStep.type === "category") {
    return (
      <section className="quiz-question quiz-question--category animate-slide-up">
        <QuizHeader />

        <span className="quiz-question__step">
          Étape {currentStep.stepNumber} sur {totalCategories}
        </span>

        <div className="quiz-question__category-card">
          <h2>{currentStep.title}</h2>

          <p>{currentStep.description}</p>
        </div>

        <button type="button" className="btn-primary" onClick={goToNextStep}>
          Continuer
        </button>

        <button
          type="button"
          className="btn-outline"
          onClick={goToPreviousStep}
        >
          {questionsContent.page.backButton}
        </button>
      </section>
    );
  }

  const question = questionsContent.questions.find(
    (item) => item.id === currentStep.questionId,
  );

  if (!question) {
    return <h1>{questionsContent.page.notFound}</h1>;
  }

  const currentQuestionProgressNumber = getQuestionProgressNumber();
  const selectedAnswer = answers[question.id];

  const handleAnswerSelect = (answer) => {
    saveAnswer(question.id, {
      questionId: question.id,
      question: question.question,
      answerKey: answer.key,
      answerLabel: answer.label,
      profiles: answer.profiles,
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
        {questionsContent.page.progressLabel} {currentQuestionProgressNumber}{" "}
        {questionsContent.page.progressSeparator} {totalQuestions}
      </span>

      <ProgressBar
        currentQuestion={currentQuestionProgressNumber}
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

      <button type="button" className="btn-outline" onClick={goToPreviousStep}>
        {questionsContent.page.backButton}
      </button>
    </section>
  );
}
