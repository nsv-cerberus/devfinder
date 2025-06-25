import { useDispatch } from "react-redux";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  setSignInFieldValue,
  setSignUpFieldValue,
  setSignInValidationFieldValue,
  setSignUpValidationFieldValue
} from "@/store/slices/authSlice";

type ActionCreator<TPayload> = (payload: TPayload) => PayloadAction<TPayload>;

const useFieldDispatcher = <TPayload>(actionCreator: ActionCreator<TPayload>) => {
  const dispatch = useDispatch();
  return (payload: TPayload) => dispatch(actionCreator(payload));
}

export const useSignInFieldDispatcher = () => useFieldDispatcher(setSignInFieldValue);
export const useSignUpFieldDispatcher = () => useFieldDispatcher(setSignUpFieldValue);

export const useSignInValidateDispatcher = () => useFieldDispatcher(setSignInValidationFieldValue);
export const useSignUpValidateDispatcher = () => useFieldDispatcher(setSignUpValidationFieldValue);