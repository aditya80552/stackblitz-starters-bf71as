import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDollarSign, FaHeart } from 'react-icons/fa'

export default function Donations() {
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')

  const handleDonate = (e) => {
    e.preventDefault()
    // Here you would typically integrate with a payment gateway
    console.log(`Donation of $${amount} received with message: ${message}`)
    // Reset form
    setAmount('')
    setMessage('')
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Support Your Alma Mater</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <form onSubmit={handleDonate}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
              Donation Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-gray-400" />
              </div>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 p-2 border rounded"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Leave a message with your donation"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center justify-center"
          >
            <FaHeart className="mr-2" /> Donate Now
          </button>
        </form>
      </motion.div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Donations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DonationCard name="John Doe" amount={100} message="For the new library!" />
          <DonationCard name="Jane Smith" amount={50} message="Supporting student scholarships" />
          <DonationCard name="Anonymous" amount={200} message="Giving back to my alma mater" />
        </div>
      </div>
    </div>
  )
}

function DonationCard({ name, amount, message }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-4 rounded-lg shadow-md"
    >
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-green-600 font-bold mb-2">${amount}</p>
      <p className="text-gray-600 text-sm">{message}</p>
    </motion.div>
  )
}