import axios from "axios";
import knowledgeBase from "../data/knowledgebase";

export async function getBotResponse(userMessage) {
  try {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `
You are an AI chatbot for Sibel Welfare Organization.

Only answer questions related to Sibel Welfare.

Knowledge Base:
${knowledgeBase}
                `,
              },
              {
                text: userMessage,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "x-goog-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error(error);

    if (error.response) {
      return error.response.data.error.message;
    }

    return error.message;
  }
}