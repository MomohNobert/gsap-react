import styled from 'styled-components';

export const Style = {
  Container: styled.div`
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    will-change: transform;
    transform: translate(-50%, -50%);
    background: #9d9d9c;
    border-radius: 100%;
    pointer-events: none;
  `,
};
