import { useSelector } from "react-redux";

import Todo from "../components/Todo";

const AllPage = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default AllPage;
