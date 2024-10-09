import { motion } from 'framer-motion'

export default function Jobs() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Job Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((job) => (
          <JobCard key={job} />
        ))}
      </div>
    </div>
  )
}

function JobCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
      <p className="text-gray-600 mb-4">Tech Co. - San Francisco, CA</p>
      <p className="mb-4">
        We're looking for a talented software engineer to join our team and help build the next generation of our product.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
        Apply Now
      </button>
    </motion.div>
  )
}