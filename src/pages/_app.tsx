import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';
import { Header } from 'ui/shared';
import { useState } from 'react';
import { Menu } from 'ui/shared/Menu/menu';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <GlobalStyle />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
      <Component {...pageProps} />
    </>
  );
}
