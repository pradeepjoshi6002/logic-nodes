import {
  GiLogicGateAnd,
  GiLogicGateNand,
  GiLogicGateNor,
  GiLogicGateNot,
  GiLogicGateNxor,
  GiLogicGateOr,
  GiLogicGateXor,
} from "react-icons/gi";
import { LuFileInput } from "react-icons/lu";
import { MdOutput } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const options = [
  { title: "Input", icon: LuFileInput },
  { title: "Output", icon: MdOutput },
  { title: "And", icon: GiLogicGateAnd },
  { title: "Or", icon: GiLogicGateOr },
  { title: "Not", icon: GiLogicGateNot },
  { title: "Nor", icon: GiLogicGateNor },
  { title: "Nand", icon: GiLogicGateNand },
  { title: "Xor", icon: GiLogicGateXor },
  { title: "Xnor", icon: GiLogicGateNxor },
  { title: "Write", icon: TfiWrite },
];

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    event.stopPropagation();
  };

  return (
    <div className="bg-gray-50 w-[15%] h-full border-r border-gray-300 p-3">
      <h2 className="text-lg font-semibold mb-4">Nodes</h2>
      <ul className="space-y-2">
        {options.map((opt, idx) => (
          <li
            key={idx}
            onDragStart={(evt) => onDragStart(evt, opt.title)}
            draggable
            className="flex gap-2 items-center p-2 hover:bg-gray-200 cursor-move rounded"
          >
            <opt.icon size={18} /> <span>{opt.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
