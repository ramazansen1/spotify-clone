const Category = ({ category }) => {
  return (
    <div
      style={{ background: category.color }}
      className="before:pt-[100%] before:block rounded-md relative"
    >
      <div className="inset-0 absolute overflow-hidden">
        <h3 className="p-4 text-2xl font-semibold tracking-tighter">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem} h-[6.25rem] rotate-[25deg] translate-x-[18%] tranlate-y-[-2%] right-0 bottom-0 absolute"
        />
      </div>
    </div>
  );
};

export default Category;
