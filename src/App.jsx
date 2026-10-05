import AddTasks from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* Exemplo de como poderia ser feito com uma API externa, 
  mas como não temos uma API para persistir os dados, 
  vamos usar o localStorage para armazenar as tarefas e o map
   para deixar nosso objeto de tarefa formatado. */

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos",
  //     );
  //     const data = await response.json();
  //     const formattedTasks = data.slice(0, 10).map((task) => ({
  //       id: task.id.toString(),
  //       title: task.title,
  //       description: "Descrição da tarefa", // Placeholder description
  //       isCompleted: task.completed,
  //     }));
  //     setTasks(formattedTasks);
  //   };

  //   fetchTasks();
  // }, []);

  function addTaskOnClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onTaskDelete(taskid) {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    setTasks(newTasks);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-150">
        <h1 className="text-3xl align-center font-bold text-white mb-4">
          Gerenciador de Tarefas
        </h1>
        <AddTasks addTaskOnClick={addTaskOnClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
//
