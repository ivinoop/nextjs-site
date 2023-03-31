import fs from 'fs'
import matter from 'gray-matter'
import { PostMetaData } from '@/components/PostMetaData'

const getPostMetaData = (): PostMetaData[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const mdPosts = files.filter((file) => file.endsWith('.md'))

  // Get gray-matter parsed data from each file
  const posts = mdPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
      banner: matterResult.data.banner,
    }
  })
  return posts
}

export default getPostMetaData
