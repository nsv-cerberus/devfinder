import { Link } from "react-router-dom";
import { UsernameField } from "@/components/fields/username/UsernameField";
import { PasswordField } from "@/components/fields/password/PasswordField";

export default function SignInPage() {
    return (
        <div className="sign-in-page">
            <h1>Sign In</h1>
            <p className="description">Login to your account</p>
            <div className="form">
                <UsernameField />
                <PasswordField />
                <button type="button">Sign In</button>
            </div>
            <div>Don't you have an account? <Link to="/sign-up">Sign Up Now!</Link></div>
        </div>
    );
}