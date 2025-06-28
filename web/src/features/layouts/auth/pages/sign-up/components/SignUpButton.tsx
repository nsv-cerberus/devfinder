import store from "@/store/store";
import { useFieldValidationContext } from "@/components/fields/contexts/validation/useFieldValidationContext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton, { SubmitButtonRefType } from "@/components/ui/button/variants/SubmitButton";
import { authService } from "@/services/api/authService";

export function SignUpButton() {
  const { validateAllFields } = useFieldValidationContext();
  const btnRef = useRef<SubmitButtonRefType>(null);
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (validateAllFields()) {
      const state = store.getState().auth.signUpForm;

      const registerData = {
        username: state.username,
        email: state.email,
        password: state.password,
      };

      try {
        const response = await authService.register(registerData);

        if (response.success) {
          console.log("Registration successful:", response);
          // Перенаправляем на страницу профиля
          navigate('/profile');
        } else {
          console.error("Registration failed:", response.message);
          btnRef.current?.resetStatus();
        }
      } catch (error) {
        console.error("Registration error:", error);
        btnRef.current?.resetStatus();
      }
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