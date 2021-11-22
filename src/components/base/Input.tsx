import styled from '@emotion/styled';
import React from 'react';

export interface InputProps {
  block?: boolean;
  width?: number;
  height?: number;
}

const Input = ({ block, width = 200, height = 30, ...props }: InputProps) => {

  return (
    <StyledInput block={block} width={width} height={height} {...props}/>
  );
};

export default Input;

const StyledInput = styled.input<InputProps>`
  ${({ block, width, height }) => ({
    display: block ? 'block' : 'inline-block',
    width,
    height
  })};
  
`;
