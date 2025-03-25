const options = [
  {
    title: "File",
    menu: ["New", "Open", "Save", "Exit"],
  },
  {
    title: "Edit",
    menu: ["Undo", "Redo", "Cut", "Copy", "Paste", "Delete"],
  },
  {
    title: "Window",
    menu: ["Change Theme"],
  },
];

const Topbar = () => {
  return (
    <div className="bg-amber-200 h-[5vh] flex items-center pl-[10vh]">
      <div className="flex gap-4 w-fit">
        {options.map((opt) => (
          <span key={opt.title}>{opt.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
