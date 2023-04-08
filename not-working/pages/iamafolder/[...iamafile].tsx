import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { iamafile } = router.query
  return <p>Post: {iamafile}</p>
}

export default Post