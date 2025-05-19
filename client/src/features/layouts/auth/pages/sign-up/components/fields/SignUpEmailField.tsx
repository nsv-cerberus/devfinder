import SignUpFieldWrapper from "./SignUpFieldWrapper";

export function SignUpEmailField() {
  return (
    <SignUpFieldWrapper
      placeholder="E-mail Address"
      stateKey="email"
      regExp={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
      errorText="Enter a valid email. Example: name@email.com"
    />
  );
}