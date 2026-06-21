import { createContext, useContext, useMemo, useState } from "react";

const QuizContext = createContext(null);

const initialContact = {
  firstname: "",
  email: "",
  age: "",
  hasHormonalContraception: "",
  hormonalContraceptionName: "",
  emailConsent: false,
  contactConsent: false,
};

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState(initialContact);

  const saveAnswer = (questionId, answer) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: answer,
    }));
  };

  const updateContact = (field, value) => {
    setContact((currentContact) => ({
      ...currentContact,
      [field]: value,
    }));
  };

  const resetQuiz = () => {
    setAnswers({});
    setContact(initialContact);
  };

  const value = useMemo(
    () => ({
      answers,
      contact,
      saveAnswer,
      updateContact,
      resetQuiz,
    }),
    [answers, contact],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz doit être utilisé dans QuizProvider");
  }

  return context;
}
