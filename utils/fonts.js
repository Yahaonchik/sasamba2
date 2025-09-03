import { Nunito, Spectral, Roboto } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-nunito',
})

export const spectral = Spectral({
  subsets: ['latin', 'cyrillic'],
  weight: ['500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral',
})

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','500'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-roboto',
})
