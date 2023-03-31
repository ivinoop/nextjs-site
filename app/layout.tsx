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
      <div className=' flex justify-between items-center p-8 bg-slate-700 text-white'>
        <Link href='/'>
          <h1 className='font-bold text-3xl hover:underline'>vinoo.</h1>
        </Link>
        <span className='text-xs text-gray-300'>
          this is a static site built with NextJS 13 and TailwindCSS
        </span>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='text-center border-t mt-4 py-2'>
        <h6>developed with NextJS | hosted with Vercel</h6>
        <p>copyright &copy; 2023 | all rights reserved</p>
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
