import { ValidationType } from "@/utils/validation";
import { SignUpFormState } from "@/store/slices/authSlice";
import { useSignUpFieldDispatcher, useSignUpValidateDispatcher } from "@/hooks/useAuthFormFieldDispatchers";
import { RootState } from "@/store/store";
import { FieldDispatcher, ValidationDispatcher } from "@/components/fields/types";

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
  return (
    <FieldController
      type={type}
      placeholder={placeholder}
      isRequired={isRequired}
      valueControl={{
        stateKey,
        dispatcher: useSignUpFieldDispatcher() as FieldDispatcher,
      }}
      validationControl={{
        validation: validation,
        dispatcher: useSignUpValidateDispatcher() as ValidationDispatcher
      }}
      stateValueGetter={(state, key) => (state as RootState).auth.signUpForm[key as SignUpFormState]}
    />
  );
}