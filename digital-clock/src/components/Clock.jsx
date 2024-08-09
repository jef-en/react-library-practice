import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Clock({ isDarkMode }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  const displayTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  };

  const merediem = () => {
    let hours = time.getHours();
    return `${hours >= 12 ? "PM" : "AM"}`;
  };

  return (
    <div className="clock-container">
      <div className={`${isDarkMode ? "dark" : "light"} clock`}>
        <p>
          {displayTime()}
          <span className={`${isDarkMode ? "dark" : "light"} merediem`}>
            {merediem()}
          </span>
        </p>
      </div>
    </div>
  );
}

Clock.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Clock;
