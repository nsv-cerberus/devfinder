export type SignInField = 'username' | 'password';
export type SignUpField = 'username' | 'password' | 'email' | 'confirmPassword';

export type FieldProps<TStateKey extends string> = {
    dispatcher: (stateKey: TStateKey, value: string) => void;
}