import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpEmailField() {
  return (
    <SignUpFieldWrapper
      placeholder="E-mail Address"
      stateKey="email"
      validation={{
        rules: {
          regex: regex.email
        },
        errorText: "Enter a valid email. Example: name@email.com"
      }}
    />
  );
}