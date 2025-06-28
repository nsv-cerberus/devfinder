import { useEffect, useRef } from "react";
import "./CodeInput.scss";

type Props = {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
  onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  setRef: (index: number, ref: HTMLInputElement | null) => void;
  disabled?: boolean;
  isComplete?: boolean;
};

export default function CodeInput({
  index,
  value,
  onChange,
  onKeyDown,
  onPaste,
  setRef,
  disabled = false,
  isComplete = false
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRef(index, inputRef.current);
  }, [index, setRef]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const inputValue = e.target.value;

    // Only allow single digit
    if (inputValue.length <= 1 && /^\d*$/.test(inputValue)) {
      onChange(index, inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    onKeyDown(index, e);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    onPaste(e);
  };

  return (
    <div className="code-input">
      <input
        ref={inputRef}
        type="text"
        className={`code-input-field ${disabled ? 'disabled' : ''} ${isComplete ? 'complete' : ''}`}
        placeholder="-"
        maxLength={1}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        disabled={disabled}
        autoComplete="one-time-code"
      />
    </div>
  );
}