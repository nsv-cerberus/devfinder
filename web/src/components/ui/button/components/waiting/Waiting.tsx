import Circle from "./components/Circle";

export default function Waiting() {
  return (
    <span className="waiting-circles">
      <Circle />
      <Circle />
      <Circle />
    </span>
  );
}