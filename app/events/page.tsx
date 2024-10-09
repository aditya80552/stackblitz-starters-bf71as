import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaPlus } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Events() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Alumni Reunion', date: new Date('2023-09-15'), location: 'University Campus', attendees: 150 },
    { id: 2, title: 'Tech Talk: AI in Industry', date: new Date('2023-10-05'), location: 'Virtual Event', attendees: 200 },
    // Add more mock events as needed
  ])

  const [showForm, setShowForm] = useState(false)
  const [newEvent, setNewEvent] = useState({ title: '', date: new Date(), location: '', attendees: 0 })

  const handleAddEvent = (e) => {
    e.preventDefault()
    setEvents([...events, { ...newEvent, id: events.length + 1 }])
    setNewEvent({ title: '', date: new Date(), location: '', attendees: 0 })
    setShowForm(false)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowForm(!showForm)}
        className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center"
      >
        <FaPlus className="mr-2" /> Add New Event
      </motion.button>
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-white rounded-lg shadow-md"
          onSubmit={handleAddEvent}
        >
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <DatePicker
            selected={newEvent.date}
            onChange={(date) => setNewEvent({ ...newEvent, date })}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Expected Attendees"
            value={newEvent.attendees}
            onChange={(e) => setNewEvent({ ...newEvent, attendees: parseInt(e.target.value) })}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Add Event
          </button>
        </motion.form>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <div className="flex items-center text-gray-600 mb-2">
        <FaCalendar className="mr-2" />
        <span>{event.date.toDateString()}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FaUsers className="mr-2" />
        <span>{event.attendees} Attendees</span>
      </div>
      <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        RSVP
      </button>
    </motion.div>
  )
}