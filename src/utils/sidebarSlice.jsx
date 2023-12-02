import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarToggle",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = sidebarSlice.actions;

export default sidebarSlice.reducer;
