import { Field } from "@/components/fields/Field";
import { FieldProps, SignInField } from "@/components/fields/types/field-types";

export function SignInPasswordField({ dispatcher }: FieldProps<SignInField>) {
    return (
        <Field<SignInField>
            type="password"
            placeholder="Password"
            stateKey="password"
            dispatcher={dispatcher}
            validationError=""
        />
    );
}