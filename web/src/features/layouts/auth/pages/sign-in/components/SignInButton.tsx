import store from "@/store/store";
import { useFieldValidationContext } from "@/components/fields/contexts/validation/useFieldValidationContext";
import { addDataByRequest } from "@/utils/request";
import { useRef } from "react";
import SubmitButton, { SubmitButtonRefType } from "@/components/ui/button/variants/SubmitButton";

export function SignInButton() {
  const { validateAllFields } = useFieldValidationContext();
  const btnRef = useRef<SubmitButtonRefType>(null);

  const onSubmit = () => {
    if (validateAllFields()) {
      const state = store.getState().auth.signInForm;
      const url = `/api/auth/login`;

      const data = new FormData();
      data.append("username", state.username);
      data.append("password", state.password);

      addDataByRequest(url, data);
    }
    else {
      console.error("Validation failed");
      btnRef.current?.resetStatus();
    }
  }

  return (
    <SubmitButton ref={btnRef} onClick={onSubmit}>Sign In</SubmitButton>
  )
}
