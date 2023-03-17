export const addTodo = (data) => {
  return { type: "todoList/addTodo", payload: data };
};

export const searchText = (text) => {
  return {
    type: "filter/searchText",
    payload: text,
  };
};

export const deleteTodo = (data) => {
  return {
    type: "todo/deleteTodo",
    payload: data,
  };
};

export const statusCheck = (data) => {
  return {
    type: "filter/statusCheck",
    payload: data,
  };
};

export const todoChecked = (data) => {
  return { type: "todoList/todoChecked", payload: data };
};

export const filterSelectorChange = (data) => {
  return {
    type: "filter/filterSelectorChange",
    payload: data,
  };
};
