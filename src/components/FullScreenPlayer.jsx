import { useSelector } from "react-redux";
import { Icon } from "../icons";
import SecondToTime from "../utils";
import CustomRange from "./CustomRange";

const FullScreenPlayer = ({ toggle, controls, state, volumeIcon }) => {
  // sub to store
  const { current } = useSelector((state) => state.player);

  return (
    <div
      className="relative h-full"
      //   if user click to screen stop song
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      <div
        className="absolute inset-0 object-cover bg-cover bg-center blur-md opacity-30"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      {/* fullscreentop start */}
      <div className="absolute top-8  left-8 opacity-70 gap-x-4 text-white flex items-center">
        <Icon name="logo" size={34} />
        <div className="text-xs">
          <p className="font-bold"> PLAYING FROM PLAYLIST</p>
          <h6 className="font-semibold mt-0.5">{current.title}</h6>
        </div>
      </div>
      {/* current songs start */}
      <div className="flex absolute left-8 bottom-36 gap-12">
        <img src={current.image} className="w-80 h-80 rounded-md" />
        <div className="self-end">
          <h6 className="text-3xl font-bold">{current.title}</h6>
          <p className="text-sm opacity-50 font-medium">{current.artist}</p>
        </div>
      </div>
      {/* current songs start */}

      {/* player start */}
      <div
        //   if user click to screen stop song.
        onClick={(e) => e.stopPropagation()}
        className="w-full absolute bottom-4 flex flex-col px-8 items-center"
      >
        {/* bar start */}
        <div className="w-full flex mb-1.5 items-center gap-x-2">
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
        {/* bar end */}
        <div className="flex items-center mt-3 gap-x-10">
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="shuffle" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerPrev" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="h-16 w-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
          >
            <Icon size={32} name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="playerNext" />
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={24} name="repeat" />
          </button>
        </div>

        {/* volume section */}
        <div className="absolute right-6 bottom-3 flex gap-x-2">
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
            <Icon size={24} name="fullScreenOff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
