import { motion } from 'framer-motion'

export default function Network() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Network</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((profile) => (
          <ProfileCard key={profile} />
        ))}
      </div>
    </div>
  )
}

function ProfileCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">John Doe</h2>
      <p className="text-gray-600 mb-4">Software Engineer at Tech Co.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Connect
      </button>
    </motion.div>
  )
}