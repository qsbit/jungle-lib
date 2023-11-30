import { Button } from 'antd';
import { Utils } from 'jungle-lib';
import React, { useState } from 'react';
const { formateTimeStamp } = Utils;

const FormateTimeStampDemo = () => {
  // 需要转成标准时间的时间戳
  const [timeStamp, setTimeStamp] = useState(new Date().getTime());

  return (
    <>
      <p>{timeStamp}</p>
      <Button
        type="primary"
        onClick={() => {
          setTimeStamp(formateTimeStamp(timeStamp, 'YYYY-MM-DD HH:mm:ss'));
        }}
      >
        点我试试
      </Button>
    </>
  );
};

export default FormateTimeStampDemo;
