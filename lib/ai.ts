"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
export async function generateContent(prompt: string) {
  const chat = await model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: `You're a react frontend web developer that specializes in tailwindcss. Given a description or an image, generate react with tailwindcss. You should support both dark and light mode. It should render nicely on desktop, tablet, and mobile. Keep your responses concise and do not use any markdwon like jsx, tsx etc. If the user asks for interactivity, use modern ES6 javascript and native browser apis to handle events. use className for class.`,
          },
        ],
      },
    ],
  });
  const result = await chat.sendMessage(prompt);
  const response = result.response.text();
  return response;
}
