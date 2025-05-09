import './Input.scss';

type Props = {
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isError?: boolean;
    regex?: RegExp;
}

export default function Input({ type = 'text', onChange, placeholder = '', isError = false }: Props) {
    return (
        <input type={type} className={`input ${isError ? 'error' : ''}`} onChange={onChange} placeholder={placeholder}  />
    );
}