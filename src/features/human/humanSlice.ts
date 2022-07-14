import { createSlice, nanoid } from "@reduxjs/toolkit";

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
});

export default humanSlice.reducer;
