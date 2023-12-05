import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../icons";
import { NavLink } from "react-router-dom";
import { setCurrent } from "../stores/player";

const SingleItem = ({ item }) => {
  // sub to store
  const dispatch = useDispatch();

  const { current, playing, controls } = useSelector((state) => state.player);

  const updateCurrent = () => {
    if (current.id === item.id) {
      // if music sing
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      //  send current item
      dispatch(setCurrent(item));
    }
  };

  const imageStyles = (item) => {
    if (item.type === "artist") {
      return "rounded-full";
    } else if (item.type === "podcast") {
      return "rounded-xl";
    } else {
      return "rounded";
    }
  };

  const isCurrentItem = current.id === item.id && playing;

  return (
    <NavLink
      key={item.id}
      to={"/"}
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          className={`absolute inset-0 object-cover w-full h-full ${imageStyles(
            item
          )}`}
        />
        <button
          onClick={updateCurrent}
          className={`absolute w-10 h-10 bg-primary bottom-2 right-2 rounded-full group-hover:flex group-focus:block items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"} size={16} />
        </button>
      </div>
      <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-sm text-link mt-1">{item.description}</p>
    </NavLink>
  );
};

export default SingleItem;
