import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {

  return (
    <Html lang='en' className="h-full">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.min.css"></link>
      </Head>
      <body className='h-full bg-gray-200 dark:bg-gray-800 dark:text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}