const Playlist = () => {
  return (
    <>
      <nav className="mt-2 mx-6 py-2 border-t border-white border-opacity-20 flex-auto overflow-auto">
        <ul>
          {new Array(40).fill(
            <li>
              <a
                href=""
                className="text-s text-link hover:text-white h-8 flex items-center"
              >
                Playlist 1
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Playlist;
