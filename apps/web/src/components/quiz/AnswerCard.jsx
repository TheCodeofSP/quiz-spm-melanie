export default function AnswerCard({ label, selected, onClick }) {
  const className = selected
    ? "answer-card answer-card--selected"
    : "answer-card";

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}