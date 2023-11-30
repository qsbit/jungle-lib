import React, { type FC } from 'react';
import './index.less';

interface TestProps {
  title: 'string';
}

const Test: FC<TestProps> = (props) => {
  const { title } = props;
  return <div className="title">{title}</div>;
};

export default Test;
