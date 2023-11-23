import Section from "../components/Section";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "German Stories | Learn German with Stories",
      description: "www.einfachdeutschlernen.com",
      image: "https://i.scdn.co/image/ab67656300005f1f1a6cd74b1eabb97928859b41",
      type: "podcast",
    },
    {
      id: 2,
      title: "Persona’l Gelişim Ψ",
      description: "Melahat Özge Şimşek",
      image: "https://i.scdn.co/image/ab67656300005f1fdf6532acbc1da4501aae6a06",
      type: "podcast",
    },
    {
      id: 3,
      title: "Lady Gaga",
      description: "Artist",
      image: "https://i.scdn.co/image/ab67616100005174c8d3d98a1bccbe71393dbfbf",
      type: "artist",
    },
    {
      id: 4,
      title: "Folk ve Akustik Mix",
      description: "Old Sea Brigade, The Barr Brothers and more",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/folk_acoustic/6vUNwmljZAcn7tNtUoxG45/tr/default",
      type: "album",
    },
    {
      id: 5,
      title: "cry sad chill",
      description:
        "Feeling blue? This sad pop playlist will hit you right in the feels. With heart-wrenching lyrics and soulful melodies, let the tears flow. with Billie Eilish Adele Taylor Swift Lorde Sam Smith Halsey Lewis Capaldi Ed Sheeran Khalid Olivia Rodrigo.",
      image: "https://i.scdn.co/image/ab67706c0000da841fdcd7bf3b4936ba438d8af7",
      type: "album",
    },
  ];

  return (
    <div className="grid gap-y-4">
      <Section title="Recently played" more="/see" items={items} />
      <Section title="Made For Ramazan Şen" more="/see" items={items} />
      <Section title="Shows to try" more="/see" items={items} />
    </div>
  );
};

export default Home;
