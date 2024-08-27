import { useEffect, useState } from "react";
import defaultValues from "./assets/defaultValues";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import MainTask from "./components/MainTask";
import {
  handleChange,
  handleAdd,
  handleComplete,
  handleDelete,
} from "./functions/taskHelper";
import { displayTime, meridiem, date } from "./functions/clockHelper";

function App() {
  const [task, setTask] = useState(defaultValues);
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
  });
  const [time, setTime] = useState(new Date());

  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    console.log(isNavVisible);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main-container">
      <SideNav
        title={newTask.title}
        content={newTask.content}
        handleChange={(event) => handleChange(event, newTask, setNewTask)}
        handleAdd={() => handleAdd(newTask, task, setTask, setNewTask)}
        name={isNavVisible ? "show" : ""}
      />
      <Header
        time={displayTime(time)}
        meridiem={meridiem(time)}
        date={date(time)}
        handleNav={toggleNav}
      />
      <MainTask
        task={task}
        handleComplete={(id) => handleComplete(id, task, setTask)}
        handleDelete={(id) => handleDelete(id, task, setTask)}
      />
    </div>
  );
}

export default App;
