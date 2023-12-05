import { NavLink } from "react-router-dom";
import logo from "../image/logo.svg";
import Menu from "./sidebar/Menu";
import PersonalMenu from "./Sidebar/PersonalMenu";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <aside className="w-60 pt-6 flex shrink-0 flex-col bg-black ">
      <NavLink to={"/"} className="mb-7 px-6">
        <img src={logo} alt="spotify-logo" className="h-10" />
      </NavLink>

      <Menu />

      <PersonalMenu />

      <Playlist />

      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
};

export default Sidebar;
