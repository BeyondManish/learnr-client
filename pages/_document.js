import { Html, Head, NextScript, Main } from 'next/document';

export default function Document() {

  return (
    <Html lang='en' className="h-full">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.19.3/inter.min.css"></link>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
        }} />
        {/* End Google tag */}
      </Head>
      <body className='h-full bg-gray-200 dark:bg-gray-700 dark:text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}