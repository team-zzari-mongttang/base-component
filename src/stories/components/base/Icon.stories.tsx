import React from 'react';
import Icon from '../../../components/base/Icon';
import { ICON_TYPES } from '../../../utils/constants/icons';

export default {
  title: 'Component/base/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(ICON_TYPES),
      control: 'select',
      defaultValue: 'heart'
    },
    color: { control: 'color' },
    fontSize: { control: 'number' }
  }
};

export const Default = (args: any) => {
  return <Icon {...args} ></Icon>;
};
