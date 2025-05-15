import { useSelector } from "react-redux";
import { RootState } from '@/store/store';
import { SignUpFormKeyType } from "@/components/fields/types/field-types";
import { useFieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";

import { Field } from "@/components/fields/Field";

export function SignUpConfirmPasswordField() {
    const validationError = "The password doesn't match";

    const { valueSetterDispatcher, validationValueSetterDispatcher } = useFieldValidationContext();
    const { password, confirmPassword } = useSelector(
        (state: RootState) => state.auth.signUpForm
    );

    const customeValidateMethods = () => !!password && !!confirmPassword && password === confirmPassword;

    return (
        <Field<SignUpFormKeyType>
            type="email"
            placeholder="Confirm E-mail Address"
            valueControl={{ stateKey: 'confirmPassword', dispatcher: valueSetterDispatcher }}
            validationControl={{ rules: {customMethods: customeValidateMethods }, dispatcher: validationValueSetterDispatcher, error: validationError }}
        />
    );
}