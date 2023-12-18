import { createSlice } from "@reduxjs/toolkit";
import items from "../data/songitems";

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  currentIndex: 0,
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
    setNextTrack: (state) => {
      // next to other song
      state.currentIndex = (state.currentIndex + 1) % items.length;
      state.current = items[state.currentIndex];
    },
    setPrevTrack: (state) => {
      // next to other song
      state.currentIndex = (state.currentIndex - 1) % items.length;
      state.current = items[state.currentIndex];
    },
  },
});

export const {
  setCurrent,
  setControls,
  setPlaying,
  setSidebar,
  setNextTrack,
  setPrevTrack,
} = playerSlice.actions;

export default playerSlice.reducer;
