import { useState, useEffect } from "react";
import { useFieldValidationContext } from "./contexts/validation/useFieldValidationContext";
import { ValidateType, ValidationType, validate } from "@/utils/validation";
import { FieldDispatcher, ValidationDispatcher, StateValueGetter } from "./types";

import { FieldInput } from "./FieldInput";
import store from "@/store/store";

type FieldControllerProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  isRequired?: boolean;
  valueControl: {
    stateKey: string,
    dispatcher: FieldDispatcher
  },
  validationControl?: {
    validation: ValidationType,
    dispatcher: ValidationDispatcher
  },
  stateValueGetter: StateValueGetter;
};

export function FieldController({
  type,
  placeholder,
  isRequired,
  valueControl,
  validationControl,
  stateValueGetter
}: FieldControllerProps) {
  const [error, setError] = useState<{
    isActive: boolean;
    message: string;
  }>({
    isActive: false,
    message: ''
  });
  const { addFieldValidator: registerValidator } = useFieldValidationContext();

  useEffect(() => {
    if (validationControl) {
      registerValidator(valueControl.stateKey, validateValue);
      validationControl.dispatcher({ stateKey: valueControl.stateKey, value: false });
    }
  });

  const validateValue = () => {
    const state = store.getState();
    const value = stateValueGetter(state, valueControl.stateKey); //state.auth.signUpForm[valueControl.stateKey];

    if (isRequired && !value) {
      setError({
        isActive: true,
        message: 'This field is required.'
      })
      return false;
    }

    if (validationControl) {
      const v: ValidateType = validate(value, validationControl.validation);
      setError({
        isActive: !v.isValid,
        message: v.errorMessage
      });

      return v.isValid;
    }

    return true;
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