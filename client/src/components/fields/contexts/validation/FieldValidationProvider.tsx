import React, { useRef } from 'react';
import { FieldValidationContext } from './useFieldValidationContext';

type FieldValidator = {
  key: string;
  fn: () => boolean;
};

export const FieldValidationProvider = ({ children }: { children: React.ReactNode }) => {
  const registeredValidators = useRef<FieldValidator[]>([]);

  const addFieldValidator = (key: string, fn: () => boolean) => {
    const exists = registeredValidators.current.some(validator => validator.key === key);

    if (!exists) {
      registeredValidators.current.push({ key, fn });
    }
  };

  const validateAllFields = () => {
    const results = registeredValidators.current.map(validator => validator.fn());
    return results.every(result => result);
  };

  return (
    <FieldValidationContext.Provider value={{ addFieldValidator, validateAllFields }}>
      {children}
    </FieldValidationContext.Provider>
  );
};