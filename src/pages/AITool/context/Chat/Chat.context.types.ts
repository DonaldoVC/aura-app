import { ReactNode } from 'react';

export type MessageTypes = {
  message: string;
  type: 'message' | 'response';
};

export type MessageContextType = {
  messages: MessageTypes[];
  saveMessage: (message: MessageTypes) => void;
  replaceMessage: (message: string, index: number) => void;
};

export type MessageProviderProps = {
  children: ReactNode;
};
