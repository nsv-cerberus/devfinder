/* import './Input.scss'; */

type Props = {
    type: string;
    placeholder: string;
}

export default function Input({ type = 'text', placeholder }: Props) {
    return (
        <input type={type} className="input" placeholder={placeholder} />
    );
}