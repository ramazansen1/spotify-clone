import Section from "../components/Section";
import items from "../data/songitems";

const Home = () => {
  return (
    <div className="grid gap-y-4">
      <Section title="Recently played" more="/search" items={items} />
      <Section title="Made For Ramazan Şen" more="/search" items={items} />
      <Section title="Shows to try" more="/search" items={items} />
    </div>
  );
};

export default Home;
