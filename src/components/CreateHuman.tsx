import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { humanSlice } from "../features/human/humanSlice";

export const CreateHuman = () => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleCreateHuman = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return;

    dispatch(humanSlice.actions.add(name));
    setName("");
  };

  return (
    <section className="my-2">
      <form className="flex flex-col gap-2" onSubmit={handleCreateHuman}>
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-slate-400 p-2"
        />
        <button className="border-2 px-2 py-1">Create</button>
      </form>
    </section>
  );
};
