import { tassign } from "tassign";
import { ADD_TODO, DELETE_ALL_TODOS, REMOVE_TODO } from "./actions";

export interface IAppState {
  todos: any[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TODO:
      let newTodo = { id: Math.random() * 100, title: action.title };
      console.log(state.todos);
      return tassign(state, {
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
      });
    case REMOVE_TODO:
      return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
    case DELETE_ALL_TODOS:
      return tassign(state, {
        todos: [],
        lastUpdate: new Date()
      });
    default:
      return state;
  }
}
