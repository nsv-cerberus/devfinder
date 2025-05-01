/* import { useState } from "react"; */
import Input from "@/components/ui/input/Input";
/* import ValidationError from "../validation-error/ValidationError"; */

type Props = {
    placeholder?: string;
}

export function UsernameField({ placeholder = "Username" }: Props) {

    return (
        <div>
            <Input type="text" placeholder={placeholder} />
            {/* {isValidationError && <ValidationError text="" />} */}
        </div>
    );
}