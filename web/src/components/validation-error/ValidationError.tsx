import './ValidationError.scss';

type Props = {
    text?: string;
}

export default function ValidationError({ text = 'Error!' }: Props) {
    return (
        <div className="validation-error">{text}</div>
    );
}