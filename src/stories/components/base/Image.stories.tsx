import React from 'react';
import Image from '@base/Image';


export default {
  title: 'Component/base/Image',
  component: Image,
  argTypes: {
    type: {
      options: ['square', 'circle'],
      control: 'inline-radio'
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio'
    },
    lazy: {
      control: 'boolean'
    },
    clickable: {
      control: 'boolean'
    }
  }
};


export const Default = (args: any) => <Image src='https://picsum.photos/200' {...args} />;

export const Lazy = (args: any) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => {
    return <Image src={`https://picsum.photos/id/2${id}/200`} key={id} lazy {...args}/>;
  });
};
