import { useState, useEffect } from "react";
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { actions } from "../features/todos/todosSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(actions.toggleTodo({ id }));
  };

  const handleRemove = (id) => {
    dispatch(actions.deleteTodo({ id }));
  };

  const handleEdit = (id, content) => {
    dispatch(actions.editTodo({ id, content }));
  };

  const [edit, setEdit] = useState(false);
  const [editedContent, setEditedContent] = useState(todo.content);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    handleEdit(todo.id, editedContent);
    setEdit(false);
  };

  useEffect(() => {
    setEditedContent(todo.content);
  }, [todo.content]);

  return (
    <div className="flex justify-between p-2 bg-white rounded mb-4 items-center border border-gray-300">
      <div className="flex gap-1 items-center">
        <input type="checkbox" name="completed" checked={todo.completed} onChange={() => handleToggle(todo.id)} style={{ width: "1.2rem", height: "1.2rem" }} />
        <label htmlFor="completed"></label>
      </div>
      <div className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
        {edit ? <input type="text" name="content" value={editedContent} onChange={(e) => setEditedContent(e.target.value)} onKeyDown={handleKeyDown} /> : <p>{todo.content}</p>}
      </div>
      <div className="flex gap-2 items-center">
        <button className="btn btn-transparent" onClick={() => setEdit((value) => !value)}>
          <HiPencilAlt style={{ color: "#4B5C6B", width: "1.2rem", height: "1.2rem" }} />
        </button>
        <button className="btn btn-transparent" onClick={() => handleRemove(todo.id)}>
          <HiTrash style={{ color: "#4B5C6B", width: "1.2rem", height: "1.2rem" }} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
