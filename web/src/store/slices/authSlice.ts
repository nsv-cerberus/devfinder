import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SignInFormState = Exclude<keyof typeof initialState.signInForm, 'validationFields'>;
export type SignUpFormState = Exclude<keyof typeof initialState.signUpForm, 'validationFields'>;

type ValidationFieldsType = { [key: string]: boolean };

const initialState = {
  signInForm: {
    username: '',
    password: '',
    validationFields: {} as ValidationFieldsType
  },
  signUpForm: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    validationFields: {} as ValidationFieldsType
  },
  profileForms: {
    changeUsername: {
      username: ''
    },
    changeEmail: {
      email: ''
    },
    changePassword: {
      password: '',
      confirmPassword: ''
    }
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetSignInForm: (state) => {
      state.signInForm = initialState.signInForm;
    },
    resetSignUpForm: (state) => {
      state.signUpForm = initialState.signUpForm;
    },
    setSignInFieldValue: (state, action: PayloadAction<{ stateKey: SignInFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.signInForm[stateKey] = value;
    },
    setSignUpFieldValue: (state, action: PayloadAction<{ stateKey: SignUpFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.signUpForm[stateKey] = value;
    },
    setSignInValidationFieldValue: (state, action: PayloadAction<{ stateKey: SignInFormState; value: boolean }>) => {
      const { stateKey, value } = action.payload;
      state.signInForm.validationFields[stateKey] = value;
    },
    setSignUpValidationFieldValue: (state, action: PayloadAction<{ stateKey: SignUpFormState; value: boolean }>) => {
      const { stateKey, value } = action.payload;
      state.signUpForm.validationFields[stateKey] = value;
    }
  }
});

export const {
  setSignInFieldValue,
  setSignUpFieldValue,
  setSignInValidationFieldValue,
  setSignUpValidationFieldValue,
  resetSignInForm,
  resetSignUpForm
} = authSlice.actions;

export default authSlice.reducer;