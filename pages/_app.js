import './teleporthq.css';
import './style.css';
// Load problem pages stylesheet only when needed to reduce initial CSS on home
// Will be dynamically imported below based on route
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { nunito, roboto } from '../utils/fonts';

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Defer loading of large problem pages CSS on non-home routes to improve initial render
    if (router && router.pathname && router.pathname !== '/') {
      import('../styles/problem-pages.css')
    }
  }, [router?.pathname])

  return (
    <div className={`${nunito.variable} ${roboto.variable}`}>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
