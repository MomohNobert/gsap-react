import { Style } from './styles';
import { gsap } from 'gsap';
import { MutableRefObject, useLayoutEffect } from 'react';

export function MenuItems({
  name,
  bgColor,
  src,
  innerRef,
  outerRef,
  backgroundRef,
}: {
  name: string;
  bgColor: string;
  src: string;
  innerRef: MutableRefObject<HTMLDivElement>;
  outerRef: MutableRefObject<HTMLDivElement>;
  backgroundRef: MutableRefObject<HTMLDivElement>;
}) {
  const getAllProjectItems = gsap.utils.toArray('.project__item');

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

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

  function handleMouseEnter(event) {
    const { image, color } = event.target.dataset;
    const getSiblings = getAllProjectItems.filter(
      (item) => item !== event.target,
    );

    console.log(getSiblings);

    const tlEnter = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'none',
        onStart: () => {
          gsap.set(innerRef.current, {
            backgroundImage: `url(${image})`,
          });

          gsap.to(backgroundRef.current, {
            backgroundColor: color,
            duration: 1,
            ease: 'expo',
          });
        },
      },
    });

    tlEnter
      .to(outerRef.current, {
        duration: 1.3,
        ease: 'expo',
        autoAlpha: 1,
      })
      .to(
        innerRef.current,
        {
          duration: 1.3,
          ease: 'expo',
          startAt: { scale: 1.2 },
          scale: 1,
        },
        0,
      )
      .to(
        getSiblings,
        {
          autoAlpha: 0.2,
        },
        0,
      );
  }

  function handleMouseLeave(event) {
    const tlLeave = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });

    tlLeave
      .to(outerRef.current, {
        autoAlpha: 0,
      })
      .to(
        getAllProjectItems,
        {
          autoAlpha: 1,
        },
        0,
      );
  }

  return (
    <Style.Container
      href=""
      className="project__item"
      data-color={bgColor}
      data-image={src}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="project__item--text">{name}</span>
    </Style.Container>
  );
}
