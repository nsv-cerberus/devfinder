import store from "@/store/store";
import { useFieldValidationContext } from "@/components/fields/contexts/validation/useFieldValidationContext";
import { addDataByRequest } from "@/utils/request";
import { useRef } from "react";
import SubmitButton, { SubmitButtonRefType } from "@/components/ui/button/variants/SubmitButton";

export function SignUpButton() {
  const { validateAllFields } = useFieldValidationContext();
  const btnRef = useRef<SubmitButtonRefType>(null);

  const onSubmit = () => {
    if (validateAllFields()) {
      const state = store.getState().auth.signUpForm;
      const url = `/api/users/create`;

      const data = new FormData();
      data.append("username", state.username);
      data.append("email", state.email);
      data.append("password", state.password);

      addDataByRequest(url, data);
    }
    else {
      console.error("Validation failed");
      btnRef.current?.resetStatus();
    }
  }

  return (
    <SubmitButton ref={btnRef} onClick={onSubmit}>Sign Up</SubmitButton>
  )
}