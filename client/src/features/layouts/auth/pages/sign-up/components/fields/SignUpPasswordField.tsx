import SignUpFieldWrapper from "./SignUpFieldWrapper";

export function SignUpPasswordField() {
  return (
    <SignUpFieldWrapper
      placeholder="Password"
      stateKey="password"
      regExp={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
      errorText="The password must not be less than 8 characters long."
    />
  );
}