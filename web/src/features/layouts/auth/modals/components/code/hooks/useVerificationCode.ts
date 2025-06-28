import { useState, useRef, useCallback } from 'react';

interface UseVerificationCodeProps {
  length?: number;
  onComplete?: (code: string) => void;
  onError?: (message: string) => void;
}

export const useVerificationCode = ({
  length = 6,
  onComplete,
  onError
}: UseVerificationCodeProps = {}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  const setInputRef = useCallback((index: number, ref: HTMLInputElement | null) => {
    inputRefs.current[index] = ref;
  }, []);

  const focusInput = useCallback((index: number) => {
    if (index >= 0 && index < length) {
      inputRefs.current[index]?.focus();
    }
  }, [length]);

  const handleChange = useCallback((index: number, value: string) => {
    // Only allow single digit/character
    if (value.length > 1) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Auto focus to next input if value is entered
    if (value && index < length - 1) {
      focusInput(index + 1);
    }

    // Check if all fields are filled
    if (newValues.every(val => val.length === 1)) {
      const completeCode = newValues.join('');
      onComplete?.(completeCode);
    }
  }, [values, length, focusInput, onComplete]);

  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace - move to previous input if current is empty
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      focusInput(index - 1);
    }

    // Handle left/right arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    }

    if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  }, [values, length, focusInput]);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').replace(/\s/g, '');

    // Check if pasted text matches expected length and contains only digits
    const regex = new RegExp(`^\\d{${length}}$`);
    if (regex.test(pastedText)) {
      const newValues = pastedText.split('');
      setValues(newValues);

      // Focus the last input
      focusInput(length - 1);

      // Call onComplete
      onComplete?.(pastedText);
    } else {
      onError?.(`Please paste a ${length}-digit verification code`);
    }
  }, [length, focusInput, onComplete, onError]);

  const clearCode = useCallback(() => {
    setValues(Array(length).fill(''));
    focusInput(0);
  }, [length, focusInput]);

  const getCode = useCallback(() => {
    return values.join('');
  }, [values]);

  const isComplete = values.every(val => val.length === 1);

  return {
    values,
    inputRefs,
    isLoading,
    isComplete,
    setInputRef,
    handleChange,
    handleKeyDown,
    handlePaste,
    clearCode,
    getCode,
    setIsLoading
  };
};
