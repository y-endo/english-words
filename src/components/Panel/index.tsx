import * as React from 'react';
import css from './index.scss';

type Props = {
  text: string;
  subText?: string;
  status?: string;
  speak?: () => void;
};

const Panel: React.FC<Props> = ({ text, subText, status, speak }) => {
  let rootClassName = css['panel'];

  if (status === 'correct') {
    rootClassName += ` ${css['panel--correct']}`;
  } else if (status === 'incorrect') {
    rootClassName += ` ${css['panel--incorrect']}`;
  }

  const handleClick = () => {
    if (speak) speak();
  };

  return (
    <div className={rootClassName} onClick={handleClick}>
      <div className={css['panel__inner']}>
        <p className={css['text']}>{text}</p>
        {subText && <p className={css['sub-text']}>{subText}</p>}
      </div>
    </div>
  );
};

export default Panel;
