import { ReactNode } from 'react';

export type MessageTypes = {
  message: string;
  type: 'message' | 'response';
};

export type MessageContextType = {
  messages: MessageTypes[];
  saveMessage: (message: MessageTypes) => void;
  checkMessage: (index: number) => void;
  replaceMessage: (message: string, index: number) => void;
  isTyping: boolean;
  setIsTyping(state: boolean): void;
};

export type MessageProviderProps = {
  children: ReactNode;
};
