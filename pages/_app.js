import './teleporthq.css';
import './style.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { nunito, spectral, notoSerifSC, roboto } from '../utils/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${notoSerifSC.variable} ${nunito.variable} ${spectral.variable} ${roboto.variable}`}>
      <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
