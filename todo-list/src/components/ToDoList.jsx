import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const [task, setTask] = useState([
    {
      title: "Grocery Shopping",
      id: 1,
      content:
        "Buy groceries for the week including vegetables, fruits, milk, and bread.",
    },
    {
      title: "Finish Project Report",
      id: 2,
      content:
        "Complete the final draft of the project report and send it to the team for review.",
    },
    {
      title: "Schedule Doctor's Appointment",
      id: 3,
      content:
        "Call the clinic to schedule a check-up appointment for next week and confirm the insurance details.",
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const { title, content } = newTask;
    if (title.trim() && content.trim()) {
      setTask([...task, { id: uuidv4(), isComplete: false, ...newTask }]); // tried using the uuid
      setNewTask({ title: "", content: "" });
    } else {
      alert("Please fill up all fields");
      setNewTask({ title: "", content: "" });
    }
  };

  const handleComplete = (id) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <div id="main-container">
      <div>
        <h1>Task Manager</h1>
        <input
          type="text"
          placeholder="Add title"
          name="title"
          value={newTask.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add your content"
          name="content"
          value={newTask.content}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div id="task-container">
        {task.map((value) => (
          <div
            className="task"
            key={value.id}
            style={{
              textDecoration: value.isComplete ? "line-through" : "none",
            }}
          >
            <h2>{value.title}</h2>
            <p>{value.content}</p>
            <button onClick={() => handleComplete(value.id)}>
              {value.isComplete ? "Not Done" : "Done"}
            </button>
            <button onClick={() => handleDelete(value.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
