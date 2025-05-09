import { createFieldContext } from "./createFieldContext";
import { SignInField } from "../types/field-types";

export const [SignInFieldContext, SignInFieldProvider, useSignInFieldContext] = createFieldContext<SignInField>();