import { ValidationType } from "@/utils/validation";
import { SignInFormState } from "@/store/slices/authSlice";
import { useSignInFieldDispatcher, useSignInValidateDispatcher } from "@/hooks/useAuthFormFieldDispatchers";
import { FieldController } from "@/components/fields/FieldController";
import { RootState } from "@/store/store";
import { FieldDispatcher, ValidationDispatcher } from "@/components/fields/types";

interface Props {
  stateKey: SignInFormState;
  placeholder?: string;
  isRequired?: boolean;
  type?: React.HTMLInputTypeAttribute;
  validation: ValidationType
}

export default function SignInFieldWrapper({
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
        dispatcher: useSignInFieldDispatcher() as FieldDispatcher,
      }}
      validationControl={{
        validation: validation,
        dispatcher: useSignInValidateDispatcher() as ValidationDispatcher
      }}
      stateValueGetter={(state, key) => (state as RootState).auth.signInForm[key as SignInFormState]}
    />
  );
}
