import React, { useRef } from 'react';
import { FieldValidationContext } from './useFieldValidationContext';

type FieldValidator = {
  key: string;
  fn: () => void;
};

export const FieldValidationProvider = ({ children }: { children: React.ReactNode }) => {
  const registeredValidators = useRef<FieldValidator[]>([]);

  const registerValidator = (key: string, fn: () => void) => {
    const exists = registeredValidators.current.some(v => v.key === key);
    if (!exists) {
      registeredValidators.current.push({ key, fn });
    }
  };

  const triggerAllValidators = () => {
    console.log("Trigger All Validators!");
    registeredValidators.current.forEach(v => v.fn());
  };

  return (
    <FieldValidationContext.Provider value={{ registerValidator, triggerAllValidators }}>
      {children}
    </FieldValidationContext.Provider>
  );
};