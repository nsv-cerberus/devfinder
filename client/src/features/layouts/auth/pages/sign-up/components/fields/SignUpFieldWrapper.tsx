import { SignUpFormState } from "@/store/slices/authSlice";
import { FieldController } from "@/components/fields/FieldController";
import { useSignUpFieldDispatcher, useSignUpValidateDispatcher } from "@/hooks/useAuthFormFieldDispatchers";

interface Props {
  stateKey: SignUpFormState;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  regExp: RegExp;
  errorText: string;
}

export default function SignUpFieldWrapper({
  stateKey,
  placeholder,
  type,
  regExp,
  errorText,
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
        rules: { regExp },
        dispatcher: useSignUpValidateDispatcher(),
        error: errorText,
      }}
    />
  );
}