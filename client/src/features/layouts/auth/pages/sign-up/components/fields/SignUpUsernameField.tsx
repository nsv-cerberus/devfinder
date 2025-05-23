import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpUsernameField() {
  return (
    <SignUpFieldWrapper
      placeholder="Username"
      stateKey="username"
      validation={{
        rules: {
          regex: regex.username
        },
        errorText: "The Username 3 - 16 symbols."
      }}
    />
  );
}