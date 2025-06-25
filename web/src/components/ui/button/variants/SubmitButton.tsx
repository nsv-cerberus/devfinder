import { useState, useImperativeHandle, forwardRef } from 'react';
import Button, { ButtonStatus } from '../Button';

export type SubmitButtonRefType = {
  resetStatus: () => void;
};

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const SubmitButton = forwardRef<SubmitButtonRefType, Props>(({ onClick, children }, ref) => {
  const [status, setStatus] = useState<ButtonStatus>('default');

  useImperativeHandle(ref, () => ({
    resetStatus: () => setStatus('default')
  }));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (status === 'default') {
      setStatus('waiting');
      onClick(e);
    }
  };

  return (
    <Button type="submit" status={status} onClick={handleClick}>{children}</Button>
  );
});

export default SubmitButton;