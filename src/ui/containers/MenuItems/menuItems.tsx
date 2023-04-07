import { Style } from './styles';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

export function MenuItems({
  name,
  bgColor,
  src,
}: {
  name: string;
  bgColor: string;
  src: string;
}) {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    const getAllProjectItems = gsap.utils.toArray('.project__item');
    gsap.set(getAllProjectItems, { opacity: 0, y: 200 });

    gsap.to(getAllProjectItems, {
      opacity: 1,
      stagger: 0.1,
      y: 0,
    });

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

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
