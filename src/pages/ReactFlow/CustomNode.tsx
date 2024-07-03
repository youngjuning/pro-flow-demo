import { memo } from 'react';
import { Handle, Position, NodeToolbar } from 'reactflow';

const CustomNode = ({ data }) => {
  console.info('CustomNode data', data.toolbarVisible)
  return (
    <>
      <NodeToolbar isVisible={data.toolbarVisible} position={Position.Right}>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar>
      <NodeToolbar isVisible={data.toolbarVisible} position={Position.Top}>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar>
      <div style={{ padding: '10px 20px' }}>
        {data.label}
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);