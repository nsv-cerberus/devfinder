import { createContext, ReactNode, useContext } from "react";

export function createFieldContext<TStateKey extends string>() {
    type FieldProviderValue = {
        stateKey: TStateKey;
        dispatcher: (stateKey: TStateKey, value: string) => void;
    };

    type ProviderProps = {
        children: ReactNode;
    } & FieldProviderValue;

    const Context = createContext<FieldProviderValue | null>(null);

    const Provider = ({ children, stateKey, dispatcher }: ProviderProps) => {
        return (
            <Context.Provider value={{ stateKey, dispatcher }}>
                {children}
            </Context.Provider>
        );
    };

    const useFieldContext = () => {
        const context = useContext(Context);
        if (!context) throw new Error("useFieldContext must be used within FieldProvider");
        return context;
    };

    return [Context, Provider, useFieldContext] as const;
}