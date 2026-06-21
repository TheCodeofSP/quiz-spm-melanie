export default function ProgressBar({
  currentQuestion,
  totalQuestions,
}) {
  const progress = `${(currentQuestion / totalQuestions) * 100}%`;

  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={currentQuestion}
      aria-valuemin={1}
      aria-valuemax={totalQuestions}
      aria-label={`Progression : question ${currentQuestion} sur ${totalQuestions}`}
      style={{ "--progress-width": progress }}
    >
      <div className="progress__bar" />
    </div>
  );
}