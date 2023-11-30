import { Button } from 'antd';
import { Utils } from 'jungle-lib';
import React, { useState } from 'react';
const { trimObj } = Utils;

const TrimObjDemo = () => {
  // 需要去掉前后空格的测试对象
  const [testObject, setTestObject] = useState({
    name: '    wang wu     ',
    age: '12      ',
  });

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(testObject, null, '\t')}
      </p>
      <Button
        type="primary"
        onClick={() => {
          setTestObject(trimObj(testObject));
        }}
      >
        点我试试
      </Button>
    </>
  );
};

export default TrimObjDemo;
