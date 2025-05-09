import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validateWithRegex } from "@/utils/validators";
import { FieldProps } from "./types/field-types";

import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

export function EmailField<TStateKey extends string>({ stateKey, dispatcher, placeholder = "E-mail Address" }: FieldProps<TStateKey>) {
    const [isValidationError, setIsValidationError] = useState(false);

    const debounceValidate = useDebounce((value: string) => {
        const isValid = validateWithRegex(value, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        if (!isValid) {
            setIsValidationError(true);
        }
        else {
            dispatcher(stateKey, value);
        }
    });

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setIsValidationError(false);

        if (newValue != '') {
            debounceValidate(newValue);
        }
    };

    return (
        <div>
            <Input type="email" onChange={onEmailChange} placeholder={placeholder} isError={isValidationError} />
            {isValidationError && <ValidationError text="Enter the correct email address. Example:name@mail.com" />}
        </div>
    );
}



/* import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validateWithRegex } from "@/utils/validators";

import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

type Props<TKey extends string> = {
    placeholder?: string;
    useFieldContext: () => {
        key: TKey;
        dispatcher: (key: TKey, value: string) => void;
    };
};

export function EmailField<TKey extends string>({
  placeholder = "E-mail Address",
  useFieldContext,
}: Props<TKey>) {
  const { key, dispatcher } = useFieldContext();
  const [isValidationError, setIsValidationError] = useState(false);

  const debounceValidate = useDebounce((value: string) => {
    const isValid = validateWithRegex(value, /[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (!isValid) {
      setIsValidationError(true);
    } else {
      dispatcher(key, value);
    }
  });

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setIsValidationError(false);

    if (newValue === '') {
      dispatcher(key, newValue);
    } else {
      debounceValidate(newValue);
    }
  };

  return (
    <div>
      <Input type="email" onChange={onEmailChange} placeholder={placeholder} isError={isValidationError} />
      {isValidationError && <ValidationError text="Enter the correct email address. Example:name@mail.com" />}
    </div>
  );
} */




/* import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validateWithRegex } from "@/utils/validators";

import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

type Props<TKey extends string> = {
    placeholder?: string;
    useFieldContext: () => {
        key: TKey;
        dispatcher: (key: TKey, value: string) => void;
    };
};

export function EmailField<TKey extends string>({ placeholder = "E-mail Addres", useFieldContext }: Props<TKey>) {
    const { key, dispatcher } = useFieldContext();
    const [isValidationError, setIsValidationError] = useState(false);

    const debounceValidate = useDebounce((value: string) => {
        const isValid = validateWithRegex(value, /[^\s@]+@[^\s@]+\.[^\s@]+$/);

        if (!isValid) {
            setIsValidationError(true);
        } else {
            dispatcher(key, value);
        }
    });

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setIsValidationError(false);

        if (newValue === '') {
        dispatcher(key, newValue);
        } else {
        debounceValidate(newValue);
        }
    };

    return (
        <div>
            <Input type="email" onChange={onEmailChange} placeholder={placeholder} isError={isValidationError} />
            {isValidationError && <ValidationError text="Enter the correct email address. Example:name@mail.com" />}
        </div>
    );
} */





/* import { useState, useContext } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validateWithRegex } from "@/utils/validators";
import { FieldProps } from "./types/field-types";
import { createFieldContext } from "./createFieldContext";

import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

export function EmailField({ placeholder = "E-mail Address" }: FieldProps) {

    const context = useContext(FieldContext);

    if (!context) {
        throw new Error("EmailField must be used within a FieldProvider");
    }

    const { key, dispatcher } = context;

    const [isValidationError, setIsValidationError] = useState(false);

    const debounceValidate = useDebounce((value: string) => {
        const isValid = validateWithRegex(value, /[^\s@]+@[^\s@]+\.[^\s@]+$/);

        if (!isValid) {
            setIsValidationError(true);
        } else {
            dispatcher(key, value);
        }
    });

    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        setIsValidationError(false);

        if (newValue === '') {
            dispatcher(key, newValue);
        } else {
            debounceValidate(newValue);
        }
    };

    return (
        <div>
            <Input type="email" onChange={onEmailChange} placeholder={placeholder} isError={isValidationError} />
            {isValidationError && <ValidationError text="Enter the correct email address. Example:name@mail.com" />}
        </div>
    );
}
 */


