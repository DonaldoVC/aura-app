import { GoogleGenerativeAI } from '@google/generative-ai';

export const sendMessage = async (message: string) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GENEMI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(message);

    return result.response.text();
  } catch (error) {
    console.log('Error');
  }
};
