import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Mode() {
  const [mode, setMode] = useState(true);

  const handleClick = () => {
    setMode(!mode);
  };

  return (
    <div className="mode-container">
      <div>
        <div onClick={handleClick} className="mode">
          {mode ? (
            <FontAwesomeIcon icon={faSun} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}
export default Mode;
