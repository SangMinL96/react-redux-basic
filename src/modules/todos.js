const CREATE = "todos/CREATE";
const TOGGLE = "todos/TOGGLE";
const DELETE = "todos/DELETE";
let nextId = 1;
export const create = (text) => ({
  type: "CREATE",
  todo: { id: nextId++, text },
});
export const toggle = (id) => ({ type: "TOGGLE", id });
export const deleted = (id) => ({ type: "DELETE", id });

const users = [];

export default function todos(state = users, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    case DELETE:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}
