import axiosInstance from "./axiosInstance";

// Start interview
export const startInterview = async () => {
  try {
    const res = await axiosInstance.post("/api/interview/start");
    return res.data;
  } catch (error) {
    // Readable error
    throw new Error(
      error?.response?.data?.message || "Failed to start interview"
    );
  }
};

// Submit answer
export const answerQuestion = async (answer) => {
  try {
    const res = await axiosInstance.post("/api/interview/answer", { answer });
    return res.data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "Failed to submit answer"
    );
  }
};
