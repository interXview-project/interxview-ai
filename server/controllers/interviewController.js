// controllers/interviewController.js

export const startInterview = async (req, res) => {
  try {
    res.json({ message: "Interview started (placeholder)" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const answerInterview = async (req, res) => {
  try {
    res.json({ message: "Answer received (placeholder)" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
