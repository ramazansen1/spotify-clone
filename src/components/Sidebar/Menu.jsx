import { NavLink } from "react-router-dom";
import { Icon } from "../../icons";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li id="side-link">
          <NavLink
            to={"/"}
            className="h-10 flex items-center gap-x-5 text-sm font-semibold text-link rounded hover:text-white py-1 px-3 "
          >
            <span>
              <Icon name={"home"} />
            </span>
            Home
          </NavLink>
        </li>
        <li id="side-link">
          <NavLink
            to={"/search"}
            className="h-10 flex items-center gap-x-5 text-sm font-semibold text-link rounded hover:text-white py-1 px-3"
          >
            <span>
              <Icon name={"search"} />
            </span>
            Search
          </NavLink>
        </li>
        <li id="side-link">
          <NavLink
            to={"/collection"}
            className="h-10 flex items-center gap-x-5 text-sm font-semibold text-link rounded hover:text-white py-1 px-3"
          >
            <span>
              <Icon name={"collection"} />
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
