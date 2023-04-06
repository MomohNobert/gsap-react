import { HeadingSVG } from 'ui/components/Icons';
import { Style } from './styles';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ isMenuOpen, setIsMenuOpen }: Props) {
  const topRef = useRef(null!);
  const bottomRef = useRef(null!);

  // store the timeline in a ref.
  const hamburgerTl = useRef<GSAPTimeline>(null!);

  useEffect(() => {
    hamburgerTl.current = gsap
      .timeline({
        defaults: {
          duration: 0.3,
          ease: 'power2.out',
        },
      })
      .fromTo(topRef.current, { y: 0 }, { y: 4.5 }, 0)
      .fromTo(bottomRef.current, { y: 0 }, { y: -4.5 }, 0)
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  // toggle the direction of the timeline.
  useEffect(() => {
    // TODO: PAUSE AT START.
    hamburgerTl.current.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Style.Container>
      <div className="header__outer">
        <div className="header__inner">
          <HeadingSVG width="30px" />
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header__hamburger"
          >
            <span ref={topRef}></span>
            <span ref={bottomRef}></span>
          </div>
        </div>
      </div>
    </Style.Container>
  );
}
