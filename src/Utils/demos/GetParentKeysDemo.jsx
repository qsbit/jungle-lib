import { Button, Tree } from 'antd';
import { Utils } from 'jungle-lib';
import React, { useState } from 'react';
import { treeData } from '../../dataSource/index';
const { getParentKeys } = Utils;

const GetParentKeysDemo = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [value, setValue] = useState([]);

  const onSelect = (e) => {
    console.log(e, 'eee');
    setCurrentValue(e?.[0]);
  };

  return (
    <>
      <div>{`【${currentValue}】的所有父级name是:${JSON.stringify(
        value,
      )}`}</div>
      <Tree
        treeData={treeData}
        defaultExpandAll
        onSelect={onSelect}
        fieldNames={{ title: 'name', key: 'id', children: 'children' }}
      />
      <Button
        type="primary"
        onClick={() => setValue(getParentKeys(treeData, currentValue, 'name'))}
      >
        点我试试
      </Button>
    </>
  );
};

export default GetParentKeysDemo;
