import { TODO_ADD, TODO_DELETE } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case TODO_ADD:
      return [ { id: action.id, item: action.item }, ...state];
    case TODO_DELETE:
      // Create new list of items to not alter state directly
      let items = state.filter( (item) => {
        if (item.id !== action.id) return item;
      });
      return items;
    default:
      return state;
  }
}
