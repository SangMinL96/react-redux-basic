import React from "react";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <>
      {todos.map((item) => (
        <div>
          <div style={{ color: item.done ? "red" : "green" }}>{item.name}</div>
          <div onClick={() => onRemove(item.id)}>삭제</div>
          <div onClick={() => onToggle(item.id)}> 좋아요 </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
