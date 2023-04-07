import styled from 'styled-components';

export const Style = {
  Container: styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 10;

    .project__wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .project__image--outer {
      pointer-events: none;
      position: absolute;
      width: 28vw;
      height: 42vw;
      left: 50%;
      overflow: hidden;
      background-color: black;
      top: 20vh;
      z-index: 1;
      border-radius: 300px;
      opacity: 0;
    }

    .project__image--inner {
      position: absolute;
      opacity: 0.8;
      top: -10%;
      left: 0;
      width: 100%;
      height: 115%;
      background-size: cover;
    }
  `,
  Background: styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    will-change: background-color;
    background-color: #b5b5b2;
    z-index: -1;
  `,
};
