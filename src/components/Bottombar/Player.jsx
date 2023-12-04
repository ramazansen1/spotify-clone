import { Icon } from "../../icons";
import { useAudio } from "react-use";
import SecondToTime from "../../utils";
import CustomRange from "../CustomRange";

const Player = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    autoPlay: false,
  });

  return (
    <>
      <div className="flex items-center justify-between px-4 h-full ">
        <div className="max-w-[11.25rem] w-[30%]">Sol</div>
        <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="shuffle" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerPrev" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="h-8 w-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
            >
              <Icon size={16} name={state?.playing ? "pause" : "play"} />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerNext" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="repeat" />
            </button>
          </div>
          <div className="w-full flex items-center gap-x-2">
            {audio}
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
        <div className="max-w-[11.25rem] w-[30%] flex justify-end">Sağ</div>
      </div>
    </>
  );
};

export default Player;
