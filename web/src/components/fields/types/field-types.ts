/* export type CustomeMethodType = (...args: unknown[]) => boolean; */

export type FieldProps<TStateKey extends string> = {
    valueDispatcher: (stateKey: TStateKey, value: string) => void;
    validationValueDispatcher?: (stateKey: TStateKey, value: boolean) => void;
}