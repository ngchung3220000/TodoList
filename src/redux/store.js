import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filter: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
