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
      title: "Scheduled Check-up",
      id: 2,
      content:
        "Call the clinic to schedule a check-up appointment for next week and confirm the insurance details.",
    },
    {
      title: "Finish Project Report",
      id: 3,
      content:
        "Complete the final draft of the project report and send it to the team for review.",
    },
    {
      title: "Book Flight Tickets",
      id: 4,
      content:
        "Search for and book flight tickets for the upcoming conference in December. Compare options and prices.",
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
      // setNewTask({ title: "", content: "" });
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
      <div id="nav-container">
        <h1 id="title">Task Manager</h1>
        <input
          type="text"
          placeholder="Add your title"
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
        <button onClick={handleAdd} className="btn b">
          Add Another Task
        </button>
      </div>
      <div id="productivity-container">
        <h1>dark mode </h1>
        <h1>Time</h1>
      </div>
      <div id="task-container">
        {task.map((value) => (
          <div id="task" key={value.id}>
            <h3
              className="task-title"
              style={{
                textDecoration: value.isComplete ? "line-through" : "none",
              }}
            >
              {value.title}
            </h3>
            <hr className="line" />
            <p
              className="task-content"
              style={{
                textDecoration: value.isComplete ? "line-through" : "none",
              }}
            >
              {value.content}
            </p>
            <div id="buttons">
              <button onClick={() => handleComplete(value.id)} className="btn">
                {value.isComplete ? "Not Done" : "Done"}
              </button>
              <button onClick={() => handleDelete(value.id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
