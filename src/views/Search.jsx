import categories from "../data/categories";
import Category from "../components/Category";
import Title from "../components/Title";
import WideCategory from "../components/WideCategory";
import favCategory from "../data/fav-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../icons";

const Search = () => {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      // performance
      const scrollHanndle = () => {
        // start scroll witdh
        // console.log(favoritesRef.current.offsetWidth);

        // finish scroll witdh
        // console.log(favoritesRef.current.scrollLeft);

        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;

        const isBegin = favoritesRef.current.scrollLeft === 0;

        // if it is in begin don't show
        setPrev(!isBegin);
        // if it is in end don't show
        setNext(!isEnd);
      };

      scrollHanndle();
      favoritesRef.current.addEventListener("scroll", scrollHanndle);

      // find scroll width
      // console.log(favoritesRef.current.scrollWidth);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHanndle);
      };
    }
  }, [favoritesRef]);

  const slideNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  const slidePrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };
  return (
    <>
      <section className="mb-8">
        <Title title={"Listen to Most"} />
        <div className="relative">
          {prev && (
            <button
              className="w-12 h-12 absolute -left-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06] rounded-full text-black flex items-center justify-center bg-white"
              onClick={slidePrev}
            >
              <Icon size={24} name="prev" />
            </button>
          )}
          {next && (
            <button
              className="w-12 h-12 absolute -right-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06] rounded-full text-black flex items-center justify-center bg-white"
              onClick={slideNext}
            >
              <Icon size={24} name="next" />
            </button>
          )}
          <ScrollContainer
            innerRef={favoritesRef}
            className="flex scrollable overflow-x gap-x-6"
          >
            {favCategory.map((category, i) => (
              <WideCategory category={category} key={i} />
            ))}
          </ScrollContainer>
        </div>
      </section>

      <section>
        <Title title={"See All"} />
        <div className="grid grid-cols-6 gap-3">
          {categories.map((category, i) => (
            <Category category={category} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
