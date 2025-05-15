import { createContext, useContext } from "react";
import { SignInFormKeyType, SignUpFormKeyType } from "../types/field-types";

type ContextType<TStateKey extends SignInFormKeyType | SignUpFormKeyType> = {
    valueSetterDispatcher: (key: TStateKey, value: string) => void;
    validationValueSetterDispatcher: (key: TStateKey, value: boolean) => void;
    registerValidator: (fn: () => void) => void;
    triggerAllValidators: () => void;
};

export const FieldValidationContext = createContext<ContextType<SignInFormKeyType | SignUpFormKeyType>>({
    valueSetterDispatcher: () => {},
    validationValueSetterDispatcher: () => {},
    registerValidator: () => {},
    triggerAllValidators: () => {},
});

export const useFieldValidationContext = () => useContext(FieldValidationContext);