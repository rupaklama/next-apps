// A custom Document can update the <html> and <body> tags used to render a Page.
// This file is only rendered on the server, so event handlers like onClick cannot be used in _document.

// The <Head /> component used in _document is not the same as next/head.
// NOTE - The <Head /> component used here should only be used for any <head> code that is common for all pages.

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexSans-SemiBold.ttf" as="font" crossOrigin="anonymous" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
