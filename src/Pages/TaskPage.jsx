import { ChevronLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router";
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col gap-4 items-center  p-10">
      <button
        onClick={() => navigate(-1)}
        className="absolute text-slate-300 top-6 left-6 p-5 "
      >
        <ChevronLeft />
      </button>
      <h1 className="text-3xl  text-white font-bold">Detalhes da tarefa</h1>
      <div className="bg-slate-200 p-6 flex flex-col rounded-md shadow mb-4 w-1/2">
        <p className="text-slate-600 text-xl border-b ">{title}</p>
        <p className="text-slate-600 text-md">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
