/* import { useState } from "react"; */
import Input from "@/components/ui/input/Input";
/* import ValidationError from "@/components/validation-error/ValidationError"; */

type Props = {
    placeholder?: string;
}

export function PasswordField({ placeholder = "Password" }: Props) {
    /* const isValidationError = useState(false); */

    return (
        <div>
            <Input type="password" placeholder={placeholder} />
            {/* {isValidationError && <ValidationError text="Error" />} */}
        </div>
    );
}