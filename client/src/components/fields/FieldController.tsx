import { useEffect } from "react";
import { useFieldValidationContext } from "./contexts/validation/useFieldValidationContext";
import { useValidation, ValidationRulesType } from "@/hooks/useValidation";
import { SignInFormState, SignUpFormState } from "@/store/slices/authSlice";

import { FieldInput } from "./FieldInput";

type FieldControllerProps<TStateKey extends SignInFormState | SignUpFormState> = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  valueControl: {
    stateKey: TStateKey,
    dispatcher: (stateKey: TStateKey, value: string) => void
  },
  validationControl?: {
    rules: ValidationRulesType,
    dispatcher: (stateKey: TStateKey, value: boolean) => void,
    error?: string
  }
};

export function FieldController<TStateKey extends SignInFormState | SignUpFormState>({
  type,
  placeholder,
  valueControl,
  validationControl
}: FieldControllerProps<TStateKey>) {
  const { registerValidator } = useFieldValidationContext();
  const { isValid, validate } = useValidation(validationControl?.rules);

  useEffect(() => {
    if (validationControl) {
      registerValidator(valueControl.stateKey, validate);
      validationControl.dispatcher(valueControl.stateKey, false);
    }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    valueControl.dispatcher(valueControl.stateKey, e.target.value);
  };

  console.log("Is Error: ", isValid);

  return (
    <FieldInput
      type={type}
      placeholder={placeholder}
      /* value={value} */
      onChange={onChange}
      /* validation={
        isError={!isValid}
        errorText={validationControl?.error}
      } */
    />
  );
}




/* import { useState, useEffect } from "react";
import { useFieldValidationContext } from "./contexts/FieldValidationContext";
import { validateValueByRegExp } from "@/utils/validator";

import ValidationError from "../validation-error/ValidationError";

type CustomeMethodType = (...args: unknown[]) => boolean;

type ValidationRuleType =
    | { regExps: RegExp | RegExp[]; customMethods?: CustomeMethodType | (CustomeMethodType)[] }
    | { regExps?: undefined; customMethods: CustomeMethodType | (CustomeMethodType)[] };

type FieldProps<TStateKey extends string> = {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    valueControl: {
        stateKey: TStateKey,
        dispatcher: (stateKey: TStateKey, value: string) => void
    },
    validationControl?: {
        rules: ValidationRuleType,
        dispatcher: (stateKey: TStateKey, value: boolean) => void,
        error?: string
    }
};

export function Field<TStateKey extends string>({ type = "text", placeholder = "Enter Value", valueControl, validationControl }: FieldProps<TStateKey>) {
    const { registerValidator } = useFieldValidationContext();
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (validationControl) {
            registerValidator(valueControl.stateKey, validate);
            validationControl.dispatcher(valueControl.stateKey, false);
        }
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValueDispatcher(valueControl.stateKey, newValue);
        setValue(newValue);
        setIsError(false);
    };

    const setValueDispatcher = (stateKey: TStateKey, value: string) => valueControl.dispatcher(stateKey, value);

    const validate = () => {
        let validateState = false;
        const regExps: RegExp | RegExp[] | null = validationControl?.rules.regExps ?? null;
        const customMethods: CustomeMethodType | CustomeMethodType[] | null = validationControl?.rules.customMethods ?? null;

        if (regExps) {
            if (regExps instanceof RegExp) {
                validateState = validateValueByRegExp(value, regExps);
            } else if (Array.isArray(regExps)) {
                validateState = regExps.some(r => validateValueByRegExp(value, r));
            }
        }

        if (customMethods) {
            if (Array.isArray(customMethods)) {
                validateState = customMethods.every(m => m(value));
            } else {
                validateState = customMethods(value);
            }
        }

        if (!validateState) {
            setIsError(true);
        }
    }

    return (
        <div>
            <input type={type} onChange={onChange} placeholder={placeholder} style={{ borderColor: isError ? "red" : undefined }} />
            {isError && <ValidationError text={`${(validationControl?.error) ? validationControl.error : 'Invalid value!'}`} />}
        </div>
    );
} */