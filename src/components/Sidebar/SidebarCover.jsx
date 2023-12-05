import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../icons";
import { setSidebar } from "../../stores/player";
const SidebarCover = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);

  return (
    <div className="pt-[100%] bg-black group relative">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-7 h-7 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center"
      >
        <Icon size={14} name="arrowLeft" />
      </button>
    </div>
  );
};

export default SidebarCover;
