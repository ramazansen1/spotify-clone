import Section from "../components/Section";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "",
    },
  ];
  return (
    <div>
      <Section title="Recently played" more="/see" items={items} />
    </div>
  );
};

export default Home;
