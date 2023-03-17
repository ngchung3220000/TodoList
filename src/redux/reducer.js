import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todosSlice";
const rootReducer = combineReducers({
  filter: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
