import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ time, meridiem, date, handleNav }) {
  return (
    <div id="productivity-container">
      <p id="mode"></p>
      <div id="time-date">
        <p id="time">
          {time} <span id="meridiem">{meridiem}</span>
        </p>
        <p id="date">{date}</p>
      </div>
      <FontAwesomeIcon icon={faBars} className="ham-menu" onClick={handleNav} />
    </div>
  );
}
Header.propTypes = {
  time: PropTypes.func.isRequired,
  meridiem: PropTypes.func.isRequired,
  date: PropTypes.func.isRequired,
  handleNav: PropTypes.func.isRequired,
};

export default Header;
