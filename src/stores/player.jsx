import { createSlice } from "@reduxjs/toolkit";
import items from "../data/songitems";

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  currentIndex: 0,
  repeat: false,
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
      if (state.currentIndex === 0) return;
      if (state.currentIndex !== 0) {
        state.currentIndex = (state.currentIndex - 1) % items.length;
        state.current = items[state.currentIndex];
      }
    },
    songEnded: (state) => {
      if (!state.repeat) {
        state.currentIndex = (state.currentIndex + 1) % items.length;
        state.current = items[state.currentIndex];
      }
    },
    setRepeat: (state, actions) => {
      state.repeat = actions.payload;
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
  songEnded,
  setRepeat,
} = playerSlice.actions;

export default playerSlice.reducer;
