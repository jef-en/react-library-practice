import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import { useEffect } from "react";

function Mode({ toggleDarkMode, isDarkMode }) {
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="mode-container">
      <div onClick={toggleDarkMode} className="mode">
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className={`${isDarkMode ? "dark" : "light"} icon`}
        />
      </div>
    </div>
  );
}

Mode.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Mode;
