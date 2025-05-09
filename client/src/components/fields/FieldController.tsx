import { FieldProps } from "./types/field-types";

type Props<TField extends string> = {
    field: TField;
    dispatcher: (field: TField, value: string) => void;
    children: (props: FieldProps) => React.ReactNode;
};

export function FieldController<TField extends string>({ field, dispatcher, children }: Props<TField>) {
    const setValue = (value: string) => {
        dispatcher(field, value);
    };

    return children({ setValue });
}