import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const PersonalMenu = () => {
  return (
    <nav className="mt-6">
      <ul className="flex flex-col">
        <li>
          <a
            href=""
            className="py-2 px-6 flex items-center text-sm group text-link font-semibold hover:text-white"
          >
            <span className="w-6 h-6 flex items-center justify-center text-xs mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 text-black rounded-sm">
              <FaPlus />
            </span>
            Create Playlist
          </a>
        </li>
        <li>
          <a
            href=""
            className="py-2 px-6 flex items-center text-sm group text-link font-semibold hover:text-white"
          >
            <span className="w-6 h-6 flex items-center justify-center text-xs mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-60 group-hover:opacity-100">
              <FaHeart />
            </span>
            Liked Songs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PersonalMenu;
