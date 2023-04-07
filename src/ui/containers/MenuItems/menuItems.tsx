import { Style } from './styles';

export function MenuItems({
  name,
  bgColor,
  src,
}: {
  name: string;
  bgColor: string;
  src: string;
}) {
  return (
    <Style.Container
      href=""
      className="project__item"
      data-color={bgColor}
      data-image={src}
    >
      <span className="project__item--text">{name}</span>
    </Style.Container>
  );
}
