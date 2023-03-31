import Image from 'next/image'
import '../public/globals.css'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { TbBrandTwitter } from 'react-icons/tb'

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
      <div className='flex justify-between items-center p-8 bg-slate-700 text-white'>
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

  const main = (
    <main className='mx-auto px-6 max-w-[1200px]'>
      <section>
        <h2 className='pt-3 mt-2 font-mono border-b pb-2'>
          Developer / Writer / Absurdist
        </h2>
      </section>
      <section>
        <div className='flex justify-between items-center py-4 mt-6'>
          <article className='max-w-[800px]'>
            <p>I am a software developer and a writer.</p>
            <br />
            <p>
              For a few years - through college and later - in my career, I
              dabbled in making my hobbies into a profession. I wrote copy,
              published blogs, built marketing & sales oriented websites to
              kickstart customer products on the web.
            </p>
            <br />
            <p>
              I eventually transitioned full-time into crafting fluid web
              experiences, by building UX focused, elegant web apps. Writing
              code, personally, is a purpose-filled marathon that motivates me
              to learn with each milestone conquered.
            </p>
            <br />
            <p>
              The world of web caught on to me as early as 2010, when a
              long-fogotten visage of this digital garden was first built in a
              cyber cafe, the code religiously copied over to a memory card for
              safe-keeping and future revisions (which is, ironically long since
              lost to nostalgia now), with clunky (but powerful at the time -
              and some, still!).
            </p>
            <br />
            <p>
              With time, and academics nudging me on in 2011-2012, I would
              slowly move on to lower-level languages much closer to the system
              such as C, C++, and even learnt COBOL and Fortran in a coaching
              academy once.
            </p>
            <br />
            <p>
              My first tryst with Unix/Linux happened in 2012 in a dingy college
              laboratory as I booted up the gate-kept computer. I laid my eyes
              on Fedora in all its LXDE glory, oh was I hooked. For the better
              part of the next 7 years, I kept diving deliberately into the
              wilderness of open-source distros, softwares, and tools. The fact
              that I could break apart and dexterously build everything back up
              in Linux gave me tremendous joy.
            </p>
            <br />
            <p>
              I have kept tinkering with tools and languages over the years, and
              I'm as excited and curious about a better web for tomorrow, as I
              was over a decade ago.
            </p>
            <br />
            <p>
              Today, my tools of the trade mostly include ReactJS, NextJS, and
              JavaScript. I'm currently learning TypeScript, and plan to involve
              myself with more backend technologies as well.
            </p>
          </article>
          <div className='text-center'>
            <Image
              alt=''
              src='/images/vinoo.jpg'
              width={300}
              height={300}
              className='rounded-full mb-4'
            />
            <h2 className='text-2xl font-bold font-mono'>Vinoo Prakash</h2>
            <div className='flex justify-between items-center  max-w-[60px] mx-auto my-4'>
              <Link href='https://github.com/ivinoop'>
                <FiGithub className='w-6 h-6' />
              </Link>
              <Link href='https://twitter.com/ivinoop'>
                <TbBrandTwitter className='w-6 h-6' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )

  const footer = (
    <footer>
      <div className='text-center bg-gray-100 mt-4 py-5 font-mono'>
        <p>Vinoo &copy; 2010-2023</p>
      </div>
    </footer>
  )

  return (
    <html lang='en'>
      <body>
        <div className='mx-auto'>
          {header}
          {main}
          <div className='mx-auto mt-4 max-w-[1200px] px-6'>{children}</div>
          {footer}
        </div>
      </body>
    </html>
  )
}
