import { SignUpFormKeyType } from "@/components/fields/types/field-types";
import { useFieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";

import { Field } from "@/components/fields/Field";

export function SignUpPasswordField() {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const stateKey = 'password';
    const validationError = "The password must not be less than 8 characters long.";

    const { valueSetterDispatcher, validationValueSetterDispatcher } = useFieldValidationContext();

    return (
        <Field<SignUpFormKeyType>
            type="password"
            placeholder="Password"
            valueControl={{stateKey: stateKey, dispatcher: valueSetterDispatcher}}
            validationControl={{rules: {regExps: regExp} , dispatcher: validationValueSetterDispatcher!, error: validationError}}
        />
    );
}