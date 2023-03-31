import Link from 'next/link'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { TbBrandTwitter } from 'react-icons/tb'

const About = () => {
  return (
    <main className='mx-auto px-6 max-w-[1200px]'>
      <section>
        <h2 className='pt-3 mt-2 font-mono pb-2'>
          Developer / Writer / Absurdist
        </h2>
        <hr />
      </section>
      <section>
        <div className='flex justify-between items-center pt-4 pb-1 mt-6'>
          <article className='max-w-[600px]'>
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
          </article>
          <div className='text-center'>
            <Image
              alt=''
              src='/images/vinoo.jpg'
              width={200}
              height={200}
              className='rounded-full mb-4'
            />
            <h2 className='text-2xl font-bold font-mono'>Vinoo</h2>
            <ul className='flex justify-between items-center  max-w-[60px] mx-auto mt-2'>
              <li>
                <Link href='https://github.com/ivinoop'>
                  <FiGithub className='w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link href='https://twitter.com/ivinoop'>
                  <TbBrandTwitter className='w-6 h-6' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className='my-6' />
      <section>
        <article>
          <h3 className='text-3xl font-semibold pb-5'>The yesteryears</h3>
          <p>
            The world of web caught on to me as early as 2010, when a
            long-fogotten visage of this digital garden was first built in a
            cyber cafe - the code religiously copied over to a memory card for
            safe-keeping and future revisions (which is, ironically long since
            lost to nostalgia now) - with clunky (but powerful at the time - and
            some, still!) tools.
          </p>
          <br />
          <p>
            With time, and academics nudging me on in 2011-2012, I would slowly
            move on to lower-level languages much closer to the system such as
            C, C++, and even learnt COBOL and Fortran in a coaching academy
            once.
          </p>
          <br />
          <p>
            My first tryst with Unix/Linux happened in 2012 in a dingy college
            laboratory. As I booted up one of the dusty computers, I laid my
            eyes on Fedora in all its LXDE glory, and oh was I hooked. For the
            better part of the next 7 years, I kept diving deliberately into the
            wilderness of open-source distros, softwares, and tools. The fact
            that I could break apart and dexterously build everything back up in
            Linux gave me tremendous joy.
          </p>
          <br />
          <p>
            A large part of my foundational tech learning years were in the
            text-based internet mediums. I still prefer reading lots of
            documented resources but the video based era has arrived now and
            seems to attract a larger crowd, though the allure is lost on me. A
            good, properly documented, open-sourced resource to learn any and
            all technologies, free of cost and open for all, is part of my
            philosophy.
          </p>
          <br />
          <p>
            I have kept tinkering with tools and languages over the years, and
            I'm as excited and curious about a better web for tomorrow, as I was
            over a decade ago.
          </p>
          <br />
          <p>
            Today, my tools of the trade mostly include ReactJS, NextJS, and
            JavaScript. I'm currently learning TypeScript, and plan to involve
            myself with more backend technologies as well.
          </p>
        </article>
      </section>
    </main>
  )
}

export default About
