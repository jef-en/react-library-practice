import PropTypes from "prop-types";

function Header({ time, meridiem, date }) {
  return (
    <div id="productivity-container">
      <p id="mode"></p>
      <div id="time-date">
        <p id="time">
          {time} <span id="meridiem">{meridiem}</span>
        </p>
        <p id="date">{date}</p>
      </div>
    </div>
  );
}
Header.propTypes = {
  time: PropTypes.func.isRequired,
  meridiem: PropTypes.func.isRequired,
  date: PropTypes.func.isRequired,
};

export default Header;
