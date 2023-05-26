import { useState, useRef, useEffect } from "react";
import { HiTrash, HiPencilAlt, HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { actions } from "../features/todos/todosSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(todo.content);
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    if (!edit) {
      dispatch(actions.toggleTodo({ id }));
    }
  };

  const handleRemove = (id) => {
    MySwal.fire({
      title: "Are you sure want to delete this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeTodo(id));
        MySwal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = (id) => {
    dispatch(actions.editTodo({ id, content: updatedContent }));
    setEdit(false);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      handleSave(id);
    }
  };

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

  return (
    <div className="flex justify-between p-2 bg-gray-500/50 rounded mb-4 items-center">
      {edit ? (
        <input type="text" value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} className="border border-gray-300 rounded p-1" ref={inputRef} onKeyDown={(e) => handleKeyDown(e, todo.id)} />
      ) : (
        <p className="font-bold" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.content}
        </p>
      )}

      <div className="flex gap-3 items-right">
        <div className="flex gap-3 items-right">
          <input type="checkbox" name="completed" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
        </div>

        {!todo.completed && (
          <div className="flex gap-3 items-center">
            {edit ? (
              <button className="btn" onClick={() => handleSave(todo.id)}>
                <HiCheckCircle />
              </button>
            ) : (
              <button className="btn" onClick={handleEdit}>
                <HiPencilAlt />
              </button>
            )}
            <button className="btn" onClick={() => handleRemove(todo.id)}>
              <HiTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
