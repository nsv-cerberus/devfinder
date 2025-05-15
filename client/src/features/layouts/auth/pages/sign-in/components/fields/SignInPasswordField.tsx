import { Field } from "@/components/fields/Field";
import { FieldProps, SignInFormKeyType } from "@/components/fields/types/field-types";

export function SignInPasswordField({ valueDispatcher: dispatcher }: FieldProps<SignInFormKeyType>) {
    return (
        <Field<SignInFormKeyType>
            type="password"
            placeholder="Password"
            stateKey="password"
            valueDispatcher={dispatcher}
            validationError=""
        />
    );
}