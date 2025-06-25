import "./Code.scss";
import CodeInput from "./components/CodeInput";

export default function Code() {
  const onChange = (index: number, value: string) => {
    console.log(`Input at index ${index} changed to: ${value}`);
  };

  return (
    <div className="code">
      {Array.from({ length: 6 }).map((_, index) => (
        <CodeInput key={index} onChange={onChange} index={index} />
      ))}
    </div>
  );
}
