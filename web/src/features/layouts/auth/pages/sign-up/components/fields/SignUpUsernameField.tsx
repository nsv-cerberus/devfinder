import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpUsernameField() {
  return (
    <SignUpFieldWrapper
      stateKey="username"
      placeholder="Username"
      isRequired={true}
      validation={{
        regexRule: {
          regex: regex.username,
          errorMessage: "The Username 3 - 16 symbols."
        }
      }}
    />
  );
}