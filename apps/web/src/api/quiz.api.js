import apiClient from "./apiClient.js";

export const submitQuiz = async (payload) => {
  const response = await apiClient.post("/quiz/submit", payload);
  return response.data;
};