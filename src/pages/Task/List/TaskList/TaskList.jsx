import React from "react";
import TaskCard from "../../TaskCard/TaskCard";

const TaskList = () => {
  return (
    <div className="w-[67vw]">
      <div className="space-y-3 overflow-auto h-screen">
        {[1, 1, 1, 1, 1].map((item) => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
