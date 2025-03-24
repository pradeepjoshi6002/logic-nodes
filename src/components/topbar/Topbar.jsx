const options = [
  {
    title: "File",
    clickHandler: () => "",
  },
  {
    title: "Edit",
    clickHandler: () => "",
  },
  {
    title: "Window",
    clickHandler: () => "",
  },
];

const Topbar = () => {
  return (
    <div className="bg-amber-200 h-[5vh] flex items-center pl-[10vh]">
      <div className="flex gap-4 w-fit">
        {options.map((opt) => (
          <span>{opt.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
