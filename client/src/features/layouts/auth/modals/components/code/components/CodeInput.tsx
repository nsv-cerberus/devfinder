import "./CodeInput.scss";

type Props = {
  index: number;
  onChange: (index: number, value: string) => void;
};

export default function CodeInput({index, onChange}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(index, value);
  };

  return (
    <div className="code-input">
      <input
        type="text"
        className="code-input-field"
        placeholder="-"
        maxLength={1}
        onChange={handleChange}
      />
    </div>
  );
}