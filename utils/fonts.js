import { Nunito, Spectral, Roboto } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-nunito',
})

export const spectral = Spectral({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral',
})

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400','500','700','900'],
  style: ['normal','italic'],
  display: 'swap',
  variable: '--font-roboto',
})
