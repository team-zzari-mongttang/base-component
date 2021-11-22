import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';

type ImageType = 'square' | 'circle';
type ImageSize = 'sm' | 'md' | 'lg';

export interface ImageProps {
  lazy: boolean;
  threshold: number;
  src: string;
  placeholder: string;
  type: ImageType;
  size: ImageSize;
  clickable: boolean;
}

interface StyledImageProps {
  clickable: boolean;
  type: ImageType;
  size: ImageSize;
}

const DEFAULT_PLACEHOLDER = 'https://via.placeholder.com/500';
const IMAGE_LOAD_EVENT = 'detectImage';
let observer: null | IntersectionObserver = null;

const onIntersection: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(IMAGE_LOAD_EVENT));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0,
  src,
  placeholder = DEFAULT_PLACEHOLDER,
  type = 'square',
  size = 'md',
  clickable,
  ...props
}: ImageProps):ReactJSXElement => {
  const [state, setState] = useState({
    isPlaceholderLoaded: false,
    isDetected: false,
    isDetectable: false
  });
  const imgRef = useRef<HTMLImageElement>(null);
  const isInitRef = useRef<boolean>(true);

  const handlePlaceholderLoaded = useCallback(() => {
    if (isInitRef.current) {
      setState(state => ({ 
        ...state,
        isPlaceholderLoaded: true
      }));
      isInitRef.current = false;
    }
  }, [isInitRef]);

  const handleDetectImage = useCallback(() => {
    setState(state => ({
      ...state,
      isDetected: true
    }));
  }, []);

  useEffect(() => {
    if (!lazy) {
      handleDetectImage();

      return;
    }

    imgRef.current?.addEventListener(IMAGE_LOAD_EVENT, handleDetectImage);
    
    return () => imgRef.current?.removeEventListener(IMAGE_LOAD_EVENT, handleDetectImage);
  }, [lazy, imgRef, handleDetectImage]);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold });
    }

    if (state.isDetectable && imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [observer, state.isDetectable, imgRef]);

  useEffect(() => {
    if (imgRef.current && state.isPlaceholderLoaded) {
      setState(state => ({
        ...state,
        isDetectable: true
      }));
    }
  }, [imgRef, state.isPlaceholderLoaded]);

  return <StyledImage 
    ref={imgRef}
    src={state.isDetected && src ? src : placeholder} 
    type={type} 
    size={size} 
    clickable={clickable}
    onLoad={handlePlaceholderLoaded}
    {...props}
  />;
};

export default Image;

const StyledImage = styled.img<StyledImageProps>`
  display: block;
  ${({ clickable }) => clickable && ({
    cursor: 'pointer',
    ':hover': { opacity: 0.8 },
    ':active': { opacity: 0.7 }
  })};
  ${({ type }) => ImageTypeStyle[type]};
  ${({ size }) => ImageSizeStyle[size]};
`;

const ImageTypeStyle = {
  square: css`
    border-radius: 0;
  `,
  circle: css`
    border-radius: 50%;
  `
};

const ImageSizeStyle = {
  sm: css`
    width: 50px;
    height: 50px;
  `,
  md: css`
    width: 150px;
    height: 150px;
  `,
  lg: css`
    width: 300px;
    height: 300px;
  `
};
