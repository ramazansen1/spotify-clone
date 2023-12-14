const WideCategory = ({ category }) => {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-lg flex-shrink-0 relative h-[13.75rem] w-[23.375rem]"
    >
      <div className="inset-0 absolute  overflow-hidden">
        <h3 className="p-4 text-[2.5rem] font-semibold tracking-tighter">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] tranlate-y-[-2%] right-0 bottom-0 absolute"
        />
      </div>
    </div>
  );
};

export default WideCategory;
