import { Roboto_Serif, Nunito, Spectral, Noto_Serif_SC } from 'next/font/google'

export const robotoSerif = Roboto_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto-serif',
})

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
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

export const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin', 'cyrillic'],
  weight: ['200','300','400','500','600','700','800','900'],
  style: ['normal','italic'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
})
