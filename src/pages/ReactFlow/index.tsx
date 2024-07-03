import { RightSquareOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import ReactFlow, {
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  MiniMap,
  ReactFlowProvider,
  SelectionMode,
  useEdgesState,
  useNodesState,
  NodeChange
} from 'reactflow';
import CustomNode from "./CustomNode";

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  const handleNodesChange = (changes: NodeChange[]) => {
    console.info("handleNodesChange", changes)
  };

  console.info('nodes', nodes);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        panOnScroll
        panOnDrag={false}
        zoomOnScroll={false}
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        selectionKeyCode={['Meta', 'Shift']}
        multiSelectionKeyCode={['Meta', 'Shift']}
        selectNodesOnDrag
      >
        <Controls position="top-left">
          <ControlButton
            onClick={() => alert('Something magical just happened. ✨')}
          >
            <RightSquareOutlined />
          </ControlButton>
        </Controls>
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

// wrapping with ReactFlowProvider is done outside of the component
function FlowWithProvider(props: any) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
