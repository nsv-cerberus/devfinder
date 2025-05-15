import { useDispatch } from "react-redux";
import { SignInFormKeyType, SignUpFormKeyType } from "@/components/fields/types/field-types";
import { /* setSignInFieldValue, */ setSignUpFieldValue, /* setSignInValidationFieldValue, */ setSignUpValidationFieldValue } from "@/store/slices/authSlice";

export const useValueSetterDispatcher = <TKeyState extends SignInFormKeyType | SignUpFormKeyType>() => {
    const dispatch = useDispatch();

    return (stateKey: TKeyState, value: string) => {
        dispatch(setSignUpFieldValue({ stateKey, value }));
    };
};

export const useValidationValueSetterDispatcher = <TKeyState extends SignInFormKeyType | SignUpFormKeyType>() => {
    const dispatch = useDispatch();

    return (stateKey: TKeyState, value: boolean) => {
        dispatch(setSignUpValidationFieldValue({ stateKey, value }));
    };
};

/* export const useSignInFieldDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignInFormKeyType, value: string) => {
        dispatch(setSignInFieldValue({ stateKey, value }));
    };
};

export const useSignUpFieldDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignUpFormKeyType, value: string) => {
        dispatch(setSignUpFieldValue({ stateKey, value }));
    };
};

export const useSignInValidateDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignInFormKeyType, value: boolean) => {
        dispatch(setSignInValidationFieldValue({ stateKey, value }));
    };
};

export const useSignUpValidateDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignUpFormKeyType, value: boolean) => {
        dispatch(setSignUpValidationFieldValue({ stateKey, value }));
    };
}; */