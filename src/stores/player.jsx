import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, actions) => {
      state.current = actions.payload;
    },
    setControls: (state, actions) => {
      state.controls = actions.payload;
    },
    setPlaying: (state, actions) => {
      state.playing = actions.payload;
    },
    setSidebar: (state, actions) => {
      state.sidebar = actions.payload;
    },
  },
});

export const { setCurrent, setControls, setPlaying, setSidebar } =
  playerSlice.actions;

export default playerSlice.reducer;
