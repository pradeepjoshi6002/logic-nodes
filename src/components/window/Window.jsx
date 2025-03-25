import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  MiniMap,
  addEdge,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useCallback } from "react";
import { GateIcons } from "../../utils/gateIcons";

const LogicNode = ({ data }) => {
  const Icon = GateIcons[data.type];
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <p>{data.type}</p>
        <Icon />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left: 10 }}
      />
    </>
  );
};

const initialNodes = [];
const initialEdges = [];

const nodeTypes = { LogicNode: LogicNode };

const Window = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      // const reactFlowBounds = event.target.getBoundingClientRect();
      const position = {
        x: event.clientX,
        y: event.clientY,
      };

      const newNode = {
        id: `${+new Date()}`,
        type: "LogicNode",
        position,
        data: { type },
      };
      console.log(type);

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className="bg-gray-300 w-[85%]">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          {/* <MiniMap /> */}
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Window;
