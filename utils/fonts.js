import { Nunito, Roboto } from 'next/font/google'

export const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-nunito',
})


export const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300','400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-roboto',
})
