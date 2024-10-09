import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes } from 'react-icons/fa'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      // Here you would typically send the message to a backend for processing
      // For now, we'll just have the bot echo the message back
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `You said: ${input}`, sender: 'bot' }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
        >
          <FaRobot size={24} />
        </button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold">Chat with AlumniBot</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 border rounded-l"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-500 text-white px-4 py-2 rounded-r"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}