import SignUpFieldWrapper from "./SignUpFieldWrapper";

export function SignUpConfirmPasswordField() {
  return (
    <SignUpFieldWrapper
      placeholder="Confirm Password"
      stateKey="password"
      regExp={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
      errorText="The password doesn't match!"
    />
  );
}