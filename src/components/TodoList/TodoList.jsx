import useInput from "../../hooks/useInput";
import { Button } from "../../components/Item/Item";

const TodoList = ({ item, handleEditMode, updateCheck, deleteTodo, updateTodo, checkID, setCheckID }) => {
  const newTodo = useInput();
  const buttonList = [
    { type: "button", id: "modify-button", title: "수정", onClick: () => handleEditMode(item.id) },
    { type: "button", id: "delete-button", title: "삭제", onClick: () => deleteTodo(item.id) },
    { type: "button", id: "submit-button", title: "제출", onClick: () => updateTodo(item, newTodo.data) },
    { type: "button", id: "cancel-button", title: "취소", onClick: () => setCheckID(null) },
  ];

  return (
    <li key={item.id} className="flex gap-1">
      <label className="flex items-center gap-1">
        <input type="checkbox" data-testid="modify-input" defaultChecked={item.isCompleted} className="w-5 h-5" onClick={() => updateCheck(item)} />
        {item.id !== checkID ? <span>{item.todo}</span> : <input type="text" data-testid="modify-input" className="w-full h-full border border-gray-400 pl-2" onChange={newTodo.onChange} />}
      </label>
      {buttonList.map(({ type, id, title, onClick }, index) =>
        item.id !== checkID ? (
          index <= 1 ? (
            <Button key={index} type={type} id={id} title={title} onClick={onClick} />
          ) : null
        ) : index > 1 ? (
          <Button key={index} type={type} id={id} title={title} onClick={onClick} />
        ) : null
      )}
    </li>
  );
};

export default TodoList;
