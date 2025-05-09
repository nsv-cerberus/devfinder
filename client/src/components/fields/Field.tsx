import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { validate } from "@/utils/validator";

import ValidationError from "../validation-error/ValidationError";

type FieldProps<TStateKey extends string> = {
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    stateKey: TStateKey;
    dispatcher: (stateKey: TStateKey, value: string) => void;
    regExp?: RegExp | RegExp[];
    validationError?: string;
};

export function Field<TStateKey extends string>({ placeholder = "Enter value", stateKey, dispatcher, regExp = [], type = "text"}: FieldProps<TStateKey>) {
    const [isError, setIsError] = useState(false);

    const debounceValidate = useDebounce((value: string) => {
        if ((Array.isArray(regExp) && regExp.length > 0 && !regExp.some((r) => validate(value, r))) ||
            (regExp instanceof RegExp && !validate(value, regExp)))
        {
            setIsError(true);
        } else {
            dispatcher(stateKey, value);
        }
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setIsError(false);

        if (newValue === '') {
            dispatcher(stateKey, newValue);
        } else {
            debounceValidate(newValue);
        }
    };

    return (
        <div>
            <input type={type} onChange={onChange} placeholder={placeholder} style={{ borderColor: isError ? "red" : undefined }} />
            {isError && <ValidationError text="Invalid value!" />}
        </div>
    );
}