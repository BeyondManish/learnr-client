import { AuthProvider } from "../context/Auth";
import { ThemeProvider } from "../context/Theme";
import "../styles/globals.css";
import { MediaProvider } from "../context/Media";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MediaProvider>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </MediaProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
