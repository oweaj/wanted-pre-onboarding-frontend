import Header from "../../components/Header/Header";
import { Button } from "../../components/Item/Item";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import axios from "axios";
import TodoList from "../../components/TodoList/TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkID, setCheckID] = useState(null);
  const addTodo = useInput();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    !token ? navigate("/signin") : getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/todos`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_API_URL}/todos`;
      const response = await axios.post(
        url,
        {
          todo: addTodo.data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTodoList([...todoList, response.data]);
      addTodo.setData("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditMode = (id) => {
    setCheckID(id);
  };

  const updateCheck = async (item) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/todos/${item.id}`;
      await axios.put(
        url,
        {
          todo: item.todo,
          isCompleted: !item.isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (item, newData) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/todos/${item.id}`;
      await axios.put(
        url,
        {
          todo: newData,
          isCompleted: item.isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      getTodos();
      setCheckID(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/todos/${id}`;
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="w-4/5 h-full flex flex-col items-center gap-4 px-3">
      <div className="flex flex-row items-center gap-4">
        <Header title="TodoList" />
        <button className="p-2 text-white bg-red-300 rounded-lg" onClick={logout}>
          로그아웃
        </button>
      </div>
      <div className="w-full flex flex-row justify-between gap-3">
        <input data-testid="new-todo-input" className="w-3/4 h-12 pl-2 border border-gray-500 rounded-lg" onChange={addTodo.onChange} value={addTodo.data} />
        <Button title="추가" data-testid="new-todo-add-button" onClick={createTodo} />
      </div>
      <ul className="w-full flex flex-col items-left gap-3">
        {todoList.map((item) => (
          <TodoList key={item.id} item={item} handleEditMode={handleEditMode} updateCheck={updateCheck} updateTodo={updateTodo} deleteTodo={deleteTodo} checkID={checkID} setCheckID={setCheckID} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
