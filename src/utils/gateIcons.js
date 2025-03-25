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

export const GateIcons = {
  Input: LuFileInput,
  Output: MdOutput,
  And: GiLogicGateAnd,
  Or: GiLogicGateOr,
  Not: GiLogicGateNot,
  Nor: GiLogicGateNor,
  Nand: GiLogicGateNand,
  Xor: GiLogicGateXor,
  Xnor: GiLogicGateNxor,
  Write: TfiWrite,
};
