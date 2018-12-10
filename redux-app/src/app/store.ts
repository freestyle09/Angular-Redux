import {tassign} from 'tassign';
import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  REMOVE_TODO,
  UPDATE_TODO,
  FETCH_CATS
} from './actions';

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
    case FETCH_CATS:
      return tassign(state, {
        todos: action.cats,
        lastUpdate: new Date()
      });
    case ADD_TODO:
      let newTodo = {
        id: Math.random() * 100,
        title: action.title,
        isCompleted: false
      };
      return tassign(state, {
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
      });
    case UPDATE_TODO:
      let item = state.todos.find(i => i.id === action.id);
      let index = state.todos.indexOf(item);

      return tassign(state, {
        todos: [
          ...state.todos.slice(0, index),
          tassign(item, {isCompleted: !item.isCompleted}),
          ...state.todos.slice(index + 1)
        ],
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
