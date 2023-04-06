import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';

import './_app.css';
import { Header } from 'ui/shared';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <GlobalStyle />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Component {...pageProps} />
    </>
  );
}
