import '../public/globals.css'
import Link from 'next/link'

export const metadata = {
  title: `vinoo.in - a digital garden`,
  description: 'a small corner of the internet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className='flex justify-between items-center px-8 py-5 bg-slate-700 text-white'>
        <Link href='/'>
          <h1 className='font-bold text-3xl hover:underline font-mono'>
            vinoo.
          </h1>
        </Link>
        <nav>
          <ul className='flex justify-between items-center'>
            <li className='mx-2 hover:underline'>
              <Link href='/'>Home</Link>
            </li>
            <li className='mx-2 hover:underline'>
              <Link href='/about'>About</Link>
            </li>
            <li className='mx-2 hover:underline'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='mx-2 hover:underline'>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='text-center bg-gray-100 mt-4 py-4 font-mono'>
        <p>Vinoo &copy; 2010 - 2023.</p>
      </div>
    </footer>
  )

  return (
    <html lang='en'>
      <body>
        <div className='mx-auto'>
          {header}
          <div className='mx-auto mt-4 max-w-[1200px] px-6'>{children}</div>
          {footer}
        </div>
      </body>
    </html>
  )
}
