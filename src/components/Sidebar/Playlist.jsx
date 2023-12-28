import songitems from "../../data/songitems";

const Playlist = () => {
  return (
    <>
      <nav className="mt-2 mx-6 py-2 border-t border-white border-opacity-20 flex-auto overflow-auto ">
        <ul>
          {songitems.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-2 overflow-x-hidden gap-3 hover:bg-gray-900 cursor-pointer max-w-[100%] rounded-md "
            >
              <img
                src={item.image}
                className="w-12 h-12 text-left rounded-sm  "
              />
              <div className="flex flex-col truncate line-clamp-2 gap-1">
                <p className="text-s text-white flex items-center font-bold ">
                  {item.title}
                </p>
                <div className="flex text-s text-link">
                  <span>{item.type}</span>
                  <span> • </span>
                  <span>{item.artist}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {/* className="text-s text-link hover:text-white h-8 flex items-center" */}
    </>
  );
};

export default Playlist;
