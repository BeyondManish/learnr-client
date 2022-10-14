import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='h-full'>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <body className='h-full bg-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}