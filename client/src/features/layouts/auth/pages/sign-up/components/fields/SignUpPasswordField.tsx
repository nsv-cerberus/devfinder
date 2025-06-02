import { regex } from "@/utils/regex";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpPasswordField() {
  return (
    <SignUpFieldWrapper
      stateKey="password"
      placeholder="Password"
      isRequired={true}
      validation={{
        regexRule: {
          regex: regex.password,
          errorMessage: "The password must not be less than 8 characters long."
        }
      }}
    />
  );
}