import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Single price grid',
  description: 'Single price grid component'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
        rel='stylesheet'
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
