import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

export const generateInterviewQuestion = async (role = "Software Developer") => {
  try {
    // The @google/genai library automatically reads the API key from the environment variable GEMINI_API_KEY.
    const ai = new GoogleGenAI({});

    const prompt = `Generate one technical interview question for the role: ${role}.
Return ONLY the question without explanations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const question = response.text;

    if (!question) {
      throw new Error("Gemini returned an empty response");
    }

    return question.trim();

  } catch (err) {
    console.error("❌ Gemini Error:", err);
    throw err;
  }
};
