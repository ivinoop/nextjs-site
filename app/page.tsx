import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import { PostMetaData } from '@/components/PostMetaData'

const getPostMetaData = (): PostMetaData[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const mdPosts = files.filter((file) => file.endsWith('.md'))
  // const slugs = mdPosts.map((file) => file.replace('.md', ''))
  // return slugs

  // Get gray-matter parsed data from each file
  const posts = mdPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  })
  return posts
}

const Home = () => {
  const postMetadata = getPostMetaData()
  const postPreviews = postMetadata.map((post) => (
    <Link href={`/posts/${post.slug}`}>
      <div className='post'>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <h4>{post.subtitle}</h4>
      </div>
    </Link>
  ))
  return (
    <>
      <h1>This is a static site built with NextJS 13 and TailwindCSS</h1>
      {postPreviews}
    </>
  )
}

export default Home
