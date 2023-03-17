import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [{ id: 1, name: "Chung", competed: true, priority: "Medium" }],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    todoChecked: (state, action) => {
      // const currentTodo = state.find((todo) => todo.id === action.payload);
      // if (currentTodo) {
      //   currentTodo.competed = !currentTodo.competed;
      // }
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.competed = !todo.competed;
        }
        console.log(todo.competed);
      });
    },
  },
});
