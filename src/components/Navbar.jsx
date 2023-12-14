import { useMatch } from "react-router-dom";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import Search from "./Navbar/Search";

const Navbar = () => {
  const searchRoute = useMatch("/search");

  return (
    <nav className="flex items-center justify-between px-8 h-16 ">
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </nav>
  );
};

export default Navbar;
