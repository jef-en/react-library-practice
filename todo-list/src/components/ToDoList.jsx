import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState({
    title: "",
    body: "",
  });
  const [newTasks, setNewTasks] = useState([]);

  const handleAdd = () => {
    // Generate a random color for the new task
    const colorValue = ["#ffc09f", "#ffee93", "#fcf5c7", "#a0ced9", "#adf7b6"];
    const randomIndex = Math.floor(Math.random() * colorValue.length);
    const randomColor = colorValue[randomIndex];

    // Add the new task with a random background color
    setNewTasks((prevNewTasks) => [
      ...prevNewTasks,
      { ...tasks, color: randomColor },
    ]);
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
    <div className="main-container">
      <h1 className="title">To Do List</h1>
      <input
        type="text"
        placeholder="Enter title"
        name="title"
        value={tasks.title}
        onChange={handleChange}
        className="form-fields"
      />
      <input
        type="text"
        placeholder="Enter body"
        name="body"
        value={tasks.body}
        onChange={handleChange}
        className="form-fields"
      />
      <button onClick={handleAdd} className="button">
        Add
      </button>
      <ol>
        {newTasks.map((task, index) => (
          <li key={index}>
            <div
              className="task-container"
              style={{ backgroundColor: task.color }}
            >
              <p className="title">{task.title}</p>
              {task.body}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
