import { useState, useEffect } from "react";
import { useFieldValidationContext } from "./contexts/validation/useFieldValidationContext";
import { ValidateType, ValidationType, validate } from "@/utils/validation";
import { SignInFormState, SignUpFormState } from "@/store/slices/authSlice";

import { FieldInput } from "./FieldInput";
import store from "@/store/store";

type FieldControllerProps<TStateKey extends SignInFormState | SignUpFormState> = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  isRequired?: boolean;
  valueControl: {
    stateKey: TStateKey,
    dispatcher: (payload: { stateKey: SignInFormState | SignUpFormState; value: string }) => void
  },
  validationControl?: {
    validation: ValidationType,
    dispatcher: (payload: { stateKey: SignInFormState | SignUpFormState; value: boolean }) => void
  }
};

export function FieldController<TStateKey extends SignInFormState | SignUpFormState>({
  type,
  placeholder,
  isRequired,
  valueControl,
  validationControl
}: FieldControllerProps<TStateKey>) {
  const [error, setError] = useState<{
    isActive: boolean;
    message: string;
  }>({
    isActive: false,
    message: ''
  });
  const { registerValidator } = useFieldValidationContext();

  useEffect(() => {
    if (validationControl) {
      registerValidator(valueControl.stateKey, validateValue);
      validationControl.dispatcher({ stateKey: valueControl.stateKey, value: false });
    }
  });

  const validateValue = () => {
    const state = store.getState();
    const value = state.auth.signUpForm[valueControl.stateKey];

    if (isRequired && !value) {
      setError({
        isActive: true,
        message: 'This field is required.'
      })
      return;
    }

    if (validationControl) {
      const v: ValidateType = validate(value, validationControl.validation);
      setError({
        isActive: !v.isValid,
        message: v.errorMessage
      });
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({
      isActive: false,
      message: ''
    });
    valueControl.dispatcher({ stateKey: valueControl.stateKey, value: e.target.value });
  };

  return (
    <FieldInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      validation={{
        isError: error.isActive,
        errorMessage: error.message
      }}
    />
  );
}