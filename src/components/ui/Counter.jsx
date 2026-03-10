import { useCounter } from "../../hooks/useCounter";

const Counter = ({ end, suffix = "", duration = 1500, start }) => {
  const value = start ? useCounter(end, duration) : 0;

  return (
    <span className="text-4xl font-bold text-primary">
      {value}
      {suffix}
    </span>
  );
};

export default Counter;
