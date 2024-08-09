import { useState } from "react";
import Clock from "./components/Clock";
import Mode from "./components/Mode";

function App() {
  const [mode, setMode] = useState(true);

  const toggleDarkMode = () => {
    setMode((prevMode) => !prevMode);
  };
  return (
    <>
      <Mode isDarkMode={mode} toggleDarkMode={toggleDarkMode} />
      <Clock isDarkMode={mode} />
    </>
  );
}
export default App;
