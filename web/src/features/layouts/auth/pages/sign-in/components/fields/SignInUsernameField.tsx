import { regex } from "@/utils/regex";
import SignInFieldWrapper from "./wrapper/SignInFieldWrapper";

export function SignInUsernameField() {
  return (
    <SignInFieldWrapper
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