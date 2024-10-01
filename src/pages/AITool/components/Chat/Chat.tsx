import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FallingLines } from 'react-loader-spinner';

import { useMessages } from 'pages/AITool/context/Chat/Chat.context';
import { sendMessage } from 'pages/AITool/utils/genemi';

import Input from 'components/Form/Input';

import Message from './components/Message';

import { FormValues } from './Chat.types';
import { formSchema } from './Chat.validation';
import styles from './Chat.module.scss';

const Chat: FC = () => {
  const { messages, saveMessage } = useMessages();

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const handleLoading = (status: boolean) => {
    setLoading(status);
    setDisabled && setDisabled(status);
  };

  const onSubmit: SubmitHandler<FormValues> = async ({ message }) => {
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
  };

  return (
    <div className={styles.container}>
      <div className={styles.chat}>
        {messages.map((message, index) => (
          <Message
            key={index}
            type={message.type}
            index={index}
            disabled={disabled}
            setDisabled={setDisabled}
          >
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
