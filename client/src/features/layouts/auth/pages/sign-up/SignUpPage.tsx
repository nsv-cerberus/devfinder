import { Link } from "react-router-dom";
import { ConfirmPasswordField } from "@/components/fields/password/variations/ConfirmPasswordField";
import { CreatePasswordField } from "@/components/fields/password/variations/CreatePasswordField";
import { UsernameField } from "@/components/fields/username/UsernameField";
import { EmailField } from "@/components/fields/email/EmailField";

export default function SignUpPage() {
    return (
        <div className="sign-in-page">
            <h1>Sign Up</h1>
            <p className="description">Create a new account</p>
            <div className="form">
                <UsernameField />
                <EmailField />
                <CreatePasswordField />
                <ConfirmPasswordField />
                <button type="button">Sign Up</button>
            </div>
            <div>Allready have an account? <Link to="/sign-in">Sign In Now!</Link></div>
        </div>
    );
}