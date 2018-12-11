import { tassign } from "tassign";
import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  REMOVE_TODO,
  UPDATE_TODO,
  FETCH_CATS
} from "./actions";

// Interfaces determinates the shape of our app state
export interface IAppState {
  todos: any[];
  lastUpdate: Date;
}
// Object that represents the Initial state of our application
export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

function fetchCats(state, action) {
  return tassign(state, {
    todos: action.cats,
    lastUpdate: new Date()
  });
}

function addTodo(state, action) {
  let newTodo = {
    id: action.todos.id,
    title: action.todos.title,
    isCompleted: false
  };
  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate: new Date()
  });
}

function updateTodo(state, action) {
  let item = state.todos.find(i => i.id === action.id);
  let index = state.todos.indexOf(item);

  return tassign(state, {
    todos: [
      ...state.todos.slice(0, index),
      tassign(item, { isCompleted: !item.isCompleted }),
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  });
}

function removeTodo(state, action) {
  return tassign(state, {
    todos: state.todos.filter(t => t.id !== action.id),
    lastUpdate: new Date()
  });
}

function deleteAllTodos(state, actions) {
  return tassign(state, {
    todos: [],
    lastUpdate: new Date()
  });
}

// Reducer function
export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case FETCH_CATS:
      return fetchCats(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case UPDATE_TODO:
      return updateTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case DELETE_ALL_TODOS:
      return deleteAllTodos(state, action);
    default:
      return state;
  }
}
