import { useEffect, useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";


export default function Tasks() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );


  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])



  function handleIsCompleted(taskId) {
    let newTaskIsCompleted = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks([...newTaskIsCompleted]);
  }

  function handleIsDelete(taskId) {
    let newTaskIsDelete = tasks.filter((task) => task.id != taskId);

    setTasks([...newTaskIsDelete]);
  }

  function handleAddTask(title, description) {
    const newTask = {
      id: uuidv4(),
      isCompleted: false,
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
  }

  
  console.log(tasks);

  return (
    <>
      <div className="bg-[#E2E8F0] p-5 min-w-100 rounded-md max-w-500">
        <AddTask handleAddTask={handleAddTask} />
      </div>

      <div className="bg-[#E2E8F0] p-5 min-w-100 rounded-md max-w-500 overflow-auto max-h-50">
        <Task
          tasks={tasks}
          handleIsCompleted={handleIsCompleted}
          handleIsDelete={handleIsDelete}
        />
      </div>
    </>
  );
}
