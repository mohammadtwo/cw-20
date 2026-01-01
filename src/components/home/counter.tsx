import { useEffect, useRef, useState } from "react";
import { Lifecycle } from "../test3/use-effect";

export function Counter() {
  const [count, setCount] = useState(0);
  const input = useRef(null);
  const preventValue = useRef("");
  const [value, setValue] = useState("");
  useEffect(() => {
    setTimeout(() => {
      input.current!.focus();
    }, 1000);
    preventValue.current = value;
  }, [value]);
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="flex gap-10 bg-gray-600 p-2 rounded-2xl">
    
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={input}
          type="text"
          className="p-3 bg-amber-400 "
        />
        <div>{preventValue.current}</div>
      </div>
     
    
    </div>
  );
}
