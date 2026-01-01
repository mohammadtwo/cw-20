import { useEffect, useState } from "react";

export function Lifecycle() {
  const [counter, setCounter] = useState(0);
  const [isShow,setIsShow]=useState(true)
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((c) => c + 1);
    }, 5000);
    console.log(id);
    return () => {
      clearInterval(id);
      console.log(id);
    };
  }, []);
  return (
    <div className="text-8xl">
      <p className={`${isShow ? "block" : "hidden"} transition-all duration-300`}> {counter}</p>
      <button onClick={() => setIsShow((oldShow) => !oldShow)}>
        {isShow ? "hidden" : "show"}
      </button>
    </div>
  );
}
