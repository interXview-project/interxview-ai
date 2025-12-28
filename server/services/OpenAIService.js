// server/services/OpenAIService.js
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({});

/*
===========================================
 SAFE FALLBACK QUESTIONS (ORDERED)
===========================================
*/

const fallbackBank = {
  "Frontend Developer": [
    "What is HTML?",
    "What is CSS used for?",
    "What does JavaScript do?",
    "What is responsive design?",
    "What is a button element?",
    "What is a form on a webpage?",
    "What is a CSS class?",
    "What is a link tag?",
    "What is a web browser?",
    "What is a bug in code?",
  ],

  "Backend Developer": [
    "What is a server?",
    "What is a database?",
    "What is an API?",
    "What is JSON?",
    "What is authentication?",
    "What is a request?",
    "What is a response?",
    "What is a status code?",
    "What is a route?",
    "What is logging?",
  ],

  "Software Developer": [
    "What is a variable?",
    "What is a function?",
    "What is a loop?",
    "What is debugging?",
    "What is an array?",
    "What is an object?",
    "What is a conditional statement?",
    "What is a programming language?",
    "What is clean code?",
    "Why is testing important?",
  ],
};

// ⬅️ ضمان سؤال مختلف حسب رقم السؤال مباشرة
function getFallbackQuestion(role, questionNumber) {
  const bank = fallbackBank[role] || fallbackBank["Software Developer"];

  const index = questionNumber - 1;

  if (index >= bank.length) {
    return "Tell me something about yourself.";
  }

  return bank[index];
}

/*
===========================================
 SAFE AI QUESTION (WITH FALLBACK)
===========================================
*/
export const generateEasyQuestion = async (
  role = "Software Developer",
  questionNumber = 1,
  previousQuestions = []
) => {
  try {
    const prompt = `
You are an HR interviewer.
You are interviewing a BEGINNER ${role} student.

Rules:
- Very easy question
- Short (max 12 words)
- Beginner friendly
- English only
- MUST NOT repeat any of these:
${previousQuestions.join("\n")}

Return ONLY the question text.
`;

    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = res?.text?.trim();

    if (!text) return getFallbackQuestion(role, questionNumber);
    return text;
  } catch (err) {
    if (err.status === 429) {
      console.log("⚠️ Gemini quota exceeded — fallback activated");
    } else {
      console.log("⚠️ Gemini unavailable — fallback activated");
    }

    // ⬅️ أهم سطر
    return getFallbackQuestion(role, questionNumber);
  }
};

/*
===========================================
        FINAL ATS FEEDBACK
===========================================
*/
export const generateInterviewFeedback = async (role, answers) => {
  try {
    const prompt = `
You are an HR expert and ATS evaluator.

You interviewed a beginner candidate for: ${role}

Here are their interview answers:
${answers.join("\n\n")}

You MUST respond ONLY in JSON format exactly like:

{
  "score": 0-100,
  "atsSummary": "short professional ATS summary",
  "strengths": ["point1","point2","point3"],
  "weaknesses": ["point1","point2","point3"],
  "detailedFeedback": "HR supportive detailed feedback paragraph"
}

STRICT RULES:
- JSON ONLY
- English only
`;

    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = res?.text?.trim();
    if (!text) throw new Error("Empty feedback");
    return JSON.parse(text);
  } catch (err) {
    console.log("⚠️ AI Feedback Failed — Using fallback structured feedback");
    return {
      score: 65,
      atsSummary:
        "Candidate shows good understanding but needs stronger structured answers.",
      strengths: [
        "Good communication",
        "Understands basics",
        "Motivated learner",
      ],
      weaknesses: [
        "Needs more detail",
        "Confidence improvement needed",
        "Better examples required",
      ],
      detailedFeedback:
        "Overall you did well! Try answering in more structured steps, add examples, and be confident. With continued practice, your interview performance will improve significantly.",
    };
  }
};
