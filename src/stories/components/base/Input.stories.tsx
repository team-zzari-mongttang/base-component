import React from 'react';

import Input, { InputProps } from '@base/Input';


export default {
  title: 'Component/base/Input',
  component: Input,
  argTypes: {
    block: {
      type: 'boolean'
    },
    width: {
      type: 'number'
    },
    height: {
      type: 'number'
    }
  }
};

export const Default = (args:InputProps) => {
  return <Input {...args} />;
};
