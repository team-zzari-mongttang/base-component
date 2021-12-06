import React from 'react';

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

interface IText {
  children?: string;
  block?: boolean;
  size?: string; 
  color?: string;
  bold?: string;
  style?: object;
  selectable?: boolean;
}

const Text = ({ 
  children, 
  size = 'md', 
  color, 
  bold,
  block,
  style,
  selectable = false,
  ...props
}: IText) => {
  const { [size]: fontSize }: any = TEXT_SIZES;
  const fontWeight = bold ? 'bold' : 'normal';
  const userSelect = selectable ? 'auto' : 'none';
  
  return (
    block 
      ? (<div 
        style={{
          fontSize,
          color,
          fontWeight,
          userSelect,
          ...fontSize,
          ...style
        }} {...props}>
        { children }
      </div>)
      : (<span 
        style={{
          fontSize,
          color,
          fontWeight,
          userSelect,
          ...fontSize,
          ...style
        }} {...props}>
        { children }
      </span>)
  );
};

export default Text;
