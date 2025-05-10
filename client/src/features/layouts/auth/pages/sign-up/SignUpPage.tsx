import { Link } from "react-router-dom";
import { useSignUpFieldDispatcher } from "@/hooks/useAuthFormFieldDispatcher";

import { SignUpEmailField } from "./components/fields/SignUpEmailField";
import { SignUpUsernameField } from "./components/fields/SignUpUsernameField";
import { SignUpPasswordField } from "./components/fields/SignUpPasswordField";
import { SignUpConfirmPasswordField } from "./components/fields/SignUpConfirmPasswordField";

export default function SignUpPage() {
    const dispatcher = useSignUpFieldDispatcher();

    return (
        <div className="sign-in-page">
            <h1>Sign Up</h1>
            <p className="description">Create a new account</p>
            <div className="form">
                <SignUpUsernameField dispatcher={dispatcher} />
                <SignUpEmailField dispatcher={dispatcher} />
                <SignUpPasswordField dispatcher={dispatcher} />
                <SignUpConfirmPasswordField dispatcher={dispatcher} />
                <button type="button">Sign Up</button>
            </div>
            <div>Allready have an account? <Link to="/sign-in">Sign In Now!</Link></div>
        </div>
    );
}