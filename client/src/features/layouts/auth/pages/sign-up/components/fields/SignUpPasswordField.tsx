import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpPasswordField() {
  return (
    <SignUpFieldWrapper
      placeholder="Password"
      stateKey="password"
      validation={{
        rules: {
          regex: regex.password
        },
        errorText: "The password must not be less than 8 characters long."
      }}
    />
  );
}