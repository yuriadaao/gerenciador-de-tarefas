import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTasks({ addTaskOnClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 p-6 flex flex-col rounded-md shadow mb-4">
      <Input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
          }
          addTaskOnClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 text-white p-2 rounded-md w-full"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

AddTasks.propTypes = {
  addTaskOnClick: PropTypes.func.isRequired,
};

export default AddTasks;
