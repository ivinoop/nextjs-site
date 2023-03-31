import '../public/globals.css'
import Link from 'next/link'

export const metadata = {
  title: `Vinoo's Digital Garden`,
  description: 'A static blog site built with the experimental NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <Link href='/'>
        <h1>Vinoo's Digital Garden</h1>
      </Link>
    </header>
  )

  const footer = (
    <footer>
      <h6>Developed with NextJS | Hosted with Vercel</h6>
      <p>Copyright &copy; 2023 | All rights reserved</p>
    </footer>
  )

  return (
    <html lang='en'>
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
