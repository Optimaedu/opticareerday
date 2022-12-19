
// Global styles
// -----------------------------------

import '../styles/globals.css';

// Fonts
// -----------------------------------

import '../styles/fonts.scss';

// App
// -----------------------------------

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
