import { SignUpFormKeyType } from "@/components/fields/types/field-types";
import { useFieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";

import { Field } from "@/components/fields/Field";

export function SignUpUsernameField() {
    const regExp = /^[a-zA-Z0-9_-]{3,16}$/;
    const stateKey = 'username';
    const validationError = "The Username 3 - 16 symbols.";

    const { valueSetterDispatcher, validationValueSetterDispatcher } = useFieldValidationContext();

    return (
        <Field<SignUpFormKeyType>
            type="username"
            placeholder="Username"
            valueControl={{stateKey: stateKey, dispatcher: valueSetterDispatcher}}
            validationControl={{rules: {regExps: regExp} , dispatcher: validationValueSetterDispatcher!, error: validationError}}
        />
    );
}