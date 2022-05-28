import React from "react";
import { IStage } from "../AssemblyLine/AssemblyLine";
import Task from "../Task/Task";

export interface INextStage {
  handleNextStage: (stage: string, id: string, title: string) => void;
}

const Stage: React.FC<IStage & INextStage> = ({
  title,
  tasks,
  handleNextStage,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskTitle={task.taskTitle}
            id={task.id}
            stageTitle={title}
            handleNextStage={handleNextStage}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
