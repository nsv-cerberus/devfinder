import { Link } from "react-router-dom";

import { SignInUsernameField } from "./components/fields/SignInUsernameField";
import { SignInPasswordField } from "./components/fields/SignInPasswordField";
import { SignInButton } from "./components/SignInButton";
import { FieldValidationProvider } from "@/components/fields/contexts/validation/FieldValidationProvider";

export default function SignInPage() {
    return (
        <div className="sign-in-page">
            <h1>Sign In</h1>
            <p className="description">Login to your account</p>
            <div className="form">
                <FieldValidationProvider>
                    <SignInUsernameField />
                    <SignInPasswordField />
                    <SignInButton />
                </FieldValidationProvider>
            </div>
            <div>Don't you have an account? <Link to="/sign-up">Sign Up Now!</Link></div>
        </div>
    );
}