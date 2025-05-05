import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SignInFormField = keyof typeof initialState.signInForm;
type SignUpFormField = keyof typeof initialState.signUpForm;

const initialState = {
    signInForm: {
        username: '',
        password: '',
    },
    signUpForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateSignInField: (state, action: PayloadAction<{ field: SignInFormField; value: string }>) => {
            const { field, value } = action.payload;
            state.signInForm[field] = value;
        },
        updateSignUpField: (state, action: PayloadAction<{ field: SignUpFormField; value: string }>) => {
            const { field, value } = action.payload;
            console.log('Value: ', value);
            state.signUpForm[field] = value;
        },
        resetSignInForm: (state) => {
            state.signInForm = initialState.signInForm;
        },
        resetSignUpForm: (state) => {
            state.signUpForm = initialState.signUpForm;
        }
    }
});

export const { updateSignInField, updateSignUpField, resetSignInForm, resetSignUpForm } = authSlice.actions;
export default authSlice.reducer;