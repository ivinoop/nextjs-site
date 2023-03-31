import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf-8')
  return content
}

const Post = (props: any) => {
  const slug = props.params.slug
  const content = getPostContent(slug)
  return (
    <>
      <h3>{slug}</h3>
      <Markdown>{content}</Markdown>
      <Link href='/'>
        <p>👈 Back Home</p>
      </Link>
    </>
  )
}

export default Post
