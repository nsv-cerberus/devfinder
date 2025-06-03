import store from "@/store/store";
import { useFieldValidationContext } from "@/components/fields/contexts/validation/useFieldValidationContext";
import { addDataByRequest } from "@/utils/request";
import Button from "@/components/ui/button/Button";

export function SignUpButton() {
  const { validateAllFields } = useFieldValidationContext();

  const onClick = () => {
    if (validateAllFields()) {
      const state = store.getState().auth.signUpForm;
      const url = ``;

      const data = new FormData();
      data.append("username", state.username);
      data.append("email", state.email);
      data.append("password", state.password);

      addDataByRequest(url, data);
    }
  }

  return (
    <Button onClick={ onClick }>Sign Up</Button>
  )
}