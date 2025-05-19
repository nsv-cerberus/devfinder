import SignUpFieldWrapper from "./SignUpFieldWrapper";

export function SignUpUsernameField() {
  return (
    <SignUpFieldWrapper
      placeholder="Username"
      stateKey="username"
      regExp={/^[a-zA-Z0-9_-]{3,16}$/}
      errorText="The Username 3 - 16 symbols."
    />
  );
}