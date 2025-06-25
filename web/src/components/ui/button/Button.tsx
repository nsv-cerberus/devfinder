import React from 'react';
import './Button.scss';
import Waiting from './components/waiting/Waiting';

export type ButtonStatus = 'default' | 'waiting';

type Props = {
  status?: ButtonStatus;
  type?: 'submit';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export default function Button({ status = 'default', type = 'submit', onClick, children }: Props) {
  let content;

  switch (status) {
    case 'waiting':
      content = <Waiting />;
      break;
    default:
      content = children;
  }

  return (
    <button type={type} onClick={onClick}>{content}</button>
  );
}