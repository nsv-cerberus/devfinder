import store from "@/store/store";
import { useFieldValidationContext } from "@/components/fields/contexts/validation/useFieldValidationContext";
import { authService } from "@/services/api/authService";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton, { SubmitButtonRefType } from "@/components/ui/button/variants/SubmitButton";

export function SignInButton() {
  const { validateAllFields } = useFieldValidationContext();
  const btnRef = useRef<SubmitButtonRefType>(null);
  const navigate = useNavigate();

  const onSubmit = async () => {
    console.log("=== SignIn Button Clicked ===");

    if (validateAllFields()) {
      console.log("✅ Validation passed");
      const state = store.getState().auth.signInForm;
      console.log("📋 Form state:", state);

      try {
        console.log("🚀 Calling authService.login...");
        const result = await authService.login({
          username: state.username,
          password: state.password
        });

        console.log("📨 Login result:", result);

        if (result.success) {
          console.log("✅ Login successful, navigating to profile...");
          // Перенаправляем на страницу профиля после успешного входа
          navigate('/profile');
        } else {
          console.error("❌ Login failed:", result.message);
          btnRef.current?.resetStatus();
        }
      } catch (error) {
        console.error("💥 Login error caught:", error);
        btnRef.current?.resetStatus();
      }
    }
    else {
      console.error("❌ Validation failed");
      btnRef.current?.resetStatus();
    }
  }

  return (
    <SubmitButton ref={btnRef} onClick={onSubmit}>Sign In</SubmitButton>
  )
}
