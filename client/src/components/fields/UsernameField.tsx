/* import { useState } from "react"; */
import { FieldProps } from "./field-types";

import Input from "@/components/ui/input/Input";
/* import ValidationError from "../validation-error/ValidationError"; */

export function UsernameField({ placeholder = "Username" }: FieldProps) {

    return (
        <div>
            <Input type="text" placeholder={placeholder} />
            {/* {isValidationError && <ValidationError text="" />} */}
        </div>
    );
}