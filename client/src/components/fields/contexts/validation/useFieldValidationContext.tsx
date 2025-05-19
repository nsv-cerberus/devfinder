import { createContext, useContext } from "react";

type FieldValidationContextType = {
  registerValidator: (key: string, fn: () => void) => void;
  triggerAllValidators: () => void;
};

export const FieldValidationContext = createContext<FieldValidationContextType | null>(null);

export const useFieldValidationContext = () => {
  const ctx = useContext(FieldValidationContext); //useContext(FieldValidationContext);
  if (!ctx) {
    throw new Error('useFieldValidationContext must be used within a FieldValidationProvider');
  }
  return ctx;
};