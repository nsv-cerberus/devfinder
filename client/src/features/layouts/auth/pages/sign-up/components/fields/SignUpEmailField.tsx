import { Field } from "@/components/fields/Field";
import { FieldProps, SignUpField } from "@/components/fields/types/field-types";

export function SignUpEmailField({ dispatcher }: FieldProps<SignUpField>) {
    return (
        <Field<SignUpField>
            type="email"
            placeholder="E-mail Address"
            stateKey="email"
            dispatcher={dispatcher}
            regExp={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            validationError="The password must not be less than 8 characters long."
        />
    );
}