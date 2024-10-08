import React, { createContext, FC, useContext, useState } from 'react';
import { MessageProviderProps, MessageContextType, MessageTypes } from './Chat.context.types';

const ChatContext = createContext<MessageContextType | undefined>(undefined);

export const ChatProvider: FC<MessageProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<MessageTypes[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const saveMessage = (message: MessageTypes) => {
    setMessages(prevState => [...prevState, message]);
  };

  const checkMessage = (index: number) => {
    if (index + 1 < messages.length) {
      setMessages(prevState => prevState.splice(0, index + 1));
    }
  };

  const replaceMessage = (message: string, index: number) => {
    const prevState = [...messages];

    prevState[index].message = message;

    setMessages(prevState);
  };

  return (
    <ChatContext.Provider
      value={{ messages, isTyping, saveMessage, checkMessage, replaceMessage, setIsTyping }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useMessages = (): MessageContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useAuth must be used within an ChatContext');
  }
  return context;
};
