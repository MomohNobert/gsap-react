import styled from 'styled-components';

export const Style = {
  Container: styled.header`
    width: 100%;
    position: absolute;
    z-index: 4;

    .header__outer {
      max-width: 1417px;
      margin: 0 auto;
    }

    .header__inner {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      svg {
        width: 30px;
        fill: white;
      }
    }

    .header__hamburger {
      cursor: pointer;
      display: block;

      span {
        height: 3px;
        width: 30px;
        margin: 6px;
        display: block;
        background-color: white;
      }
    }
  `,
};
