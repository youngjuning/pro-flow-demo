import { FlowEditor, FlowEditorProvider, Position, useFlowEditor } from '@ant-design/pro-flow';
import { useEffect } from 'react';
import { StringRender } from './StringNode';
import styles from "./index.module.less";

const ProFlowDemo = () => {
  const editor = useFlowEditor();

  useEffect(() => {
    editor.addNode({
      id: 'horizontal-1',
      sourcePosition: Position.Right,
      type: 'input',
      data: { label: 'Input' },
      position: { x: 0, y: 80 },
    });
  }, [editor]);

  return (
    <div className={styles.container}>
      <FlowEditor nodeTypes={{ StringNode: StringRender }} />
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowEditorProvider>
      <ProFlowDemo />
    </FlowEditorProvider>
  );
};

export default FlowDemo;