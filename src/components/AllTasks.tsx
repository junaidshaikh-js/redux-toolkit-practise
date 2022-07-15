import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Task } from "../features/task/Task";
import { getTasks } from "../features/task/taskSlice";
import { CreateTask } from "./CreateTask";

export const AllTasks = () => {
  const { loading, tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <section className="w-full ">
      <h2 className="font-bold text-3xl text-center">Tasks</h2>

      <CreateTask />

      {loading ? (
        <h3 className="my-2 text-center">Loading...</h3>
      ) : (
        <div>
          {tasks.map((_task) => {
            return <Task task={_task} key={_task.id} />;
          })}
        </div>
      )}
    </section>
  );
};
