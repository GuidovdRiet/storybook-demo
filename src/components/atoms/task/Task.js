import React from "react";
import { string, shape, func } from "prop-types";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>
      <div className="actions" onClick={e => e.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <button onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: shape({
    id: string.isRequired,
    title: string.isRequired,
    state: string.isRequired
  }),
  onArchiveTask: func,
  onPinTask: func
};

export default Task;
