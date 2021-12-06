import React from 'react';
import Text from '../../../components/base/Text';

const TEXT_SIZES = {
  sm: {
    fontSize: '12px',
    height: '12px',
    lineHeight: '14px'
  },
  md: {
    fontSize: '16px',
    height: '16px',
    lineHeight: '18px'
  },
  lg: {
    fontSize: '24px',
    height: '24px',
    lineHeight: '26px'
  }
};

export default {
  title: 'Component/base/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text'
    },
    block: {
      control: 'boolean',
      defaultValue: false
    },
    size: { 
      options: [TEXT_SIZES],
      control: 'select' 
    },
    bold: {
      control: 'boolean',
      defaultValue: false
    },
    color: { control: 'color' },
    fontSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm'
    }
  }
};

export const Default = (args: object) => {
  return <Text {...args} />;
};
