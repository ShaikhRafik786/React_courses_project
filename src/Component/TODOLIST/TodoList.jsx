import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [allData, setAllData] = useState([]);
  const [addTodoData, setAddTodoData] = useState("");
  const [show, setShow] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const getApiDetails = async () => {
    const result = await axios.get("http://localhost:3000/todos");
    setAllData(result.data);
  };

  useEffect(() => {
    getApiDetails();
  }, []);

  const handleAddTodo = () => {
    axios.post("http://localhost:3000/todos", {
      todo: addTodoData,
    });
    window.location.reload();
    setAddTodoData("");
  };

  const handleDeleteTodo = async (id) => {
   await  axios.delete(`http://localhost:3000/todos/${id}`,
      window.location.reload())
  };

  const handleEditTodo = async  (id) => {
   await  axios.put(`http://localhost:3000/todos/${id}`, {
      todo: editTodo,
    });
    window.location.reload();
  };

  return (
    <div>
      <AddTodo setAddTodoData={setAddTodoData} handleAddTodo={handleAddTodo} />{" "}
      <br />
      {allData.map((item) => {
        return (
          <TodoItem
            item={item}
            handleDeleteTodo={handleDeleteTodo}
            key={item.id}
            show={show}
            setShow={setShow}
            setEditTodo={setEditTodo}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
