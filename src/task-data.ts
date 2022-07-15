import { nanoid } from "@reduxjs/toolkit";

export const initialTasks = [
  {
    id: nanoid(),
    title: "Upgrade to Windows 11",
    assignedTo: "",
    isCompleted: false,
  },
  {
    id: nanoid(),
    title: "Get a new laptop",
    assignedTo: "",
    isCompleted: false,
  },
];
