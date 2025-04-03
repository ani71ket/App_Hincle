import { createContext, useState } from "react";

const TaskContext = createContext(null);

// tasks defination
//  {
//      id: timestamp in milliseconds
//      taskName: task name in string
//      status: boolean -> true is "open", false is "closed"
//  }

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const onSave = (taskName) => {
    setTasks([...tasks, { taskName: taskName, status: true, id: Date.now() }]);
  };

  const onDelete = (id) => {
    const updatedTasks = [...tasks.filter((task) => task.id !== id)];
    setTasks([...updatedTasks]);
  };

  const onDone = (id) => {
    const updatedTasks = [
      ...tasks.map((task) =>
        task.id === id ? { ...task, status: false } : task
      ),
    ];
    setTasks([...updatedTasks]);
  };
  return (
    <TaskContext.Provider value={{ tasks, onSave, onDelete, onDone }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
