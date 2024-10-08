import { GoogleGenerativeAI } from '@google/generative-ai';

export const sendMessage = async (message: string) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(message);

    return result.response.text();
  } catch (error) {
    console.error(`AI error ${error}`);
  }
};
