import { useState } from "react";
import Input from "@/components/ui/input/Input";
import ValidationError from "@/components/validation-error/ValidationError";

type Props = {
    placeholder?: string;
}

export function EmailField({ placeholder = "E-mail Address" }: Props) {
    const [isValidationError] = useState(false);

    return (
        <div>
            <Input type="email" placeholder={placeholder} />
            {isValidationError && <ValidationError text="Enter the correct email address. Example:name@mail.com" />}
        </div>
    );
}