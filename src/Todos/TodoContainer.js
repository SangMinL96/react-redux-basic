import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { create, toggle, deleted } from "../modules/todos";
import TodoList from "./TodoList";

function TodoContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = useCallback((text) => dispatch(create(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(deleted(id)), [dispatch]);
  return (
    <>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default TodoContainer;
