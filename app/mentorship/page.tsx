import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaGraduationCap, FaHandshake } from 'react-icons/fa'

export default function Mentorship() {
  const [mentors, setMentors] = useState([
    { id: 1, name: 'John Doe', expertise: 'Software Engineering', experience: '10 years', available: true },
    { id: 2, name: 'Jane Smith', expertise: 'Marketing', experience: '8 years', available: false },
    // Add more mock mentors
  ])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mentorship Program</h1>
      <p className="mb-8 text-lg">Connect with experienced alumni for guidance and career advice.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  )
}

function MentorCard({ mentor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <FaUserTie className="text-4xl mr-4 text-blue-500" />
        <div>
          <h2 className="text-xl font-semibold">{mentor.name}</h2>
          <p className="text-gray-600">{mentor.expertise}</p>
        </div>
      </div>
      <div className="mb-4">
        <p><FaGraduationCap className="inline-block mr-2" /> {mentor.experience} of experience</p>
      </div>
      <button
        className={`w-full ${mentor.available ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'} text-white px-4 py-2 rounded transition duration-300 flex items-center justify-center`}
        disabled={!mentor.available}
      >
        <FaHandshake className="mr-2" />
        {mentor.available ? 'Request Mentorship' : 'Currently Unavailable'}
      </button>
    </motion.div>
  )
}