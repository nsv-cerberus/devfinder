import { ValidationRulesType } from "@/utils/validation";
import { SignUpFormState } from "@/store/slices/authSlice";
import { useSignUpFieldDispatcher, useSignUpValidateDispatcher } from "@/hooks/useAuthFormFieldDispatchers";

import { FieldController } from "@/components/fields/FieldController";

interface Props {
  stateKey: SignUpFormState;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  validation: {
    rules: ValidationRulesType
    errorText: string;
  }
}

export default function SignUpFieldWrapper({
  stateKey,
  placeholder,
  type,
  validation
}: Props) {
  return (
    <FieldController<SignUpFormState>
      type={type}
      placeholder={placeholder}
      valueControl={{
        stateKey,
        dispatcher: useSignUpFieldDispatcher(),
      }}
      validationControl={{
        rules: validation.rules,
        dispatcher: useSignUpValidateDispatcher(),
        error: validation.errorText,
      }}
    />
  );
}