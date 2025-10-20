import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import type { Metadata } from 'next'
import { Inter, Open_Sans, Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'MS Manutenções',
  description: 'Soluções em manutenção e equipamentos.',
}

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['500'],
// })

// const openSans = Open_Sans({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// })

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
  {children}
</body>

    </html>
  )
}
