import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { taskSlice, taskType } from "./taskSlice";

export const Task = ({ task }: { task: taskType }) => {
  const humans = useAppSelector((state) => state.humans);
  const dispatch = useAppDispatch();

  return (
    <article className="border border-slate-700 p-3 my-1">
      <div className="flex gap-3">
        <input
          type="checkbox"
          aria-label="mark-completed"
          checked={task.isCompleted}
          onChange={(e) =>
            dispatch(
              taskSlice.actions.toggleTask({
                taskId: task.id,
                completed: e.target.checked,
              })
            )
          }
        />
        <h3>{task.title}</h3>
      </div>

      <div className="mt-3 justify-self-start">
        <label htmlFor="select-human" className="mr-1">
          Assign To:{" "}
        </label>
        <select
          id="select-human"
          value={task.assignedTo}
          onChange={(e) => {
            dispatch(
              taskSlice.actions.assignTo({
                taskId: task.id,
                humanId: e.target.value,
              })
            );
          }}
        >
          <option value="">Select</option>

          {humans.map((_human) => {
            return (
              <option value={_human.id} key={_human.id}>
                {_human.name}
              </option>
            );
          })}
        </select>
      </div>
    </article>
  );
};
