import { useState } from "react";
import "./Code.scss";
import CodeInput from "./components/CodeInput";
import { useVerificationCode } from "./hooks/useVerificationCode";

export default function Code() {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const {
    values,
    isLoading,
    isComplete,
    setInputRef,
    handleChange,
    handleKeyDown,
    handlePaste,
    clearCode,
    setIsLoading
  } = useVerificationCode({
    length: 6,
    onComplete: async (code) => {
      setError('');
      setIsLoading(true);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate successful verification
        if (code === '123456') { // For demo purposes
          setSuccess('Email verified successfully!');
        } else {
          throw new Error('Invalid verification code');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Verification failed');
        clearCode(); // Clear the inputs on error
      } finally {
        setIsLoading(false);
      }
    },
    onError: (message) => {
      setError(message);
    }
  });

  const handleResendCode = async () => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Here you would call your resend code API
      console.log('Resending verification code...');

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('New verification code sent to your email! 📧');
      clearCode();
    } catch {
      setError('Failed to resend code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="code">
      <div className="code-container">
        <div className="code-inputs">
          {Array.from({ length: 6 }).map((_, index) => (
            <CodeInput
              key={index}
              index={index}
              value={values[index]}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              setRef={setInputRef}
              disabled={isLoading}
              isComplete={isComplete}
            />
          ))}
        </div>

        {error && (
          <div className="code-message error">
            {error}
          </div>
        )}

        {success && (
          <div className="code-message success">
            {success}
          </div>
        )}

        {isLoading && (
          <div className="code-message loading">
            Verifying code...
          </div>
        )}

        <button
          className="resend-button"
          onClick={handleResendCode}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Resend Code'}
        </button>
      </div>
    </div>
  );
}
