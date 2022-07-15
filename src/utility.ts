import { initialTasks } from "./task-data";

export const fetchTask = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(initialTasks);
    }, 1000);
  });
};
