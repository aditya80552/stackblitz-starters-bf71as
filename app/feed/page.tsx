import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'

export default function Feed() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'Just landed a new job at Tech Co!', likes: 15, comments: 3 },
    { id: 2, author: 'Jane Smith', content: 'Excited to announce my new startup!', likes: 22, comments: 7 },
    // Add more mock posts as needed
  ])

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Feed</h1>
      <div className="mb-8">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-4 border rounded-lg resize-none"
          rows={3}
        ></textarea>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Post
        </button>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  )
}

function PostCard({ post, onLike }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{post.author}</h2>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <button onClick={() => onLike(post.id)} className="flex items-center space-x-1 hover:text-blue-500">
          <FaThumbsUp />
          <span>{post.likes} Likes</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FaComment />
          <span>{post.comments} Comments</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          <FaShare />
          <span>Share</span>
        </button>
      </div>
    </motion.div>
  )
}