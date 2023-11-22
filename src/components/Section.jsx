import { NavLink } from "react-router-dom";

const Section = ({ title, more, children }) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline hover:cursor-pointer">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs font-semibold uppercase text-link hover:underline"
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
