/* import { useState } from "react"; */
import { FieldProps } from "./field-types";

import Input from "@/components/ui/input/Input";
/* import ValidationError from "@/components/validation-error/ValidationError"; */

export function PasswordField({ placeholder = "Password" }: FieldProps) {
    /* const isValidationError = useState(false); */

    return (
        <div>
            <Input type="password" placeholder={placeholder} />
            {/* {isValidationError && <ValidationError text="Error" />} */}
        </div>
    );
}