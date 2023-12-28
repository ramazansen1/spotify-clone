import { createSlice } from "@reduxjs/toolkit";
import items from "../data/songitems";

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  currentIndex: 0,
  repeat: false,
  shuffle: false,
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
    setCurrentIndex: (state, actions) => {
      state.currentIndex = actions.payload;
    },

    songEnded: (state) => {
      // console.log("songEnded State", JSON.parse(JSON.stringify(state)));

      if (state.repeat) {
        // Eğer repeat açıksa ve şarkı bittiğinde,
        // currentIndex'i değiştirmeden aynı şarkıyı tekrar çal
        state.current = items[state.currentIndex];
      } else {
        // Eğer repeat kapalıysa, bir sonraki şarkıya geç
        state.currentIndex = (state.currentIndex + 1) % items.length;
        state.current = items[state.currentIndex];
      }
    },

    setShuffle: (state, action) => {
      state.shuffle = action.payload;
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
  setCurrentIndex,
  setShuffle,
} = playerSlice.actions;

export default playerSlice.reducer;
