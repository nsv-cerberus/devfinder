import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types for authentication forms
export type SignInFormState = Exclude<keyof typeof initialState.signInForm, 'validationFields'>;
export type SignUpFormState = Exclude<keyof typeof initialState.signUpForm, 'validationFields'>;

type ValidationFieldsType = { [key: string]: boolean };

// State for authentication only
const initialState = {
  // User state
  user: {
    id: null as string | null,
    username: '',
    email: '',
    isAuthenticated: false,
    token: null as string | null
  },

  // Authentication forms
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

  // Loading states
  loading: {
    signIn: false,
    signUp: false,
    logout: false
  },

  // Errors
  errors: {
    signIn: null as string | null,
    signUp: null as string | null
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // === USER ACTIONS ===
    setUser: (state, action: PayloadAction<{ id: string; username: string; email: string; token: string }>) => {
      state.user = {
        ...action.payload,
        isAuthenticated: true
      };
    },
    clearUser: (state) => {
      state.user = {
        id: null,
        username: '',
        email: '',
        isAuthenticated: false,
        token: null
      };
    },

    // === SIGN IN FORM ===
    resetSignInForm: (state) => {
      state.signInForm = initialState.signInForm;
      state.errors.signIn = null;
    },
    setSignInFieldValue: (state, action: PayloadAction<{ stateKey: SignInFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.signInForm[stateKey] = value;
    },
    setSignInValidationFieldValue: (state, action: PayloadAction<{ stateKey: SignInFormState; value: boolean }>) => {
      const { stateKey, value } = action.payload;
      state.signInForm.validationFields[stateKey] = value;
    },
    setSignInLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.signIn = action.payload;
    },
    setSignInError: (state, action: PayloadAction<string | null>) => {
      state.errors.signIn = action.payload;
    },

    // === SIGN UP FORM ===
    resetSignUpForm: (state) => {
      state.signUpForm = initialState.signUpForm;
      state.errors.signUp = null;
    },
    setSignUpFieldValue: (state, action: PayloadAction<{ stateKey: SignUpFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.signUpForm[stateKey] = value;
    },
    setSignUpValidationFieldValue: (state, action: PayloadAction<{ stateKey: SignUpFormState; value: boolean }>) => {
      const { stateKey, value } = action.payload;
      state.signUpForm.validationFields[stateKey] = value;
    },
    setSignUpLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.signUp = action.payload;
    },
    setSignUpError: (state, action: PayloadAction<string | null>) => {
      state.errors.signUp = action.payload;
    },

    // === LOGOUT ===
    setLogoutLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.logout = action.payload;
    }
  }
});

export const {
  // User actions
  setUser,
  clearUser,

  // SignIn actions
  resetSignInForm,
  setSignInFieldValue,
  setSignInValidationFieldValue,
  setSignInLoading,
  setSignInError,

  // SignUp actions
  resetSignUpForm,
  setSignUpFieldValue,
  setSignUpValidationFieldValue,
  setSignUpLoading,
  setSignUpError,

  // Logout actions
  setLogoutLoading
} = authSlice.actions;

export default authSlice.reducer;