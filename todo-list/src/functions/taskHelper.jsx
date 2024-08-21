import { v4 as uuidv4 } from "uuid";

export const handleChange = (event, newTask, setNewTask) => {
  const { name, value } = event.target;
  setNewTask((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const handleAdd = (newTask, task, setTask, setNewTask) => {
  const { title, content } = newTask;
  if (title.trim() && content.trim()) {
    setTask([...task, { id: uuidv4(), isComplete: false, ...newTask }]);
    setNewTask({ title: "", content: "" });
  } else {
    alert("Please fill up all fields");
    setNewTask({ title: "", content: "" });
  }
};

export const handleComplete = (id, task, setTask) => {
  setTask((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    )
  );
};

export const handleDelete = (id, task, setTask) => {
  setTask(task.filter((task) => task.id !== id));
};
