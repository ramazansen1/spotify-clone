import { NavLink } from "react-router-dom";
import logo from "../image/logo.svg";
import Menu from "./sidebar/Menu";

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col ">
      <NavLink to={"/"} className="mb-7 px-6">
        <img src={logo} alt="spotify-logo" className="h-10" />
      </NavLink>

      <Menu />
    </aside>
  );
};

export default Sidebar;
