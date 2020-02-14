import React from "react";
import { action } from "@storybook/addon-actions";

// Components
import Task from "./Task";

export default {
  component: Task,
  title: "Atoms/Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2020, 0, 1, 9, 0)
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

export const Pinned = () => {
  return <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />;
};

export const Archived = () => {
  return (
    <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
  );
};
