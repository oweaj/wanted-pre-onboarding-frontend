import Header from "../../components/Header/Header";
import { TodoButton } from "../../components/Todoitem/Todoitem";

const Todo = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <Header title="TodoList" />
      <div className="w-80 flex flex-row justify-between gap-3">
        <input data-testid="new-todo-input" className="w-3/4 h-12 pl-2 border border-gray-500 rounded-lg" />
        <TodoButton title="추가" id="new-todo-add-button" />
      </div>
    </div>
  );
};

export default Todo;
