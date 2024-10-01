import React, { FC } from 'react';

import Header from './components/Header';
import Chat from './components/Chat';

import { ChatProvider } from './context/Chat/Chat.context';

import styles from './AITool.module.scss';

const AITool: FC = () => {
  return (
    <ChatProvider>
      <div className={styles.container}>
        <Header />

        <Chat />
      </div>
    </ChatProvider>
  );
};

export default AITool;
