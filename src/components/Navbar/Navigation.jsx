import { Icon } from "../../icons";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center gap-2">
      <button
        onClick={() => navigate(-1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70 "
      >
        <Icon size={16} name="prev" />
      </button>
      <button
        onClick={() => navigate(+1)}
        className="h-8 w-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={16} name="next" />
      </button>
    </nav>
  );
};

export default Navigation;
