import { useState } from "react";
import Quote from "./components/Quote";
import DarkMode from "./components/DarkMode";

function App() {
  const [mode, setMode] = useState(false);

  const toggleDarkMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <Quote isDarkMode={mode} />
      <DarkMode isDarkMode={mode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
export default App;
