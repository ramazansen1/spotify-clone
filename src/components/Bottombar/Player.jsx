import { Icon } from "../../icons";
import { useAudio } from "react-use";
import SecondToTime from "../../utils";
import CustomRange from "../CustomRange";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setControls,
  setPlaying,
  setSidebar,
  setNextTrack,
  setPrevTrack,
  songEnded,
  setRepeat,
} from "../../stores/player";
import { useFullscreen, useToggle } from "react-use";
import FullScreenPlayer from "../FullScreenPlayer";

const Player = () => {
  const fsRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  const dispatch = useDispatch();
  const { current, sidebar, repeat } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: false,
  });

  // if current change and play to from controls
  useEffect(() => {
    controls.play();
  }, [current]);

  // if playing change
  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  // if controls change
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const handleNextSong = () => {
    dispatch(setNextTrack());
  };
  const handlePrevSong = () => {
    dispatch(setPrevTrack());
  };

  const handleSongEnded = () => {
    dispatch(songEnded());
  };

  const handleRepeat = () => {
    dispatch(setRepeat(!repeat));
  };

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume > 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <>
      <div className="flex items-center justify-between px-4 h-full bg-backdrop ">
        {/* left bar */}
        <div className="min-w-[11.25rem] w-[30%] ">
          {current && (
            <div className="flex items-center">
              <div className="flex items-center">
                {!sidebar && (
                  <div className="w-14 h-14 mr-3 group flex-shrink-0 relative">
                    <img src={current.image} alt="" />
                    <button
                      onClick={() => dispatch(setSidebar(true))}
                      className="w-7 h-7 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center"
                    >
                      <Icon size={14} name="arrowLeft" />
                    </button>
                  </div>
                )}
                <div>
                  <h6 className="text-sm line-clamp-1">{current.title}</h6>
                  <p className="text-[0.688rem] text-white text-opacity-70">
                    {current.artist}
                  </p>
                </div>
              </div>
              <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <Icon size={16} name="heart" />
              </button>
              <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <Icon size={16} name="picInPic" />
              </button>
            </div>
          )}
        </div>
        {/* middle bar */}
        <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col px-4 items-center">
          <div className="flex items-center gap-x-2">
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="shuffle" />
            </button>
            <button
              onClick={handlePrevSong}
              className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              <Icon size={16} name="playerPrev" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="h-8 w-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
            >
              <Icon size={16} name={state?.playing ? "pause" : "play"} />
            </button>
            <button
              onClick={handleNextSong}
              className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              <Icon size={16} name="playerNext" />
            </button>
            <button
              onClick={handleRepeat}
              className={`h-8 w-8 flex items-center justify-center ${
                repeat ? "text-primary" : "text-white"
              } text-opacity-70 hover:text-opacity-100`}
            >
              <Icon size={16} name="repeat" />
            </button>
          </div>
          <div className="w-full flex mt-1 items-center gap-x-2">
            <audio onEnded={handleSongEnded}>{audio}</audio>
            <div className="text-[0.6875rem] text-white text-opacity-70">
              {SecondToTime(state?.time)}
            </div>
            <CustomRange
              step={0.1}
              min={0}
              max={state?.duration || 1}
              value={state?.time}
              onChange={(value) => controls.seek(value)}
            />
            <div className="text-[0.6875rem] text-white text-opacity-70">
              {SecondToTime(state?.duration)}
            </div>
          </div>
        </div>
        {/* right bar */}
        <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="nowPlaying" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="lyrics" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="queue" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="device" />
          </button>
          <button
            className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            onClick={controls[state.muted ? "unmute" : "mute"]}
          >
            <Icon size={16} name={volumeIcon} />
          </button>
          <div className="w-[5.813rem] max-w-full">
            <CustomRange
              step={0.01}
              min={0}
              max={1}
              value={state.muted ? 0 : state?.volume}
              onChange={(value) => {
                controls.unmute();
                controls.volume(value);
              }}
            />
          </div>
          <button
            className="h-8 w-8 flex ml-2 items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            onClick={toggle}
          >
            <Icon size={16} name="fullScreen" />
          </button>
          <div ref={fsRef}>
            {isFullscreen && (
              <FullScreenPlayer
                toggle={toggle}
                controls={controls}
                state={state}
                volumeIcon={volumeIcon}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
