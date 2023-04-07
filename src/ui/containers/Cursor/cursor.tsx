import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { Style } from './styles';

export const Cursor = forwardRef((props, ref) => {
  const el = useRef(null!);
  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x: any, y: any) {
          gsap.to(el.current, {
            x,
            y,
          });
        },
      };
    },
    [],
  );

  return <Style.Container ref={el} />;
});
