import { Field } from "@/components/fields/Field";
import { FieldProps, SignUpField } from "@/components/fields/types/field-types";

export function SignUpConfirmPasswordField({ dispatcher }: FieldProps<SignUpField>) {
    return (
        <Field<SignUpField>
            type="password"
            stateKey="confirmPassword"
            dispatcher={dispatcher}
            placeholder="Confirm Password"
            validationError="The password doesn't match!"
        />
    );
}