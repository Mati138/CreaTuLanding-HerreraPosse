const Counter = ({ value, onChange, stock, min = 1 }) => {
  const handleSuma = () => {
    if (value < stock) onChange(value + 1);
  };

  const handleResta = () => {
    if (value > min) onChange(value - 1);
  };

  return (
    <div className="counter">
      <button onClick={handleResta} disabled={value <= min}>-</button>
      <span>{value}</span>
      <button onClick={handleSuma} disabled={value >= stock}>+</button>
    </div>
  );
};

export default Counter;
