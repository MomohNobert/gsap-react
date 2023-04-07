import { Style } from './styles';
import { gsap } from 'gsap';
import { MutableRefObject, useLayoutEffect, useRef } from 'react';

export function MenuItems({
  name,
  bgColor,
  src,
  innerRef,
  outerRef,
  backgroundRef,
  projectsRef,
}: {
  name: string;
  bgColor: string;
  src: string;
  innerRef: MutableRefObject<HTMLDivElement>;
  outerRef: MutableRefObject<HTMLDivElement>;
  backgroundRef: MutableRefObject<HTMLDivElement>;
  projectsRef: MutableRefObject<HTMLDivElement>;
}) {
  const getAllProjectItems = gsap.utils.toArray('.project__item');
  const wordRef = useRef<HTMLSpanElement>(null!);
  const wordRefClone = useRef<HTMLSpanElement>(null!);

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

  function handleMouseEnter(event: React.MouseEvent<HTMLElement>) {
    // TODO: Look around tacky workaround.
    const { image, color } = (event.target as any).dataset;
    const getSiblings = getAllProjectItems.filter(
      (item) => item !== event.target,
    );

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
      )
      .to(
        wordRef.current.children,
        {
          y: '100%',
          rotationX: -90,
          opacity: 0,
          duration: 0.5,
          ease: 'power2',
          stagger: 0.025,
        },
        0,
      )
      .to(
        wordRefClone.current.children,
        {
          startAt: { y: '-100%', rotationX: 90, opacity: 0 },
          y: '0%',
          rotationX: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2',
          stagger: 0.025,
        },
        0,
      );
  }

  function handleMouseLeave() {
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
      )
      .to(
        wordRef.current.children,
        {
          startAt: { y: '100%', rotationX: -90, opacity: 0 },
          y: '0%',
          rotationX: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2',
          stagger: 0.025,
        },
        0,
      )
      .to(
        wordRefClone.current.children,
        {
          y: '-100%',
          rotationX: 90,
          opacity: 0,
          duration: 0.5,
          ease: 'power2',
          stagger: 0.025,
        },
        0,
      );
  }

  function handleMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLElement>) {
    const bound = projectsRef.current.getBoundingClientRect();
    const xVal = clientX - (bound.left + Math.floor(bound.width / 2));
    const yVal = clientY - (bound.top + Math.floor(bound.height / 2));

    gsap.to(outerRef.current, {
      duration: 1.2,
      x: xVal,
      y: yVal,
      ease: 'none',
    });
  }

  return (
    <Style.Container
      href=""
      className="project__item"
      data-color={bgColor}
      data-image={src}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <span className="project__item--text">
        <span className="word" ref={wordRef}>
          {name.split('').map((item, i) => (
            <span
              key={i}
              className="char"
              style={{
                display: 'inline-block',
                willChange: 'transform',
              }}
            >
              {item}
            </span>
          ))}
        </span>
        <span className="word clone" ref={wordRefClone}>
          {name.split('').map((item, i) => (
            <span
              key={i}
              className="char"
              style={{
                display: 'inline-block',
                willChange: 'transform',
              }}
            >
              {item}
            </span>
          ))}
        </span>
      </span>
    </Style.Container>
  );
}
