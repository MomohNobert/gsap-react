import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';
import { Header } from 'ui/shared';
import { useEffect, useRef, useState } from 'react';
import { Menu } from 'ui/shared/Menu/menu';
import { Cursor } from 'ui/containers/Cursor/cursor';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const circleRef = useRef(null!);

  useEffect(() => {
    (circleRef.current as any).moveTo(
      window.innerWidth / 2,
      window.innerHeight / 2,
    );
    function onMove({ clientX, clientY }: any) {
      (circleRef.current as any).moveTo(clientX, clientY);
    }

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
      <Cursor ref={circleRef} />
      <Component {...pageProps} />
    </>
  );
}
