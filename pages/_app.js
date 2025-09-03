import './teleporthq.css';
import './style.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { nunito, ibmPlexSerif, ibmPlexSerifNoto, ibmPlexSerifSc, roboto } from '../utils/fonts';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${nunito.variable} ${ibmPlexSerif.variable} ${ibmPlexSerifNoto.variable} ${ibmPlexSerifSc.variable} ${roboto.variable}`}>
      <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
