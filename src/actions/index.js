
// Start the todo id's from 0
let todo_id = 0;

// Action types
export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';

// Action creators
export function todo_add(item) {
  return {
    type: TODO_ADD,
    id: todo_id++,
    item: item
  };
}

export function todo_delete(id) {
  return {
    type: TODO_DELETE,
    id: id
  };
}
