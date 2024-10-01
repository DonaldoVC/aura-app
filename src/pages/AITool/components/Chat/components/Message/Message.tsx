import React, { FC, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { marked } from 'marked';

import regenerateIcon from 'assets/icons/regenerate.svg';
import starIcon from 'assets/icons/star.svg';
import copyIcon from 'assets/icons/copy.svg';
import copy2Icon from 'assets/icons/copy2.svg';
import likeIcon from 'assets/icons/like.svg';
import dislikeIcon from 'assets/icons/dislike.svg';
import optionsIcon from 'assets/icons/options.svg';

import { useMessages } from 'pages/AITool/context/Chat/Chat.context';
import { sendMessage } from 'pages/AITool/utils/gemini';
import useTypingEffect from 'pages/AITool/hooks/useTyping';

import { MessageProps } from './Message.types';
import styles from './Message.module.scss';

const Message: FC<MessageProps> = ({ type, children, index }) => {
  const { messages, isTyping, replaceMessage, checkMessage, setIsTyping } = useMessages();
  const { displayText } = useTypingEffect(children, 500);

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const getMarkdownText = (text: string) => {
    return { __html: marked(text) as string | TrustedHTML };
  };

  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(children);
  };

  const handleLoading = (status: boolean) => {
    setLoading(status);
    setIsTyping(status);
  };

  const handleRegenerate = async () => {
    handleLoading(true);
    checkMessage(index);
    const response = await sendMessage(messages[index - 1].message);

    if (response) {
      replaceMessage(response, index);
    }
    handleLoading(false);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <FallingLines color="#101723FF" width="40" visible={true} />
      ) : (
        <>
          {type === 'message' && (
            <div className={styles[type]}>
              <div>
                <span>{children}</span>
              </div>
            </div>
          )}

          {type === 'response' && (
            <>
              <div className={styles[type]}>
                <div dangerouslySetInnerHTML={getMarkdownText(displayText)} />
              </div>

              <div className={styles.options}>
                <div>
                  <button onClick={handleRegenerate} disabled={isTyping}>
                    <img src={regenerateIcon} alt="regenerate" width={25} height={25} />
                  </button>
                </div>
                <div>
                  <button disabled={isTyping}>
                    <img src={starIcon} alt="favorite" width={25} height={25} />
                  </button>
                </div>
                <div>
                  <button onClick={handleCopy} disabled={isTyping}>
                    <img src={copyIcon} alt="copy" width={25} height={25} />
                  </button>
                  <button disabled={isTyping}>
                    <img src={copy2Icon} alt="copy" width={25} height={25} />
                  </button>
                </div>
                <div>
                  <button disabled={isTyping}>
                    <img src={likeIcon} alt="like" width={28} height={25} />
                  </button>
                  <button disabled={isTyping}>
                    <img src={dislikeIcon} alt="dislike" width={25} height={25} />
                  </button>
                </div>
                <div>
                  <button disabled={isTyping}>
                    <img src={optionsIcon} alt="options" width={25} height={25} />
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Message;
