import { Field } from "@/components/fields/Field";
import { FieldProps, SignInField } from "@/components/fields/types/field-types";

export function SignInUsernameField({ dispatcher }: FieldProps<SignInField>) {
    return (
        <Field<SignInField>
            type="username"
            placeholder="Username"
            stateKey="username"
            dispatcher={dispatcher}
        />
    );
}