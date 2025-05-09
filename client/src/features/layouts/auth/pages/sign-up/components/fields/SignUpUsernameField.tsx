import { Field } from "@/components/fields/Field";
import { FieldProps, SignUpField } from "@/components/fields/types/field-types";

export function SignUpUsernameField({ dispatcher }: FieldProps<SignUpField>) {
    return (
        <Field<SignUpField>
            type="username"
            placeholder="Username"
            stateKey="username"
            dispatcher={dispatcher}
        />
    );
}