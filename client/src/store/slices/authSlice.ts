import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SignInFormField = keyof typeof initialState.signInForm;
export type SignUpFormField = keyof typeof initialState.signUpForm;

const initialState = {
    signInForm: {
        username: '',
        password: ''
    },
    signUpForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        updateSignInField: (state, action: PayloadAction<{ stateKey: SignInFormField; value: string }>) => {
            const { stateKey, value } = action.payload;
            state.signInForm[stateKey] = value;
        },
        updateSignUpField: (state, action: PayloadAction<{ stateKey: SignUpFormField; value: string }>) => {
            console.log("-------");
            const { stateKey, value } = action.payload;
            console.log("State Key: ", stateKey);
            console.log("Value: ", value);
            state.signUpForm[stateKey] = value;
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