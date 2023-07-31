import useInput from "../../hooks/useInput";

const TodoList = ({ item, handleEditMode, updateCheck, deleteTodo, updateTodo, checkID, setCheckID }) => {
  const newTodo = useInput();

  return (
    <li key={item.id} className="flex gap-1">
      <label className="flex items-center gap-1">
        <input type="checkbox" data-testid="modify-input" defaultChecked={item.isCompleted} className="w-5 h-5" onClick={() => updateCheck(item)} />
        {item.id !== checkID ? <span>{item.todo}</span> : <input type="text" className="w-full h-full border border-gray-400 pl-2" onChange={newTodo.onChange} />}
      </label>
      {item.id !== checkID ? (
        <div className="flex gap-2">
          <button type="button" data-testid="modify-button" className="todolistBtn" onClick={() => handleEditMode(item.id)}>
            수정
          </button>
          <button type="button" data-testid="delete-button" className="todolistBtn" onClick={() => deleteTodo(item.id)}>
            삭제
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button type="button" data-testid="submit-button" className="todolistBtn" onClick={() => updateTodo(item, newTodo.data)}>
            제출
          </button>
          <button type="button" data-testid="cancel-button" className="todolistBtn" onClick={() => setCheckID(null)}>
            취소
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoList;
