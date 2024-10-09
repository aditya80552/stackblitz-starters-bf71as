import { motion } from 'framer-motion'

export default function Messages() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Conversations</h2>
          <ul className="space-y-2">
            {['Alice Smith', 'Bob Johnson', 'Charlie Brown'].map((name) => (
              <li key={name} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chat</h2>
          <div className="h-64 bg-gray-100 p-4 rounded mb-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p>Select a conversation to start chatting.</p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow p-2 border rounded-l"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}