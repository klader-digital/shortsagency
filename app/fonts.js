import localFont from 'next/font/local'

const serif = localFont({
    src: './fonts/gilroy-blackitalic.woff2',
    variable: '--font-display'
})

const sans = localFont({
    src: './fonts/acumin-pro-wide-book.woff2',
    variable: '--font-base'
})

export const fonts = [serif, sans]
