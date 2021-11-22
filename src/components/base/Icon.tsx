import { ICON_TYPES } from '../../utils/constants/icons';
import React from 'react';

interface IIcon {
  name: string,
  fontSize?: string | number;
  style?: object;
}

const Icon = ({ 
  name, 
  fontSize, 
  ...props 
}: IIcon) => {
  const { [name]: IconTag }: any = ICON_TYPES;
  // console.error(typeof IconTag); //function

  const iconStyle = {
    fontSize,
    ...props.style
  };
  
  return <IconTag style={{ ...iconStyle }} {...props} />; 
};

export default Icon;
