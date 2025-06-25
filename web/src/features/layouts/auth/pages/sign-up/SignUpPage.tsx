import { Link } from "react-router-dom";

import { SignUpUsernameField } from "./components/fields/SignUpUsernameField";
import { SignUpEmailField } from "./components/fields/SignUpEmailField";
import { SignUpPasswordField } from "./components/fields/SignUpPasswordField";
import { SignUpConfirmPasswordField } from "./components/fields/SignUpConfirmPasswordField";
import { SignUpButton } from "./components/SignUpButton";
import { FieldValidationProvider } from "@/components/fields/contexts/validation/FieldValidationProvider";

export default function SignUpPage() {
	return (
		<div className="sign-in-page">
			<h1>Sign Up</h1>
			<p className="description">Create a new account</p>
			<div className="form">
				<FieldValidationProvider>
					<SignUpUsernameField />
					<SignUpEmailField />
					<SignUpPasswordField />
					<SignUpConfirmPasswordField />
					<SignUpButton />
				</FieldValidationProvider>
			</div>
			<div>Allready have an account? <Link to="/sign-in">Sign In Now!</Link></div>
		</div>
	);
}