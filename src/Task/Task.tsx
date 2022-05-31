import React from "react";
import { INextStage } from "../Stage/Stage";

interface IProp {
  stageTitle: string;
  taskTitle: string;
  id: string;
  handleNextStage: INextStage["handleNextStage"];
  handlePrevStage: INextStage["handlePrevStage"];
}

const Task: React.FC<IProp> = ({
  stageTitle,
  taskTitle,
  id,
  handleNextStage,
  handlePrevStage,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    console.log()
    if (event.type === "click") {
      console.log("Left click")
      handleNextStage(stageTitle, id, taskTitle);
    }else if (event.type === "contextmenu") {
      event.preventDefault();
      handlePrevStage(stageTitle, id, taskTitle);
       console.log("Right click");
    }
  };

  return (
    <h4
      onClick={handleClick}
      onContextMenu={handleClick}
      style={{ border: "1px solid red", padding: "10px" }}
    >
      {taskTitle}
    </h4>
  );
};

export default Task;
