import { useState } from "react";
import { Icon } from "../../icons";
import { Range, getTrackBackground } from "react-range";
import { useAudio } from "react-use";

const Player = () => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([50]);

  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    autoPlay: true,
  });
  return (
    <>
      <div className="flex items-center justify-between px-4 h-full ">
        <div className="max-w-[11.25rem] w-[30%]">{JSON.stringify(state)}</div>
        <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="shuffle" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerPrev" />
            </button>
            <button className="h-8 w-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
              <Icon size={16} name="play" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerNext" />
            </button>
            <button className="h-8 w-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="repeat" />
            </button>
          </div>
          <div className="w-full">
            {/* {audio} */}
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  className="w-full h-7 flex group"
                  style={{ ...props.style }}
                >
                  <div
                    ref={props.ref}
                    className="h-1 w-full rounded-md self-center"
                    style={{
                      background: getTrackBackground({
                        values: values,
                        colors: ["#1db954", "#535353"],
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`h-3 w-3 rounded-full bg-white ${
                    !isDragged ? "opacity-0" : ""
                  } group-hover:opacity-100`}
                  style={{
                    ...props.style,
                    boxShadow: "0px 2px 4px 0 rgb(0 0 0 /50%",
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="max-w-[11.25rem] w-[30%] flex justify-end">Sağ</div>
      </div>
    </>
  );
};

export default Player;
