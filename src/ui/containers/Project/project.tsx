import { Style } from './styles';

export function Project() {
  const backgroundOne = '/images/background.avif';
  const backgroundTwo = '/images/model1.avif';
  return (
    <Style.Container>
      <h2 className="project__title">
        <span className="project__title--main">Hansika</span>
        <span className="project__title--sub">Brand Identity</span>
      </h2>
      <div
        className="project__img project__img--left invert"
        style={{
          backgroundImage: `url("${backgroundOne}")`,
        }}
      ></div>
      <div
        className="project__img project__img--right invert"
        style={{
          backgroundImage: `url("${backgroundTwo}")`,
        }}
      ></div>
    </Style.Container>
  );
}
