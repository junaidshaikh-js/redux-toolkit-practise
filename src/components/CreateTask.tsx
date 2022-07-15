import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { taskSlice } from "../features/task/taskSlice";

export const CreateTask = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const hanldeCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) return;

    dispatch(taskSlice.actions.add(title));
    setTitle("");
  };

  return (
    <section className="my-2">
      <form className="flex flex-col gap-2" onSubmit={hanldeCreateTask}>
        <label htmlFor="name" className="text-lg">
          Title
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-slate-400 p-2"
        />
        <button className="border-2 px-2 py-1">Create</button>
      </form>
    </section>
  );
};
