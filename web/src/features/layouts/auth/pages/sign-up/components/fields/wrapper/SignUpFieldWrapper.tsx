import { ValidationType } from "@/utils/validation";
import { SignUpFormState } from "@/store/slices/authSlice";
import { useSignUpFieldDispatcher, useSignUpValidateDispatcher } from "@/hooks/useAuthFormFieldDispatchers";

import { FieldController } from "@/components/fields/FieldController";

interface Props {
  stateKey: SignUpFormState;
  placeholder?: string;
  isRequired?: boolean;
  type?: React.HTMLInputTypeAttribute;
  validation: ValidationType
}

export default function SignUpFieldWrapper({
  stateKey,
  placeholder,
  isRequired,
  type,
  validation
}: Props) {
  type FormState = SignUpFormState;

  return (
    <FieldController<FormState>
      type={type}
      placeholder={placeholder}
      isRequired={isRequired}
      valueControl={{
        stateKey,
        dispatcher: useSignUpFieldDispatcher(),
      }}
      validationControl={{
        validation: validation,
        dispatcher: useSignUpValidateDispatcher()
      }}
    />
  );
}