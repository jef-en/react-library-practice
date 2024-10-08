import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function SideNav({ title, content, handleChange, handleAdd, name }) {
  return (
    <div id="nav-container" className={name}>
      <h1 id="title">
        <span>
          <FontAwesomeIcon icon={faListCheck} />
        </span>{" "}
        Task Manager
      </h1>
      <input
        type="text"
        placeholder="Add your title here!"
        name="title"
        value={title}
        onChange={handleChange}
        className="fields field-title"
      />
      <textarea
        type="text"
        placeholder="Add your content here!"
        name="content"
        value={content}
        onChange={handleChange}
        className="fields field-title"
      />
      <button onClick={handleAdd} className="btn b">
        Add Another Task
      </button>
    </div>
  );
}

SideNav.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default SideNav;
