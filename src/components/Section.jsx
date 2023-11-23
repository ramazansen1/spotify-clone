import { NavLink } from "react-router-dom";
import { Icon } from "../icons";
const Section = ({ title, more, items }) => {
  const imageStyles = (item) => {
    if (item.type === "artist") {
      return "rounded-full";
    } else if (item.type === "podcast") {
      return "rounded-xl";
    } else {
      return "rounded";
    }
  };
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "/"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline hover:cursor-pointer">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className={
              "text-xs  font-semibold uppercase text-link hover:underline tracking-wider"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
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
              <button className="absolute w-10 h-10 bg-primary bottom-2 right-2 rounded-full group-hover:flex group-focus:block items-center justify-center hidden">
                <Icon name="play" size={24} />
              </button>
            </div>
            <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
              {item.title}
            </h6>
            <p className="line-clamp-2 text-sm text-link mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Section;
