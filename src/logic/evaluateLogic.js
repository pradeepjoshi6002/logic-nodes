export function evaluateGate(type, inputs) {
  switch (type) {
    case "AND":
      return inputs[0] && inputs[1];
    case "OR":
      return inputs[0] || inputs[1];
    case "NOT":
      return !inputs[0];
    case "NAND":
      return !(inputs[0] && inputs[1]);
    case "NOR":
      return !(inputs[0] || inputs[1]);
    case "XOR":
      return inputs[0] ^ inputs[1];
    case "XNOR":
      return !(inputs[0] ^ inputs[1]);
    default:
      return 0;
  }
}
