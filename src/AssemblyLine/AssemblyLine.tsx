import React, { useState } from "react";
import NewTask from "../NewTask/NewTask";
import Stage from "../Stage/Stage";
import short from "short-uuid";

interface IProps {
  stages: string[];
}

export interface ITask {
  taskTitle: string;
  id: string;
}

export interface IStage {
  title: string;
  tasks: ITask[];
}

const AssemblyLine: React.FC<IProps> = ({ stages }) => {
  const [assembly, setAssembly] = useState<IStage[]>(() => {
    const initState = stages.map((stage, id) => {
      return {
        title: stage,
        tasks: [],
      };
    });

    return initState;
  });

  const handleNewTask = (newTask: string) => {
    const firstStage = assembly[0];
    firstStage.tasks.push({ taskTitle: newTask, id: short.generate() });
    const assemblyCpy = [...assembly];
    assemblyCpy.splice(0, 1, firstStage);
    setAssembly(assemblyCpy);
  };

  const handleNextStage = (stage: string, id: string, title: string) => {
    const assemblyCpy = [...assembly];
    const taskStage = assemblyCpy.find((s) => s.title === stage);
    const stageIndex = assemblyCpy.findIndex((s) => s.title === stage);

    if (taskStage) {
      const newTasks = taskStage.tasks.filter((task) => task.id !== id);
      assemblyCpy[stageIndex].tasks = newTasks;
    }
    console.log(assemblyCpy);
    if (assemblyCpy[assemblyCpy.length - 1].title === stage) {
      setAssembly(assemblyCpy);
      return;
    }
    assemblyCpy[stageIndex + 1].tasks.push({
      taskTitle: title,
      id,
    });

    setAssembly(assemblyCpy);
  };


  const handlePrevStage = (stage: string, id: string, title: string) => {
    const assemblyCpy = [...assembly];
    const taskStage = assemblyCpy.find((s) => s.title === stage);
    const stageIndex = assemblyCpy.findIndex((s) => s.title === stage);
   
    if(stageIndex === 0){
      window.alert('You are at the first stage');
      return;
    }
    if (taskStage) {
      const newTasks = taskStage.tasks.filter((task) => task.id !== id);
      assemblyCpy[stageIndex].tasks = newTasks;
    }
    assemblyCpy[stageIndex - 1].tasks.push({id, taskTitle: title});

    setAssembly(assemblyCpy);
  };

  return (
    <div style={{ padding: "40px" , color:"whitesmoke", fontSize:"1.3rem"}}>
      <NewTask handleNewTask={handleNewTask} />
      <div
      className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {assembly.map(({ title, tasks }) => {
          return (
            <Stage
              key={title}
              title={title}
              tasks={tasks}
              handleNextStage={handleNextStage}
              handlePrevStage={handlePrevStage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AssemblyLine;
