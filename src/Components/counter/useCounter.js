import { useState } from "react";

const useCounter = (initValue = 1, stock = Infinity, min =1) => {
    
  const [value, setValue] = useState(initValue);

  const suma = () => setValue(prev => (prev < stock ? prev + 1 : prev));
  const resta = () => setValue(prev => (prev > min ? prev - 1 : prev));

  return { value, suma, resta };
};

export default useCounter;