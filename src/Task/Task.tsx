import React from "react";
import { INextStage } from "../Stage/Stage";

interface IProp {
  stageTitle: string;
  taskTitle: string;
  id: string;
  handleNextStage: INextStage["handleNextStage"];
}

const Task: React.FC<IProp> = ({
  stageTitle,
  taskTitle,
  id,
  handleNextStage,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    if (event.type === "click") {
      handleNextStage(stageTitle, id, taskTitle);
    }
  };

  return (
    <h4
      onClick={handleClick}
      style={{ border: "1px solid red", padding: "5px" }}
    >
      {taskTitle}
    </h4>
  );
};

export default Task;
