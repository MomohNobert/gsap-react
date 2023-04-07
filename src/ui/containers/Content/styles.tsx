import styled from 'styled-components';

export const Style = {
  Container: styled.main`
    position: relative;
    padding: 30vh 4vw 10vh;
    background-color: #e1dfdd;
    z-index: -1;

    .content__wrapper {
      width: 100%;
      max-width: 1417px;
      margin: 0 auto;

      .content__text--heading {
        font-family: 'italiana', serif;
        font-size: clamp(1rem, 5.25vw, 10rem);
        line-height: 1;
        font-weight: 300;
      }

      .content__text--copy {
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.3;
        font-weight: 300;
        width: 50%;
        margin-bottom: 10vh;
        margin-top: 10vh;
      }
    }
  `,
};
