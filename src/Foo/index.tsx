import React, { type FC } from 'react';
import './index.less';

interface FooProps {
  title: 'string';
}

const Foo: FC<FooProps> = (props) => {
  const { title } = props;
  return <div className="title">{title}</div>;
};

export default Foo;
