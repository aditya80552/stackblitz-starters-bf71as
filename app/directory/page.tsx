import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')

  // Mock data for alumni
  const alumni = [
    { id: 1, name: 'John Doe', year: 2020, branch: 'Computer Science', company: 'Tech Co.' },
    { id: 2, name: 'Jane Smith', year: 2019, branch: 'Electrical Engineering', company: 'Power Inc.' },
    // Add more mock data as needed
  ]

  const filteredAlumni = alumni.filter(alum =>
    alum.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === '' || alum.branch === filter)
  )

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
      <div className="flex mb-4">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search alumni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 pl-10 border rounded appearance-none"
          >
            <option value="">All Branches</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            {/* Add more options as needed */}
          </select>
          <FaFilter className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alum) => (
          <AlumniCard key={alum.id} {...alum} />
        ))}
      </div>
    </div>
  )
}

function AlumniCard({ name, year, branch, company }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">Class of {year}</p>
      <p className="text-gray-600">{branch}</p>
      <p className="text-gray-600">{company}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Connect
      </button>
    </motion.div>
  )
}