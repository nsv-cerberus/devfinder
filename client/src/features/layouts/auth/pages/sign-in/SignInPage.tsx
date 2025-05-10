import { Link } from "react-router-dom";
import { useSignInFieldDispatcher } from "@/hooks/useAuthFormFieldDispatcher";

import { SignInUsernameField } from "./components/fields/SignInUsernameField";
import { SignInPasswordField } from "./components/fields/SignInPasswordField";

export default function SignInPage() {
    const dispatcher = useSignInFieldDispatcher();

    return (
        <div className="sign-in-page">
            <h1>Sign In</h1>
            <p className="description">Login to your account</p>
            <div className="form">
                <SignInUsernameField dispatcher={dispatcher} />
                <SignInPasswordField dispatcher={dispatcher} />
                <button type="button">Sign In</button>
            </div>
            <div>Don't you have an account? <Link to="/sign-up">Sign Up Now!</Link></div>
        </div>
    );
}