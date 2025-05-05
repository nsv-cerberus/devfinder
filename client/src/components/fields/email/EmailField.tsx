import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "@/hooks/debounce";
import { updateSignUpField } from "@/store/slices/authSlice";
import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

type Props = {
    placeholder?: string;
}

export function EmailField({ placeholder = "E-mail Address" }: Props) {
    const dispatch = useDispatch();
    const [isValidationError, setIsValidationError] = useState(false);

    const debounceValidate = useDebounce((value: string) => {
        const isValid = validateEmail(value);

        if (!isValid) {
            setIsValidationError(true);
        }
        else {
            dispatch(updateSignUpField({ field: 'email', value: value }));
        }
    });

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

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