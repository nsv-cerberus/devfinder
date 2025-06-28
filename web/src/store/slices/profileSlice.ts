import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types for profile forms
export type ChangeUsernameFormState = keyof typeof initialState.forms.changeUsername;
export type ChangeEmailFormState = keyof typeof initialState.forms.changeEmail;
export type ChangePasswordFormState = keyof typeof initialState.forms.changePassword;

const initialState = {
  // Profile change forms
  forms: {
    changeUsername: {
      username: ''
    },
    changeEmail: {
      email: ''
    },
    changePassword: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },

  // Loading states
  loading: {
    changeUsername: false,
    changeEmail: false,
    changePassword: false
  },

  // Errors
  errors: {
    changeUsername: null as string | null,
    changeEmail: null as string | null,
    changePassword: null as string | null
  }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // === CHANGE USERNAME ===
    setChangeUsernameFieldValue: (state, action: PayloadAction<{ stateKey: ChangeUsernameFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.forms.changeUsername[stateKey] = value;
    },
    resetChangeUsernameForm: (state) => {
      state.forms.changeUsername = initialState.forms.changeUsername;
      state.errors.changeUsername = null;
    },
    setChangeUsernameLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.changeUsername = action.payload;
    },
    setChangeUsernameError: (state, action: PayloadAction<string | null>) => {
      state.errors.changeUsername = action.payload;
    },

    // === CHANGE EMAIL ===
    setChangeEmailFieldValue: (state, action: PayloadAction<{ stateKey: ChangeEmailFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.forms.changeEmail[stateKey] = value;
    },
    resetChangeEmailForm: (state) => {
      state.forms.changeEmail = initialState.forms.changeEmail;
      state.errors.changeEmail = null;
    },
    setChangeEmailLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.changeEmail = action.payload;
    },
    setChangeEmailError: (state, action: PayloadAction<string | null>) => {
      state.errors.changeEmail = action.payload;
    },

    // === CHANGE PASSWORD ===
    setChangePasswordFieldValue: (state, action: PayloadAction<{ stateKey: ChangePasswordFormState; value: string }>) => {
      const { stateKey, value } = action.payload;
      state.forms.changePassword[stateKey] = value;
    },
    resetChangePasswordForm: (state) => {
      state.forms.changePassword = initialState.forms.changePassword;
      state.errors.changePassword = null;
    },
    setChangePasswordLoading: (state, action: PayloadAction<boolean>) => {
      state.loading.changePassword = action.payload;
    },
    setChangePasswordError: (state, action: PayloadAction<string | null>) => {
      state.errors.changePassword = action.payload;
    }
  }
});

export const {
  // Change Username
  setChangeUsernameFieldValue,
  resetChangeUsernameForm,
  setChangeUsernameLoading,
  setChangeUsernameError,

  // Change Email
  setChangeEmailFieldValue,
  resetChangeEmailForm,
  setChangeEmailLoading,
  setChangeEmailError,

  // Change Password
  setChangePasswordFieldValue,
  resetChangePasswordForm,
  setChangePasswordLoading,
  setChangePasswordError
} = profileSlice.actions;

export default profileSlice.reducer;
