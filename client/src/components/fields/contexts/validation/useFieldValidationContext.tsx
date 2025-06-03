import { createContext, useContext } from "react";

type FieldValidationContextType = {
  registerValidator: (key: string, fn: () => boolean) => void;
  triggerAllValidators: () => boolean;
};

export const FieldValidationContext = createContext<FieldValidationContextType | null>(null);

export const useFieldValidationContext = () => {
  const ctx = useContext(FieldValidationContext);
  if (!ctx) {
    throw new Error('useFieldValidationContext must be used within a FieldValidationProvider');
  }
  return ctx;
};