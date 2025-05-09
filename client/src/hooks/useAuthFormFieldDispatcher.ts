import { useDispatch } from "react-redux";
import { SignInField, SignUpField } from "@/components/fields/types/field-types";
import { updateSignInField, updateSignUpField } from "@/store/slices/authSlice";

export const useSignInFieldDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignInField, value: string) => {
        dispatch(updateSignInField({ stateKey, value }));
    };
};

export const useSignUpFieldDispatcher = () => {
    const dispatch = useDispatch();

    return (stateKey: SignUpField, value: string) => {
        dispatch(updateSignUpField({ stateKey, value }));
    };
};