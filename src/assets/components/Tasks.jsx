import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router"; // Import useNavigate from react-router
import PropTypes from "prop-types";
import TaskButton from "./TaskButton";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  // Query Config

  const navigate = useNavigate();

  function onSeeDeatailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  ///////////////////////////////////////////////////

  return (
    <ul className="space-y-3  p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={
              "bg-slate-400  text-white text-left w-full p-2 rounded-md ml-2" +
              (task.isCompleted ? " line-through" : "")
            }
          >
            {task.title}
          </button>
          <TaskButton onClick={() => onSeeDeatailsClick(task)}>
            <ChevronRight />
          </TaskButton>
          <TaskButton onClick={() => onTaskDelete(task.id)}>
            <Trash />
          </TaskButton>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Tasks;
