import { useReducer, useRef } from "react";
import { setReducer, TypeAction } from "./setReduser";

export function Reduser() {
  const inishal: { id: number; text: string }[] = [
    { text: "hello world!", id: 1 },
  ];
  const [state, dispatch] = useReducer(setReducer, inishal);
  const input = useRef<null | HTMLInputElement>(null);
  const handelAdd = () => {
    if (typeof input.current?.value === "string") {
      dispatch({
        type: TypeAction.ADD,
        payload: { text: input.current?.value },
      });
      input.current.value = "";
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <input type="text" ref={input} className="border" />
      <button onClick={handelAdd}>add</button>
      <div>
        {state.map((item) => (
          <div>
            <div>{item.text}</div>
            <button
              onClick={() =>
                dispatch({ type: TypeAction.REMOVE, payload: { id: item.id } })
              }
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
