import { tassign } from "tassign";
import { ADD_TODO } from "./actions";

export interface IAppState {
  todos: any[];
}

export const INITIAL_STATE: IAppState = {
  todos: []
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TODO:
      let newTodo = { id: state.todos.length + 1, title: action.title };
      console.log(state.todos);
      return tassign(state, {
        todos: state.todos.concat(newTodo)
      });
    default:
      return state;
  }
}
