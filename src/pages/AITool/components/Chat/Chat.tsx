import React, { FC, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FallingLines } from 'react-loader-spinner';

import { useMessages } from 'pages/AITool/context/Chat/Chat.context';
import { sendMessage } from 'pages/AITool/utils/gemini';

import Input from 'components/Form/Input';

import Message from './components/Message';

import { FormValues } from './Chat.types';
import { formSchema } from './Chat.validation';
import styles from './Chat.module.scss';

const Chat: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { messages, saveMessage, isTyping, setIsTyping } = useMessages();

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const handleLoading = (status: boolean) => {
    setLoading(status);
    setIsTyping(status);
  };

  const onSubmit: SubmitHandler<FormValues> = async ({ message }) => {
    if (!isTyping) {
      handleLoading(true);
      reset();
      saveMessage({
        message,
        type: 'message',
      });
      const response = await sendMessage(message);

      if (response) {
        saveMessage({
          message: response,
          type: 'response',
        });
      }
      handleLoading(false);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    });

    if (ref.current) {
      observer.observe(ref.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.chat}>
        {messages.map((message, index) => (
          <Message key={index} type={message.type} index={index}>
            {message.message}
          </Message>
        ))}

        {loading && <FallingLines color="#101723FF" width="40" visible={true} />}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          id="message"
          placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
          type="text"
          register={register}
        />
      </form>
    </div>
  );
};

export default Chat;
