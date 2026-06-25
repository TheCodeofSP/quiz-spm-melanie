import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuizHeader from "../../components/common/QuizHeader.jsx";

import { submitQuiz } from "../../api/quiz.api";
import { quizContent } from "../../content/quiz.content.js";
import { questionsContent } from "../../content/questions.content.js";
import { useQuiz } from "../../contexts/QuizContext.jsx";

export default function QuizContact() {
  const navigate = useNavigate();

  const { contact, updateContact, answers, resetQuiz } = useQuiz();
  const { contact: contactContent, validation } = quizContent;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contact.firstname.trim()) {
      newErrors.firstname = validation.firstnameRequired;
    }

    if (!emailRegex.test(contact.email)) {
      newErrors.email = validation.emailRequired;
    }

    if (Object.keys(answers).length !== questionsContent.questions.length) {
      newErrors.answers = validation.answersRequired;
    }

    if (!contact.emailConsent) {
      newErrors.consent = validation.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildFormattedAnswers = () => {
    return questionsContent.questions.map((question) => answers[question.id]);
  };

  const buildParticipantInfo = () => {
    const usesHormonalContraception =
      contact.hasHormonalContraception === "yes";

    return {
      age: contact.age ? Number(contact.age) : null,
      hasHormonalContraception:
        contact.hasHormonalContraception === ""
          ? null
          : usesHormonalContraception,
      hormonalContraceptionName: usesHormonalContraception
        ? contact.hormonalContraceptionName.trim()
        : "",
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setApiError("");

    try {
      setIsSubmitting(true);

      await submitQuiz({
        firstName: contact.firstname.trim(),
        email: contact.email.trim(),
        participantInfo: buildParticipantInfo(),
        answers: buildFormattedAnswers(),
        consents: {
          resultEmail: contact.emailConsent,
          newsletter: contact.newsletterConsent,
          contactPermission: contact.contactConsent,
        },
      });

      resetQuiz();
      navigate("/quiz-spm/confirmation");
    } catch (error) {
      console.error("Erreur API complète:", error);
      console.error("Réponse backend:", error.response?.data);

      setApiError(validation.apiError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="quiz-contact animate-slide-up">
      <QuizHeader />

      <h1>{contactContent.title}</h1>

      <p>{contactContent.description}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label
            htmlFor={contactContent.fields.firstname.id}
            className="form-label"
          >
            {contactContent.fields.firstname.label}
          </label>

          <input
            id={contactContent.fields.firstname.id}
            className="form-input"
            value={contact.firstname}
            onChange={(event) => updateContact("firstname", event.target.value)}
          />

          {errors.firstname && (
            <span className="form-error">{errors.firstname}</span>
          )}
        </div>

        <div className="form-group">
          <label
            htmlFor={contactContent.fields.email.id}
            className="form-label"
          >
            {contactContent.fields.email.label}
          </label>

          <input
            id={contactContent.fields.email.id}
            type={contactContent.fields.email.type}
            className="form-input"
            value={contact.email}
            onChange={(event) => updateContact("email", event.target.value)}
          />

          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor={contactContent.fields.age.id} className="form-label">
            {contactContent.fields.age.label}
          </label>

          <input
            id={contactContent.fields.age.id}
            type={contactContent.fields.age.type}
            min={contactContent.fields.age.min}
            max={contactContent.fields.age.max}
            className="form-input"
            value={contact.age}
            onChange={(event) => updateContact("age", event.target.value)}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor={contactContent.fields.hasHormonalContraception.id}
            className="form-label"
          >
            {contactContent.fields.hasHormonalContraception.label}
          </label>

          <select
            id={contactContent.fields.hasHormonalContraception.id}
            className="form-select"
            value={contact.hasHormonalContraception}
            onChange={(event) =>
              updateContact("hasHormonalContraception", event.target.value)
            }
          >
            {contactContent.fields.hasHormonalContraception.options.map(
              (option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ),
            )}
          </select>
        </div>

        {contact.hasHormonalContraception === "yes" && (
          <div className="form-group">
            <label
              htmlFor={contactContent.fields.hormonalContraceptionName.id}
              className="form-label"
            >
              {contactContent.fields.hormonalContraceptionName.label}
            </label>

            <input
              id={contactContent.fields.hormonalContraceptionName.id}
              className="form-input"
              placeholder={
                contactContent.fields.hormonalContraceptionName.placeholder
              }
              value={contact.hormonalContraceptionName}
              onChange={(event) =>
                updateContact("hormonalContraceptionName", event.target.value)
              }
            />
          </div>
        )}

        <div className="checkbox-field">
          <input
            type="checkbox"
            checked={contact.emailConsent}
            onChange={(event) =>
              updateContact("emailConsent", event.target.checked)
            }
          />

          <label>{contactContent.consents.resultEmail}</label>
        </div>
        
        <div className="checkbox-field">
          <input
            type="checkbox"
            checked={contact.newsletterConsent}
            onChange={(event) =>
              updateContact("newsletterConsent", event.target.checked)
            }
          />

          <label>{contactContent.consents.newsletter}</label>
        </div>
        <div className="checkbox-field">
          <input
            type="checkbox"
            checked={contact.contactConsent}
            onChange={(event) =>
              updateContact("contactConsent", event.target.checked)
            }
          />

          <label>{contactContent.consents.contact}</label>
        </div>

        {errors.consent && <span className="form-error">{errors.consent}</span>}
        {errors.answers && <span className="form-error">{errors.answers}</span>}
        {apiError && <p className="form-error">{apiError}</p>}

        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting
            ? contactContent.submittingButton
            : contactContent.submitButton}
        </button>
      </form>
    </section>
  );
}
