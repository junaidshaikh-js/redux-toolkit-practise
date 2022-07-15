import { createSlice, nanoid } from "@reduxjs/toolkit";
import { taskSlice } from "../task/taskSlice";

export type HumanType = {
  id: string;
  name: string;
  tasksIds: string[];
};

const createHuman = (name: string): HumanType => {
  return {
    id: nanoid(),
    name,
    tasksIds: [],
  };
};

const initialState = [createHuman("Junaid"), createHuman("Matt")];

export const humanSlice = createSlice({
  name: "human",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(taskSlice.actions.assignTo, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.tasksIds.push(action.payload.taskId);
        } else {
          human.tasksIds = human.tasksIds.filter(
            (_taskId) => _taskId !== action.payload.taskId
          );
        }
      }
    });
  },
});

export default humanSlice.reducer;
