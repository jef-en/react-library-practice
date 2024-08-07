import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState({
    title: "",
    body: "",
  });
  const [newTasks, setNewTasks] = useState([]);

  const handleAdd = () => {
    setNewTasks((prevNewTasks) => [...prevNewTasks, tasks]);
    setTasks({ title: "", body: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Enter title"
        name="title"
        value={tasks.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter body"
        name="body"
        value={tasks.body}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {newTasks.map((tasks, index) => (
          <li key={index}>
            {tasks.title}: {tasks.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
