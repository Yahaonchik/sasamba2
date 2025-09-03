import { Nunito, IBM_Plex_Serif, Roboto } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-nunito',
})

// Map IBM Plex Serif to legacy variables used across the project
export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral',
})

export const ibmPlexSerifNoto = IBM_Plex_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
})

export const ibmPlexSerifSc = IBM_Plex_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral-sc',
})

export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','500'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-roboto',
})
