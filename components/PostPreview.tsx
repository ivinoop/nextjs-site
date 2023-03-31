import Link from 'next/link'
import { PostMetaData } from './PostMetaData'

const PostPreview = (props: PostMetaData) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className='border border-slate-300 shadow-md hover:shadow-xl p-2 rounded-md'>
        <h2 className='text-2xl font-semibold py-1'>{props.title}</h2>
        <span className='text-xs text-gray-500'>{props.date}</span>
        <p className='text-base py-2'>{props.subtitle}</p>
      </div>
    </Link>
  )
}

export default PostPreview
