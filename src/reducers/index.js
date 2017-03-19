import { combineReducers } from 'redux';
import TodoReducer from './reducer_todo';

const rootReducer = combineReducers({
  todo_list: TodoReducer
});

export default rootReducer;
