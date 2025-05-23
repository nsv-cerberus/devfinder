
import store from "@/store/store";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpConfirmPasswordField() {
  const checkToConfirmPassword = () => {
    const state = store.getState();
    return (state.auth.signUpForm.password === state.auth.signUpForm.confirmPassword) ? true : false ;
  }

  return (
    <SignUpFieldWrapper
      placeholder="Confirm Password"
      stateKey="confirmPassword"
      validation={{
        rules: {
          customMethod: checkToConfirmPassword
        },
        errorText: "The password doesn't match!"
      }}
    />
  );
}