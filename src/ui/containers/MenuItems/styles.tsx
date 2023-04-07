import Link from 'next/link';
import styled from 'styled-components';

export const Style = {
  Container: styled(Link)`
    position: relative;
    margin-bottom: 1rem;
    font-family: 'italiana', serif;
    cursor: pointer;
    color: white;
    will-change: transform;
    text-decoration: none;

    &:hover {
      z-index: 2;
    }

    .project__item--text {
      pointer-events: none;
      display: block;
      line-height: 1;
      position: relative;
      font-size: 2rem;
      font-family: 'italiana', serif;

      @media screen and (min-width: 53em) {
        font-size: 7.5vw;
      }
    }

    .word {
      display: inline-block;
      overflow: hidden;
      perspective: 1000px;
      perspective-origin: -150% 50%;
    }

    .clone {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: inline-block;
      overflow: hidden;
      perspective: 1000px;
      perspective-origin: -150% 50%;
    }
  `,
};
