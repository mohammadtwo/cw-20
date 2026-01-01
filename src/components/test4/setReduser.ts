export type State={id:number;text:string}[]
export enum TypeAction{
    ADD,
    REMOVE
}
type Action =
  | {
      type: TypeAction.REMOVE;
      payload: { id: number; };
    }
  | {
      type: TypeAction.ADD;
      payload: { text: string };
    };

export function setReducer(state:State,action:Action){
    switch (action.type) {
        case TypeAction.ADD:
            return [...state,{text:action.payload.text,id:state[state.length-1]?.id+1||1}]
        case TypeAction.REMOVE:
            return state.filter(item=>item.id !==action.payload.id)
        default:
          return  state
    }
}