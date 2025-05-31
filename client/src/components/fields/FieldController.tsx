import { useState, useEffect } from "react";
import { useFieldValidationContext } from "./contexts/validation/useFieldValidationContext";
import { ValidationRulesType, validate } from "@/utils/validation";
import { SignInFormState, SignUpFormState } from "@/store/slices/authSlice";

import { FieldInput } from "./FieldInput";
import store from "@/store/store";

type FieldControllerProps<TStateKey extends SignInFormState | SignUpFormState> = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  valueControl: {
    stateKey: TStateKey,
    dispatcher: (payload: { stateKey: SignUpFormState; value: string }) => void
  },
  validationControl?: {
    rules: ValidationRulesType,
    dispatcher: (payload: { stateKey: SignUpFormState; value: boolean }) => void;
    error?: string
  }
};

export function FieldController<TStateKey extends SignInFormState | SignUpFormState>({
  type,
  placeholder,
  valueControl,
  validationControl
}: FieldControllerProps<TStateKey>) {
  const [ isError, setIsError ] = useState(false);
  const { registerValidator } = useFieldValidationContext();

  useEffect(() => {
    if (validationControl) {
      registerValidator(valueControl.stateKey, validateValue);
      validationControl.dispatcher({ stateKey: valueControl.stateKey, value: false });
    }
  });

  const validateValue = () => {
    const state = store.getState();

    if (validationControl) {
      setIsError(!validate(state.auth.signUpForm[valueControl.stateKey], validationControl.rules));
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    valueControl.dispatcher({ stateKey: valueControl.stateKey, value: e.target.value } );
  };

  return (
    <FieldInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      validation={{
        isError: isError,
        errorText: validationControl?.error
      }}
    />
  );
}