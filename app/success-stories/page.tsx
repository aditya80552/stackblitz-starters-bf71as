import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function SuccessStories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      gradYear: 2015,
      story: 'Thanks to the alumni network, I landed my dream job at a top tech company!',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Bob Smith',
      gradYear: 2010,
      story: 'The mentorship program helped me start my own successful business.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    // Add more success stories
  ])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}

function StoryCard({ story }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col"
    >
      <div className="flex items-center mb-4">
        <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">{story.name}</h2>
          <p className="text-gray-600">Class of {story.gradYear}</p>
        </div>
      </div>
      <FaQuoteLeft className="text-4xl text-blue-500 mb-4" />
      <p className="flex-grow">{story.story}</p>
      <div className="mt-4 flex justify-end">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
    </motion.div>
  )
}