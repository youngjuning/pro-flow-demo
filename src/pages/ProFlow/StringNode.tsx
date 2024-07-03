import { Handle, Position } from 'reactflow';
import { FC } from 'react';
import clsx from "clsx";

import styles from './index.module.less';

export const StringRender: FC = (node: any) => {
  const { handles, id, selected } = node;

  return (
    <div className={clsx(styles.stringNode, selected && styles.selected)}>
      <Handle
        id={typeof handles?.target === 'string' ? handles?.target : id}
        type={'target'}
        position={Position.Left}
      />
      {node.data.title}
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};
