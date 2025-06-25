import './Input.scss';

type Props = {
    type?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isError?: boolean;
}

export default function Input({ type = 'text', placeholder = '', onChange, isError = false }: Props) {
    return (
        <input type={type} className={`input ${isError ? 'error' : ''}`} onChange={onChange} placeholder={placeholder}  />
    );
}