import { createFieldContext } from "./createFieldContext";
import { SignUpField } from "../types/field-types";

export const [SignUpFieldContext, SignUpFieldProvider, useSignUpFieldContext] = createFieldContext<SignUpField>();