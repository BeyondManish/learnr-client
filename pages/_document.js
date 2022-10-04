import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/layout/Navbar.js';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}