import PropTypes from "prop-types";

function MainTask({ task, handleComplete, handleDelete }) {
  return (
    <div id="task-container">
      <div className="container">
        {task.map((value) => (
          <div
            id="task"
            key={value.id}
            style={{
              backgroundColor: value.isComplete ? "#55c355" : "",
            }}
          >
            <h3
              className="task-title"
              style={{
                textDecoration: value.isComplete ? "line-through" : "none",
              }}
            >
              {value.title}
              <button>Edit</button>
            </h3>
            <hr className="line" />
            <p
              className="task-content"
              style={{
                textDecoration: value.isComplete ? "line-through" : "none",
              }}
            >
              {value.content}
            </p>
            <div id="buttons">
              <button onClick={() => handleComplete(value.id)} className="btn">
                {value.isComplete ? "Not Done" : "Done"}
              </button>
              <button onClick={() => handleDelete(value.id)} className="btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

MainTask.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MainTask;
