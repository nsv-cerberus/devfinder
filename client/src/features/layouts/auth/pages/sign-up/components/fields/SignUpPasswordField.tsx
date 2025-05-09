import { Field } from "@/components/fields/Field";
import { FieldProps, SignUpField } from "@/components/fields/types/field-types";

export function SignUpPasswordField({ dispatcher }: FieldProps<SignUpField>) {
    return (
        <Field<SignUpField>
            type="password"
            placeholder="Password"
            stateKey="password"
            dispatcher={dispatcher}
            validationError=""
        />
    );
}