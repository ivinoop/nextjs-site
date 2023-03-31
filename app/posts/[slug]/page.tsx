import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import matter from 'gray-matter'
import getPostMetaData from '@/components/getPostMetadata'
import Image from 'next/image'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf-8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetaData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const Post = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div>
      <h1 className='text-3xl font-bold'>{post.data.title}</h1>
      <p className='text-xs text-gray-500'>{post.data.date}</p>
      {post.data.banner && (
        <Image
          alt='blog post image'
          src={post.data.banner}
          width={700}
          height={500}
          className='py-4 rounded-2xl'
        />
      )}
      <article className='prose-h3:text-xl prose-h3:font-semibold prose-h3:py-2 prose-p:text-sm prose-p:py-1'>
        <Markdown>{post.content}</Markdown>
      </article>
      <Link href='/'>
        <button className='bg-teal-600 text-white px-2 py-1 rounded-md my-3'>
          👈 All Posts
        </button>
      </Link>
    </div>
  )
}

export default Post
