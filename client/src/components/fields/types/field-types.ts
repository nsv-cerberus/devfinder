export type SignInFormKeyType = 'username' | 'password';
export type SignUpFormKeyType = 'username' | 'password' | 'email' | 'confirmPassword';

export type FieldProps<TStateKey extends string> = {
    valueDispatcher: (stateKey: TStateKey, value: string) => void;
    validationValueDispatcher?: (stateKey: TStateKey, value: boolean) => void;
}