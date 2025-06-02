import store from "@/store/store";
import SignUpFieldWrapper from "./wrapper/SignUpFieldWrapper";

export function SignUpConfirmPasswordField() {
  const checkToConfirmPassword = () => {
    const state = store.getState();
    return (state.auth.signUpForm.password === state.auth.signUpForm.confirmPassword) ? true : false ;
  }

  return (
    <SignUpFieldWrapper
      stateKey="confirmPassword"
      placeholder="Confirm Password"
      isRequired={true}
      validation={{
        customRule: {
          method: checkToConfirmPassword,
          errorMessage: "The password doesn't match!"
        }
      }}
    />
  );
}