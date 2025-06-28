import { regex } from "@/utils/regex";
import SignInFieldWrapper from "./wrapper/SignInFieldWrapper";

export function SignInPasswordField() {
  return (
    <SignInFieldWrapper
      stateKey="password"
      placeholder="Password"
      type="password"
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