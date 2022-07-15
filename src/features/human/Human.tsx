import { useAppSelector } from "../../app/hooks";
import { Task } from "../task/Task";
import { taskType } from "../task/taskSlice";
import { HumanType } from "./humanSlice";

type HumanPropType = {
  human: HumanType;
};

export const Human = ({ human }: HumanPropType) => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <article className="my-2 px-1 py-2 border-2 border-slate-900 ">
      <h3 className="font-bold text-xl">{human.name}</h3>

      {human.tasksIds.length !== 0 && (
        <div>
          <h4 className="my-4 text-center font-bold">Tasks</h4>

          {human.tasksIds.map((_taskId) => {
            const task = tasks.find(
              (_task) => _task.id === _taskId
            ) as taskType;

            return <Task task={task} />;
          })}
        </div>
      )}
    </article>
  );
};
