import { NavLink } from "react-router-dom";
import SingleItem from "./SingleItem";
import Title from "./Title";
const Section = ({ title, more, items }) => {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;
