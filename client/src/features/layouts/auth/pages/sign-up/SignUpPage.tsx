import { Link } from "react-router-dom";
import { useValueSetterDispatcher, useValidationValueSetterDispatcher } from "@/hooks/useAuthFormFieldDispatchers";
import { FieldValidationContext } from "@/components/fields/contexts/FieldValidationContext";

import { SignUpEmailField } from "./components/fields/SignUpEmailField";
import { SignUpUsernameField } from "./components/fields/SignUpUsernameField";
import { SignUpPasswordField } from "./components/fields/SignUpPasswordField";
import { SignUpConfirmPasswordField } from "./components/fields/SignUpConfirmPasswordField";
import { SignUpButton } from "./components/SignUpButton";
import { SignUpFormKeyType } from "@/components/fields/types/field-types";

type FieldCallback = () => void;

export default function SignUpPage() {
    const valueSetterDispatcher = useValueSetterDispatcher<SignUpFormKeyType>();
    const validationValueSetterDispatcher = useValidationValueSetterDispatcher<SignUpFormKeyType>();

    const registeredValidators: FieldCallback[] = [];

    const registerValidator = (fn: () => void) => {
        registeredValidators.push(fn);
    };

    const triggerAllValidators = () => {
        registeredValidators.forEach(fn => fn());
    };

    return (
        <div className="sign-in-page">
            <h1>Sign Up</h1>
            <p className="description">Create a new account</p>
            <div className="form">
                <FieldValidationContext.Provider value={{ valueSetterDispatcher: valueSetterDispatcher, validationValueSetterDispatcher: validationValueSetterDispatcher, registerValidator, triggerAllValidators }}>
                    <SignUpUsernameField />
                    <SignUpEmailField />
                    <SignUpPasswordField />
                    <SignUpConfirmPasswordField />
                    <SignUpButton />
                </FieldValidationContext.Provider>
            </div>
            <div>Allready have an account? <Link to="/sign-in">Sign In Now!</Link></div>
        </div>
    );
}