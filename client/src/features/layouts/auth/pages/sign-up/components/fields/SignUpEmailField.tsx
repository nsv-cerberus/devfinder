import { SignUpFormKeyType } from "@/components/fields/types/field-types";

import { Field } from "@/components/fields/Field";
import { useFieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";

export function SignUpEmailField() {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const stateKey = 'email';
    const validationError = "Enter the correct E-mail address. Example: name@email.com";

    const { valueSetterDispatcher, validationValueSetterDispatcher } = useFieldValidationContext();

    return (
        <Field<SignUpFormKeyType>
            type="email"
            placeholder="E-mail Address"
            valueControl={{ stateKey: stateKey, dispatcher: valueSetterDispatcher }}
            validationControl={{ rules: {regExps: regExp}, dispatcher: validationValueSetterDispatcher, error: validationError }}
        />
    );
}