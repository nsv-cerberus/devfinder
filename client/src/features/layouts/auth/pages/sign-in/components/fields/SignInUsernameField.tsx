import { Field } from "@/components/fields/Field";
import { FieldProps, SignInFormKeyType } from "@/components/fields/types/field-types";

export function SignInUsernameField({ valueDispatcher: dispatcher }: FieldProps<SignInFormKeyType>) {
    return (
        <Field<SignInFormKeyType>
            type="username"
            placeholder="Username"
            stateKey="username"
            valueDispatcher={dispatcher}
        />
    );
}