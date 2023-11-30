import { Button } from 'antd';
import { Utils } from 'jungle-lib';
import React, { useState } from 'react';
const { convertNumToUppercase } = Utils;

const ConvertNumToUppercaseDemo = () => {
  // 需要转成大写的数字
  const [number, setNumber] = useState(34);

  return (
    <>
      <p>{number}</p>
      <Button
        type="primary"
        onClick={() => {
          setNumber(convertNumToUppercase(number));
        }}
      >
        点我试试
      </Button>
    </>
  );
};

export default ConvertNumToUppercaseDemo;
