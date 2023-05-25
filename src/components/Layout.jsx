import { NavLink, Outlet } from "react-router-dom";
import { actions } from "../features/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  const userInput = useSelector((state) => state.todos.userInput);
  const dispatch = useDispatch();

  const handleCreateTodo = (e) => {
    e.preventDefault();
    dispatch(actions.createTodo());
  };

  const handleSetUserInput = (userInput) => {
    dispatch(actions.setUserInput({ userInput }));
  };

  return (
    <div className="container mx-auto mt-10 px-4 max-w-fit">
      <h1 className="text-center font-bold text-3xl mb-16">What's the plan for today?</h1>
      <form className="flex gap-2 mb-12" onSubmit={handleCreateTodo}>
        <input type="text" value={userInput} onChange={(e) => handleSetUserInput(e.target.value)} placeholder="What to do" className="p-2 w-full border-gray-300 border-solid border-2 rounded" />
        <input type="submit" className="btn bg-[#6558F5] text-white font-medium w-20" value="Add" />
      </form>
      <nav className="mt-4">
        <ul className="flex gap-2">
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-[#1AAE9F]" : "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-slate-500")}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to={"/active"} className={({ isActive }) => (isActive ? "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-[#1AAE9F]" : "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-slate-500")}>
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to={"/completed"} className={({ isActive }) => (isActive ? "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-[#1AAE9F]" : "rounded-full text-white font-medium text-sm px-2.5 py-0.5 bg-slate-500")}>
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="mt-4">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
