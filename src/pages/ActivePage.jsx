import { useSelector } from "react-redux";
import Todo from "../components/Todo";

const ActivePage = () => {
  const todos = useSelector((state) => state.todos.todos);

  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      {activeTodos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default ActivePage;
