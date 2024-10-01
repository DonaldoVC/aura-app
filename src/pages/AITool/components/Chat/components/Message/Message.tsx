import React, { FC, useState } from 'react';
import Markdown from 'markdown-to-jsx';

import regenerateIcon from 'assets/icons/regenerate.svg';
import starIcon from 'assets/icons/star.svg';
import copyIcon from 'assets/icons/copy.svg';
import copy2Icon from 'assets/icons/copy2.svg';
import likeIcon from 'assets/icons/like.svg';
import dislikeIcon from 'assets/icons/dislike.svg';
import optionsIcon from 'assets/icons/options.svg';

import { useMessages } from 'pages/AITool/context/Chat/Chat.context';
import { sendMessage } from 'pages/AITool/utils/genemi';

import { MessageProps } from './Message.types';
import styles from './Message.module.scss';
import { FallingLines } from 'react-loader-spinner';

const Message: FC<MessageProps> = ({ type, children, index, disabled, setDisabled }) => {
  const { messages, replaceMessage } = useMessages();

  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(children);
  };

  const handleLoading = (status: boolean) => {
    setLoading(status);
    setDisabled && setDisabled(status);
  };

  const handleRegenerate = async () => {
    handleLoading(true);
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
          <div className={styles[type]}>
            <Markdown
              options={{
                overrides: {
                  code: {
                    component: ({ children }) => (
                      <code
                        style={{
                          padding: '10px',
                          borderRadius: '5px',
                          color: '#dcdcdc',
                          display: 'block',
                          margin: '10px 0',
                          backgroundColor: '#282c34',
                        }}
                      >
                        {children}
                      </code>
                    ),
                  },
                },
              }}
            >
              {children}
            </Markdown>
          </div>

          {type === 'response' && (
            <div className={styles.options}>
              <div>
                <button onClick={handleRegenerate} disabled={disabled}>
                  <img src={regenerateIcon} alt="regenerate" width={25} height={25} />
                </button>
              </div>
              <div>
                <button disabled={disabled}>
                  <img src={starIcon} alt="favorite" width={25} height={25} />
                </button>
              </div>
              <div>
                <button onClick={handleCopy} disabled={disabled}>
                  <img src={copyIcon} alt="copy" width={25} height={25} />
                </button>
                <button disabled={disabled}>
                  <img src={copy2Icon} alt="copy" width={25} height={25} />
                </button>
              </div>
              <div>
                <button disabled={disabled}>
                  <img src={likeIcon} alt="like" width={28} height={25} />
                </button>
                <button disabled={disabled}>
                  <img src={dislikeIcon} alt="dislike" width={25} height={25} />
                </button>
              </div>
              <div>
                <button disabled={disabled}>
                  <img src={optionsIcon} alt="options" width={25} height={25} />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Message;
