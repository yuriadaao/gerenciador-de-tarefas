import "./App.css";
import AddTasks from "./assets/components/AddTask";
import Tasks from "./assets/components/Tasks";

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTasks />
      <Tasks />
    </div>
  );
}

export default App;
