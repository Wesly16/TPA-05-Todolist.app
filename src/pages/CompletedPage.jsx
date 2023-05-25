import { useSelector } from "react-redux";
import Todo from "../components/Todo";

const CompletedPage = () => {
  const todos = useSelector((state) => state.todos.todos);

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      {completedTodos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default CompletedPage;
