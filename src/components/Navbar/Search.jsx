import { Icon } from "../../icons";

const Search = () => {
  return (
    <>
      <div className="mr-auto ml-4 relative ">
        <label
          htmlFor="search"
          className="flex absolute top-0 left-0 text-sm text-white justify-center items-center w-10 h-12"
        >
          <Icon size={16} name="search" />
        </label>
        <input
          autoFocus={true}
          type="text"
          id="search"
          placeholder="What do you want to listen?"
          className="h-12 max-w-full w-[22.75rem] bg-searchInput text-sm rounded-3xl px-9 py-1.5 placeholder-white/50 text-white outline-white"
        />
      </div>
    </>
  );
};

export default Search;
