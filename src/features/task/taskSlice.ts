import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTask } from "../../utility";

export type taskType = {
  id: string;
  title: string;
  assignedTo: string;
  isCompleted: boolean;
};

const createTask = (title: string) => {
  return {
    id: nanoid(),
    title,
    assignedTo: "",
    isCompleted: false,
  };
};

const initialState: {
  tasks: taskType[];
  loading: boolean;
} = {
  tasks: [],
  loading: false,
};

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const res = await fetchTask();

  return res;
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.tasks.push(createTask(action.payload));
    },
    assignTo: (state, action) => {
      const task = state.tasks.find(
        (_task) => _task.id === action.payload.taskId
      ) as taskType;

      task.assignedTo = action.payload.humanId;
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(
        (_task) => _task.id === action.payload.taskId
      ) as taskType;

      task.isCompleted = action.payload.completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.tasks = action.payload as taskType[];
      state.loading = false;
    });
  },
});

export default taskSlice.reducer;
