import axiosInstance from "./axiosInstance";

export const startInterview = async () => {
  const res = await axiosInstance.post("/api/interview/start");
  return res.data;
};

export const answerQuestion = async (answer) => {
  const res = await axiosInstance.post("/api/interview/answer", { answer });
  return res.data;
};
