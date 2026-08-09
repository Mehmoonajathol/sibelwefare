import axios from "axios";
import knowledgeBase from "../data/knowledgebase";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getBotResponse(userMessage) {
  try {
    if (!API_KEY) {
      return "Gemini API key is missing.";
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `You are an AI chatbot for Sibel Welfare Organization.

Answer questions about Sibel Welfare Organization using the information below.

Knowledge Base:
${knowledgeBase}

User Question:
${userMessage}

Give a short, clear and friendly answer.`
              }
            ]
          }
        ]
      },
      {
        headers: {
          "x-goog-api-key": API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Gemini Error:", error);

    return "Sorry! Something went wrong.";
  }
}