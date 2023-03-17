import { Row, Tag, Checkbox, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todoListSlice from "../TodoList/todosSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, handleDelTodo, id, competed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(competed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.todoChecked(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
      <Button onClick={() => handleDelTodo(id)}>X</Button>
    </Row>
  );
}
