import React, { FormEvent } from "react";

interface IProp {
  handleNewTask: (newTask: string) => void;
}

const NewTask: React.FC<IProp> = ({ handleNewTask }) => {
  const [newTask, setNewTask] = React.useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newTask) {
      return;
    }
    handleNewTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add An Item</h1>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          name="item"
          id="item"
        />
      </form>
    </div>
  );
};

export default NewTask;
