"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function ai(prompt: string) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    
    return response;
}