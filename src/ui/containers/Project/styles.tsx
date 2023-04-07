import styled from 'styled-components';

export const Style = {
  Container: styled.section`
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: 35% 15% 1fr;
    grid-template-areas:
      'project-img-left . project-title'
      'project-img-left project-img-right project-img-right';
    background-color: #e1dfdd;
    z-index: -4;

    .project__title {
      grid-area: project-title;
      text-align: right;
      padding: 0 2vw 2vw 0;
      font-family: 'italiana', serif;
      font-weight: 400;
    }

    .project__title--main {
      font-size: clamp(2rem, 10vw, 9rem);
      display: block;
      line-height: 0.9;
    }

    .project__title--sub {
      font-size: clamp(1.5rem, 4vw, 3rem);
      line-height: 1;
      margin-right: 0.5vw;
    }

    .project__img {
      position: relative;
      background-size: cover;
      background-position: 50% 50%;
      margin-bottom: 40vh;
    }

    .project__img--left {
      grid-area: project-img-left;
      grid-column-end: 3;
      border-radius: 0 30vh 30vh 0;
      height: 60vh;
    }

    .project__img--right {
      grid-area: project-img-right;
      border-radius: 40vh 0 0 40vh;
      height: 80vh;
    }
  `,
};
