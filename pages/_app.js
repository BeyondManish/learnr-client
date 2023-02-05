import { AuthProvider } from "../context/Auth";
import PostDataProvider from "../context/Post";
import { ThemeProvider } from "../context/Theme";
import "../styles/globals.css";
import { MediaProvider } from "../context/Media";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PostDataProvider>
          <MediaProvider>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </MediaProvider>
        </PostDataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
