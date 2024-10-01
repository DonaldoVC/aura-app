import { useEffect, useState } from 'react';

import { useMessages } from 'pages/AITool/context/Chat/Chat.context';

const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');

  const { setIsTyping } = useMessages();

  useEffect(() => {
    const typeText = async () => {
      setIsTyping(true);
      for (let index = 0; index < text.length; index++) {
        await new Promise(resolve => setTimeout(resolve, speed));
        setDisplayText(prev => prev + text[index]);
      }
      setIsTyping(false);
    };

    if (text) {
      typeText();
    }

    return () => {
      setDisplayText('');
      setIsTyping(false);
    };
  }, [text, speed, setIsTyping]);

  return { displayText };
};

export default useTypingEffect;
