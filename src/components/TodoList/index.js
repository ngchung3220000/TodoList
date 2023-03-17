import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import todoListSlice from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const dispatch = useDispatch();
  const [addTodoList, setAddTodoList] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector((state) =>
    state.todoList.filter((todo) => {
      if (state.filter.status === "All") {
        return state.filter.priority.length
          ? todo.name.includes(state.filter.search) &&
              state.filter.priority.includes(todo.priority)
          : todo.name.includes(state.filter.search);
      }
      return (
        todo.name.includes(state.filter.search) &&
        (state.filter.status === "Completed"
          ? todo.competed
          : !todo.competed) &&
        (state.filter.priority.length
          ? state.filter.priority.includes(todo.priority)
          : true)
      );
    })
  );

  const handleChangeTodo = (e) => {
    setAddTodoList(e.target.value);
  };

  const handleSelect = (value) => {
    setPriority(value);
  };

  const handleAddTodoList = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: addTodoList,
        competed: false,
        priority: priority,
      })
    );
    setAddTodoList("");
    setPriority("Medium");
  };

  const handleDelTodo = (id) => {
    // dispatch(deleteTodo(id));
    // console.log(id);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              handleDelTodo={handleDelTodo}
              name={todo.name}
              prioriry={todo.priority}
              id={todo.id}
              competed={todo.competed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={addTodoList} onChange={handleChangeTodo} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelect}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoList}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
