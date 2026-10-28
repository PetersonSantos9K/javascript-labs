import { ChevronRight, Trash2Icon } from "lucide-react";
import IconTask from "../../components/IconTask";
import { useNavigate } from "react-router-dom";

export default function Task({ tasks, handleIsCompleted, handleIsDelete }) {

  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  


  return (
    <ul className="flex flex-col gap-4 text-left w-full ">
      {tasks.map((task) => (
        <li className="flex gap-2" key={task.id}>
          <button
            className={`text-white text-sm font-medium  items-start bg-[#94A3B8] rounded-md p-2 w-full text-left cursor-pointer ${task.isCompleted && "line-through"}`}
            onClick={() => handleIsCompleted(task.id)}
          >
            {task.title}
          </button>
          <IconTask onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </IconTask>
          <IconTask onClick={() => handleIsDelete(task.id)}>
            <Trash2Icon />
          </IconTask>
        </li>
      ))}
    </ul>
  );
}
