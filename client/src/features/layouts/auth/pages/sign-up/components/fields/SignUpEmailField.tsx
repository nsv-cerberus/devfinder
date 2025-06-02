import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpEmailField() {
  return (
    <SignUpFieldWrapper
      stateKey="email"
      placeholder="E-mail Address"
      isRequired={true}
      validation={{
        regexRule: {
          regex: regex.email,
          errorMessage: "Enter a valid email. Example: name@email.com"
        }
      }}
    />
  );
}